import { MenuV2Object } from '../gui/menu-v2';
import { StartScene } from '../scenes/start.scene';

export class LevelListMenuObject extends MenuV2Object {
    constructor() {
        super('Play', 'PLAY');
    }
    
    initItems() {
        this.addMenuItem({
            text: "Level 1",
            handler: () => {
                this.game.changeScene(new StartScene(this.scene));
            }
        });
    }
}
