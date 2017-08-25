import { GameScene, Camera } from 'engine';
import { StackScene } from '../stack-scene';
import { AboutLayoutSpacer } from './about-layout-spacer';

export class AboutScene extends StackScene {
    constructor(parentScene: GameScene) {
        super(parentScene);
    }
    
    private initialized = false;
    
    get cursor() {
        return ['none'];
    }
    
    start() {
        super.start();
        
        if (this.initialized) return;
        this.initialized = true;
        
        this.addObject(new AboutLayoutSpacer());
        
        this.camera = new Camera(this);
    }
    
    tick(delta: number) {
        super.tick(delta);
        this.camera.clearColor = 'black';
    }
    
    get preferredMusic(): string {
        return 'menu';
    }
}
