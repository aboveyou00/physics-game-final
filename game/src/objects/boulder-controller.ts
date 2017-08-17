import { GameObject } from 'engine';
import { PlayerObject } from './player';
import { MountainObject } from './mountain';
import { BoulderObject } from './boulder';

export class BoulderControllerObject extends GameObject {
    constructor(private player: PlayerObject, private mountain: MountainObject) {
        super('BoulderController', {
            shouldRender: false
        });
    }
    
    private PBOULDER_REPEAT = 3;
    private MBOULDER_REPEAT = 1;
    
    private _pBoulderTime = 0;
    private _mBoulderTime = -20;
    
    private boulders: BoulderObject[] = [];
    
    tick(delta: number) {
        super.tick(delta);
        
        // this._pBoulderTime -= delta;
        while (this._pBoulderTime < 0) {
            this._pBoulderTime += this.PBOULDER_REPEAT;
            let xdiff = Math.random() * -10;
            let ydiff = Math.random() * -50 - 20;
            let boulder = new BoulderObject({
                x: this.player.x + xdiff,
                y: this.player.y + ydiff,
                hspeed: Math.random() * (-xdiff / 10),
                vspeed: Math.random() * (-ydiff / 10)
            });
            this.scene.addObject(boulder);
            this.boulders.push(boulder);
        }
        
        // this._mBoulderTime -= delta;
        while (this._mBoulderTime < 0) {
            this._mBoulderTime += this.MBOULDER_REPEAT;
            let xdiff = Math.random() * -20;
            let ydiff = Math.random() * -60 - 70;
            let fromq = Math.floor(Math.random() * this.mountain.data.length);
            let fromqd = this.mountain.data[fromq];
            if (typeof fromqd[0] !== 'number' || isNaN(fromqd[0])) throw new Error(`fromqd[0] is ${fromqd[0]}`);
            if (typeof fromqd[1] !== 'number' || isNaN(fromqd[1])) throw new Error(`fromqd[1] is ${fromqd[1]}`);
            if (typeof xdiff !== 'number' || isNaN(xdiff)) throw new Error(`xdiff is ${xdiff}`);
            if (typeof ydiff !== 'number' || isNaN(ydiff)) throw new Error(`ydiff is ${ydiff}`);
            let boulder = new BoulderObject({
                x: fromqd[0] + xdiff,
                y: fromqd[1] + ydiff,
                hspeed: Math.random() * (-xdiff / 10),
                vspeed: Math.random() * (-ydiff / 10)
            });
            this.scene.addObject(boulder);
            this.boulders.push(boulder);
        }
        
        let maxy = this.mountain.maximumY;
        for (let q = 0; q < this.boulders.length; q++) {
            let boulder = this.boulders[q];
            if (boulder.y - boulder.radius > maxy + 20) {
                this.scene.removeObject(boulder);
                this.boulders.splice(q--, 1);
            }
        }
    }
}
