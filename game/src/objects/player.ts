import { GameObject, GameObjectOptions, CircleCollisionMask, GameScene, pointDistance } from 'engine';
import merge = require('lodash.merge');
import { BoulderObject } from './boulder';

export const SCALE = 30;

class SquishyPlayerObject extends GameObject {
    constructor(private player: PlayerObject, opts?: GameObjectOptions) {
        super('SquishyPlayer', merge({
            shouldRender: false
        }, opts));
        this.mask = new CircleCollisionMask(this, 24 / SCALE, [0, -54 / SCALE]);
        this.mask.isFixed = true;
        this.mask.isTrigger = true;
    }
    
    tick(delta: number) {
        super.tick(delta);
        [this.x, this.y] = [this.player.x, this.player.y];
        
        if (!this.player.isAlive) return;
        
        let triggers = this.mask.triggers;
        for (let trigger of triggers) {
            let triggerGobj = trigger.gameObject;
            if (triggerGobj instanceof BoulderObject) {
                this.player.isAlive = false;
                break;
            }
        }
    }
}

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

    private MOVE_FORCE_MAGNITUDE = .5;

    isAlive = true;

    addToScene(scene: GameScene) {
        super.addToScene(scene);
        this.game.renderPhysics = true;
        this.scene.addObject(new SquishyPlayerObject(this));
    }

    tick(delta: number) {
        super.tick(delta);

        if (this.isAlive) {
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
}
