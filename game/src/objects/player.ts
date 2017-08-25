import { GameObject, GameEvent, GameObjectOptions, CircleCollisionMask, GameScene, pointDistance } from 'engine';
import { BoulderObject } from './boulder';
import { MountainObject } from './mountain';
import merge = require('lodash.merge');

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

class FloorCheckPlayerObject extends GameObject {
    constructor(private player: PlayerObject, opts?: GameObjectOptions) {
        super('FloorCheckPlayer', merge({
            shouldRender: false
        }, opts));
        this.mask = new CircleCollisionMask(this, 24 / SCALE, [0, -10 / SCALE]);
        this.mask.isFixed = true;
        this.mask.isTrigger = true;
    }
    
    tick(delta: number) {
        super.tick(delta);
        [this.x, this.y] = [this.player.x, this.player.y];
        
        if (!this.player.isAlive) return;
        
        this.player.isOnFloor = false;
        let triggers = this.mask.triggers;
        for (let trigger of triggers) {
            let triggerGobj = trigger.gameObject;
            if (triggerGobj instanceof BoulderObject || triggerGobj instanceof MountainObject) {
                this.player.isOnFloor = true;
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
    isOnFloor = true;

    addToScene(scene: GameScene) {
        super.addToScene(scene);
        this.scene.addObject(new SquishyPlayerObject(this));
        this.scene.addObject(new FloorCheckPlayerObject(this));
    }
    
    handleEvent(e: GameEvent) {
        if (super.handleEvent(e)) return true;
        
        if (e.type === 'abstractButtonPressed' && e.name === 'jump' && this.isOnFloor) {
            this.mask.addForce(0, -10);
            return true;
        }
        if (e.type === 'keyPressed' && e.code === 'F3') {
            this.game.renderPhysics = !this.game.renderPhysics;
            return true;
        }
        
        return false;
    }

    tick(delta: number) {
        super.tick(delta);
        
        if (this.isAlive) {
            let hdelta = 0;
            if (this.events.isAbstractButtonDown('left')) hdelta -= 1;
            if (this.events.isAbstractButtonDown('right')) hdelta += 1;
            if (!this.isOnFloor) hdelta *= .2;

            let hforce = hdelta * this.MOVE_FORCE_MAGNITUDE;
            this.mask.addForce(hforce, this.isOnFloor ? Math.abs(hforce) : 0);
        }
    }
}
