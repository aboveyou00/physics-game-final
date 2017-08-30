import { GameObject, GameObjectOptions, CircleCollisionMask, GraphicsAdapter, DefaultGraphicsAdapter } from 'engine';
import { SCALE } from './player';
import merge = require('lodash.merge');

export class BoulderObject extends GameObject {
    constructor(opts?: GameObjectOptions) {
        super('Boulder', opts);
        this._radius = 2 + Math.random() * 2;
        let segments = (this._radius * 2 * Math.PI) * 2;
        for (let q = 0; q < segments; q++) {
            this.segmentLengths.push(((Math.random() * .075) + .925) * this._radius);
        }
        this.rotationDistance = (2 * Math.PI * this._radius) / (2 * Math.PI);
        this.mask = new CircleCollisionMask(this, this._radius);
        if (isNaN(opts.x)) throw new Error(`opts.x is NaN`);
        if (isNaN(opts.y)) throw new Error(`opts.y is NaN`);
    }
    
    private _radius: number;
    get radius() {
        return this._radius;
    }
    
    private segmentLengths: number[] = [];
    private rotationDistance: number = 1;
    
    tick(delta: number) {
        super.tick(delta);
        this.imageAngle = -(this.x / this.rotationDistance);
    }
    
    renderImpl(adapter: GraphicsAdapter) {
        if (adapter instanceof DefaultGraphicsAdapter) this.renderImplContext2d(adapter);
        else throw new Error('Not implemented');
    }
    private renderImplContext2d(adapter: DefaultGraphicsAdapter) {
        let context = adapter.context;
        context.fillStyle = '#D2691E';
        context.strokeStyle = '#964B00';
        context.lineWidth = .5;
        
        context.beginPath();
        // context.ellipse(0, 0, this._radius, this._radius, 0, 0, 2 * Math.PI);
        let segmentCount = this.segmentLengths.length;
        let segmentAngle = (2 * Math.PI) / segmentCount;
        let currentAngle = this.imageAngle;
        for (let q = 0; q < segmentCount; q++) {
            let len = this.segmentLengths[q];
            context.lineTo(Math.sin(currentAngle) * len, Math.cos(currentAngle) * len);
            currentAngle += segmentAngle;
        }
        context.closePath();
        context.fill();
        context.stroke();
    }
}
