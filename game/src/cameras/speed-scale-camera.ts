import { FollowCamera, GameScene, clamp } from 'engine';

export class SpeedScaleCamera extends FollowCamera {
    constructor(scene: GameScene) {
        super(scene);
    }
    
    shakeAmt = 1.5;
    
    private zoomScaleTo = 30;
    private fixedTickTime = 1/30;
    private timeUntilNext = 0;
    tick(delta: number) {
        this.timeUntilNext -= delta;
        if (this.timeUntilNext <= 0) {
            this.shakeAmt = Math.random() * .3;
            this.timeUntilNext = .2;
        }
        console.log(this.shakeAmt);
        let amt = Math.pow(this.shakeAmt, 2) * 6;
        this.followOffset = [((Math.random() * 2) - 1) * amt, ((Math.random() * 2) - 1) * amt];
        super.tick(delta);
        if (this.follow) {
            let zst = 32 - Math.sqrt(this.follow.speed + 16) / 2;
            if (!isNaN(zst) && zst !== Infinity && zst !== -Infinity) this.zoomScaleTo = zst;
        }
        this.fixedTickTime -= delta;
        while (this.fixedTickTime < 0) {
            this.fixedTickTime += 1/30;
            this.zoomScale = ((this.zoomScale * 9) + (this.zoomScaleTo * 1)) / 10;
        }
    }
}
