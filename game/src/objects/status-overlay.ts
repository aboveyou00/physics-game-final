import { GameObject, GraphicsAdapter, DefaultGraphicsAdapter } from 'engine';
import { PlayerObject } from './player';

export class StatusOverlayObject extends GameObject {
    constructor(private player: PlayerObject) {
        super('StatusOverlay', {
            renderCamera: 'none'
        });
    }
    
    renderImpl(adapter: GraphicsAdapter) {
        if (adapter instanceof DefaultGraphicsAdapter) this.renderImplContext2d(adapter);
        else throw new Error('Not implemented');
    }
    private renderImplContext2d(adapter: DefaultGraphicsAdapter) {
        let context = adapter.context;
        
        let [canvasWidth, canvasHeight] = this.game.canvasSize;
        
        if (!this.player.isAlive) {
            context.fillStyle = 'rgba(0, 0, 0, .6)';
            context.fillRect(0, (canvasHeight / 2) - 200, canvasWidth, 400);
            
            context.fillStyle = 'white';
            context.font = '120px Cambria';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText('You Lose!', canvasWidth / 2, canvasHeight / 2);
        }
    }
}
