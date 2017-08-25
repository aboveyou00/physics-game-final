import { GameEvent, GraphicsAdapter } from 'engine';
import { GuiItem } from './gui-item';

export class ContainerGuiItem extends GuiItem {
    constructor() {
        super();
    }
    
    protected _children: GuiItem[] = [];
    removeChild(item: GuiItem) {
        let idx = this._children.indexOf(item);
        if (idx === -1) throw new Error(`That GuiItem is not a child of the other!`);
        this._children.splice(idx, 1);
    }
    addChild(item: GuiItem) {
        if (item.parent !== this) throw new Error(`Cannot remove GuiItem. Its parent is not this!`);
        if (item instanceof ContainerGuiItem && item.isAncestorOf(this)) throw new Error(`Cannot add child to GuiItem. Would create loop in hierarchy.`);
        (<any>item)._parent = this;
        this._children.push(item);
    }
    private isAncestorOf(item: GuiItem) {
        while (item) {
            if (item === this) return true;
            item = item.parent;
        }
        return false;
    }
    
    handleEvent(evt: GameEvent): boolean {
        if (super.handleEvent(evt)) return true;
        for (let child of this._children) {
            if (child.handleEvent(evt)) return true;
        }
        return false;
    }
    
    resolveBoundsInternal() {
        let bounds = {
            left: 0,
            right: (this.dock === 'left' || this.dock === 'right') ? 0 : this._width,
            top: 0,
            bottom: (this.dock === 'up' || this.dock === 'down') ? 0 : this._height
        };
        for (let child of this._children) {
            child.resolveLayout(bounds);
        }
        let wid = bounds.left + -bounds.right;
        let hit = bounds.top + -bounds.bottom;
        switch (this.dock) {
        case 'left':
        case 'right':
            this._width = wid;
            for (let child of this._children) {
                if (child.dock === 'right') {
                    (<any>child)._x += wid;
                }
            }
            break;
        case 'up':
        case 'down':
            this._height = hit;
            for (let child of this._children) {
                if (child.dock === 'down') {
                    (<any>child)._y += wid;
                }
            }
            break;
        case 'none':
        case 'fill':
            break;
        }
        return bounds;
    }
    renderImpl(adapter: GraphicsAdapter) {
        for (let child of this._children) {
            child.render(adapter);
        }
    }
}
