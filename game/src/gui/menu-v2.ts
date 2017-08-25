import { GameScene, GameObject, GameEvent, GraphicsAdapter, DefaultGraphicsAdapter } from 'engine';
import { ContainerGuiItem } from './container-gui-item';
import { GuiFrame } from './gui-frame';
import { StackScene } from '../stack-scene';
import { MenuItem } from './menu-item';
import { ButtonMenuItem, ButtonMenuItemMeta } from './button-menu-item';
import { TextMenuItem } from './text-menu-item';
import { GuiItem } from './gui-item';

export type MenuHorizontalAlignT = 'left' | 'center';
export type MenuVerticalAlignT = 'top' | 'middle';

export abstract class MenuV2Object extends GameObject {
    constructor(name: string, private title?: string) {
        super(name, {
            renderCamera: 'none'
        });
        this.container = new ContainerGuiItem();
        this.container.dock = 'none';
        this.frame = new GuiFrame();
    }
    
    protected container: ContainerGuiItem;
    protected frame: GuiFrame;
    
    horizontalAlign: MenuHorizontalAlignT = 'left';
    verticalAlign: MenuVerticalAlignT = 'top';
    lockedPostfix: string = '';
    fillBackground: string = '';
    fillBackgroundOpacity: number = .9;
    
    addBackButton = true;
    
    addToScene(scene: GameScene) {
        super.addToScene(scene);
        this.frame.game = this.game;
        if (this.title) {
            this.addMenuItem(new TextMenuItem({
                text: this.title
            }));
        }
        this.initItems();
        if (scene instanceof StackScene && scene.parentScene && this.addBackButton) {
            this.addMenuItem({
                text: 'Back',
                handler: () => {
                    this.game.changeScene(scene.parentScene);
                },
                isCancel: true
            });
        }
    }
    abstract initItems(): void;
    
    private prevItem: MenuItem | null = null;
    private firstItem: MenuItem | null = null;
    addMenuItem(item: ButtonMenuItemMeta): ButtonMenuItem;
    addMenuItem(item: MenuItem): MenuItem;
    addMenuItem(item: ButtonMenuItemMeta | MenuItem): MenuItem {
        if (!(item instanceof MenuItem)) {
            item = new ButtonMenuItem(item);
            (<ButtonMenuItem>item).horizontalAlign = this.horizontalAlign;
            (<ButtonMenuItem>item).lockedPostfix = this.lockedPostfix;
        }
        item.frame = this.frame;
        item.parent = this.container;
        if (item.canFocus) {
            if (!this.firstItem) this.firstItem = item;
            if (this.prevItem) {
                this.prevItem.nextItem = item;
                item.previousItem = this.prevItem;
            }
            else if (this.events.currentInputType === 'keyboard' || this.events.currentInputType === 'gamepad') this.frame.currentSelection = item;
            this.prevItem = item;
        }
        item.dock = 'up';
        return item;
    }
    
    handleEvent(evt: GameEvent) {
        if (super.handleEvent(evt)) return true;
        if (this.container.handleEvent(evt)) return true;
        
        if (evt.type === 'abstractButtonTyped') {
            if (!this.frame.currentSelection) {
                if ((evt.name === 'left' || evt.name === 'up') && this.prevItem) {
                    this.frame.currentSelection = this.prevItem;
                    return true;
                }
                else if ((evt.name === 'right' || evt.name === 'down') && this.firstItem) {
                    this.frame.currentSelection = this.firstItem;
                    return true;
                }
            }
        }
        
        return false;
    }
    
    render(adapter: GraphicsAdapter) {
        if (adapter instanceof DefaultGraphicsAdapter) this.renderImplContext2d(adapter);
        else throw new Error('Not implmenented');
        
        this.positionContainer();
        let bounds = this.container.resolveBoundsInternal();
        this.container.height = bounds.top + -bounds.bottom;
        if (this.verticalAlign === 'middle') {
            let [canvasWidth, canvasHeight] = this.game.canvasSize;
            this.container.y = (canvasHeight / 2) - (this.container.height / 2);
        }
        this.container.render(adapter);
    }
    protected positionContainer() {
        let [canvasWidth, canvasHeight] = this.game.canvasSize;
        this.container.width = Math.min(canvasWidth - 80, 600);
        this.container.height = 0;
        this.container.x = (canvasWidth / 2) - (this.container.width / 2);
        this.container.y = 40;
    }
    protected renderImplContext2d(adapter: DefaultGraphicsAdapter) {
        let context = adapter.context;
        let [canvasWidth, canvasHeight] = this.game.canvasSize;
        
        if (this.fillBackground) {
            context.save();
            try {
                context.globalAlpha *= this.fillBackgroundOpacity;
                context.fillStyle = this.fillBackground;
                context.fillRect(0, 0, canvasWidth, canvasHeight);
            }
            finally { context.restore(); }
        }
    }
}
