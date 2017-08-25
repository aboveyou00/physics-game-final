import { MenuV2Object } from '../gui/menu-v2';
import { LevelListMenuObject } from '../level-list/level-list';
import { AboutScene } from '../about/about.scene';
import { MenuScene } from '../gui/menu.scene';

export class MainMenuObject extends MenuV2Object {
    constructor() {
        super('MainMenu', 'PHYSICS GAME FINAL');
    }
    
    initItems() {
        this.addMenuItem({
            text: "Play",
            handler: () => {
                let menu = new LevelListMenuObject();
                this.game.changeScene(new MenuScene(menu, this.scene));
            }
        });
        this.addMenuItem({
            text: "About",
            handler: () => {
                this.game.changeScene(new AboutScene(this.scene));
            }
        });
        this.addMenuItem({
            text: "Exit",
            handler: () => {
                window.close();
            },
            isCancel: true
        });
    }
}
