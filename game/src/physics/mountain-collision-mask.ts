import { CollisionMask, CircleCollisionMask, pointDistance2, CollisionT } from 'engine';
import { MountainObject } from '../objects/mountain';

export class MountainCollisionMask extends CollisionMask {
    constructor(private mountain: MountainObject) {
        super(mountain);
        this.isFixed = true;
    }
    
    clearContacts() {
        super.clearContacts();
        this.possibleContactPoints.length = 0;
    }
    
    private possibleContactPoints: [number, number, boolean][] = [];
    
    private isCheckingCollisions = false;
    checkForCollisions(other: CollisionMask): CollisionT[] | null {
        if (this.isCheckingCollisions) throw new Error(`Already checking collisions!`);
        this.isCheckingCollisions = true;
        try {
            if (other instanceof CircleCollisionMask) {
                let data = this.mountain.data;
                let minx = data[0][0];
                let maxx = data[data.length - 1][0];
                let [otherxx, otheryy] = [other.gameObject.x + other.offset[0], other.gameObject.y + other.offset[1]];
                if (otherxx + other.radius < minx) return null;
                if (otherxx - other.radius > maxx) return null;
                
                let minCheckX = otherxx - other.radius;
                let maxCheckX = otherxx + other.radius;
                let minq = 0, maxq = data.length - 2;
                minx = data[minq][0];
                for (let q = 0; q < data.length - 2; q++) {
                    let dqx = data[q][0];
                    if (dqx < minCheckX && dqx > minx) {
                        minq = q;
                        minx = dqx;
                    }
                    else if (dqx > maxCheckX) {
                        maxq = q;
                        break;
                    }
                }
                
                let collisions = [];
                for (let q = minq; q < maxq; q++) {
                    let dq1 = data[q];
                    let dq2 = data[q + 1];
                    let miny = Math.min(dq1[1], dq2[1]);
                    let maxy = Math.max(dq1[1], dq2[1]);
                    if (otheryy + other.radius < miny || otheryy - other.radius > maxy) continue;
                    
                    let A1 = dq2[1] - dq1[1];
                    let B1 = dq1[0] - dq2[0];
                    let C1 = (dq2[1] - dq1[1]) * dq1[0] + (dq1[0] - dq2[0]) * dq1[1];
                    let C2 = (-B1 * otherxx) + (A1 * otheryy);
                    let det = A1*A1 - -B1 * B1;
                    let [cx, cy] = (!!det ? [(A1*C1 - B1*C2) / det, (A1*C2 - -B1*C1) / det] : [otherxx, otheryy]);
                    if (isNaN(det) || isNaN(cx) || isNaN(cy)) continue;
                    if (cx < dq1[0]) [cx, cy] = dq1;
                    else if (cx > dq2[0]) [cx, cy] = dq2;
                    let dist2 = pointDistance2(cx, cy, otherxx, otheryy);
                    let isCollision = dist2 < other.radius * other.radius;
                    this.possibleContactPoints.push([cx, cy, isCollision]);
                    if (!isCollision) continue;
                    let dist = Math.sqrt(dist2);
                    
                    let normal: [number, number] = [(otherxx - cx) / dist, (otheryy - cy) / dist];
                    let penetration = other.radius - dist;
                    let collision: CollisionT = {
                        first: this,
                        second: other,
                        contactNormal: normal,
                        // contactPoint: [x + normal[0] * (this.radius - (penetration / 2)), y + normal[1] * (this.radius - (penetration / 2))],
                        contactPoint: [cx, cy],
                        penetration: penetration + .01
                    };
                    this.contacts.push(collision);
                    other.contacts.push(collision);
                    collisions.push(collision);
                }
                
                return collisions.length ? collisions : null;
            }
            else {
                return other.checkForCollisions(this);
            }
        }
        finally { this.isCheckingCollisions = false; }
    }
    resolveCollisions() {
        for (let q = 0; q < this.contacts.length; q++) {
            let contact = this.contacts[q];
            if (contact.first !== this) continue;
            let other = contact.second;
            if (this.isFixed && other.isFixed) return;
            let relativeMass = this.mass / (this.mass + other.mass);
            if (isNaN(relativeMass)) throw new Error(`relativeMass is not a number`);
            if (this.isFixed) relativeMass = 1;
            else if (other.isFixed) relativeMass = 0;
            let eAbsorb = 1 - relativeMass;
            if (!this.isFixed || !other.isFixed) {
                if (!this.isFixed) {
                    this.collisionImpulseX -= contact.contactNormal[0] * eAbsorb * contact.penetration;
                    this.collisionImpulseY -= contact.contactNormal[1] * eAbsorb * contact.penetration;
                    this.impulseCount++;
                }
                if (!other.isFixed) {
                    other.collisionImpulseX += contact.contactNormal[0] * relativeMass * contact.penetration;
                    other.collisionImpulseY += contact.contactNormal[1] * relativeMass * contact.penetration;
                    other.impulseCount++;
                }
                
                let a1 = (contact.contactNormal[0] * this.gameObject.hspeed) + ((contact.contactNormal[1] * this.gameObject.vspeed));
                let a2 = (contact.contactNormal[0] * other.gameObject.hspeed) + ((contact.contactNormal[1] * other.gameObject.vspeed));
                let optimizedP = (2 * (a1 - a2)) / (this.mass + other.mass);
                
                if (!this.isFixed) {
                    [this.gameObject.hspeed, this.gameObject.vspeed] = [
                        this.gameObject.hspeed - optimizedP * other.mass * contact.contactNormal[0],
                        this.gameObject.vspeed - optimizedP * other.mass * contact.contactNormal[1]
                    ];
                }
                if (!other.isFixed) {
                    [other.gameObject.hspeed, other.gameObject.vspeed] = [
                        other.gameObject.hspeed + optimizedP * this.mass * contact.contactNormal[0],
                        other.gameObject.vspeed + optimizedP * this.mass * contact.contactNormal[1]
                    ];
                }
            }
        }
    }
    
    renderImpl(context: CanvasRenderingContext2D) {
        let camera = this.gameObject.renderCamera === 'default' ? this.gameObject.scene.camera :
                        this.gameObject.renderCamera !== 'none' ? this.gameObject.renderCamera :
                                                                  null;
        let zoomScale = !!camera ? 1 / camera.zoomScale : 1;
        
        context.strokeStyle = this.contacts.length ? 'red' : 'green';
        context.lineWidth = zoomScale;
        context.beginPath();
        let data = this.mountain.data;
        context.moveTo(data[0][0], data[0][1]);
        for (let q = 1; q < data.length; q++) {
            let [x, y] = data[q];
            context.lineTo(x, y);
        }
        context.stroke();
        
        context.lineWidth *= 2;
        for (let q = 0; q < this.possibleContactPoints.length; q++) {
            let [cx, cy, onSegment] = this.possibleContactPoints[q];
            context.beginPath();
            context.strokeStyle = onSegment ? 'green' : 'red';
            context.moveTo(cx - context.lineWidth * 6, cy - context.lineWidth * 6);
            context.lineTo(cx + context.lineWidth * 6, cy + context.lineWidth * 6);
            context.moveTo(cx + context.lineWidth * 6, cy - context.lineWidth * 6);
            context.lineTo(cx - context.lineWidth * 6, cy + context.lineWidth * 6);
            context.stroke();
        }
    }
}
