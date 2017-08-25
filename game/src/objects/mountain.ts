import { GameObject, GameObjectOptions, GraphicsAdapter, DefaultGraphicsAdapter } from 'engine';
import { MountainCollisionMask } from '../physics/mountain-collision-mask';

export class MountainObject extends GameObject {
    constructor(data?: [number, number][], opts?: GameObjectOptions) {
        super('Mountain', opts);
        if (data) this.data = data;
        this.init();
    }
    
    private RISING_EDGE_WEIGHT = Math.random() * 1.2;
    private FALLING_EDGE_WEIGHT = Math.random() * 1.2;
    private BUMPINESS = .4 + Math.random() * .8;
    
    data: [number, number][];
    private init() {
        if (!this.data) {
            let fromx = -50;
            let tox = 300;
            let offy = [];
            for (let q = Math.floor(fromx / 10); q < Math.floor(tox / 10) + 1; q++) {
                offy.push(Math.random() * 15);
            }
            this.data = [];
            for (let q = fromx; q < tox; q++) {
                let offh = (q - fromx) / 10;
                let offhBase = Math.floor(offh);
                let off = (offy[offhBase] * (1 - (offh - offhBase)) * this.FALLING_EDGE_WEIGHT) + (offy[offhBase + 1] * (offh - offhBase) * this.RISING_EDGE_WEIGHT);
                if (isNaN(off)) throw new Error(`off is NaN. q: ${q}, offhBase: ${offhBase}, offy[offhBase]: ${offy[offhBase]}, offy[offhBase + 1]: ${offy[offhBase + 1]}`);
                this.data.push([q * 2, q + Math.random() * this.BUMPINESS + off]);
            }
        }
        let lastData = this.data[this.data.length - 1];
        this.data.push([lastData[0] + 40, lastData[1] + 6]);
        this.data.push([lastData[0] + 120, lastData[1] + 8]);
        this.mask = new MountainCollisionMask(this);
    }
    
    get maximumY() {
        let maxy = this.data[0][1];
        for (let q = 1; q < this.data.length; q++) {
            let [x, y] = this.data[q];
            if (y > maxy) maxy = y;
        }
        return maxy;
    }
    
    renderImpl(adapter: GraphicsAdapter) {
        if (adapter instanceof DefaultGraphicsAdapter) this.renderImplContext2d(adapter);
        else throw new Error('Not implemented');
    }
    private renderImplContext2d(adapter: DefaultGraphicsAdapter) {
        let context = adapter.context;
        context.fillStyle = '#D2691E';
        context.strokeStyle = '#964B00';
        
        context.beginPath();
        let maxy = this.data[0][1];
        context.moveTo(this.data[0][0], this.data[0][1]);
        for (let q = 1; q < this.data.length; q++) {
            let [x, y] = this.data[q];
            if (y > maxy) maxy = y;
            context.lineTo(x, y);
        }
        context.lineTo(this.data[this.data.length - 1][0] + 20, maxy + 20);
        context.lineTo(this.data[0][0] - 20, maxy + 20);
        context.closePath();
        context.fill();
        context.stroke();
    }
}
