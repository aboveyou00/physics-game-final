import { GameScene, FollowCamera, GameObject, GravityForceGenerator, DragForceGenerator } from 'engine';
import { BackdropObject } from '../objects/backdrop';
import { PlayerObject, SCALE } from '../objects/player';
import { MountainObject } from '../objects/mountain';
import { BoulderControllerObject } from '../objects/boulder-controller';
import { StatusOverlayObject } from '../objects/status-overlay';
import { SpeedScaleCamera } from '../cameras/speed-scale-camera';
import { StackScene } from '../stack-scene';
import { LevelMeta } from '../dbs/level.db';

export class StartScene extends StackScene {
    constructor(parentScene: GameScene, private level: LevelMeta | null) {
        super(parentScene);
    }

    private initialized = false;

    start() {
        super.start();

        if (this.initialized) return;
        this.initialized = true;

        this.addForceGenerator(new GravityForceGenerator(9.8));
        this.addForceGenerator(new DragForceGenerator(.05, .5));

        let [psx, psy] = (this.level && this.level.player && this.level.player.startPos) || [0, 0];
        let player = new PlayerObject({
            x: psx,
            y: psy
        });
        let data: [number, number][] | null = null;
        if (this.level) {
            data = [];
            let sx = this.level.mountain.startx || 0;
            let step = this.level.mountain.stepx;
            let cols = this.level.mountain.cols;
            for (let q = 0; q < cols.length; q++) {
                data.push([sx + q * step, cols[q]]);
            }
        }
        let mountain = new MountainObject(data);

        let playerBoulderRepeat = (this.level && this.level.player && this.level.player.boulderRepeat) || undefined;
        let mountainBoulderRepeat = (this.level && this.level.mountain.boulderRepeat) || undefined;
        let boulderController = new BoulderControllerObject(player, mountain, playerBoulderRepeat, mountainBoulderRepeat);

        let backdrop = new BackdropObject(mountain);
        let statusOverlay = new StatusOverlayObject(player);

        this.addObject(backdrop);
        this.addObject(mountain);
        this.addObject(player);
        this.addObject(boulderController);
        this.addObject(statusOverlay);

        if (!this.level) {
            let data = mountain.data;
            let levelMeta: string = `
    {
        name: 'Unknown',
        mountain: {
            startx: ${data[0][0]},
            stepx: ${data[1][0] - data[0][0]},
            cols: [${data.filter((val, idx) => idx < data.length - 2).map(([_, y]) => y).join(',')}],
            boulderRepeat: ${boulderController.mountainBoulderRepeat}
        },
        player: {
            startPos: [${player.x}, ${player.y}],
            boulderRepeat: ${boulderController.playerBoulderRepeat}
        }
    }`;
            console.log(levelMeta);
        }

        let camera = this.camera = new SpeedScaleCamera(this);
        camera.clampLeft = mountain.data[0][0];
        camera.clampRight = mountain.data[mountain.data.length - 1][0];
        camera.floorCenterPosition = false;
        camera.follow = player;
        camera.clearColor = '';
        camera.maxZoomScale = 400;
        camera.minZoomScale = 1;
        camera.zoomScale = SCALE;
    }
}
