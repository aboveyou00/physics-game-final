import { GameObject, GameObjectOptions, GraphicsAdapter, DefaultGraphicsAdapter, clamp } from 'engine';
import { MountainObject } from './mountain';

export class BackdropObject extends GameObject {
    constructor(private mountain: MountainObject, opts?: GameObjectOptions) {
        super('Backdrop', opts);
    }
    
    private SKY_TOP = '#2d91c2';
    private SKY_BOTTOM = '#1e528e';
    private GROUND = '#AB5A0F';
    
    renderImpl(adapter: GraphicsAdapter) {
        if (adapter instanceof DefaultGraphicsAdapter) this.renderImplContext2d(adapter);
        else throw new Error('Not implemented');
    }
    private renderImplContext2d(adapter: DefaultGraphicsAdapter) {
        let bounds = this.scene.camera.bounds;
        let maxy = this.mountain.maximumY;
        let descent = clamp(bounds.top / maxy, 0, 1);
        
        if (isNaN(bounds.left)) {
            console.error(`bounds are NaN!`);
            return;
        }
        
        let context = adapter.context;
        let gradient = context.createLinearGradient(bounds.left, bounds.bottom, bounds.left, bounds.top);
        gradient.addColorStop(0, this.SKY_TOP);
        gradient.addColorStop(1, this.SKY_BOTTOM);
        context.fillStyle = gradient;
        
        context.fillRect(bounds.left, bounds.bottom, bounds.right - bounds.left, bounds.top - bounds.bottom);
        
        context.fillStyle = this.GROUND;
        context.fillRect(bounds.left, bounds.top - (bounds.top - bounds.bottom) * (.1 + .2 * descent), bounds.right - bounds.left, bounds.top - bounds.bottom);
    }
}
