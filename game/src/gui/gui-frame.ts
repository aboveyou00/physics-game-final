import { Game, GameScene } from 'engine';
import { GuiItem } from './gui-item';

export class GuiFrame {
    constructor() { }
    
    private _game: Game;
    get game() {
        return this._game;
    }
    set game(val: Game) {
        this._game = val;
    }
    get scene() {
        return this.game.scene;
    }
    
    private _currentSelection: GuiItem | null = null;
    get currentSelection() {
        return this._currentSelection;
    }
    set currentSelection(val: GuiItem) {
        if (val === this._currentSelection) return;
        if (val && !val.canFocus) throw new Error(`Cannot set the focus on a GuiItem with canFocus === false`);
        if (this._currentSelection) this._currentSelection.unfocus.emit(void(0));
        this._currentSelection = val;
        if (this._currentSelection) this._currentSelection.focus.emit(void(0));
    }
}
