import { GameScene, Camera } from 'engine';
import { StackScene } from '../stack-scene';
import { MenuV2Object } from '../gui/menu-v2';

export class MenuScene extends StackScene {
    constructor(private menu: MenuV2Object, parentScene: GameScene | null) {
        super(parentScene);
    }
    
    private initialized = false;
    
    start() {
        super.start();
        
        if (this.initialized) return;
        this.initialized = true;
        
        this.addObject(this.menu);
        
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
