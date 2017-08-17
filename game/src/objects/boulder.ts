import { GameObject, GameObjectOptions, CircleCollisionMask, GraphicsAdapter, DefaultGraphicsAdapter } from 'engine';
import { SCALE } from './player';
import merge = require('lodash.merge');

export class BoulderObject extends GameObject {
    constructor(opts?: GameObjectOptions) {
        super('Boulder', opts);
        this._radius = 2 + Math.random() * 2;
        this.mask = new CircleCollisionMask(this, this._radius);
        if (isNaN(opts.x)) throw new Error(`opts.x is NaN`);
        if (isNaN(opts.y)) throw new Error(`opts.y is NaN`);
    }
    
    private _radius: number;
    get radius() {
        return this._radius;
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
        context.ellipse(0, 0, this._radius, this._radius, 0, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }
}
