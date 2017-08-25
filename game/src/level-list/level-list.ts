import { MenuV2Object } from '../gui/menu-v2';
import { StartScene } from '../scenes/start.scene';
import { levels } from '../dbs/level.db';

export class LevelListMenuObject extends MenuV2Object {
    constructor() {
        super('Play', 'PLAY');
    }
    
    initItems() {
        for (let level of levels) {
            this.addMenuItem({
                text: level.name,
                handler: () => {
                    this.game.changeScene(new StartScene(this.scene, level));
                }
            });
        }
        this.addMenuItem({
            text: "Randomly Generated",
            handler: () => {
                this.game.changeScene(new StartScene(this.scene, null));
            }
        });
    }
}
