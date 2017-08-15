import { FollowCamera, GameScene } from 'engine';

export class SpeedScaleCamera extends FollowCamera {
    constructor(scene: GameScene) {
        super(scene);
    }
    
    private zoomScaleTo = 30;
    private fixedTickTime = 1/30;
    tick(delta: number) {
        super.tick(delta);
        if (this.follow) {
            this.zoomScaleTo = 32 - Math.sqrt(this.follow.speed + 16) / 2;
        }
        this.fixedTickTime -= delta;
        while (this.fixedTickTime < 0) {
            this.fixedTickTime += 1/30;
            this.zoomScale = ((this.zoomScale * 9) + (this.zoomScaleTo * 1)) / 10;
        }
    }
}
