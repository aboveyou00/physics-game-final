import { GameEvent, AudioSourceObject } from 'engine';
import { GuiItem } from './gui-item';

export abstract class MenuItem extends GuiItem {
    constructor(canFocus = true) {
        super();
        this.canFocus = canFocus;
    }
    
    previousItem: GuiItem;
    nextItem: GuiItem;
    
    handleEvent(e: GameEvent): boolean {
        if (super.handleEvent(e)) return true;
        if (!this.isFocused) return false;
        
        if (e.type === 'abstractButtonTyped') {
            if (this.previousItem && (e.name === 'up' || e.name === 'left')) {
                this.frame.currentSelection = this.previousItem;
                return true;
            }
            else if (this.nextItem && (e.name === 'right' || e.name === 'down')) {
                this.frame.currentSelection = this.nextItem;
                return true;
            }
        }
        return false;
    }
}
