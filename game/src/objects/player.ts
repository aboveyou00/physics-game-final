import { GameObject, GameObjectOptions, CircleCollisionMask, GameScene, pointDistance } from 'engine';
import merge = require('lodash.merge');

export const SCALE = 30;

export class PlayerObject extends GameObject {
    constructor(opts?: GameObjectOptions) {
        super('Player', merge({
            sprite: {
                src: '/img/player.png',
                pivot: { x: 32, y: 86 }
            },
            imageScale: 1 / SCALE
        }, opts));
        this.mask = new CircleCollisionMask(this, 32 / SCALE, [0, -32 / SCALE]);
    }

    private MOVE_FORCE_MAGNITUDE = 4;

    addToScene(scene: GameScene) {
        super.addToScene(scene);
        this.game.renderPhysics = true;
    }

    tick(delta: number) {
        super.tick(delta);
        
        let hdelta = 0, vdelta = 0;
        if (this.events.isAbstractButtonDown('left')) hdelta -= 1;
        if (this.events.isAbstractButtonDown('right')) hdelta += 1;
        if (this.events.isAbstractButtonDown('up')) vdelta -= 1;
        if (this.events.isAbstractButtonDown('down')) vdelta += 1;
        let dist = pointDistance(0, 0, hdelta, vdelta);
        if (dist > 1) {
            hdelta /= dist;
            vdelta /= dist;
        }

        this.mask.addForce(hdelta * this.MOVE_FORCE_MAGNITUDE, vdelta * this.MOVE_FORCE_MAGNITUDE);
    }
}
