import { GameEvent, AudioT, AudioSourceObject, GraphicsAdapter, DefaultGraphicsAdapter } from 'engine';
import { MenuItem } from './menu-item';
import { AlignT } from '../graphics/types';

export type TextMenuItemMeta = {
    text: string
};

export class TextMenuItem extends MenuItem {
    constructor(private meta: TextMenuItemMeta) {
        super(false);
    }
    
    horizontalAlign: AlignT = 'left';
    margin = { left: 0, right: 0, top: 0, bottom: 10 };
    
    protected resolveBoundsInternal() {
        switch (this.dock) {
        case 'left':
        case 'right':
            //TODO: set width based on width of text
            break;
        case 'up':
        case 'down':
            this._height = this.margin.top + this.margin.bottom + 30;
            break;
        case 'none':
        case 'fill':
            break;
        }
    }
    
    renderImpl(adapter: GraphicsAdapter) {
        if (adapter instanceof DefaultGraphicsAdapter) this.renderImplContext2d(adapter);
        else throw new Error('Not implemented');
    }
    renderImplContext2d(adapter: DefaultGraphicsAdapter) {
        let context = adapter.context;
        let meta = this.meta;
        
        context.fillStyle = 'white';
        context.textBaseline = 'top';
        context.textAlign = this.horizontalAlign === 'left' ? 'left' : 'center';
        context.font = '24px cambria';
        context.fillText(meta.text, this.margin.left + (this.horizontalAlign === 'left' ? 15 : 0), this.margin.top);
    }
}
