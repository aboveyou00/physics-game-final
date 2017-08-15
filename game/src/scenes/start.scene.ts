import { GameScene, FollowCamera, GameObject } from 'engine';
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

        this.addObject(new GameObject('Random')); //Just to show the player movement

        let player = new PlayerObject();
        this.addObject(player);
        
        let mountain = new MountainObject();
        this.addObject(mountain);

        let camera = this.camera = new SpeedScaleCamera(this);
        camera.floorCenterPosition = false;
        camera.follow = player;
        camera.clearColor = '#2d91c2'; //#1e528e
        camera.maxZoomScale = 400;
        camera.minZoomScale = 1;
        camera.zoomScale = SCALE;
    }
}
