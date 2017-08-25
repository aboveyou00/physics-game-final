import { Game } from 'engine';
import { MenuScene } from './gui/menu.scene';
import { MainMenuObject } from './main-menu/main-menu';

export class MyGame extends Game {
    constructor(framesPerSecond = 30) {
        super({ framesPerSecond: framesPerSecond });
    }

    start() {
        super.start();
        let menu = new MainMenuObject();
        this.changeScene(new MenuScene(menu, null));
    }
}
