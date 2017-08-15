import { CollisionMask, CircleCollisionMask } from 'engine';
import { MountainObject } from '../objects/mountain';

export class MountainCollisionMask extends CollisionMask {
    constructor(private mountain: MountainObject) {
        super(mountain);
        this.isFixed = true;
    }
    
    private isCheckingCollisions = false;
    checkForCollision(other: CollisionMask) {
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
                
                return null;
                // let [x, y] = [this.gameObject.x + this._offset[0], this.gameObject.y + this._offset[1]];
                // let [otherx, othery] = [other.gameObject.x + other._offset[0], other.gameObject.y + other._offset[1]];
                // let dist2 = pointDistance2(x, y, otherx, othery);
                // let threshold = Math.pow(this.radius + other.radius, 2);
                // if (dist2 <= 0 || dist2 >= threshold) return null;
                
                // let dist = Math.sqrt(dist2);
                // let normal: [number, number] = [(otherx - x) / dist, (othery - y) / dist];
                // let penetration = (this.radius + other.radius) - dist;
                // let collision: CollisionT = {
                //     first: this,
                //     second: other,
                //     contactNormal: normal,
                //     contactPoint: [x + normal[0] * (this.radius - (penetration / 2)), y + normal[1] * (this.radius - (penetration / 2))],
                //     penetration: penetration + .01
                // };
                // this.contacts.push(collision);
                // other.contacts.push(collision);
                // return collision;
            }
            else {
                return other.checkForCollision(this);
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
    }
}
