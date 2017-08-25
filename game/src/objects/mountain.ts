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
    private SMALL_BUMP_MAGNITUDE = 10 + Math.random() * 10;
    private SMALL_BUMP_SIZE = 6 + Math.round(Math.random() * 8);
    private LARGE_BUMP_MAGNITUDE = 25 + Math.random() * 50;
    private LARGE_BUMP_SIZE = 30 + Math.round(Math.random() * 20);
    
    data: [number, number][];
    private init() {
        if (!this.data) {
            let fromx = -50;
            let tox = 300 + Math.floor(Math.random() * 600);
            let smallOffy = [];
            for (let q = Math.floor(fromx / this.SMALL_BUMP_SIZE); q < Math.floor(tox / this.SMALL_BUMP_SIZE) + 2; q++) {
                smallOffy.push(Math.random() * this.SMALL_BUMP_MAGNITUDE);
            }
            let largeOffy = [];
            for (let q = Math.floor(fromx / this.LARGE_BUMP_SIZE); q < Math.floor(tox / this.LARGE_BUMP_SIZE) + 2; q++) {
                largeOffy.push(Math.random() * this.LARGE_BUMP_MAGNITUDE);
            }
            this.data = [];
            for (let q = fromx; q < tox; q++) {
                let smallOffh = (q - fromx) / this.SMALL_BUMP_SIZE;
                let smallOffhBase = Math.floor(smallOffh);
                let largeOffh = (q - fromx) / this.LARGE_BUMP_SIZE;
                let largeOffhBase = Math.floor(largeOffh);
                let smallOff = (smallOffy[smallOffhBase] * (1 - (smallOffh - smallOffhBase)) * this.FALLING_EDGE_WEIGHT) + (smallOffy[smallOffhBase + 1] * (smallOffh - smallOffhBase) * this.RISING_EDGE_WEIGHT);
                if (isNaN(smallOff)) throw new Error(`smallOff is NaN. q: ${q}, smallOffhBase: ${smallOffhBase}, smallOffy[smallOffhBase]: ${smallOffy[smallOffhBase]}, smallOffy[smallOffhBase + 1]: ${smallOffy[smallOffhBase + 1]}`);
                let largeOff = (largeOffy[largeOffhBase] * (1 - (largeOffh - largeOffhBase)) * this.FALLING_EDGE_WEIGHT) + (largeOffy[largeOffhBase + 1] * (largeOffh - largeOffhBase) * this.RISING_EDGE_WEIGHT);
                if (isNaN(largeOff)) throw new Error(`largeOff is NaN. q: ${q}, largeOffhBase: ${largeOffhBase}, largeOffy[smallOffhBase]: ${smallOffy[smallOffhBase]}, largeOffy[smallOffhBase + 1]: ${smallOffy[smallOffhBase + 1]}`);
                this.data.push([q * 2, q + Math.random() * this.BUMPINESS + smallOff + largeOff]);
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
