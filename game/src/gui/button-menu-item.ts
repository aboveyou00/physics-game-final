import { GameEvent, AudioT, AudioSourceObject, GraphicsAdapter, DefaultGraphicsAdapter, MouseButton } from 'engine';
import { MenuItem } from './menu-item';
import { AlignT } from '../graphics/types';

export type ButtonMenuItemMeta = {
    text: string,
    handler: () => void,
    isLocked?: () => boolean,
    isCancel?: boolean
};

const CHEVRON_CHAR = '\u203a';

export class ButtonMenuItem extends MenuItem {
    constructor(private meta: ButtonMenuItemMeta) {
        super();
    }
    
    lockedPostfix = '';
    horizontalAlign: AlignT = 'left';
    
    handleEvent(evt: GameEvent): boolean {
        if (super.handleEvent(evt)) return true;
        
        if (evt.type === 'abstractButtonTyped' && evt.name === 'select' && this.isFocused) {
            this.handleClicked();
            return true;
        }
        else if (evt.type === 'mouseMoved') {
            let [mousex, mousey] = this.translateWindowPosition([evt.pageX, evt.pageY]);
            let hovering = true;
            if (mousex < 0 || mousex >= this.width || mousey < 0 || mousey >= this.height) hovering = false;
            if (this.frame.currentSelection === this && !hovering) this.frame.currentSelection = null;
            else if (hovering && this.frame.currentSelection !== this) {
                this.frame.currentSelection = this;
            }
            return false;
        }
        else if (evt.type === 'mouseButtonPressed' && evt.button === MouseButton.Left && this.isFocused) {
            this.handleClicked();
            return true;
        }
        
        return false;
    }
    private handleClicked() {
        if (this.isLocked) return;
        let meta = this.meta;
        meta.handler();
    }
    get isLocked() {
        let meta = this.meta;
        return meta.isLocked && meta.isLocked();
    }
    
    protected resolveBoundsInternal() {
        switch (this.dock) {
        case 'left':
        case 'right':
            //TODO: set width based on width of text
            break;
        case 'up':
        case 'down':
            this._height = 30;
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
        let locked = (meta.isLocked ? meta.isLocked() : false);
        context.fillStyle = locked ? 'grey' :
                    this.isFocused ? 'orange' :
                                     'white';
        let text = meta.text + (locked ? this.lockedPostfix : '');
        
        context.textBaseline = 'top';
        context.textAlign = this.horizontalAlign === 'left' ? 'left' : 'center';
        context.font = '24px cambria';
        
        context.fillText(text, this.horizontalAlign === 'left' ? 15 : 0, 0);
        
        if (this.isFocused) {
            let prevTextAlign = context.textAlign;
            context.textAlign = 'right';
            context.fillStyle = 'orange';
            let offsetX = (this.horizontalAlign === 'left' ? 10 : -context.measureText(text).width / 2);
            context.fillText(CHEVRON_CHAR, offsetX, 0);
            context.textAlign = prevTextAlign;
        }
    }
}
