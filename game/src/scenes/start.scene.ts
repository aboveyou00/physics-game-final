import { GameScene, FollowCamera, GameObject, GravityForceGenerator, DragForceGenerator } from 'engine';
import { BackdropObject } from '../objects/backdrop';
import { PlayerObject, SCALE } from '../objects/player';
import { MountainObject } from '../objects/mountain';
import { SpeedScaleCamera } from '../cameras/speed-scale-camera';

export class StartScene extends GameScene {
    constructor() {
        super();
    }

    private initialized = false;

    start() {
        super.start();

        if (this.initialized) return;
        this.initialized = true;
        
        this.addForceGenerator(new GravityForceGenerator(9.8));
        this.addForceGenerator(new DragForceGenerator(.2, 2));

        let player = new PlayerObject();
        let mountain = new MountainObject();
        let backdrop = new BackdropObject(mountain);
        
        this.addObject(backdrop);
        this.addObject(mountain);
        this.addObject(player);

        let camera = this.camera = new SpeedScaleCamera(this);
        camera.floorCenterPosition = false;
        camera.follow = player;
        camera.clearColor = '';
        camera.maxZoomScale = 400;
        camera.minZoomScale = 1;
        camera.zoomScale = SCALE;
    }
}
