import { GameScene, GameObject, CircleCollisionMask, SpringForceGenerator, DragForceGenerator } from 'engine';
import { PlayerObject } from './player';

export class SpringFollowObject extends GameObject {
    constructor(private player: PlayerObject) {
        super('SpringFollow', { shouldRender: false });
    }
    
    private spring: SpringForceGenerator | null = null;
    
    addToScene(scene: GameScene) {
        super.addToScene(scene);
        [this.x, this.y] = [this.player.x, this.player.y];
        this.mask = new CircleCollisionMask(this, .2);
        this.mask.isTrigger = true;
        this.mask.isFixed = true;
    }
    
    private readonly SCREEN_SHAKE_AMOUNT = .5;
    
    tick(delta: number) {
        super.tick(delta);
        // this.x += ((Math.random() * 2) - 1) * delta * this.SCREEN_SHAKE_AMOUNT;
        // this.y += ((Math.random() * 2) - 1) * delta * this.SCREEN_SHAKE_AMOUNT;
        if (!this.spring && this.player.mask) {
            let spring = this.spring = new SpringForceGenerator(this.player.mask, 5000, 0);
            this.mask.addForceGenerator(spring);
            this.mask.addForceGenerator(new DragForceGenerator(10, 20));
            spring.modifyOther = false;
            this.mask.isFixed = false;
        }
    }
}
