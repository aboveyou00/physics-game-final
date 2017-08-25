import { Game, GameScene, EventEmitter, GameEvent, GraphicsAdapter } from 'engine';
import { ContainerGuiItem } from './container-gui-item';
import { GuiFrame } from './gui-frame';

export type DockT = 'none' | 'left' | 'right' | 'up' | 'down' | 'fill';
export type BoundsT = { left: number, right: number, top: number, bottom: number };

export abstract class GuiItem {
    constructor() { }
    
    private _frame: GuiFrame;
    get frame() {
        return this._frame;
    }
    set frame(val: GuiFrame) {
        this._frame = val;
    }
    
    get game() {
        return this.frame.game;
    }
    get scene() {
        return this.frame.scene;
    }
    
    handleEvent(e: GameEvent): boolean {
        return false;
    }
    translateWindowPosition(pos: [number, number]): [number, number] {
        if (this.parent) pos = this.parent.translateWindowPosition(pos);
        return [pos[0] - this.x, pos[1] - this.y];
    }
    
    private _parent: ContainerGuiItem | null = null;
    get parent() {
        return this._parent;
    }
    set parent(val: ContainerGuiItem | null) {
        if (this._parent === val) return;
        if (this._parent) this._parent.removeChild(this);
        this._parent = val;
        if (this._parent) this._parent.addChild(this);
    }
    
    protected _x = 0;
    get x() {
        return this._x;
    }
    set x(val: number) {
        if (this._dock !== 'none') {
            console.error(`X set on a GuiItem with dock '${this._dock}'. Setting dock to 'none'`);
            this._dock = 'none';
        }
        this._x = val;
    }
    protected _y = 0;
    get y() {
        return this._y;
    }
    set y(val: number) {
        if (this._dock !== 'none') {
            console.error(`Y set on a GuiItem with dock '${this._dock}'. Setting dock to 'none'`);
            this._dock = 'none';
        }
        this._y = val;
    }
    protected _width = 0;
    get width() {
        return this._width;
    }
    set width(val: number) {
        if (this._dock === 'up' || this._dock === 'down' || this._dock === 'fill') {
            console.error(`Width set on a GuiItem with dock '${this._dock}'. Setting dock to 'none'`);
            this._dock = 'none';
        }
        this._width = val;
    }
    protected _height = 0;
    get height() {
        return this._height;
    }
    set height(val: number) {
        if (this._dock === 'left' || this._dock === 'right' || this._dock === 'fill') {
            console.error(`Height set on a GuiItem with dock '${this._dock}'. Setting dock to 'none'`);
            this._dock = 'none';
        }
        this._height = val;
    }
    
    protected _dock: DockT;
    get dock() {
        return this._dock;
    }
    set dock(val: DockT) {
        this._dock = val;
    }
    
    resolveLayout(bounds: BoundsT) {
        switch (this.dock) {
        case 'fill':
            [this._x, this._y] = [bounds.left, bounds.top];
            [this._width, this._height] = [bounds.right - bounds.left, bounds.bottom - bounds.top];
            this.resolveBoundsInternal();
            break;
        case 'left':
            [this._x, this._y] = [bounds.left, bounds.top];
            this._height = bounds.bottom - bounds.top;
            this.resolveBoundsInternal();
            bounds.left += this._width;
            break;
        case 'right':
            [this._x, this._y] = [bounds.right - this._width, bounds.top];
            this._height = bounds.bottom - bounds.top;
            this.resolveBoundsInternal();
            this._x = bounds.right - this._width;
            bounds.right -= this._width;
            break;
        case 'up':
            [this._x, this._y] = [bounds.left, bounds.top];
            this._width = bounds.right - bounds.left;
            this.resolveBoundsInternal();
            bounds.top += this._height;
            break;
        case 'down':
            [this._x, this._y] = [bounds.left, bounds.bottom - this._height];
            this._width = bounds.right - bounds.left;
            this.resolveBoundsInternal();
            this._y = bounds.bottom - this._height;
            bounds.bottom -= this._height;
            break;
        case 'none':
        default:
            this.resolveBoundsInternal();
            break;
        }
    }
    protected abstract resolveBoundsInternal(): BoundsT | void;
    
    private _canFocus = false;
    get canFocus() {
        return this._canFocus;
    }
    set canFocus(val) {
        if (val === this._canFocus) return;
        if (!val && this.isFocused) throw new Error(`Cannot set canFocus to false on a GuiItem with isFocused === true`);
        this._canFocus = val;
    }
    
    get isFocused() {
        if (!this._frame) return false;
        return this._frame.currentSelection === this;
    }
    
    unfocus = new EventEmitter<void>();
    focus = new EventEmitter<void>();
    
    private transformKey = Symbol();
    render(adapter: GraphicsAdapter) {
        adapter.renderTransformed(this._x, this._y, 0, 1, 1, () => {
            this.renderImpl(adapter);
        }, this.transformKey);
    }
    abstract renderImpl(adapter: GraphicsAdapter);
}
