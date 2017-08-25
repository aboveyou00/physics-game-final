import { EventQueue, KeyboardAbstractButtonProvider, GamepadAbstractButtonProvider } from 'engine';
import { MyGame } from './my-game';

let game = new MyGame();
game.start();

let kbProvider = new KeyboardAbstractButtonProvider(game.eventQueue);
game.eventQueue.addAbstractButtonProvider(kbProvider);

kbProvider.bindAbstractButton('left', 'ArrowLeft', 'KeyA');
kbProvider.bindAbstractButton('right', 'ArrowRight', 'KeyD');
kbProvider.bindAbstractButton('up', 'ArrowUp', 'KeyW');
kbProvider.bindAbstractButton('down', 'ArrowDown', 'KeyS');

kbProvider.bindAbstractButton('select', 'Enter', 'Space');

let gpProvider = new GamepadAbstractButtonProvider(game.eventQueue);
game.eventQueue.addAbstractButtonProvider(gpProvider);

gpProvider.bindAbstractButton('left', 'DPadLeft', 'LeftStickLeft');
gpProvider.bindAbstractButton('right', 'DPadRight', 'LeftStickRight');
gpProvider.bindAbstractButton('up', 'DPadUp', 'LeftStickUp');
gpProvider.bindAbstractButton('down', 'DPadDown', 'LeftStickDown');

gpProvider.bindAbstractButton('select', 'A');
