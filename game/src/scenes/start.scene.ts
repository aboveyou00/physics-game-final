import { GameScene, FollowCamera, GameObject, GravityForceGenerator, DragForceGenerator } from 'engine';
import { BackdropObject } from '../objects/backdrop';
import { PlayerObject, SCALE } from '../objects/player';
import { MountainObject } from '../objects/mountain';
import { BoulderControllerObject } from '../objects/boulder-controller';
import { StatusOverlayObject } from '../objects/status-overlay';
import { SpeedScaleCamera } from '../cameras/speed-scale-camera';
import { StackScene } from '../stack-scene';

export class StartScene extends StackScene {
    constructor(parentScene: GameScene) {
        super(parentScene);
    }

    private initialized = false;

    start() {
        super.start();

        if (this.initialized) return;
        this.initialized = true;
        
        this.addForceGenerator(new GravityForceGenerator(9.8));
        this.addForceGenerator(new DragForceGenerator(.05, .5));

        let player = new PlayerObject();
        let mountain = new MountainObject();
        let boulderController = new BoulderControllerObject(player, mountain);
        let backdrop = new BackdropObject(mountain);
        let statusOverlay = new StatusOverlayObject(player);

        this.addObject(backdrop);
        this.addObject(mountain);
        this.addObject(player);
        this.addObject(boulderController);
        this.addObject(statusOverlay);

        let camera = this.camera = new SpeedScaleCamera(this);
        camera.floorCenterPosition = false;
        camera.follow = player;
        camera.clearColor = '';
        camera.maxZoomScale = 400;
        camera.minZoomScale = 1;
        camera.zoomScale = SCALE;
    }
}
