import { GameScene, GameObject, GraphicsAdapter, DefaultGraphicsAdapter, fillText } from 'engine';
import { credits } from '../dbs/credits.db';
import { StackScene } from '../stack-scene';

const PAN_SPEED = 120;

export class AboutLayoutSpacer extends GameObject {
    constructor() {
        super('About', {
            renderCamera: 'none'
        });
    }
    
    protected renderImpl(adapter: GraphicsAdapter) {
        if (adapter instanceof DefaultGraphicsAdapter) this.renderImplContext2d(adapter.context);
        else throw new Error(`Not implemented!`);
    }
    protected renderImplContext2d(context: CanvasRenderingContext2D) {
        let [canvasWidth, canvasHeight] = this.game.canvasSize;
        
        let xx = canvasWidth / 2;
        let yy = canvasHeight - this.animationAge * PAN_SPEED;
        
        for (let q = 0; q < credits.length; q++) {
            let item = credits[q];
            if (yy >= canvasHeight) break;
            switch (item.type) {
            case 'text':
                context.textBaseline = 'top';
                context.textAlign = 'center';
                context.font = `${item.isBold ? 'bold ' : ''}${item.fontSize || 24}px ${item.fontFamily || 'Cambria'}`;
                context.fillStyle = 'white';
                fillText(context, item.text, xx, yy);
                yy += Math.floor((item.fontSize || 24) * 1.4) * (item.text.split('\n').length) + (item.marginBottom || 0);
                break;
            case 'image':
                let image = this.resources.loadImage(item.sprite.src);
                context.drawImage(image, xx - (image.width / 2), yy);
                yy += image.height + (item.marginBottom || 0);
                break;
            }
        }
        
        if (yy < 0) {
            this.game.changeScene((<StackScene>this.scene).parentScene);
        }
    }
}
