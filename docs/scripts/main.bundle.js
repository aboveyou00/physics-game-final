/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(15));
__export(__webpack_require__(4));
__export(__webpack_require__(29));
__export(__webpack_require__(31));
__export(__webpack_require__(13));
__export(__webpack_require__(30));
__export(__webpack_require__(39));
__export(__webpack_require__(27));
__export(__webpack_require__(32));
__export(__webpack_require__(25));
__export(__webpack_require__(36));
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function degToRad(deg) {
    return (deg / 180) * Math.PI;
}
exports.degToRad = degToRad;
function radToDeg(rad) {
    return (rad / Math.PI) * 180;
}
exports.radToDeg = radToDeg;
function clamp(value, lowerBound, upperBound) {
    if (lowerBound > upperBound) {
        throw new Error("Attempting to clamp with a lower bound greater than the upper bound");
    }
    if (value < lowerBound)
        value = lowerBound;
    else if (value > upperBound)
        value = upperBound;
    return value;
}
exports.clamp = clamp;
function fmod(a, b) {
    return +(a - (Math.floor(a / b) * b)).toPrecision(8);
}
exports.fmod = fmod;
function pointDirection(x1, y1, x2, y2) {
    var xdiff = x2 - x1, ydiff = y2 - y1;
    return fmod(radToDeg(Math.atan2(-ydiff, xdiff)), 360);
}
exports.pointDirection = pointDirection;
function pointDistance2(x1, y1, x2, y2) {
    return Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2);
}
exports.pointDistance2 = pointDistance2;
function pointDistance(x1, y1, x2, y2) {
    return Math.sqrt(pointDistance2(x1, y1, x2, y2));
}
exports.pointDistance = pointDistance;
//# sourceMappingURL=math.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ForceGenerator = (function () {
    function ForceGenerator() {
    }
    ForceGenerator.prototype.render = function (collider, context) { };
    return ForceGenerator;
}());
exports.ForceGenerator = ForceGenerator;
//# sourceMappingURL=force-generator.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var StackScene = (function (_super) {
    __extends(StackScene, _super);
    function StackScene(_parentScene) {
        var _this = _super.call(this) || this;
        _this._parentScene = _parentScene;
        return _this;
    }
    Object.defineProperty(StackScene.prototype, "parentScene", {
        get: function () {
            return this._parentScene;
        },
        enumerable: true,
        configurable: true
    });
    StackScene.prototype.handleEvent = function (evt) {
        if (_super.prototype.handleEvent.call(this, evt))
            return true;
        if (evt.type === 'abstractButtonPressed' && evt.name === 'return' && !!this.parentScene) {
            this.game.changeScene(this.parentScene);
            return true;
        }
        return false;
    };
    return StackScene;
}(engine_1.GameScene));
exports.StackScene = StackScene;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = __webpack_require__(1);
var Camera = (function () {
    function Camera(_scene) {
        this._scene = _scene;
        this._clearColor = null;
        this._center = [0, 0];
        this._floorCenterPosition = true;
        this._zoomScale = 1;
        this._maxZoomScale = 4;
        this._minZoomScale = .25;
        this.renderTransformedSymbol = Symbol();
        if (!this._scene)
            throw new Error("You must pass in a valid Scene when you create a Camera.");
    }
    Object.defineProperty(Camera.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "game", {
        get: function () {
            return this.scene.game;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "clearColor", {
        get: function () {
            return this._clearColor;
        },
        set: function (val) {
            this._clearColor = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "center", {
        get: function () {
            return [this._center[0], this._center[1]];
        },
        set: function (_a) {
            var x = _a[0], y = _a[1];
            this._center = [x, y];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "floorCenterPosition", {
        get: function () {
            return this._floorCenterPosition;
        },
        set: function (val) {
            this._floorCenterPosition = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "zoomScale", {
        get: function () {
            return this._zoomScale;
        },
        set: function (val) {
            if (val <= 0)
                throw new Error("The zoom scale must be positive");
            this._zoomScale = math_1.clamp(val, this.minZoomScale, this.maxZoomScale);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "maxZoomScale", {
        get: function () {
            return this._maxZoomScale;
        },
        set: function (val) {
            if (val <= 0)
                throw new Error("The max zoom scale must be positive");
            if (val < this._minZoomScale)
                throw new Error("The min zoom scale is greater than the max zoom scale.");
            this._maxZoomScale = val;
            this.zoomScale = this.zoomScale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "minZoomScale", {
        get: function () {
            return this._minZoomScale;
        },
        set: function (val) {
            if (val <= 0)
                throw new Error("The min zoom scale must be positive");
            if (val > this._maxZoomScale)
                throw new Error("The max zoom scale is less than the min zoom scale.");
            this._minZoomScale = val;
            this.zoomScale = this.zoomScale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Camera.prototype, "bounds", {
        get: function () {
            return this.calculateBounds(this.center, this.zoomScale);
        },
        enumerable: true,
        configurable: true
    });
    Camera.prototype.calculateBounds = function (center, zoomScale) {
        var _a = this.game.canvasSize, cvWidth = _a[0], cvHeight = _a[1];
        var _b = [(cvWidth / 2) / zoomScale, (cvHeight / 2) / zoomScale], hoff = _b[0], voff = _b[1];
        return {
            left: center[0] - hoff,
            right: center[0] + hoff,
            top: center[1] + voff,
            bottom: center[1] - voff
        };
    };
    Camera.prototype.tick = function (delta) { };
    Camera.prototype.fixedTick = function () { };
    Camera.prototype.clear = function (adapter) {
        if (this._clearColor)
            adapter.clear(this._clearColor);
    };
    Camera.prototype.renderTransformed = function (adapter, act) {
        var _a = this._center, tx = _a[0], ty = _a[1];
        if (this.floorCenterPosition) {
            tx = Math.floor(tx);
            ty = Math.floor(ty);
        }
        var _b = this.game.canvasSize, cvWidth = _b[0], cvHeight = _b[1];
        tx = Math.floor(cvWidth / 2) - (tx * this._zoomScale);
        ty = Math.floor(cvHeight / 2) - (ty * this._zoomScale);
        adapter.renderTransformed(tx, ty, 0, this._zoomScale, this._zoomScale, act, this.renderTransformedSymbol);
    };
    Camera.prototype.transformPixelCoordinates = function (x, y) {
        if (typeof x === 'object') {
            y = x.y;
            x = x.x;
        }
        var _a = this._center, tx = _a[0], ty = _a[1];
        if (this.floorCenterPosition) {
            tx = Math.floor(tx);
            ty = Math.floor(ty);
        }
        var _b = this.game.canvasSize, cvWidth = _b[0], cvHeight = _b[1];
        tx = Math.floor(cvWidth / 2) - (tx * this._zoomScale);
        ty = Math.floor(cvHeight / 2) - (ty * this._zoomScale);
        return [(x - tx) / this._zoomScale, (y - ty) / this._zoomScale];
    };
    return Camera;
}());
exports.Camera = Camera;
//# sourceMappingURL=camera.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = (function () {
    function EventEmitter() {
        this._listeners = [];
        this._isEmitting = false;
    }
    EventEmitter.prototype.addListener = function (listener) {
        var _this = this;
        if (!listener || typeof listener !== 'function')
            throw new Error("Listener is not a function: " + listener);
        this._listeners.push(listener);
        return function () {
            var idx = _this._listeners.indexOf(listener);
            if (idx !== -1)
                _this._listeners.splice(idx, 1);
        };
    };
    EventEmitter.prototype.emit = function (val) {
        if (this._isEmitting)
            throw new Error("EventEmitter.emit was recursively invoked. New value: " + val);
        this._isEmitting = true;
        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(val);
        }
        this._isEmitting = false;
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=event-emitter.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var render_1 = __webpack_require__(16);
var graphics_adapter_1 = __webpack_require__(14);
var sprite_1 = __webpack_require__(8);
var math_1 = __webpack_require__(1);
var DefaultGraphicsAdapter = (function (_super) {
    __extends(DefaultGraphicsAdapter, _super);
    function DefaultGraphicsAdapter(_context) {
        if (_context === void 0) { _context = null; }
        var _this = _super.call(this) || this;
        _this._context = _context;
        _this._initialized = false;
        return _this;
    }
    DefaultGraphicsAdapter.prototype.init = function (game) {
        var _this = this;
        if (this._initialized)
            throw new Error("Cannot initialize DefaultGraphicsAdapter twice.");
        this._initialized = true;
        if (this._context)
            throw new Error("This DefaultGraphicsAdapter was created with a context");
        if (!this.canvas)
            this._canvas = document.createElement('canvas');
        this._context = this.canvas.getContext("2d");
        game.bodyResized.addListener(function () {
            _a = [window.innerWidth, window.innerHeight], _this.canvas.width = _a[0], _this.canvas.height = _a[1];
            var _a;
        });
    };
    Object.defineProperty(DefaultGraphicsAdapter.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DefaultGraphicsAdapter.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: true,
        configurable: true
    });
    DefaultGraphicsAdapter.prototype.clear = function (color) {
        var context = this.context;
        context.fillStyle = color;
        context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    DefaultGraphicsAdapter.prototype.renderResourceLoader = function (resourcesLoaded, totalResources, errors) {
        var context = this.context;
        context.fillStyle = 'grey';
        context.fillRect(0, 0, context.canvas.scrollWidth, context.canvas.scrollHeight);
        if (totalResources > 0) {
            context.fillStyle = 'white';
            context.fillRect(4, 4, 100, 4);
            context.fillStyle = 'black';
            context.fillRect(4, 4, 100 * (resourcesLoaded / totalResources), 4);
        }
        var msg = resourcesLoaded + "/" + totalResources;
        if (errors && errors.length)
            msg += '\n' + errors;
        context.textBaseline = 'top';
        context.textAlign = 'left';
        context.fillStyle = 'black';
        render_1.fillText(context, msg, 4, 12);
    };
    DefaultGraphicsAdapter.prototype.renderScene = function (scene) {
        scene.render(this);
    };
    DefaultGraphicsAdapter.prototype.renderObject = function (obj) {
        var context = this.context;
        if (obj.sprite) {
            this.drawSprite(obj.resources, obj.sprite, 0, 0, obj.animationAge);
        }
        else {
            context.fillStyle = 'red';
            context.fillRect(0, 0, 16, 16);
            context.fillStyle = 'white';
            context.font = '16px Consolas';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText('?', 0 + 8, 0 + 8);
        }
    };
    DefaultGraphicsAdapter.prototype.renderTransformed = function (translateX, translateY, rotate, scaleX, scaleY, act) {
        var context = this.context;
        context.save();
        try {
            context.translate(translateX, translateY);
            context.rotate(rotate);
            context.scale(scaleX, scaleY);
            act();
        }
        finally {
            context.restore();
        }
    };
    DefaultGraphicsAdapter.prototype.drawSprite = function (loader, sprite, x, y, imageIndex, defaultFps) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (imageIndex === void 0) { imageIndex = 0; }
        if (defaultFps === void 0) { defaultFps = 30; }
        if (!loader || !loader.loadImage)
            throw new Error("You must pass in a valid ResourceLoader to draw a sprite.");
        if (!sprite || !sprite.src)
            throw new Error("Invalid sprite. Cannot render " + sprite + ".");
        var img = loader.loadImage(sprite.src);
        var pivot = sprite.pivot || { x: 0, y: 0 };
        var context = this.context;
        if (sprite_1.isAnimationSprite(sprite)) {
            var tileset = sprite.tileset;
            var frames_1 = sprite.frames;
            var fps = sprite.framesPerSecond;
            if (typeof fps === 'undefined')
                fps = defaultFps;
            var frameIdx = math_1.fmod(Math.floor(imageIndex * fps), frames_1.length);
            var frame = frames_1[frameIdx];
            context.drawImage(img, frame.tilex * tileset.width, frame.tiley * tileset.height, tileset.width, tileset.height, x - pivot.x, y - pivot.y, tileset.width, tileset.height);
        }
        else if (sprite_1.isSingleTileSprite(sprite)) {
            var tileset = sprite.tileset;
            context.drawImage(img, tileset.tilex * tileset.width, tileset.tiley * tileset.height, tileset.width, tileset.height, x - pivot.x, y - pivot.y, tileset.width, tileset.height);
        }
        else {
            context.drawImage(img, x - pivot.x, y - pivot.y, img.width, img.height);
        }
    };
    return DefaultGraphicsAdapter;
}(graphics_adapter_1.GraphicsAdapter));
exports.DefaultGraphicsAdapter = DefaultGraphicsAdapter;
//# sourceMappingURL=default-graphics-adapter.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = __webpack_require__(1);
var default_graphics_adapter_1 = __webpack_require__(6);
var CollisionMask = (function () {
    function CollisionMask(_gobj) {
        this._gobj = _gobj;
        this._isFixed = false;
        this._isTrigger = false;
        this._mass = 1;
        this.contacts = [];
        this.triggers = [];
        this.collisionImpulseX = 0;
        this.collisionImpulseY = 0;
        this.impulseCount = 0;
        this.forceAccumX = 0;
        this.forceAccumY = 0;
        this.impulseAccumX = 0;
        this.impulseAccumY = 0;
        this._generators = [];
        if (!this._gobj)
            throw new Error("Collision mask created without a game object!");
    }
    Object.defineProperty(CollisionMask.prototype, "gameObject", {
        get: function () {
            return this._gobj;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollisionMask.prototype, "isFixed", {
        get: function () {
            return this._isFixed;
        },
        set: function (val) {
            this._isFixed = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollisionMask.prototype, "isTrigger", {
        get: function () {
            return this._isTrigger;
        },
        set: function (val) {
            this._isTrigger = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CollisionMask.prototype, "mass", {
        get: function () {
            return this._mass;
        },
        set: function (val) {
            this._mass = val;
        },
        enumerable: true,
        configurable: true
    });
    CollisionMask.prototype.clearContacts = function () {
        this.contacts.length = 0;
        this.triggers.length = 0;
    };
    CollisionMask.prototype.resolveImpulses = function () {
        if (this.impulseCount == 0)
            return;
        this.addImpulse(this.collisionImpulseX / this.impulseCount, this.collisionImpulseY / this.impulseCount);
        this.collisionImpulseX = this.collisionImpulseY = this.impulseCount = 0;
    };
    CollisionMask.prototype.addForce = function (x, y) {
        if (this.isFixed)
            return;
        if (isNaN(x) || isNaN(y))
            throw new Error('Cannot add force with NaN as a component');
        this.forceAccumX += x;
        this.forceAccumY += y;
    };
    CollisionMask.prototype.addImpulse = function (x, y) {
        if (this.isFixed)
            return;
        if (isNaN(x) || isNaN(y))
            throw new Error('Cannot add impulse with NaN as a component');
        this.impulseAccumX += x;
        this.impulseAccumY += y;
    };
    Object.defineProperty(CollisionMask.prototype, "forceGenerators", {
        get: function () {
            return this._generators;
        },
        enumerable: true,
        configurable: true
    });
    CollisionMask.prototype.addForceGenerator = function (generator) {
        this._generators.push(generator);
    };
    CollisionMask.prototype.removeForceGenerator = function (generator) {
        var idx = this._generators.indexOf(generator);
        if (idx === -1)
            return;
        this._generators.splice(idx, 1);
    };
    CollisionMask.prototype.applyForces = function (delta) {
        if (this.isFixed)
            return;
        for (var _i = 0, _a = this.gameObject.scene.forceGenerators; _i < _a.length; _i++) {
            var generator = _a[_i];
            generator.updateCollider(this, delta);
        }
        for (var _b = 0, _c = this._generators; _b < _c.length; _b++) {
            var generator = _c[_b];
            generator.updateCollider(this, delta);
        }
        if (isNaN(this.impulseAccumX))
            console.error("impulseAccumX is NaN");
        this.gameObject.hspeed += this.forceAccumX;
        this.gameObject.vspeed += this.forceAccumY;
        this.gameObject.x += this.impulseAccumX;
        this.gameObject.y += this.impulseAccumY;
        this.forceAccumX = this.forceAccumY = this.impulseAccumX = this.impulseAccumY = 0;
    };
    CollisionMask.prototype.render = function (adapter) {
        if (adapter instanceof default_graphics_adapter_1.DefaultGraphicsAdapter)
            this.renderContext2d(adapter.context);
        else
            throw new Error("Not implemented!");
    };
    CollisionMask.prototype.renderContext2d = function (context) {
        context.save();
        try {
            context.translate(this.gameObject.x, this.gameObject.y);
            context.rotate(-math_1.degToRad(this.gameObject.imageAngle));
            this.renderImpl(context);
        }
        finally {
            context.restore();
        }
        for (var _i = 0, _a = this.forceGenerators; _i < _a.length; _i++) {
            var forceGenerator = _a[_i];
            forceGenerator.render(this, context);
        }
    };
    return CollisionMask;
}());
exports.CollisionMask = CollisionMask;
//# sourceMappingURL=collision-mask.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isSingleTileSprite(sprite) {
    return !!sprite.tileset && !sprite.frames;
}
exports.isSingleTileSprite = isSingleTileSprite;
function isAnimationSprite(sprite) {
    return !!sprite.frames;
}
exports.isAnimationSprite = isAnimationSprite;
//# sourceMappingURL=sprite.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var gui_item_1 = __webpack_require__(17);
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem(canFocus) {
        if (canFocus === void 0) { canFocus = true; }
        var _this = _super.call(this) || this;
        _this.canFocus = canFocus;
        return _this;
    }
    MenuItem.prototype.handleEvent = function (e) {
        if (_super.prototype.handleEvent.call(this, e))
            return true;
        if (!this.isFocused)
            return false;
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
    };
    return MenuItem;
}(gui_item_1.GuiItem));
exports.MenuItem = MenuItem;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = __webpack_require__(1);
var event_emitter_1 = __webpack_require__(5);
var AudioController = (function () {
    function AudioController() {
        this._volumes = new Map();
        this.volumeChanged = new event_emitter_1.EventEmitter();
    }
    AudioController.prototype.getVolume = function (channel) {
        if (!this._volumes.has(channel))
            return 1;
        return this._volumes.get(channel);
    };
    AudioController.prototype.setVolume = function (channel, val) {
        val = math_1.clamp(val, 0, 1);
        var prev = this.getVolume(channel);
        if (val === prev)
            return;
        this._volumes.set(channel, val);
        this.volumeChanged.emit({
            channel: channel,
            volume: val
        });
    };
    return AudioController;
}());
exports.AudioController = AudioController;
//# sourceMappingURL=audio-controller.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(12);
var EventQueue = (function () {
    function EventQueue() {
        this.DEBUG_KEYS = false;
        this.DEBUG_MOUSE = false;
        this.DEBUG_MOUSE_VERBOSE = false;
        this.DEBUG_GAMEPAD = false;
        this.DEBUG_GAMEPAD_VERBOSE = false;
        this.GAMEPAD_AXIS_THRESHOLD = .4;
        this.ABSTRACT_BUTTON_TYPE_TIMEOUT = .5;
        this.ABSTRACT_BUTTON_TYPE_REPEAT = 15;
        this.AUXILIARY_KEYS = ['ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight'];
        this._events = [];
        this._keys = new Map();
        this._mouseButtons = new Map();
        this._pageX = 0;
        this._pageY = 0;
        this._gamepads = [];
        this._gamepadAxes = [];
        this._gamepadButtonsRaw = [];
        this._gamepadButtons = new Map();
        this._currentInput = 'keyboard';
        this._abstractButtonProviders = [];
        this.abstractButtons = new Map();
        this.mrAbstractButton = '';
        this.init();
    }
    EventQueue.prototype.init = function () {
        var body = document.getElementsByTagName('body')[0];
        this.initKeyboard(body);
        this.initMouse(body);
        this.initGamepad(window);
    };
    EventQueue.prototype.initKeyboard = function (body) {
        var _this = this;
        body.addEventListener('keydown', function (e) {
            if (e.code === 'F12')
                return;
            if (e.code === 'F4' && e.altKey)
                return;
            if (!e.ctrlKey || (e.code !== 'KeyV' && e.code !== 'KeyX' && e.code !== 'KeyC'))
                e.preventDefault();
            if (!_this.isKeyAuxiliary(e.code))
                _this.currentInputType = 'keyboard';
            if (_this.DEBUG_KEYS)
                console.log("Key Pressed: " + e.key + "; " + e.code);
            if (!_this.isKeyDown(e.code)) {
                _this._keys.set(e.code, true);
                _this.enqueue({
                    type: 'keyPressed',
                    code: e.code,
                    altPressed: !!e.altKey,
                    ctrlPressed: !!e.ctrlKey,
                    shiftPressed: !!e.shiftKey
                });
            }
            _this.enqueue({
                type: 'keyTyped',
                key: e.key,
                code: e.code,
                altPressed: !!e.altKey,
                ctrlPressed: !!e.ctrlKey,
                shiftPressed: !!e.shiftKey
            });
        });
        body.addEventListener('keyup', function (e) {
            e.preventDefault();
            if (!_this.isKeyAuxiliary(e.code))
                _this.currentInputType = 'keyboard';
            if (_this.DEBUG_KEYS)
                console.log("Key Released: " + e.key + "; " + e.code);
            if (_this.isKeyDown(e.code)) {
                _this._keys.set(e.code, false);
                _this.enqueue({
                    type: 'keyReleased',
                    code: e.code,
                    altPressed: !!e.altKey,
                    ctrlPressed: !!e.ctrlKey,
                    shiftPressed: !!e.shiftKey
                });
            }
        });
    };
    EventQueue.prototype.isKeyAuxiliary = function (code) {
        return (this.AUXILIARY_KEYS.indexOf(code) !== -1);
    };
    EventQueue.prototype.initMouse = function (body) {
        var _this = this;
        body.addEventListener('mousemove', function (e) {
            e.preventDefault();
            _this.currentInputType = 'mouse';
            if (_this.DEBUG_MOUSE_VERBOSE)
                console.log("Mouse moved. Movement: " + e.movementX + ", " + e.movementY + "; Position: " + e.pageX + ", " + e.pageY);
            if (typeof e.pageX !== 'undefined')
                _this._pageX = e.pageX;
            else
                _this._pageX += e.movementX;
            if (typeof e.pageY !== 'undefined')
                _this._pageY = e.pageY;
            else
                _this._pageY += e.movementY;
            _this.enqueue({
                type: 'mouseMoved',
                movementX: e.movementX,
                movementY: e.movementY,
                pageX: _this._pageX,
                pageY: _this._pageY
            });
        });
        body.addEventListener('mousedown', function (e) {
            e.preventDefault();
            _this.currentInputType = 'mouse';
            if (_this.DEBUG_MOUSE)
                console.log("Mouse button pressed. Button: " + e.button + "; Position: " + e.pageX + ", " + e.pageY);
            if (!_this.isMouseButtonDown(e.button)) {
                if (typeof e.pageX !== 'undefined')
                    _this._pageX = e.pageX;
                if (typeof e.pageY !== 'undefined')
                    _this._pageY = e.pageY;
                _this._mouseButtons.set(e.button, true);
                _this.enqueue({
                    type: 'mouseButtonPressed',
                    button: e.button,
                    pageX: _this._pageX,
                    pageY: _this._pageY
                });
            }
        });
        body.addEventListener('mouseup', function (e) {
            e.preventDefault();
            _this.currentInputType = 'mouse';
            if (_this.DEBUG_MOUSE)
                console.log("Mouse button released. Button: " + e.button + "; Position: " + e.pageX + ", " + e.pageY);
            if (_this.isMouseButtonDown(e.button)) {
                if (typeof e.pageX !== 'undefined')
                    _this._pageX = e.pageX;
                if (typeof e.pageY !== 'undefined')
                    _this._pageY = e.pageY;
                _this._mouseButtons.set(e.button, false);
                _this.enqueue({
                    type: 'mouseButtonReleased',
                    button: e.button,
                    pageX: _this._pageX,
                    pageY: _this._pageY
                });
            }
        });
        body.addEventListener('wheel', function (e) {
            e.preventDefault();
            _this.currentInputType = 'mouse';
            if (_this.DEBUG_MOUSE)
                console.log("Mouse wheel. delta: " + e.deltaY + "; Position: " + e.pageX + ", " + e.pageY);
            if (typeof e.pageX !== 'undefined')
                _this._pageX = e.pageX;
            if (typeof e.pageY !== 'undefined')
                _this._pageY = e.pageY;
            _this.enqueue({
                type: 'mouseWheel',
                delta: e.deltaY,
                pageX: _this._pageX,
                pageY: _this._pageY
            });
        });
    };
    EventQueue.prototype.initGamepad = function (window) {
        var _this = this;
        window.addEventListener('gamepadconnected', function (e) { return _this.connectGamepad(e.gamepad); });
        window.addEventListener('gamepaddisconnected', function (e) { return _this.disconnectGamepad(e.gamepad); });
        if (!window.navigator)
            return;
        for (var _i = 0, _a = navigator.getGamepads(); _i < _a.length; _i++) {
            var gp = _a[_i];
            if (!gp || !gp.connected)
                continue;
            this.connectGamepad(gp);
        }
    };
    EventQueue.prototype.connectGamepad = function (gp) {
        if (gp.mapping !== 'standard') {
            console.error("Gamepad connected with invalid mapping: \"" + gp.mapping + "\"");
            return;
        }
        this._gamepads.push(gp.index);
        if (this.DEBUG_GAMEPAD)
            console.log("Gamepad connected. ID: " + gp.id + "; Index: " + gp.index);
        this.refreshGamepads();
    };
    EventQueue.prototype.disconnectGamepad = function (gp) {
        var idx = this._gamepads.indexOf(gp.index);
        if (idx === -1)
            return;
        this._gamepads.splice(idx);
        if (this.DEBUG_GAMEPAD)
            console.log("Gamepad disconnected. ID: " + gp.id + "; Index: " + gp.index);
        this.refreshGamepads();
    };
    EventQueue.prototype.refreshGamepads = function () {
        if (!window.navigator)
            return;
        var axes = [];
        for (var q = 0; q < this._gamepadAxes.length; q++) {
            axes[q] = 0;
        }
        var buttons = [];
        for (var q = 0; q < this._gamepadButtonsRaw.length; q++) {
            buttons[q] = false;
        }
        var gamepads = navigator.getGamepads();
        for (var _i = 0, _a = this._gamepads; _i < _a.length; _i++) {
            var gpIdx = _a[_i];
            var gp = gamepads[gpIdx];
            if (!gp.connected)
                continue;
            for (var q = 0; q < gp.axes.length; q++) {
                if (typeof axes[q] === 'undefined')
                    axes[q] = 0;
                axes[q] += gp.axes[q];
            }
            for (var q = 0; q < gp.buttons.length; q++) {
                if (typeof buttons[q] === 'undefined')
                    buttons[q] = false;
                if (gp.buttons[q].pressed)
                    buttons[q] = true;
            }
        }
        for (var q = 0; q < axes.length; q++) {
            if (Math.abs(axes[q]) > 1)
                axes[q] = Math.sign(axes[q]);
            if (axes[q] !== 0)
                this.currentInputType = 'gamepad';
            if (typeof this._gamepadAxes[q] === 'undefined')
                this._gamepadAxes[q] = 0;
            if (this._gamepadAxes[q] !== axes[q]) {
                if (this.DEBUG_GAMEPAD_VERBOSE)
                    console.log("Gamepad axis changed. Idx: " + q + ", Value: " + axes[q] + "; Previous: " + this._gamepadAxes[q]);
                this.enqueue({
                    type: 'gamepadAxisChanged',
                    idx: q,
                    previousValue: this._gamepadAxes[q],
                    value: axes[q]
                });
                var oldAxisSign = Math.abs(this._gamepadAxes[q]) < this.GAMEPAD_AXIS_THRESHOLD ? 0 : Math.sign(this._gamepadAxes[q]);
                var newAxisSign = Math.abs(axes[q]) < this.GAMEPAD_AXIS_THRESHOLD ? 0 : Math.sign(axes[q]);
                if (oldAxisSign !== newAxisSign) {
                    var axisNames = events_1.standardGamepadAxisNames[q] || ["Axis" + q + "Negative", "Axis" + q + "Positive"];
                    if (this._gamepadAxes[q] < -this.GAMEPAD_AXIS_THRESHOLD) {
                        if (this.DEBUG_GAMEPAD)
                            console.log("Gamepad button released. Button: " + axisNames[0]);
                        this._gamepadButtons.set(axisNames[0], false);
                        this.enqueue({
                            type: 'gamepadButtonReleased',
                            button: axisNames[0]
                        });
                    }
                    else if (this._gamepadAxes[q] > this.GAMEPAD_AXIS_THRESHOLD) {
                        if (this.DEBUG_GAMEPAD)
                            console.log("Gamepad button released. Button: " + axisNames[1]);
                        this._gamepadButtons.set(axisNames[1], false);
                        this.enqueue({
                            type: 'gamepadButtonReleased',
                            button: axisNames[1]
                        });
                    }
                    if (axes[q] < -this.GAMEPAD_AXIS_THRESHOLD) {
                        if (this.DEBUG_GAMEPAD)
                            console.log("Gamepad button pressed. Button: " + axisNames[0]);
                        this._gamepadButtons.set(axisNames[0], true);
                        this.enqueue({
                            type: 'gamepadButtonPressed',
                            button: axisNames[0]
                        });
                    }
                    else if (axes[q] > this.GAMEPAD_AXIS_THRESHOLD) {
                        if (this.DEBUG_GAMEPAD)
                            console.log("Gamepad button pressed. Button: " + axisNames[1]);
                        this._gamepadButtons.set(axisNames[1], true);
                        this.enqueue({
                            type: 'gamepadButtonPressed',
                            button: axisNames[1]
                        });
                    }
                }
            }
            this._gamepadAxes[q] = axes[q];
        }
        for (var q = 0; q < buttons.length; q++) {
            var buttonName = events_1.standardGamepadButtonNames[q] || "" + q;
            if (!this._gamepadButtonsRaw[q])
                this._gamepadButtonsRaw[q] = false;
            if (!this._gamepadButtonsRaw[q] && buttons[q]) {
                if (this.DEBUG_GAMEPAD)
                    console.log("Gamepad button pressed. Button: " + buttonName);
                this._gamepadButtons.set(buttonName, true);
                this.currentInputType = 'gamepad';
                this.enqueue({
                    type: 'gamepadButtonPressed',
                    button: buttonName
                });
            }
            else if (this._gamepadButtonsRaw[q] && !buttons[q]) {
                if (this.DEBUG_GAMEPAD)
                    console.log("Gamepad button released. Button: " + buttonName);
                this._gamepadButtons.set(buttonName, false);
                this.currentInputType = 'gamepad';
                this.enqueue({
                    type: 'gamepadButtonReleased',
                    button: buttonName
                });
            }
            this._gamepadButtonsRaw[q] = buttons[q];
        }
    };
    EventQueue.prototype.tick = function (delta) {
        this.refreshGamepads();
        if (this.isAbstractButtonDown(this.mrAbstractButton) && this.ABSTRACT_BUTTON_TYPE_REPEAT !== 0) {
            this.mrAbstractButtonTimeout -= delta;
            while (this.mrAbstractButtonTimeout < 0) {
                this.mrAbstractButtonTimeout += 1 / this.ABSTRACT_BUTTON_TYPE_REPEAT;
                this.enqueue({
                    type: 'abstractButtonTyped',
                    name: this.mrAbstractButton
                });
            }
        }
    };
    Object.defineProperty(EventQueue.prototype, "currentInputType", {
        get: function () {
            return this._currentInput;
        },
        set: function (val) {
            if (this._currentInput === val)
                return;
            this.enqueue({
                type: 'currentInputTypeChanged',
                previous: this._currentInput,
                current: this._currentInput = val
            });
        },
        enumerable: true,
        configurable: true
    });
    EventQueue.prototype.addAbstractButtonProvider = function (provider) {
        this._abstractButtonProviders.push(provider);
    };
    EventQueue.prototype.isKeyDown = function (code) {
        if (!this._keys.has(code))
            return false;
        return this._keys.get(code);
    };
    EventQueue.prototype.isMouseButtonDown = function (button) {
        if (!this._mouseButtons.has(button))
            return false;
        return this._mouseButtons.get(button);
    };
    Object.defineProperty(EventQueue.prototype, "mousePosition", {
        get: function () {
            return { x: this._pageX, y: this._pageY };
        },
        enumerable: true,
        configurable: true
    });
    EventQueue.prototype.isGamepadButtonDown = function (idx) {
        if (typeof idx === 'number') {
            if (idx < 0 || idx >= this._gamepadButtonsRaw.length)
                return false;
            return this._gamepadButtonsRaw[idx];
        }
        else {
            return this._gamepadButtons.get(idx) || false;
        }
    };
    EventQueue.prototype.getGamepadAxis = function (idx) {
        if (idx < 0 || idx >= this._gamepadAxes.length)
            return 0;
        return this._gamepadAxes[idx];
    };
    EventQueue.prototype.isAbstractButtonDown = function (name, manualCheck) {
        if (manualCheck === void 0) { manualCheck = false; }
        if (!this.abstractButtons.has(name))
            return false;
        if (manualCheck) {
            for (var _i = 0, _a = this._abstractButtonProviders; _i < _a.length; _i++) {
                var provider = _a[_i];
                if (provider.isAbstractButtonDown(name))
                    return true;
            }
            return false;
        }
        else {
            return this.abstractButtons.get(name);
        }
    };
    EventQueue.prototype.enqueue = function (e) {
        var lastEvent = this._events[this._events.length - 1];
        if (lastEvent) {
            if (lastEvent.type == e.type) {
                switch (e.type) {
                    case 'mouseMoved':
                        lastEvent.movementX += e.movementX;
                        lastEvent.movementY += e.movementY;
                        lastEvent.pageX = e.pageX;
                        lastEvent.pageY = e.pageY;
                        return;
                    case 'mouseWheel':
                        lastEvent.delta += e.delta;
                        return;
                    case 'canvasResize':
                        lastEvent.size = e.size;
                        return;
                    case 'gamepadAxisChanged':
                        lastEvent.value = e.value;
                        if (lastEvent.value === lastEvent.previousValue)
                            this._events.splice(this._events.length - 1, 1);
                        return;
                }
            }
        }
        for (var _i = 0, _a = this._abstractButtonProviders; _i < _a.length; _i++) {
            var provider = _a[_i];
            e = provider.transformEvent(e) || e;
        }
        this._events.push(e);
        if (e.type === 'abstractButtonPressed') {
            this.mrAbstractButton = e.name;
            this.mrAbstractButtonTimeout = this.ABSTRACT_BUTTON_TYPE_TIMEOUT;
            this.enqueue({
                type: 'abstractButtonTyped',
                name: e.name,
                wrappedEvent: e.wrappedEvent
            });
        }
    };
    EventQueue.prototype.clearQueue = function () {
        return this._events.splice(0);
    };
    return EventQueue;
}());
exports.EventQueue = EventQueue;
//# sourceMappingURL=event-queue.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["Left"] = 0] = "Left";
    MouseButton[MouseButton["Middle"] = 1] = "Middle";
    MouseButton[MouseButton["Right"] = 2] = "Right";
    MouseButton[MouseButton["BrowserBack"] = 3] = "BrowserBack";
    MouseButton[MouseButton["BrowserForward"] = 5] = "BrowserForward";
})(MouseButton = exports.MouseButton || (exports.MouseButton = {}));
exports.standardGamepadButtonNames = [
    'A', 'B', 'X', 'Y',
    'TriggerLeft', 'TriggerRight', 'TriggerLeftAlt', 'TriggerRightAlt',
    'Back', 'Start',
    'LeftStick', 'RightStick',
    'DPadUp', 'DPadDown', 'DPadLeft', 'DPadRight',
    'Center'
];
exports.standardGamepadAxisNames = [
    ['LeftStickLeft', 'LeftStickRight'],
    ['LeftStickUp', 'LeftStickDown'],
    ['RightStickLeft', 'RightStickRight'],
    ['RightStickUp', 'RightStickDown'],
];
//# sourceMappingURL=events.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var math_1 = __webpack_require__(1);
;
var GameObject = (function () {
    function GameObject(name, opts) {
        if (opts === void 0) { opts = {}; }
        this.DEBUG_MOVEMENT = false;
        this._x = 0;
        this._y = 0;
        this._shouldTick = true;
        this._dir = 0;
        this._speed = 0;
        this._hspeed = 0;
        this._vspeed = 0;
        this._shouldRender = true;
        this._renderCamera = 'default';
        this._sprite = null;
        this._animationAge = 0;
        this._animationSpeed = 1;
        this._imageAngle = 0;
        this._imageScale = 1;
        this.renderTransformedSymbol = Symbol();
        this._name = name;
        if (typeof opts.x != 'undefined')
            this.x = opts.x;
        if (typeof opts.y != 'undefined')
            this.y = opts.y;
        if (typeof opts.shouldTick != 'undefined')
            this.shouldTick = opts.shouldTick;
        if (typeof opts.direction != 'undefined')
            this.direction = opts.direction;
        if (typeof opts.speed != 'undefined')
            this.speed = opts.speed;
        if (typeof opts.hspeed != 'undefined')
            this.hspeed = opts.hspeed;
        if (typeof opts.vspeed != 'undefined')
            this.vspeed = opts.vspeed;
        if (typeof opts.shouldRender != 'undefined')
            this.shouldRender = opts.shouldRender;
        if (typeof opts.renderCamera != 'undefined')
            this.renderCamera = opts.renderCamera;
        if (typeof opts.sprite != 'undefined')
            this.sprite = opts.sprite;
        if (typeof opts.animationAge != 'undefined')
            this.animationAge = opts.animationAge;
        if (typeof opts.animationSpeed != 'undefined')
            this.animationSpeed = opts.animationSpeed;
        if (typeof opts.imageAngle != 'undefined')
            this.imageAngle = opts.imageAngle;
        if (typeof opts.imageScale != 'undefined')
            this.imageScale = opts.imageScale;
        if (typeof opts.mask != 'undefined')
            this.mask = opts.mask;
    }
    Object.defineProperty(GameObject.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (val) {
            this._x = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (val) {
            this._y = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "shouldTick", {
        get: function () {
            return this._shouldTick;
        },
        set: function (val) {
            this._shouldTick = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "direction", {
        get: function () {
            return this._dir;
        },
        set: function (val) {
            if (this.DEBUG_MOVEMENT)
                console.log("setting direction: " + val);
            val = math_1.fmod(val, 360);
            if (this._dir == val)
                return;
            this._dir = val;
            this.updateHVSpeed();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (val) {
            if (this.DEBUG_MOVEMENT)
                console.log("setting speed: " + val);
            if (val < 0)
                throw new Error("Invalid speed: " + val + ". Must be >= 0");
            if (this._speed == val)
                return;
            this._speed = val;
            this.updateHVSpeed();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "hspeed", {
        get: function () {
            return this._hspeed;
        },
        set: function (val) {
            if (this.DEBUG_MOVEMENT)
                console.log("setting hspeed: " + val);
            if (this._hspeed == val)
                return;
            this._hspeed = val;
            this.updateDirectionAndSpeed();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "vspeed", {
        get: function () {
            return this._vspeed;
        },
        set: function (val) {
            if (this.DEBUG_MOVEMENT)
                console.log("setting vspeed: " + val);
            if (this._vspeed == val)
                return;
            this._vspeed = val;
            this.updateDirectionAndSpeed();
        },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.updateHVSpeed = function () {
        var radians = math_1.degToRad(this._dir);
        this._vspeed = -Math.sin(radians) * this._speed;
        this._hspeed = Math.cos(radians) * this._speed;
        if (this.DEBUG_MOVEMENT)
            console.log("  hspeed: " + this._hspeed + "; vspeed: " + this._vspeed);
    };
    GameObject.prototype.updateDirectionAndSpeed = function () {
        this._speed = Math.sqrt(this._hspeed * this._hspeed + this._vspeed * this._vspeed);
        if (this._speed == 0)
            return;
        this._dir = math_1.pointDirection(0, 0, this._hspeed, this._vspeed);
        if (this._dir < 0)
            this._dir += 360;
        if (this.DEBUG_MOVEMENT)
            console.log("  speed: " + this._speed + "; direction: " + this._dir);
    };
    Object.defineProperty(GameObject.prototype, "mask", {
        get: function () {
            return this._mask;
        },
        set: function (val) {
            if (val === this._mask)
                return;
            if (this._mask && this.scene)
                this.scene.removeCollider(this._mask);
            this._mask = val;
            if (this._mask && this.scene)
                this.scene.addCollider(this._mask);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "shouldRender", {
        get: function () {
            return this._shouldRender;
        },
        set: function (val) {
            this._shouldRender = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "renderCamera", {
        get: function () {
            return this._renderCamera;
        },
        set: function (val) {
            this._renderCamera = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "sprite", {
        get: function () {
            return this._sprite;
        },
        set: function (val) {
            this._sprite = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "animationAge", {
        get: function () {
            return this._animationAge;
        },
        set: function (val) {
            this._animationAge = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "animationSpeed", {
        get: function () {
            return this._animationSpeed;
        },
        set: function (val) {
            this._animationSpeed = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "imageAngle", {
        get: function () {
            return this._imageAngle;
        },
        set: function (val) {
            this._imageAngle = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "imageScale", {
        get: function () {
            return this._imageScale;
        },
        set: function (val) {
            this._imageScale = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "scene", {
        get: function () {
            if (!this._scene)
                return null;
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "game", {
        get: function () {
            if (!this.scene)
                return null;
            return this.scene.game;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "resources", {
        get: function () {
            if (!this.game)
                return null;
            return this.game.resourceLoader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameObject.prototype, "events", {
        get: function () {
            if (!this.game)
                return null;
            return this.game.eventQueue;
        },
        enumerable: true,
        configurable: true
    });
    GameObject.prototype.addToScene = function (scene) {
        if (this._scene)
            throw new Error('This game object is already added to a scene!');
        this._scene = scene;
        if (this.mask)
            this.scene.addCollider(this.mask);
    };
    GameObject.prototype.removeFromScene = function () {
        if (this.mask)
            this.scene.removeCollider(this.mask);
        this._scene = null;
    };
    GameObject.prototype.onSceneEnter = function () { };
    GameObject.prototype.onSceneExit = function () { };
    GameObject.prototype.bringToFront = function () {
        this.scene.bringObjectToFront(this);
    };
    GameObject.prototype.sendToBack = function () {
        this.scene.sendObjectToBack(this);
    };
    GameObject.prototype.handleEvent = function (evt) {
    };
    GameObject.prototype.tick = function (delta) {
        if (!this.shouldTick)
            return;
        this.x += this.hspeed * delta;
        this.y += this.vspeed * delta;
        this.animationAge += this.animationSpeed * delta;
    };
    GameObject.prototype.fixedTick = function () { };
    GameObject.prototype.render = function (adapter) {
        var _this = this;
        if (!this.shouldRender)
            return;
        adapter.renderTransformed(this.x, this.y, -math_1.degToRad(this.imageAngle), this.imageScale, this.imageScale, function () {
            _this.renderImpl(adapter);
        }, this.renderTransformedSymbol);
    };
    GameObject.prototype.renderImpl = function (adapter) {
        adapter.renderObject(this);
    };
    GameObject.prototype.transformPixelCoordinates = function (x, y) {
        if (typeof x === 'object') {
            y = x.y;
            x = x.x;
        }
        var camera = this.renderCamera;
        if (camera === 'default' || !camera)
            camera = this.scene.camera;
        if (camera === 'none' || !camera)
            return [x, y];
        else
            return camera.transformPixelCoordinates(x, y);
    };
    return GameObject;
}());
exports.GameObject = GameObject;
//# sourceMappingURL=game-object.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GraphicsAdapter = (function () {
    function GraphicsAdapter() {
    }
    return GraphicsAdapter;
}());
exports.GraphicsAdapter = GraphicsAdapter;
//# sourceMappingURL=graphics-adapter.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ResourceLoader = (function () {
    function ResourceLoader() {
        this.DEBUG_RESOURCES = false;
        this._resourcesLoaded = 0;
        this._resourcesLoading = 0;
        this._errors = [];
        this._images = new Map();
        this._audio = new Map();
        var pathParts = window.location.pathname.split('/');
        this._baseUrl = window.location.origin + (pathParts[pathParts.length - 1] == 'index.html' ? pathParts.slice(0, pathParts.length - 1) : pathParts).join('/');
        if (this._baseUrl.startsWith('null/'))
            this._baseUrl = 'file:///' + this._baseUrl.slice(5);
    }
    ResourceLoader.prototype.addPreloadStrategy = function (strategy) {
        strategy.preload(this);
    };
    Object.defineProperty(ResourceLoader.prototype, "baseUrl", {
        get: function () {
            return this._baseUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceLoader.prototype, "resourcesLoaded", {
        get: function () {
            return this._resourcesLoaded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceLoader.prototype, "totalResources", {
        get: function () {
            return this._resourcesLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceLoader.prototype, "error", {
        get: function () {
            return this._errors.join('\n');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResourceLoader.prototype, "isDone", {
        get: function () {
            return this.totalResources == this.resourcesLoaded && !this.error;
        },
        enumerable: true,
        configurable: true
    });
    ResourceLoader.prototype.loadImage = function (src) {
        var _this = this;
        src = this.resolvePath(src);
        if (this._images.has(src))
            return this._images.get(src);
        this._resourcesLoading++;
        if (this.DEBUG_RESOURCES)
            console.log("Loading image: '" + src + "'");
        var img = document.createElement('img');
        this._images.set(src, img);
        img.onload = function () {
            _this._resourcesLoaded++;
        };
        img.onerror = function (e) {
            _this._errors.push("ERROR: Could not load " + src);
        };
        img.src = src;
        return img;
    };
    ResourceLoader.prototype.loadAudio = function (src) {
        var _this = this;
        src = this.resolvePath(src);
        if (this._audio.has(src))
            return this._audio.get(src);
        this._resourcesLoading++;
        if (this.DEBUG_RESOURCES)
            console.log("Loading audio: '" + src + "'");
        var aud = document.createElement('audio');
        this._audio.set(src, aud);
        aud.onloadeddata = function () {
            _this._resourcesLoaded++;
        };
        aud.onerror = function (e) {
            _this._errors.push("ERROR: Could not load " + src);
        };
        aud.src = src;
        return aud;
    };
    ResourceLoader.prototype.resolvePath = function (src) {
        if (!src)
            throw new Error("Invalid src: [" + src + "]");
        if (src.match(/^[a-z]:\/\//i))
            return src;
        if (src.startsWith('/'))
            return "" + this.baseUrl + src;
        else
            return this.baseUrl + "/" + src;
    };
    ResourceLoader.prototype.render = function (adapter) {
        adapter.renderResourceLoader(this.resourcesLoaded, this.totalResources, this.error);
    };
    return ResourceLoader;
}());
exports.ResourceLoader = ResourceLoader;
//# sourceMappingURL=resource-loader.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sprite_1 = __webpack_require__(8);
var LINE_HEIGHT = 12;
function fillText(context, text, x, y) {
    var lines = text.split('\n');
    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
        var line = lines_1[_i];
        context.fillText(line, x, y);
        y += Math.floor(parseInt(context.font) * 1.2);
    }
}
exports.fillText = fillText;
function measureSprite(loader, sprite) {
    if (!sprite || !sprite.src)
        throw new Error("Invalid sprite. Cannot measure " + sprite + ".");
    var img = loader && loader.loadImage(sprite.src);
    if (sprite_1.isAnimationSprite(sprite) || sprite_1.isSingleTileSprite(sprite)) {
        var _a = sprite.tileset, width = _a.width, height = _a.height;
        return { width: width, height: height };
    }
    else {
        return { width: img.width || 0, height: img.height || 0 };
    }
}
exports.measureSprite = measureSprite;
//# sourceMappingURL=render.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var GuiItem = (function () {
    function GuiItem() {
        this._parent = null;
        this._x = 0;
        this._y = 0;
        this._width = 0;
        this._height = 0;
        this._canFocus = false;
        this.unfocus = new engine_1.EventEmitter();
        this.focus = new engine_1.EventEmitter();
        this.transformKey = Symbol();
    }
    Object.defineProperty(GuiItem.prototype, "frame", {
        get: function () {
            return this._frame;
        },
        set: function (val) {
            this._frame = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuiItem.prototype, "game", {
        get: function () {
            return this.frame.game;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuiItem.prototype, "scene", {
        get: function () {
            return this.frame.scene;
        },
        enumerable: true,
        configurable: true
    });
    GuiItem.prototype.handleEvent = function (e) {
        return false;
    };
    GuiItem.prototype.translateWindowPosition = function (pos) {
        if (this.parent)
            pos = this.parent.translateWindowPosition(pos);
        return [pos[0] - this.x, pos[1] - this.y];
    };
    Object.defineProperty(GuiItem.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        set: function (val) {
            if (this._parent === val)
                return;
            if (this._parent)
                this._parent.removeChild(this);
            this._parent = val;
            if (this._parent)
                this._parent.addChild(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuiItem.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (val) {
            if (this._dock !== 'none') {
                console.error("X set on a GuiItem with dock '" + this._dock + "'. Setting dock to 'none'");
                this._dock = 'none';
            }
            this._x = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuiItem.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (val) {
            if (this._dock !== 'none') {
                console.error("Y set on a GuiItem with dock '" + this._dock + "'. Setting dock to 'none'");
                this._dock = 'none';
            }
            this._y = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuiItem.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (val) {
            if (this._dock === 'up' || this._dock === 'down' || this._dock === 'fill') {
                console.error("Width set on a GuiItem with dock '" + this._dock + "'. Setting dock to 'none'");
                this._dock = 'none';
            }
            this._width = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuiItem.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (val) {
            if (this._dock === 'left' || this._dock === 'right' || this._dock === 'fill') {
                console.error("Height set on a GuiItem with dock '" + this._dock + "'. Setting dock to 'none'");
                this._dock = 'none';
            }
            this._height = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuiItem.prototype, "dock", {
        get: function () {
            return this._dock;
        },
        set: function (val) {
            this._dock = val;
        },
        enumerable: true,
        configurable: true
    });
    GuiItem.prototype.resolveLayout = function (bounds) {
        switch (this.dock) {
            case 'fill':
                _a = [bounds.left, bounds.top], this._x = _a[0], this._y = _a[1];
                _b = [bounds.right - bounds.left, bounds.bottom - bounds.top], this._width = _b[0], this._height = _b[1];
                this.resolveBoundsInternal();
                break;
            case 'left':
                _c = [bounds.left, bounds.top], this._x = _c[0], this._y = _c[1];
                this._height = bounds.bottom - bounds.top;
                this.resolveBoundsInternal();
                bounds.left += this._width;
                break;
            case 'right':
                _d = [bounds.right - this._width, bounds.top], this._x = _d[0], this._y = _d[1];
                this._height = bounds.bottom - bounds.top;
                this.resolveBoundsInternal();
                this._x = bounds.right - this._width;
                bounds.right -= this._width;
                break;
            case 'up':
                _e = [bounds.left, bounds.top], this._x = _e[0], this._y = _e[1];
                this._width = bounds.right - bounds.left;
                this.resolveBoundsInternal();
                bounds.top += this._height;
                break;
            case 'down':
                _f = [bounds.left, bounds.bottom - this._height], this._x = _f[0], this._y = _f[1];
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
        var _a, _b, _c, _d, _e, _f;
    };
    Object.defineProperty(GuiItem.prototype, "canFocus", {
        get: function () {
            return this._canFocus;
        },
        set: function (val) {
            if (val === this._canFocus)
                return;
            if (!val && this.isFocused)
                throw new Error("Cannot set canFocus to false on a GuiItem with isFocused === true");
            this._canFocus = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuiItem.prototype, "isFocused", {
        get: function () {
            if (!this._frame)
                return false;
            return this._frame.currentSelection === this;
        },
        enumerable: true,
        configurable: true
    });
    GuiItem.prototype.render = function (adapter) {
        var _this = this;
        adapter.renderTransformed(this._x, this._y, 0, 1, 1, function () {
            _this.renderImpl(adapter);
        }, this.transformKey);
    };
    return GuiItem;
}());
exports.GuiItem = GuiItem;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var container_gui_item_1 = __webpack_require__(47);
var gui_frame_1 = __webpack_require__(48);
var stack_scene_1 = __webpack_require__(3);
var menu_item_1 = __webpack_require__(9);
var button_menu_item_1 = __webpack_require__(46);
var text_menu_item_1 = __webpack_require__(49);
var MenuV2Object = (function (_super) {
    __extends(MenuV2Object, _super);
    function MenuV2Object(name, title) {
        var _this = _super.call(this, name, {
            renderCamera: 'none'
        }) || this;
        _this.title = title;
        _this.horizontalAlign = 'left';
        _this.verticalAlign = 'top';
        _this.lockedPostfix = '';
        _this.fillBackground = '';
        _this.fillBackgroundOpacity = .9;
        _this.addBackButton = true;
        _this.prevItem = null;
        _this.firstItem = null;
        _this.container = new container_gui_item_1.ContainerGuiItem();
        _this.container.dock = 'none';
        _this.frame = new gui_frame_1.GuiFrame();
        return _this;
    }
    MenuV2Object.prototype.addToScene = function (scene) {
        var _this = this;
        _super.prototype.addToScene.call(this, scene);
        this.frame.game = this.game;
        if (this.title) {
            this.addMenuItem(new text_menu_item_1.TextMenuItem({
                text: this.title
            }));
        }
        this.initItems();
        if (scene instanceof stack_scene_1.StackScene && scene.parentScene && this.addBackButton) {
            this.addMenuItem({
                text: 'Back',
                handler: function () {
                    _this.game.changeScene(scene.parentScene);
                },
                isCancel: true
            });
        }
    };
    MenuV2Object.prototype.addMenuItem = function (item) {
        if (!(item instanceof menu_item_1.MenuItem)) {
            item = new button_menu_item_1.ButtonMenuItem(item);
            item.horizontalAlign = this.horizontalAlign;
            item.lockedPostfix = this.lockedPostfix;
        }
        item.frame = this.frame;
        item.parent = this.container;
        if (item.canFocus) {
            if (!this.firstItem)
                this.firstItem = item;
            if (this.prevItem) {
                this.prevItem.nextItem = item;
                item.previousItem = this.prevItem;
            }
            else if (this.events.currentInputType === 'keyboard' || this.events.currentInputType === 'gamepad')
                this.frame.currentSelection = item;
            this.prevItem = item;
        }
        item.dock = 'up';
        return item;
    };
    MenuV2Object.prototype.handleEvent = function (evt) {
        if (_super.prototype.handleEvent.call(this, evt))
            return true;
        if (this.container.handleEvent(evt))
            return true;
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
    };
    MenuV2Object.prototype.render = function (adapter) {
        if (adapter instanceof engine_1.DefaultGraphicsAdapter)
            this.renderImplContext2d(adapter);
        else
            throw new Error('Not implmenented');
        this.positionContainer();
        var bounds = this.container.resolveBoundsInternal();
        this.container.height = bounds.top + -bounds.bottom;
        if (this.verticalAlign === 'middle') {
            var _a = this.game.canvasSize, canvasWidth = _a[0], canvasHeight = _a[1];
            this.container.y = (canvasHeight / 2) - (this.container.height / 2);
        }
        this.container.render(adapter);
    };
    MenuV2Object.prototype.positionContainer = function () {
        var _a = this.game.canvasSize, canvasWidth = _a[0], canvasHeight = _a[1];
        this.container.width = Math.min(canvasWidth - 80, 600);
        this.container.height = 0;
        this.container.x = (canvasWidth / 2) - (this.container.width / 2);
        this.container.y = 40;
    };
    MenuV2Object.prototype.renderImplContext2d = function (adapter) {
        var context = adapter.context;
        var _a = this.game.canvasSize, canvasWidth = _a[0], canvasHeight = _a[1];
        if (this.fillBackground) {
            context.save();
            try {
                context.globalAlpha *= this.fillBackgroundOpacity;
                context.fillStyle = this.fillBackground;
                context.fillRect(0, 0, canvasWidth, canvasHeight);
            }
            finally {
                context.restore();
            }
        }
    };
    return MenuV2Object;
}(engine_1.GameObject));
exports.MenuV2Object = MenuV2Object;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var stack_scene_1 = __webpack_require__(3);
var MenuScene = (function (_super) {
    __extends(MenuScene, _super);
    function MenuScene(menu, parentScene) {
        var _this = _super.call(this, parentScene) || this;
        _this.menu = menu;
        _this.initialized = false;
        return _this;
    }
    MenuScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this.initialized)
            return;
        this.initialized = true;
        this.addObject(this.menu);
        this.camera = new engine_1.Camera(this);
    };
    MenuScene.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        this.camera.clearColor = 'black';
    };
    Object.defineProperty(MenuScene.prototype, "preferredMusic", {
        get: function () {
            return 'menu';
        },
        enumerable: true,
        configurable: true
    });
    return MenuScene;
}(stack_scene_1.StackScene));
exports.MenuScene = MenuScene;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var BoulderObject = (function (_super) {
    __extends(BoulderObject, _super);
    function BoulderObject(opts) {
        var _this = _super.call(this, 'Boulder', opts) || this;
        _this.segmentLengths = [];
        _this.rotationDistance = 1;
        _this._radius = 2 + Math.random() * 2;
        var segments = (_this._radius * 2 * Math.PI) * 2;
        for (var q = 0; q < segments; q++) {
            _this.segmentLengths.push(((Math.random() * .075) + .925) * _this._radius);
        }
        _this.rotationDistance = (2 * Math.PI * _this._radius) / (2 * Math.PI);
        _this.mask = new engine_1.CircleCollisionMask(_this, _this._radius);
        if (isNaN(opts.x))
            throw new Error("opts.x is NaN");
        if (isNaN(opts.y))
            throw new Error("opts.y is NaN");
        return _this;
    }
    Object.defineProperty(BoulderObject.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        enumerable: true,
        configurable: true
    });
    BoulderObject.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        this.imageAngle = -(this.x / this.rotationDistance);
    };
    BoulderObject.prototype.renderImpl = function (adapter) {
        if (adapter instanceof engine_1.DefaultGraphicsAdapter)
            this.renderImplContext2d(adapter);
        else
            throw new Error('Not implemented');
    };
    BoulderObject.prototype.renderImplContext2d = function (adapter) {
        var context = adapter.context;
        context.fillStyle = '#D2691E';
        context.strokeStyle = '#964B00';
        context.lineWidth = .5;
        context.beginPath();
        var segmentCount = this.segmentLengths.length;
        var segmentAngle = (2 * Math.PI) / segmentCount;
        var currentAngle = this.imageAngle;
        for (var q = 0; q < segmentCount; q++) {
            var len = this.segmentLengths[q];
            context.lineTo(Math.sin(currentAngle) * len, Math.cos(currentAngle) * len);
            currentAngle += segmentAngle;
        }
        context.closePath();
        context.fill();
        context.stroke();
    };
    return BoulderObject;
}(engine_1.GameObject));
exports.BoulderObject = BoulderObject;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var mountain_collision_mask_1 = __webpack_require__(57);
var MountainObject = (function (_super) {
    __extends(MountainObject, _super);
    function MountainObject(data, opts) {
        var _this = _super.call(this, 'Mountain', opts) || this;
        _this.RISING_EDGE_WEIGHT = Math.random() * 1.2;
        _this.FALLING_EDGE_WEIGHT = Math.random() * 1.2;
        _this.BUMPINESS = .4 + Math.random() * .8;
        _this.SMALL_BUMP_MAGNITUDE = 10 + Math.random() * 10;
        _this.SMALL_BUMP_SIZE = 6 + Math.round(Math.random() * 8);
        _this.LARGE_BUMP_MAGNITUDE = 25 + Math.random() * 50;
        _this.LARGE_BUMP_SIZE = 30 + Math.round(Math.random() * 20);
        if (data)
            _this.data = data;
        _this.init();
        return _this;
    }
    MountainObject.prototype.init = function () {
        if (!this.data) {
            var fromx = -50;
            var tox = 300 + Math.floor(Math.random() * 600);
            var smallOffy = [];
            for (var q = Math.floor(fromx / this.SMALL_BUMP_SIZE); q < Math.floor(tox / this.SMALL_BUMP_SIZE) + 2; q++) {
                smallOffy.push(Math.random() * this.SMALL_BUMP_MAGNITUDE);
            }
            var largeOffy = [];
            for (var q = Math.floor(fromx / this.LARGE_BUMP_SIZE); q < Math.floor(tox / this.LARGE_BUMP_SIZE) + 2; q++) {
                largeOffy.push(Math.random() * this.LARGE_BUMP_MAGNITUDE);
            }
            this.data = [];
            for (var q = fromx; q < tox; q++) {
                var smallOffh = (q - fromx) / this.SMALL_BUMP_SIZE;
                var smallOffhBase = Math.floor(smallOffh);
                var largeOffh = (q - fromx) / this.LARGE_BUMP_SIZE;
                var largeOffhBase = Math.floor(largeOffh);
                var smallOff = (smallOffy[smallOffhBase] * (1 - (smallOffh - smallOffhBase)) * this.FALLING_EDGE_WEIGHT) + (smallOffy[smallOffhBase + 1] * (smallOffh - smallOffhBase) * this.RISING_EDGE_WEIGHT);
                if (isNaN(smallOff))
                    throw new Error("smallOff is NaN. q: " + q + ", smallOffhBase: " + smallOffhBase + ", smallOffy[smallOffhBase]: " + smallOffy[smallOffhBase] + ", smallOffy[smallOffhBase + 1]: " + smallOffy[smallOffhBase + 1]);
                var largeOff = (largeOffy[largeOffhBase] * (1 - (largeOffh - largeOffhBase)) * this.FALLING_EDGE_WEIGHT) + (largeOffy[largeOffhBase + 1] * (largeOffh - largeOffhBase) * this.RISING_EDGE_WEIGHT);
                if (isNaN(largeOff))
                    throw new Error("largeOff is NaN. q: " + q + ", largeOffhBase: " + largeOffhBase + ", largeOffy[smallOffhBase]: " + smallOffy[smallOffhBase] + ", largeOffy[smallOffhBase + 1]: " + smallOffy[smallOffhBase + 1]);
                this.data.push([q * 2, q + Math.random() * this.BUMPINESS + smallOff + largeOff]);
            }
        }
        var lastData = this.data[this.data.length - 1];
        this.data.push([lastData[0] + 40, lastData[1] + 6]);
        this.data.push([lastData[0] + 120, lastData[1] + 8]);
        this.mask = new mountain_collision_mask_1.MountainCollisionMask(this);
    };
    Object.defineProperty(MountainObject.prototype, "maximumY", {
        get: function () {
            var maxy = this.data[0][1];
            for (var q = 1; q < this.data.length; q++) {
                var _a = this.data[q], x = _a[0], y = _a[1];
                if (y > maxy)
                    maxy = y;
            }
            return maxy;
        },
        enumerable: true,
        configurable: true
    });
    MountainObject.prototype.renderImpl = function (adapter) {
        if (adapter instanceof engine_1.DefaultGraphicsAdapter)
            this.renderImplContext2d(adapter);
        else
            throw new Error('Not implemented');
    };
    MountainObject.prototype.renderImplContext2d = function (adapter) {
        var context = adapter.context;
        context.fillStyle = '#D2691E';
        context.strokeStyle = '#964B00';
        context.beginPath();
        var maxy = this.data[0][1];
        context.moveTo(this.data[0][0], this.data[0][1]);
        for (var q = 1; q < this.data.length; q++) {
            var _a = this.data[q], x = _a[0], y = _a[1];
            if (y > maxy)
                maxy = y;
            context.lineTo(x, y);
        }
        context.lineTo(this.data[this.data.length - 1][0] + 20, maxy + 20);
        context.lineTo(this.data[0][0] - 20, maxy + 20);
        context.closePath();
        context.fill();
        context.stroke();
    };
    return MountainObject;
}(engine_1.GameObject));
exports.MountainObject = MountainObject;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object),
    nativeMax = Math.max;

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (typeof key == 'number' && value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  if (!(isArray(source) || isTypedArray(source))) {
    var props = baseKeysIn(source);
  }
  arrayEach(props || source, function(srcValue, key) {
    if (props) {
      key = srcValue;
      srcValue = source[key];
    }
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  });
}

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    newValue = srcValue;
    if (isArray(srcValue) || isTypedArray(srcValue)) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else {
        isCommon = false;
        newValue = baseClone(srcValue, true);
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        isCommon = false;
        newValue = baseClone(srcValue, true);
      }
      else {
        newValue = objValue;
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = merge;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59), __webpack_require__(60)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var menu_scene_1 = __webpack_require__(19);
var main_menu_1 = __webpack_require__(51);
var MyGame = (function (_super) {
    __extends(MyGame, _super);
    function MyGame(framesPerSecond) {
        if (framesPerSecond === void 0) { framesPerSecond = 30; }
        return _super.call(this, { framesPerSecond: framesPerSecond }) || this;
    }
    MyGame.prototype.start = function () {
        _super.prototype.start.call(this);
        var menu = new main_menu_1.MainMenuObject();
        this.changeScene(new menu_scene_1.MenuScene(menu, null));
    };
    return MyGame;
}(engine_1.Game));
exports.MyGame = MyGame;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var game_object_1 = __webpack_require__(13);
var merge = __webpack_require__(22);
var AudioSourceObject = (function (_super) {
    __extends(AudioSourceObject, _super);
    function AudioSourceObject(name, audio, opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, name, merge({
            shouldRender: false
        }, opts)) || this;
        _this.audio = audio;
        _this._shouldLoop = false;
        _this._sceneIndependent = false;
        _this._channel = '';
        _this._beginPlay = true;
        if (typeof opts.shouldLoop !== 'undefined')
            _this._shouldLoop = opts.shouldLoop;
        if (typeof opts.sceneIndependent !== 'undefined')
            _this._sceneIndependent = opts.sceneIndependent;
        if (typeof opts.beginPlay !== 'undefined')
            _this._beginPlay = opts.beginPlay;
        if (typeof opts.channel !== 'undefined')
            _this._channel = opts.channel;
        return _this;
    }
    Object.defineProperty(AudioSourceObject.prototype, "shouldLoop", {
        get: function () {
            return this._shouldLoop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioSourceObject.prototype, "sceneIndependent", {
        get: function () {
            return this._sceneIndependent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioSourceObject.prototype, "channel", {
        get: function () {
            return this._channel;
        },
        enumerable: true,
        configurable: true
    });
    AudioSourceObject.prototype.addToScene = function (scene) {
        var _this = this;
        _super.prototype.addToScene.call(this, scene);
        var theirAudio = this.resources.loadAudio(this.audio.src);
        this._myAudio = document.createElement('audio');
        this._myAudio.src = theirAudio.src;
        this._myAudio.onended = function () {
            if (_this._shouldLoop)
                _this._myAudio.play();
            else {
                if (_this.scene)
                    _this.scene.removeObject(_this);
                if (_this.volumeListener) {
                    _this.volumeListener();
                    _this.volumeListener = null;
                }
            }
        };
        this.volumeListener = this.game.audioController.volumeChanged.addListener(this.onVolumeChanged.bind(this));
        if ((this.game.scene == scene || this.sceneIndependent) && this._beginPlay)
            this._myAudio.play();
        this.onVolumeChanged({ channel: this.channel, volume: this.game.audioController.getVolume(this.channel) });
    };
    AudioSourceObject.prototype.onVolumeChanged = function (_a) {
        var channel = _a.channel, volume = _a.volume;
        if (channel !== this._channel)
            return;
        if (!this._myAudio)
            return;
        this._myAudio.volume = volume;
    };
    Object.defineProperty(AudioSourceObject.prototype, "myAudio", {
        get: function () {
            return this._myAudio;
        },
        enumerable: true,
        configurable: true
    });
    AudioSourceObject.prototype.onSceneEnter = function () {
        if (this.myAudio.paused)
            this._myAudio.play();
    };
    AudioSourceObject.prototype.onSceneExit = function () {
        if (!this.myAudio.paused && !this.sceneIndependent)
            this._myAudio.pause();
    };
    return AudioSourceObject;
}(game_object_1.GameObject));
exports.AudioSourceObject = AudioSourceObject;
//# sourceMappingURL=audio-source-object.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(24));
__export(__webpack_require__(10));
//# sourceMappingURL=index.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GamepadAbstractButtonProvider = (function () {
    function GamepadAbstractButtonProvider(queue) {
        this.queue = queue;
        this._buttons = new Map();
    }
    GamepadAbstractButtonProvider.prototype.bindAbstractButton = function (name) {
        var buttons = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            buttons[_i - 1] = arguments[_i];
        }
        for (var _a = 0, buttons_1 = buttons; _a < buttons_1.length; _a++) {
            var button = buttons_1[_a];
            if (!this._buttons.has(button))
                this._buttons.set(button, []);
            this._buttons.get(button).push(name);
            if (!this.queue.abstractButtons.has(name))
                this.queue.abstractButtons.set(name, false);
            var previous = this.queue.abstractButtons.get(name);
            var current = this.queue.isGamepadButtonDown(button);
            if (!previous && current) {
                this.queue.abstractButtons.set(name, true);
                this.queue.enqueue({
                    type: 'abstractButtonPressed',
                    name: name
                });
            }
        }
    };
    GamepadAbstractButtonProvider.prototype.unbindAbstractButton = function (name) {
        var buttons = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            buttons[_i - 1] = arguments[_i];
        }
        for (var _a = 0, buttons_2 = buttons; _a < buttons_2.length; _a++) {
            var button = buttons_2[_a];
            if (!this._buttons.has(button))
                throw new Error("The gamepad button '" + button + "' is not registered to the '" + name + "' abstract button.");
            var abstractButtons = this._buttons.get(button);
            var abidx = abstractButtons.indexOf(name);
            if (abidx === -1)
                throw new Error("The gamepad button '" + button + "' is not registered to the '" + name + "' abstract button.");
            abstractButtons.splice(abidx);
            if (abstractButtons.length === 0)
                this._buttons.delete(button);
            var previous = this.queue.abstractButtons.get(name);
            var current = this.queue.isAbstractButtonDown(name, true);
            if (previous && !current) {
                this.queue.abstractButtons.set(name, false);
                this.queue.enqueue({
                    type: 'abstractButtonReleased',
                    name: name
                });
            }
        }
    };
    GamepadAbstractButtonProvider.prototype.transformEvent = function (e) {
        if (e.type === 'gamepadButtonPressed') {
            if (this._buttons.has(e.button)) {
                var abNames = this._buttons.get(e.button);
                for (var _i = 0, abNames_1 = abNames; _i < abNames_1.length; _i++) {
                    var abName = abNames_1[_i];
                    if (!this.queue.isAbstractButtonDown(abName)) {
                        this.queue.abstractButtons.set(abName, true);
                        this.queue.enqueue({
                            type: 'abstractButtonPressed',
                            name: abName,
                            wrappedEvent: e
                        });
                    }
                }
            }
        }
        else if (e.type === 'gamepadButtonReleased') {
            if (this._buttons.has(e.button)) {
                var abNames = this._buttons.get(e.button);
                for (var _a = 0, abNames_2 = abNames; _a < abNames_2.length; _a++) {
                    var abName = abNames_2[_a];
                    if (this.queue.isAbstractButtonDown(abName) && !this.queue.isAbstractButtonDown(abName, true)) {
                        this.queue.abstractButtons.set(abName, false);
                        this.queue.enqueue({
                            type: 'abstractButtonReleased',
                            name: abName,
                            wrappedEvent: e
                        });
                    }
                }
            }
        }
        else
            return null;
    };
    GamepadAbstractButtonProvider.prototype.isAbstractButtonDown = function (name) {
        for (var _i = 0, _a = this._buttons.keys(); _i < _a.length; _i++) {
            var button = _a[_i];
            var abstractButtons = this._buttons.get(button);
            if (abstractButtons.indexOf(name) !== -1) {
                if (this.queue.isGamepadButtonDown(button))
                    return true;
            }
        }
        return false;
    };
    return GamepadAbstractButtonProvider;
}());
exports.GamepadAbstractButtonProvider = GamepadAbstractButtonProvider;
//# sourceMappingURL=gamepad-abstract-button-provider.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(5));
__export(__webpack_require__(11));
__export(__webpack_require__(12));
__export(__webpack_require__(28));
__export(__webpack_require__(26));
//# sourceMappingURL=index.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var KeyboardAbstractButtonProvider = (function () {
    function KeyboardAbstractButtonProvider(queue) {
        this.queue = queue;
        this._keys = new Map();
    }
    KeyboardAbstractButtonProvider.prototype.bindAbstractButton = function (name) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            if (!this._keys.has(key))
                this._keys.set(key, []);
            this._keys.get(key).push(name);
            if (!this.queue.abstractButtons.has(name))
                this.queue.abstractButtons.set(name, false);
            var previous = this.queue.abstractButtons.get(name);
            var current = this.queue.isKeyDown(key);
            if (!previous && current) {
                this.queue.abstractButtons.set(name, true);
                this.queue.enqueue({
                    type: 'abstractButtonPressed',
                    name: name
                });
            }
        }
    };
    KeyboardAbstractButtonProvider.prototype.unbindAbstractButton = function (name) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        for (var _a = 0, keys_2 = keys; _a < keys_2.length; _a++) {
            var key = keys_2[_a];
            if (!this._keys.has(key))
                throw new Error("The key '" + key + "' is not registered to the '" + name + "' abstract button.");
            var abstractButtons = this._keys.get(key);
            var abidx = abstractButtons.indexOf(name);
            if (abidx === -1)
                throw new Error("The key '" + key + "' is not registered to the '" + name + "' abstract button.");
            abstractButtons.splice(abidx);
            if (abstractButtons.length === 0)
                this._keys.delete(key);
            var previous = this.queue.abstractButtons.get(name);
            var current = this.queue.isAbstractButtonDown(name, true);
            if (previous && !current) {
                this.queue.abstractButtons.set(name, false);
                this.queue.enqueue({
                    type: 'abstractButtonReleased',
                    name: name
                });
            }
        }
    };
    KeyboardAbstractButtonProvider.prototype.transformEvent = function (e) {
        if (e.type === 'keyPressed') {
            if (this._keys.has(e.code)) {
                var abNames = this._keys.get(e.code);
                for (var _i = 0, abNames_1 = abNames; _i < abNames_1.length; _i++) {
                    var abName = abNames_1[_i];
                    if (!this.queue.isAbstractButtonDown(abName)) {
                        this.queue.abstractButtons.set(abName, true);
                        this.queue.enqueue({
                            type: 'abstractButtonPressed',
                            name: abName,
                            wrappedEvent: e
                        });
                    }
                }
            }
        }
        else if (e.type === 'keyReleased') {
            if (this._keys.has(e.code)) {
                var abNames = this._keys.get(e.code);
                for (var _a = 0, abNames_2 = abNames; _a < abNames_2.length; _a++) {
                    var abName = abNames_2[_a];
                    if (this.queue.isAbstractButtonDown(abName) && !this.queue.isAbstractButtonDown(abName, true)) {
                        this.queue.abstractButtons.set(abName, false);
                        this.queue.enqueue({
                            type: 'abstractButtonReleased',
                            name: abName,
                            wrappedEvent: e
                        });
                    }
                }
            }
        }
        else
            return null;
    };
    KeyboardAbstractButtonProvider.prototype.isAbstractButtonDown = function (name) {
        for (var _i = 0, _a = this._keys.keys(); _i < _a.length; _i++) {
            var key = _a[_i];
            var abstractButtons = this._keys.get(key);
            if (abstractButtons.indexOf(name) !== -1) {
                if (this.queue.isKeyDown(key))
                    return true;
            }
        }
        return false;
    };
    return KeyboardAbstractButtonProvider;
}());
exports.KeyboardAbstractButtonProvider = KeyboardAbstractButtonProvider;
//# sourceMappingURL=keyboard-abstract-button-provider.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var camera_1 = __webpack_require__(4);
var FollowCamera = (function (_super) {
    __extends(FollowCamera, _super);
    function FollowCamera(scene) {
        var _this = _super.call(this, scene) || this;
        _this._follow = null;
        _this._offset = [0, 0];
        _this.clampLeft = -Infinity;
        _this.clampRight = Infinity;
        return _this;
    }
    Object.defineProperty(FollowCamera.prototype, "follow", {
        get: function () {
            return this._follow;
        },
        set: function (val) {
            this._follow = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FollowCamera.prototype, "followOffset", {
        get: function () {
            return [this._offset[0], this._offset[1]];
        },
        set: function (_a) {
            var offsetx = _a[0], offsety = _a[1];
            this._offset = [offsetx, offsety];
        },
        enumerable: true,
        configurable: true
    });
    FollowCamera.prototype.renderTransformed = function (adapter, act) {
        if (this.follow) {
            var target = [this._follow.x + this._offset[0], this._follow.y + this._offset[1]];
            this.center = target;
        }
        var bounds = this.bounds;
        if (bounds.right > this.clampRight)
            this.center = [this.center[0] - (bounds.right - this.clampRight), this.center[1]];
        if (bounds.left < this.clampLeft)
            this.center = [this.center[0] + (this.clampLeft - bounds.left), this.center[1]];
        _super.prototype.renderTransformed.call(this, adapter, act);
    };
    return FollowCamera;
}(camera_1.Camera));
exports.FollowCamera = FollowCamera;
//# sourceMappingURL=follow-camera.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var camera_1 = __webpack_require__(4);
var GameScene = (function () {
    function GameScene(_game) {
        if (_game === void 0) { _game = null; }
        this._game = _game;
        this._generators = [];
        this._objects = [];
        this._colliders = [];
        this._camera = null;
    }
    Object.defineProperty(GameScene.prototype, "game", {
        get: function () {
            return this._game;
        },
        set: function (val) {
            this._game = val;
        },
        enumerable: true,
        configurable: true
    });
    GameScene.prototype.onEnter = function () {
        this.start();
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.onSceneEnter();
        }
    };
    GameScene.prototype.onExit = function () {
        this.stop();
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            obj.onSceneExit();
        }
    };
    GameScene.prototype.start = function () {
        if (!this.camera)
            this.initCamera();
    };
    GameScene.prototype.stop = function () {
    };
    Object.defineProperty(GameScene.prototype, "cursor", {
        get: function () {
            var showMouse = this.game && this.game.eventQueue.currentInputType === 'mouse';
            return showMouse ? ['default'] : ['none'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameScene.prototype, "forceGenerators", {
        get: function () {
            return this._generators;
        },
        enumerable: true,
        configurable: true
    });
    GameScene.prototype.addForceGenerator = function (generator) {
        this._generators.push(generator);
    };
    GameScene.prototype.removeForceGenerator = function (generator) {
        var idx = this._generators.indexOf(generator);
        if (idx === -1)
            return;
        this._generators.splice(idx, 1);
    };
    GameScene.prototype.handleEvent = function (evt) {
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.shouldTick && obj.handleEvent(evt))
                return true;
        }
        return false;
    };
    GameScene.prototype.tick = function (delta) {
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.shouldTick)
                obj.tick(delta);
        }
        if (this.camera)
            this.camera.tick(delta);
        this.physicsTick(delta);
    };
    GameScene.prototype.fixedTick = function () {
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (obj.shouldTick)
                obj.fixedTick();
        }
        if (this.camera)
            this.camera.fixedTick();
        this.physicsTick(0);
    };
    GameScene.prototype.physicsTick = function (delta) {
        for (var q = 0; q < this._colliders.length; q++) {
            this._colliders[q].clearContacts();
        }
        for (var q = 0; q < this._colliders.length; q++) {
            var first = this._colliders[q];
            for (var w = q + 1; w < this._colliders.length; w++) {
                var second = this._colliders[w];
                first.checkForCollisions(second);
            }
        }
        for (var q = 0; q < this._colliders.length; q++) {
            var collider = this._colliders[q];
            collider.resolveCollisions();
        }
        for (var q = 0; q < this._colliders.length; q++) {
            var collider = this._colliders[q];
            collider.resolveImpulses();
        }
        for (var q = 0; q < this._colliders.length; q++) {
            var collider = this._colliders[q];
            collider.applyForces(delta);
        }
    };
    GameScene.prototype.render = function (adapter) {
        var defaultCamera = this.camera;
        if (defaultCamera)
            defaultCamera.clear(adapter);
        var _loop_1 = function (obj) {
            if (obj.shouldRender) {
                var renderCamera = obj.renderCamera === 'default' ? defaultCamera :
                    obj.renderCamera !== 'none' ? obj.renderCamera :
                        null;
                if (!renderCamera)
                    obj.render(adapter);
                else
                    renderCamera.renderTransformed(adapter, function () { return obj.render(adapter); });
            }
        };
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            _loop_1(obj);
        }
        if (this.game.renderPhysics)
            this.renderPhysics(adapter);
    };
    GameScene.prototype.renderPhysics = function (adapter) {
        var defaultCamera = this.camera;
        var _loop_2 = function (collider) {
            var obj = collider.gameObject;
            var renderCamera = obj.renderCamera === 'default' ? defaultCamera :
                obj.renderCamera !== 'none' ? obj.renderCamera :
                    null;
            if (!renderCamera)
                collider.render(adapter);
            else
                renderCamera.renderTransformed(adapter, function () { return collider.render(adapter); });
        };
        for (var _i = 0, _a = this._colliders; _i < _a.length; _i++) {
            var collider = _a[_i];
            _loop_2(collider);
        }
    };
    GameScene.prototype.addObject = function (obj) {
        this._objects.push(obj);
        obj.addToScene(this);
    };
    GameScene.prototype.removeObject = function (obj) {
        var idx = this._objects.indexOf(obj);
        if (idx == -1)
            throw new Error("Cannot remove game object '" + obj.name + "': it has not been added.");
        this._objects.splice(idx, 1);
        obj.removeFromScene();
    };
    GameScene.prototype.findObject = function (predicate) {
        if (typeof predicate == 'string') {
            var name_1 = predicate;
            predicate = function (obj) { return obj.name == name_1; };
        }
        else if (!predicate)
            throw new Error("Invalid predicate: " + predicate);
        for (var _i = 0, _a = this._objects; _i < _a.length; _i++) {
            var obj = _a[_i];
            if (predicate(obj))
                return obj;
        }
        return null;
    };
    GameScene.prototype.findObjects = function (predicate) {
        if (!predicate)
            return this._objects.slice();
        if (typeof predicate !== 'function')
            throw new Error("Invalid predicate: " + predicate);
        return this._objects.filter(predicate);
    };
    GameScene.prototype.bringObjectToFront = function (obj) {
        var idx = this._objects.indexOf(obj);
        if (idx === -1)
            throw new Error("Cannot repostion game object that is not a child of the scene.");
        if (idx === this._objects.length - 1)
            return;
        this._objects.splice(idx, 1);
        this._objects.push(obj);
    };
    GameScene.prototype.sendObjectToBack = function (obj) {
        var idx = this._objects.indexOf(obj);
        if (idx === -1)
            throw new Error("Cannot repostion game object that is not a child of the scene.");
        if (idx === 0)
            return;
        this._objects.splice(idx, 1);
        this._objects.unshift(obj);
    };
    GameScene.prototype.removeCollider = function (mask) {
        var idx = this._colliders.indexOf(mask);
        if (idx !== -1)
            this._colliders.splice(idx, 1);
    };
    GameScene.prototype.addCollider = function (mask) {
        this._colliders.push(mask);
    };
    GameScene.prototype.initCamera = function () {
        this.camera = new camera_1.Camera(this);
    };
    Object.defineProperty(GameScene.prototype, "camera", {
        get: function () {
            return this._camera;
        },
        set: function (val) {
            this._camera = val;
        },
        enumerable: true,
        configurable: true
    });
    return GameScene;
}());
exports.GameScene = GameScene;
;
//# sourceMappingURL=game-scene.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var resource_loader_1 = __webpack_require__(15);
var event_queue_1 = __webpack_require__(11);
var event_emitter_1 = __webpack_require__(5);
var default_graphics_adapter_1 = __webpack_require__(6);
var audio_controller_1 = __webpack_require__(10);
;
var Game = (function () {
    function Game(options) {
        this._scene = null;
        this._nextScene = null;
        this.LOGIC_TICKS_PER_RENDER_TICK = 3;
        this.maximumDelta = .25;
        this.bodyResized = new event_emitter_1.EventEmitter();
        this._renderPhysics = false;
        this.previousTick = null;
        this._resourceLoader = null;
        this._eventQueue = null;
        this._isRunning = false;
        this._size = [640, 480];
        this.fixedTickDelta = 0;
        this.timePerFixedTick = 1;
        if (!options)
            options = {};
        this.framesPerSecond = options.framesPerSecond || 30;
        this.graphicsAdapter = options.graphicsAdapter || new default_graphics_adapter_1.DefaultGraphicsAdapter();
        this.timePerFixedTick = 1 / this.framesPerSecond;
        this.maximumDelta = options.maximumDelta || 0;
        this.init();
    }
    Object.defineProperty(Game.prototype, "scene", {
        get: function () {
            return this._scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "nextScene", {
        get: function () {
            return this._nextScene;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.changeScene = function (newScene) {
        if (!newScene) {
            throw new Error("Tried to changeScene to a bad scene!");
        }
        if (this._nextScene) {
            throw new Error("Scene cannot be set more than once per tick!");
        }
        this._nextScene = newScene;
        if (!this._scene) {
            this.handleSceneChange();
        }
    };
    Game.prototype.handleSceneChange = function () {
        if (this._nextScene) {
            if (this._scene)
                this._scene.onExit();
            this._scene = this._nextScene;
            this._scene.game = this;
            this._scene.onEnter();
            this._nextScene = null;
        }
    };
    Game.prototype.init = function () {
        this._resourceLoader = new resource_loader_1.ResourceLoader();
        this._eventQueue = new event_queue_1.EventQueue();
        this._audioController = new audio_controller_1.AudioController();
        var body = document.getElementsByTagName('body')[0];
        this.initResize(body);
    };
    Game.prototype.initResize = function (body) {
        var _this = this;
        window.addEventListener('resize', function () { return _this.bodyResized.emit(void (0)); });
        this.bodyResized.addListener(function () {
            _this.canvasSize = [window.innerWidth, window.innerHeight];
        });
    };
    Object.defineProperty(Game.prototype, "renderPhysics", {
        get: function () {
            return this._renderPhysics;
        },
        set: function (val) {
            this._renderPhysics = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "canvas", {
        get: function () {
            return this.graphicsAdapter.canvas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "resourceLoader", {
        get: function () {
            return this._resourceLoader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "eventQueue", {
        get: function () {
            return this._eventQueue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "audioController", {
        get: function () {
            return this._audioController;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "isRunning", {
        get: function () {
            return this._isRunning;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.start = function () {
        var _this = this;
        if (this.isRunning)
            throw new Error("This game is already running. You can't run it again.");
        this._isRunning = true;
        this.graphicsAdapter.init(this);
        this.bodyResized.emit(void (0));
        document.currentScript.parentElement.insertBefore(this.canvas, document.currentScript);
        this._intervalHandle = setInterval(function () { return _this.onTick(); }, 1000 / this.framesPerSecond);
    };
    Game.prototype.stop = function () {
        if (this.isRunning)
            clearInterval(this._intervalHandle);
        this._isRunning = false;
    };
    Object.defineProperty(Game.prototype, "canvasSize", {
        get: function () {
            return [this._size[0], this._size[1]];
        },
        set: function (_a) {
            var newWidth = _a[0], newHeight = _a[1];
            if (newWidth == this._size[0] && newHeight == this._size[1])
                return;
            var prevSize = this._size;
            this._size = [newWidth, newHeight];
            this.eventQueue.enqueue({
                type: 'canvasResize',
                previousSize: prevSize,
                size: [newWidth, newHeight]
            });
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.onTick = function () {
        if (!this.isRunning)
            throw new Error("An error occurred. Game.onTick was invoked although the game is not running.");
        var currentTime = new Date();
        var delta = (this.previousTick == null) ? 0 : (currentTime.valueOf() - this.previousTick.valueOf()) / 1000;
        if (this.maximumDelta && delta > this.maximumDelta)
            delta = this.maximumDelta;
        this.previousTick = currentTime;
        this.eventQueue.tick(delta);
        this.sendEvents(this.scene);
        this.updateCursor();
        if (this.resourceLoader.isDone) {
            for (var q = 0; q < this.LOGIC_TICKS_PER_RENDER_TICK; q++) {
                this.tick(delta / this.LOGIC_TICKS_PER_RENDER_TICK);
            }
            this.render(this.graphicsAdapter);
        }
        else {
            this.resourceLoader.render(this.graphicsAdapter);
        }
    };
    Game.prototype.sendEvents = function (sendTo) {
        var events = this._eventQueue.clearQueue();
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var evt = events_1[_i];
            var handled = false;
            if (this.resourceLoader.isDone && this.sendEvent(sendTo, evt))
                handled = true;
            if (!handled && this.handleEvent(evt))
                handled = true;
            if (!handled && (evt.type === 'abstractButtonPressed' || evt.type === 'abstractButtonReleased') && evt.wrappedEvent) {
                if (this.resourceLoader.isDone && this.sendEvent(sendTo, evt.wrappedEvent))
                    handled = true;
                if (!handled && this.handleEvent(evt.wrappedEvent))
                    handled = true;
            }
        }
    };
    Game.prototype.handleEvent = function (evt) {
        if (evt.type === 'keyPressed' && evt.code === 'F5') {
            location.reload(evt.shiftPressed);
            return true;
        }
        else if (evt.type === 'keyPressed' && evt.code === 'F11') {
            this.toggleFullscreen();
            return true;
        }
        return false;
    };
    Game.prototype.sendEvent = function (sendTo, evt) {
        if (this._scene)
            return this._scene.handleEvent(evt);
        return false;
    };
    Game.prototype.toggleFullscreen = function () {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) {
            if (document.exitFullscreen)
                document.exitFullscreen();
            else if (document.mozExitFullscreen)
                document.mozExitFullscreen();
            else if (document.webkitExitFullscreen)
                document.webkitExitFullscreen();
            else if (document.msExitFullscreen)
                document.wskitExitFullscreen();
        }
        else {
            var body = document.getElementsByTagName('body')[0];
            if (body.requestFullscreen)
                body.requestFullscreen();
            else if (body.mozRequestFullScreen)
                body.mozRequestFullScreen();
            else if (body.webkitRequestFullscreen)
                body.webkitRequestFullscreen();
            else if (body.msRequestFullscreen)
                body.msRequestFullscreen();
        }
    };
    Game.prototype.updateCursor = function () {
        var cursors = this.scene.cursor;
        if (!this.canvas || !this.canvas.style)
            return;
        for (var q = 0; q < cursors.length; q++) {
            var cursor = cursors[q];
            this.canvas.style.cursor = cursor;
            if (this.canvas.style.cursor === cursor)
                break;
            if (q === cursors.length - 1) {
                console.error("Invalid set of cursors:", cursors);
            }
        }
    };
    Game.prototype.tick = function (delta) {
        if (this._scene) {
            this._scene.tick(delta);
            this.handleSceneChange();
        }
        this.fixedTickDelta += delta;
        while (this.fixedTickDelta >= this.timePerFixedTick) {
            this.fixedTickDelta -= this.timePerFixedTick;
            this.fixedTick();
        }
    };
    Game.prototype.fixedTick = function () {
        if (this._scene) {
            this._scene.fixedTick();
            this.handleSceneChange();
        }
    };
    Game.prototype.render = function (adapter) {
        if (!adapter)
            throw new Error("What the heck just happened? There is no graphics adapter!");
        if (this._scene)
            adapter.renderScene(this._scene);
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(14));
__export(__webpack_require__(6));
//# sourceMappingURL=index.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var collision_mask_1 = __webpack_require__(7);
var math_1 = __webpack_require__(1);
var CircleCollisionMask = (function (_super) {
    __extends(CircleCollisionMask, _super);
    function CircleCollisionMask(gobj, _radius, _offset, mass) {
        if (_offset === void 0) { _offset = [0, 0]; }
        if (mass === void 0) { mass = NaN; }
        var _this = _super.call(this, gobj) || this;
        _this._radius = _radius;
        _this._offset = _offset;
        _this.updatePositions = true;
        _this.isCheckingCollisions = false;
        _this.mass = isNaN(mass) ? Math.PI * _this.radius * _this.radius : mass;
        return _this;
    }
    Object.defineProperty(CircleCollisionMask.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (val) {
            this._radius = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleCollisionMask.prototype, "offset", {
        get: function () {
            return [this._offset[0], this._offset[1]];
        },
        set: function (val) {
            this._offset = [val[0], val[1]];
        },
        enumerable: true,
        configurable: true
    });
    CircleCollisionMask.prototype.checkForCollisions = function (other) {
        if (this.isCheckingCollisions)
            throw new Error("Already checking collisions!");
        this.isCheckingCollisions = true;
        try {
            if (other instanceof CircleCollisionMask) {
                var _a = [this.gameObject.x + this._offset[0], this.gameObject.y + this._offset[1]], x = _a[0], y = _a[1];
                var _b = [other.gameObject.x + other._offset[0], other.gameObject.y + other._offset[1]], otherx = _b[0], othery = _b[1];
                var dist2 = math_1.pointDistance2(x, y, otherx, othery);
                var threshold = Math.pow(this.radius + other.radius, 2);
                if (dist2 <= 0 || dist2 >= threshold)
                    return null;
                if (this.isTrigger || other.isTrigger) {
                    other.triggers.push(this);
                    this.triggers.push(other);
                    return null;
                }
                else {
                    var dist = Math.sqrt(dist2);
                    var normal = [(otherx - x) / dist, (othery - y) / dist];
                    var penetration = (this.radius + other.radius) - dist;
                    var collision = {
                        first: this,
                        second: other,
                        contactNormal: normal,
                        contactPoint: [x + normal[0] * (this.radius - (penetration / 2)), y + normal[1] * (this.radius - (penetration / 2))],
                        penetration: penetration + .01
                    };
                    this.contacts.push(collision);
                    other.contacts.push(collision);
                    return [collision];
                }
            }
            else {
                return other.checkForCollisions(this);
            }
        }
        finally {
            this.isCheckingCollisions = false;
        }
    };
    CircleCollisionMask.prototype.resolveCollisions = function () {
        for (var q = 0; q < this.contacts.length; q++) {
            var contact = this.contacts[q];
            if (contact.first !== this)
                continue;
            var other = contact.second;
            if (this.isFixed && other.isFixed)
                return;
            var relativeMass = this.mass / (this.mass + other.mass);
            if (isNaN(relativeMass))
                throw new Error("relativeMass is not a number");
            if (this.isFixed)
                relativeMass = 1;
            else if (other.isFixed)
                relativeMass = 0;
            var eAbsorb = 1 - relativeMass;
            if (this.updatePositions !== false && (!this.isFixed || !other.isFixed)) {
                if (!this.isFixed) {
                    if (isNaN(contact.contactNormal[0]) || isNaN(eAbsorb) || isNaN(contact.penetration))
                        throw new Error("No bueno!");
                    this.collisionImpulseX -= contact.contactNormal[0] * eAbsorb * contact.penetration;
                    this.collisionImpulseY -= contact.contactNormal[1] * eAbsorb * contact.penetration;
                    this.impulseCount++;
                }
                if (!other.isFixed) {
                    if (isNaN(contact.contactNormal[0]) || isNaN(eAbsorb) || isNaN(contact.penetration))
                        throw new Error("No bueno!");
                    other.collisionImpulseX += contact.contactNormal[0] * relativeMass * contact.penetration;
                    other.collisionImpulseY += contact.contactNormal[1] * relativeMass * contact.penetration;
                    other.impulseCount++;
                }
                var a1 = (contact.contactNormal[0] * this.gameObject.hspeed) + ((contact.contactNormal[1] * this.gameObject.vspeed));
                var a2 = (contact.contactNormal[0] * other.gameObject.hspeed) + ((contact.contactNormal[1] * other.gameObject.vspeed));
                var optimizedP = (2 * (a1 - a2)) / (this.mass + other.mass);
                if (!this.isFixed) {
                    _a = [
                        this.gameObject.hspeed - optimizedP * other.mass * contact.contactNormal[0],
                        this.gameObject.vspeed - optimizedP * other.mass * contact.contactNormal[1]
                    ], this.gameObject.hspeed = _a[0], this.gameObject.vspeed = _a[1];
                }
                if (!other.isFixed) {
                    _b = [
                        other.gameObject.hspeed + optimizedP * this.mass * contact.contactNormal[0],
                        other.gameObject.vspeed + optimizedP * this.mass * contact.contactNormal[1]
                    ], other.gameObject.hspeed = _b[0], other.gameObject.vspeed = _b[1];
                }
            }
        }
        if (this.updatePositions === 'once')
            this.updatePositions = false;
        var _a, _b;
    };
    CircleCollisionMask.prototype.renderImpl = function (context) {
        var camera = this.gameObject.renderCamera === 'default' ? this.gameObject.scene.camera :
            this.gameObject.renderCamera !== 'none' ? this.gameObject.renderCamera :
                null;
        var zoomScale = !!camera ? 1 / camera.zoomScale : 1;
        context.strokeStyle = this.contacts.length ? 'red' : 'green';
        context.lineWidth = zoomScale;
        context.beginPath();
        context.ellipse(this._offset[0], this._offset[1], this.radius, this.radius, 0, 0, 2 * Math.PI);
        context.stroke();
        context.fillStyle = 'red';
        context.fillRect(this._offset[0] - 3 * zoomScale, this._offset[1] - 3 * zoomScale, 6 * zoomScale, 6 * zoomScale);
        context.strokeStyle = 'purple';
        for (var q = 0; q < this.contacts.length; q++) {
            var contact = this.contacts[q];
            if (contact.first !== this)
                continue;
            context.fillRect(contact.contactPoint[0] - this.gameObject.x - 1 * zoomScale, contact.contactPoint[1] - this.gameObject.y - 1 * zoomScale, 2 * zoomScale, 2 * zoomScale);
            context.beginPath();
            context.moveTo(contact.contactPoint[0] - this.gameObject.x - contact.contactNormal[0] * contact.penetration / 2, contact.contactPoint[1] - this.gameObject.y - contact.contactNormal[1] * contact.penetration / 2);
            context.lineTo(contact.contactPoint[0] - this.gameObject.x + contact.contactNormal[0] * contact.penetration / 2, contact.contactPoint[1] - this.gameObject.y + contact.contactNormal[1] * contact.penetration / 2);
            context.stroke();
        }
    };
    return CircleCollisionMask;
}(collision_mask_1.CollisionMask));
exports.CircleCollisionMask = CircleCollisionMask;
//# sourceMappingURL=circle-collision-mask.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var force_generator_1 = __webpack_require__(2);
var DragForceGenerator = (function (_super) {
    __extends(DragForceGenerator, _super);
    function DragForceGenerator(k1, k2) {
        var _this = _super.call(this) || this;
        _this.k1 = k1;
        _this.k2 = k2;
        _this.enabled = true;
        return _this;
    }
    DragForceGenerator.prototype.updateCollider = function (collider, delta) {
        if (!this.enabled)
            return;
        if (!collider.gameObject.speed || collider.isFixed)
            return;
        var speed = collider.gameObject.speed / 100;
        var dragCoeff = this.k1 * speed + this.k2 * Math.pow(speed, 2);
        if (dragCoeff > speed * 100)
            dragCoeff = speed * 100;
        var _a = [collider.gameObject.hspeed, collider.gameObject.vspeed], hspeed = _a[0], vspeed = _a[1];
        var _b = [hspeed / speed, vspeed / speed], nhspeed = _b[0], nvspeed = _b[1];
        var _c = [-nhspeed * dragCoeff, -nvspeed * dragCoeff], hdrag = _c[0], vdrag = _c[1];
        collider.addForce(hdrag * delta, vdrag * delta);
    };
    return DragForceGenerator;
}(force_generator_1.ForceGenerator));
exports.DragForceGenerator = DragForceGenerator;
//# sourceMappingURL=drag-force-generator.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var collision_mask_1 = __webpack_require__(7);
var force_generator_1 = __webpack_require__(2);
var math_1 = __webpack_require__(1);
var GravityForceGenerator = (function (_super) {
    __extends(GravityForceGenerator, _super);
    function GravityForceGenerator(hgravity, vgravity) {
        var _this = _super.call(this) || this;
        _this.enabled = true;
        if (hgravity instanceof collision_mask_1.CollisionMask)
            _this._towards = hgravity;
        else if (typeof hgravity === 'number') {
            if (typeof vgravity === 'number') {
                _this._hgravity = hgravity;
                _this._vgravity = vgravity;
            }
            else {
                _this._hgravity = 0;
                _this._vgravity = hgravity;
            }
        }
        else {
            _this._hgravity = 0;
            _this._vgravity = 98;
        }
        return _this;
    }
    GravityForceGenerator.prototype.updateCollider = function (collider, delta) {
        if (!this.enabled || collider.isFixed)
            return;
        var hgrav = this._hgravity, vgrav = this._vgravity;
        if (this._towards) {
            var dist = math_1.pointDistance(collider.gameObject.x, collider.gameObject.y, this._towards.gameObject.x, this._towards.gameObject.y);
            var gravityCoeff = ((collider.mass * this._towards.mass) / dist) * .00001;
            _a = [gravityCoeff * (this._towards.gameObject.x - collider.gameObject.x), gravityCoeff * (this._towards.gameObject.y - collider.gameObject.y)], hgrav = _a[0], vgrav = _a[1];
        }
        collider.addForce(hgrav * delta, vgrav * delta);
        var _a;
    };
    return GravityForceGenerator;
}(force_generator_1.ForceGenerator));
exports.GravityForceGenerator = GravityForceGenerator;
//# sourceMappingURL=gravity-force-generator.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(33));
__export(__webpack_require__(2));
__export(__webpack_require__(34));
__export(__webpack_require__(35));
__export(__webpack_require__(37));
//# sourceMappingURL=index.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var force_generator_1 = __webpack_require__(2);
var math_1 = __webpack_require__(1);
var SpringForceGenerator = (function (_super) {
    __extends(SpringForceGenerator, _super);
    function SpringForceGenerator(other, springConstant, restLength) {
        var _this = _super.call(this) || this;
        _this.other = other;
        _this.springConstant = springConstant;
        _this.restLength = restLength;
        _this.enabled = true;
        _this.modifyOther = true;
        return _this;
    }
    SpringForceGenerator.prototype.updateCollider = function (collider, delta) {
        if (!this.enabled || (collider.isFixed && (!this.modifyOther || this.other.isFixed)))
            return;
        var _a = [collider.gameObject.x - this.other.gameObject.x, collider.gameObject.y - this.other.gameObject.y], hdist = _a[0], vdist = _a[1];
        var magnitude = math_1.pointDistance(0, 0, hdist, vdist);
        magnitude = (this.restLength - magnitude) / 100;
        magnitude *= this.springConstant;
        var _b = [hdist * magnitude * delta, vdist * magnitude * delta], hforce = _b[0], vforce = _b[1];
        var massRatio = collider.mass / (collider.mass + this.other.mass);
        collider.addForce(hforce * (1 - massRatio), vforce * (1 - massRatio));
        if (this.modifyOther)
            this.other.addForce(-hforce * massRatio, -vforce * massRatio);
    };
    SpringForceGenerator.prototype.render = function (collider, context) {
        _super.prototype.render.call(this, collider, context);
        context.save();
        try {
            context.translate(collider.gameObject.x, collider.gameObject.y);
            context.rotate(-math_1.degToRad(math_1.pointDirection(collider.gameObject.x, collider.gameObject.y, this.other.gameObject.x, this.other.gameObject.y)));
            var dist = math_1.pointDistance(collider.gameObject.x, collider.gameObject.y, this.other.gameObject.x, this.other.gameObject.y);
            context.fillStyle = 'rgba(255, 255, 255, .2)';
            context.fillRect(0, -6, dist, 12);
            context.fillStyle = 'rgba(255, 255, 255, .8)';
            context.fillRect(0, -1.5, this.restLength, 3);
            context.strokeStyle = 'black';
            context.lineWidth = 2;
            context.beginPath();
            for (var q = 0; q < dist - 5; q += 10) {
                context.lineTo(q, 0);
                context.lineTo(q + 2.5, 4);
                context.lineTo(q + 7.5, -4);
                context.lineTo(q + 10, 0);
            }
            context.stroke();
        }
        finally {
            context.restore();
        }
    };
    return SpringForceGenerator;
}(force_generator_1.ForceGenerator));
exports.SpringForceGenerator = SpringForceGenerator;
//# sourceMappingURL=spring-force-generator.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function delay(millis) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { return resolve(); }, millis);
    });
}
exports.delay = delay;
//# sourceMappingURL=delay.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(38));
__export(__webpack_require__(1));
__export(__webpack_require__(40));
__export(__webpack_require__(16));
__export(__webpack_require__(8));
//# sourceMappingURL=index.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Rect = (function () {
    function Rect(left, right, bottom, top) {
        this.left = left;
        this.right = right;
        this.bottom = bottom;
        this.top = top;
    }
    Object.defineProperty(Rect.prototype, "width", {
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "height", {
        get: function () {
            return this.top - this.bottom;
        },
        enumerable: true,
        configurable: true
    });
    return Rect;
}());
Rect.zero = new Rect(0, 0, 0, 0);
exports.Rect = Rect;
;
//# sourceMappingURL=rect.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var credits_db_1 = __webpack_require__(44);
var PAN_SPEED = 120;
var AboutLayoutSpacer = (function (_super) {
    __extends(AboutLayoutSpacer, _super);
    function AboutLayoutSpacer() {
        return _super.call(this, 'About', {
            renderCamera: 'none'
        }) || this;
    }
    AboutLayoutSpacer.prototype.renderImpl = function (adapter) {
        if (adapter instanceof engine_1.DefaultGraphicsAdapter)
            this.renderImplContext2d(adapter.context);
        else
            throw new Error("Not implemented!");
    };
    AboutLayoutSpacer.prototype.renderImplContext2d = function (context) {
        var _a = this.game.canvasSize, canvasWidth = _a[0], canvasHeight = _a[1];
        var xx = canvasWidth / 2;
        var yy = canvasHeight - this.animationAge * PAN_SPEED;
        for (var q = 0; q < credits_db_1.credits.length; q++) {
            var item = credits_db_1.credits[q];
            if (yy >= canvasHeight)
                break;
            switch (item.type) {
                case 'text':
                    context.textBaseline = 'top';
                    context.textAlign = 'center';
                    context.font = "" + (item.isBold ? 'bold ' : '') + (item.fontSize || 24) + "px " + (item.fontFamily || 'Cambria');
                    context.fillStyle = 'white';
                    engine_1.fillText(context, item.text, xx, yy);
                    yy += Math.floor((item.fontSize || 24) * 1.4) * (item.text.split('\n').length) + (item.marginBottom || 0);
                    break;
                case 'image':
                    var image = this.resources.loadImage(item.sprite.src);
                    context.drawImage(image, xx - (image.width / 2), yy);
                    yy += image.height + (item.marginBottom || 0);
                    break;
            }
        }
        if (yy < 0) {
            this.game.changeScene(this.scene.parentScene);
        }
    };
    return AboutLayoutSpacer;
}(engine_1.GameObject));
exports.AboutLayoutSpacer = AboutLayoutSpacer;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var stack_scene_1 = __webpack_require__(3);
var about_layout_spacer_1 = __webpack_require__(41);
var AboutScene = (function (_super) {
    __extends(AboutScene, _super);
    function AboutScene(parentScene) {
        var _this = _super.call(this, parentScene) || this;
        _this.initialized = false;
        return _this;
    }
    Object.defineProperty(AboutScene.prototype, "cursor", {
        get: function () {
            return ['none'];
        },
        enumerable: true,
        configurable: true
    });
    AboutScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this.initialized)
            return;
        this.initialized = true;
        this.addObject(new about_layout_spacer_1.AboutLayoutSpacer());
        this.camera = new engine_1.Camera(this);
    };
    AboutScene.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        this.camera.clearColor = 'black';
    };
    Object.defineProperty(AboutScene.prototype, "preferredMusic", {
        get: function () {
            return 'menu';
        },
        enumerable: true,
        configurable: true
    });
    return AboutScene;
}(stack_scene_1.StackScene));
exports.AboutScene = AboutScene;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var SpeedScaleCamera = (function (_super) {
    __extends(SpeedScaleCamera, _super);
    function SpeedScaleCamera(scene) {
        var _this = _super.call(this, scene) || this;
        _this.zoomScaleTo = 30;
        _this.fixedTickTime = 1 / 30;
        return _this;
    }
    SpeedScaleCamera.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        if (this.follow) {
            var zst = 32 - Math.sqrt(this.follow.speed + 16) / 2;
            if (!isNaN(zst) && zst !== Infinity && zst !== -Infinity)
                this.zoomScaleTo = zst;
        }
        this.fixedTickTime -= delta;
        while (this.fixedTickTime < 0) {
            this.fixedTickTime += 1 / 30;
            this.zoomScale = ((this.zoomScale * 9) + (this.zoomScaleTo * 1)) / 10;
        }
    };
    return SpeedScaleCamera;
}(engine_1.FollowCamera));
exports.SpeedScaleCamera = SpeedScaleCamera;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.credits = [
    { type: 'text', text: 'Physics Game Final', marginBottom: 120 },
    { type: 'text', text: 'Developed by Miniwit Studios', marginBottom: 60 },
    { type: 'image', sprite: { src: 'branding/miniwit-studios.png', transparent: true }, marginBottom: 120 },
    { type: 'text', text: 'Game Design', isBold: true, fontSize: 32, marginBottom: 30 },
    { type: 'text', text: 'Brandon Slade', marginBottom: 120 },
    { type: 'text', text: 'Level Design', isBold: true, fontSize: 32, marginBottom: 30 },
    { type: 'text', text: 'Brandon Slade', marginBottom: 120 },
    { type: 'text', text: 'No animals were harmed during the making of this game.', marginBottom: 30 },
    { type: 'text', text: 'No humans were harmed during the making of this game.', marginBottom: 30 },
    { type: 'text', text: 'No aliens were harmed during the making of this game.', marginBottom: 30 },
    { type: 'text', text: 'In general, no sentient beings were harmed during the making of this game.', marginBottom: 30 },
    { type: 'text', text: 'Nothing that identifies as an animal, human, alien, or sentient being' },
    { type: 'text', text: 'was harmed during the making of this game.', marginBottom: 120 }
];


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.levels = [
    {
        name: "Level 1",
        mountain: {
            startx: -100,
            stepx: 2,
            cols: [-45.0416746284799, -43.9760508434328, -42.378832959576634, -41.56611257928605, -40.6793336154656, -39.15006153831383, -38.478031504624276, -37.16188921552533, -36.37224870746908, -35.06934180167448, -34.29179429368789, -33.08694667654017, -32.17918404097174, -31.434013861189428, -30.45220600654791, -29.866881365059847, -28.891897553058563, -28.039788939130382, -26.981508429069716, -26.125533200945146, -26.020857980373695, -25.173882627796438, -24.089757693286, -23.78101585922612, -23.17823089868195, -22.596823997894454, -21.555872112447933, -20.95488042504736, -20.185991987974425, -19.746889771331368, -19.376026937858594, -17.610270291712105, -16.29898654183062, -14.463283262836232, -13.500474409828179, -11.797073994208487, -10.426520682917285, -8.60022738912372, -6.92217001584172, -5.695844560039224, -4.511326189403742, -3.6576917003793747, -2.934935433194613, -2.7795358016992573, -1.8005120229539981, -0.9272185932533121, -0.6172600820924434, -0.09740315596772708, 1.056443341739906, 1.5085595200028614, 2.169801048822422, 3.173998772451224, 3.8273284019498486, 4.620738116361655, 5.862564365509975, 6.704897765338046, 7.116642094829569, 8.176699200054724, 9.506223477432693, 10.186681222057103, 11.074928740125344, 12.67024355451214, 13.809903266505115, 15.275905880831534, 16.83692303172135, 18.09054395743742, 19.17749030437482, 20.50284902429764, 22.074915508747367, 23.29954482108232, 24.53094843222567, 25.189728629398545, 26.094953507353218, 26.83486472698387, 27.463630206701676, 28.68667137917439, 28.922682382411644, 30.096149075323773, 30.808017338866854, 31.221414625763632, 32.19920979470277, 33.430205352062096, 35.139050715109505, 36.80295292197936, 38.34074585469244, 39.71785576548796, 41.14383336760723, 42.61423668230697, 44.63492677857455, 46.204287957819375, 47.00250104216235, 47.540046579902686, 48.09420089067979, 48.976669470535526, 49.59604337214907, 49.883232176198135, 50.490406023437934, 50.95629089529731, 51.253856420836215, 51.70952280529037, 52.761484200564375, 53.70861088925001, 54.786791208806854, 56.13490416986046, 57.490326777514355, 58.63528440239427, 59.95018467313213, 61.18676010969405, 62.392757673617304, 63.49442999930675, 64.5821353661311, 65.45893728259881, 65.77337122342819, 66.84713263025189, 67.42486066292223, 67.88054318597261, 69.1654595257234, 69.86049390205325, 70.42214122195723, 71.10770764097694, 71.93195156877302, 72.93504543858599, 73.84724547932714, 74.24302189815305, 75.54258010990964, 76.54247850099897, 77.39492695093082, 78.10459228176492, 79.25982252644049, 79.94398689192025, 81.45245570033225, 82.46842744336757, 83.50001368534411, 84.45035265679823, 85.75940672305053, 87.00711416892368, 88.51137048161235, 89.31344413857276, 90.9921822117516, 92.06102866314347, 92.9764752769325, 94.12855237227281, 94.84034779658526, 96.3869909639397, 96.92467311623821, 97.89698099568226, 99.17325399889265, 100.23075663090349, 101.2347553478055, 101.90171792390807, 103.28064849783286, 104.00547446203933, 105.00930065609492, 105.5144296070812, 106.50906862207697, 107.42558574161708, 107.72544745326813, 108.67088500920242, 109.6019039193408, 110.36434091191694, 111.34801778188609, 113.00198017311588, 113.9797204278004, 115.51641127070545, 117.26375314943185, 118.51960423792914, 119.96146062809036, 121.09212712727252, 123.03897698065238, 124.53065164836873, 125.47216050317891, 126.41594779224889, 126.61399048726229, 127.42359664544003, 128.44154711333795, 129.0086347856391, 130.0402671221347, 130.76704455881134, 130.9529067087269, 131.7538218216729, 132.83349118340334, 133.65883669171976, 135.13147775231263, 136.65060885200157, 138.07491436483045, 139.3516128367592, 140.68513640476908, 141.97892072255806, 142.8520418612798, 144.12088350828049, 145.57093154723282, 146.28479527058192, 147.02422696848305, 147.75949532952706, 148.14992573603428, 148.82829195040625, 149.58810167817833, 149.8462059715732, 150.46547330582618, 151.38092836000757, 151.91539369992051, 153.16214113629633, 154.3774843852926, 155.3973985624295, 156.6689097522005, 158.05835630793266, 158.96150712604, 160.1336027087177, 161.7144833399225, 162.96111530428283, 163.53512537006753, 164.7314407600834, 166.09699514652448, 167.26313874228407, 168.74150322746345, 169.95052591151904, 171.25948455670994, 172.53464052323568, 173.70586614239207, 175.20123975602297, 176.0493002854698, 176.98037227595984, 177.38653191227544, 178.29517663275897, 178.88665146011465, 179.21521214009888, 180.37933911101993, 180.6185931275988, 181.32343266324136, 182.04132619115876, 182.66849609049152, 183.80813467441035, 185.5526206039702, 186.75075289069935, 188.21878882056643, 190.27434106632901, 191.19739659207315, 192.85546636318938, 194.276008085171, 196.04586366081185, 197.09365486433845, 197.6318405470399, 198.50730163336385, 199.1214351008287, 199.70065866930634, 200.59002535375038, 200.9806584519811, 202.00934461842186, 202.18115108588574, 203.294520546217, 203.8135202627687, 204.69669419530163, 206.25649567045812, 207.49974382709507, 208.8284295550181, 209.55432731594757, 211.19065100951642, 212.66119042650038, 213.32637151380104, 214.51004784032284, 215.92856086644727, 216.830009376004, 217.6858653189012, 219.286793056693, 220.00017616678656, 221.45544424805541, 222.3265869966206, 223.5799955304311, 224.3003787567344, 225.7859353018638, 226.56082568872338, 226.58707230027917, 227.48808648558338, 228.31417106461728, 228.53392655984828, 229.34124049464597, 229.908230453233, 230.4134878497252, 231.5369833732014, 231.84373901890308, 232.3906464502745, 233.5824465926349, 235.4900749390762, 236.65844481080555, 238.53252926297904, 239.7573312129383, 241.43197047877868, 242.78002284198712, 244.4508873366185, 245.38647773406012, 246.50944091365346, 247.53506958960992, 247.40719630693886, 248.15756511068247, 248.34436826511578, 248.83149425191084, 249.65608129418237, 249.70542254045475, 250.09804032687202, 250.42361365468585, 251.1496927117736, 252.26226983205916, 253.65250585821963, 255.14172496996375, 256.9329625142714, 258.43691621886796, 259.86264656170147, 261.29888266630275, 262.36230283267065, 263.79290547012965, 265.3646364953695, 265.5485013632625, 266.1934014466072, 267.2801283957286, 267.69662329153516, 268.04807388295046, 269.1555641672974, 269.25592948859094, 270.4527536577698, 270.5671117321564, 271.34464323959776, 272.88512309663923, 274.15264303002823, 274.978928656623, 276.6279252877006, 277.8640818580823, 278.7916551689266, 279.7534520127543, 281.3196352295718, 282.4715524442582, 283.39116841684796, 284.5906651427335, 286.3135587303706, 287.1153217967149, 288.77048009989585, 289.8391965137403, 290.8700276865702, 292.2115315690841, 293.38457019561616, 294.749991779776, 295.68668519593774, 296.54374606860256, 297.71808194453604, 298.5939230875925, 299.07640818109144, 299.9904289900467, 300.81734768865743, 301.7365075916268, 302.3066155262259, 303.5715424737526],
            boulderRepeat: 3
        },
        player: {
            startPos: [0, 0],
            boulderRepeat: 15
        }
    },
    {
        name: 'Level 2',
        mountain: {
            startx: -100,
            stepx: 2,
            cols: [-39.41268563936784, -37.611686680043135, -36.36927027478859, -34.5881102823596, -33.15909066622008, -31.584005500493937, -30.19521751567607, -28.667070174830414, -26.986145843351082, -25.485669443931187, -26.952094881736862, -26.254275833073812, -25.764531832145803, -24.93207371999229, -24.060194351462574, -23.79867302204967, -23.06534158338768, -22.26335380764865, -21.294156351203316, -20.89478776925198, -22.012915900184513, -20.988327832183426, -19.49977317191179, -18.31458378255461, -17.0214583612671, -16.026962866480694, -14.704409314589583, -13.547036468340298, -12.373069907561856, -11.21283357246276, -11.84578304734885, -10.286381460871649, -8.788731403644357, -7.347385415499415, -5.790018758767397, -4.3914926645944625, -2.6310525429044525, -1.0947194045512578, 0.5470495403739957, 1.7953370242780835, 0.9109324479741794, 1.408379449462437, 1.4372177141756008, 1.7051772371292184, 1.884084070617111, 2.3486943782375462, 2.6011036017056646, 2.7146617841884066, 2.89801936702274, 3.069827533322356, 2.958357698360773, 4.6616472544838246, 7.094655091042787, 9.295177058384134, 11.216902591645896, 13.18693943894265, 15.635712523298945, 17.56745893388151, 19.6521110232176, 22.029167122079173, 21.57039143003208, 21.184729845641908, 21.14203250535922, 21.453325826116192, 21.439518522538727, 21.402425126488808, 21.21926873977711, 21.208074034814338, 21.44005918351005, 21.00554430219035, 20.781934684642515, 22.09930064931005, 22.786239251956527, 23.912462682251917, 24.78317363214837, 26.018605892208413, 26.74323130304164, 27.857413761673616, 29.02588034891117, 29.885127585896697, 30.64897623716948, 31.716881560792054, 32.7308068523123, 34.15598549290878, 34.86755190534607, 36.253506292135526, 37.05860367000262, 38.40651109974067, 39.41840365515833, 40.331954328293186, 41.3531340523222, 43.87198958636124, 46.499950362110205, 48.73302324894979, 51.2354528724703, 53.95842954987156, 56.249295925548445, 59.018180117567454, 61.287697294826636, 64.06879560775715, 63.52509698586527, 64.63497338083006, 65.69066005377792, 67.22434888184695, 68.27902385086955, 69.3786476889437, 70.60533299758106, 71.74476798209504, 73.08449188013282, 74.45778838725865, 72.46309804057478, 73.00049209332433, 73.56324388306163, 73.93786375275499, 74.18807039693164, 74.71450961962684, 75.14418379819777, 75.48763879110237, 75.87585634679391, 76.197677219377, 75.39290447906197, 77.18645119199644, 78.85078007076615, 80.17308768161395, 81.96052985597163, 83.44874663002437, 85.23564324978544, 86.93006196191145, 88.22214140545174, 90.15887244728597, 89.35984571147111, 90.23036319102842, 91.27165020784263, 92.11135152871938, 92.99746015106794, 93.60251818440894, 94.66289776278362, 95.43394173265405, 96.51527853862595, 97.26753815357503, 96.75606624961688, 98.42016525151683, 100.28825245228937, 102.40940405881572, 104.21542007898616, 105.8953469261663, 107.8719237017657, 109.82855169661376, 111.86925480658886, 113.89562695464586, 112.7297017575089, 112.75914610580323, 112.31385574803849, 111.97502718673019, 111.9475364421712, 111.82686584395756, 111.84714882510089, 111.6158841984172, 111.22854333059801, 111.17062711026145, 110.79605553640381, 113.13974022006532, 114.87961306645475, 117.19289913128122, 119.14334299706509, 121.21584446107215, 123.40905987231648, 125.2864473590365, 127.72786498810156, 129.50112638251366, 129.38634247554816, 129.86996962718442, 130.65817410550164, 131.28571550861955, 131.40316636993418, 132.25264132807465, 132.61085659686663, 133.20444044046934, 133.53790989979555, 134.13024638387293, 133.6808332140866, 136.0775243878717, 137.91888057562292, 139.98714987702266, 142.32763313289118, 144.74572597612564, 146.50252077279967, 148.6785220604367, 151.03077057857985, 153.15606472162858, 152.5241478126968, 153.43910154563574, 154.2271996816723, 154.67757907572624, 155.91868760295208, 156.39713494500955, 157.1406023115073, 157.93257926443613, 158.89147228465745, 159.59728640518236, 158.7004813637343, 159.347291053392, 160.01486242463656, 160.63899767825197, 161.2359021820764, 162.06994130834687, 163.0426047313816, 163.54214412996143, 164.16377233342223, 165.2131134749372, 164.62463662391133, 166.31675585613363, 167.9978903821615, 169.84823939163397, 171.51512863377596, 173.04588065738764, 174.82370470779227, 176.1720441279635, 178.0836782363025, 179.9211452194771, 179.12502947239372, 179.75835123020593, 180.32095400482214, 180.72564761848645, 181.6040736900085, 182.02619543195974, 182.652898078977, 182.9255567046519, 183.72151062074008, 184.26736296488664, 183.9281546700326, 185.46260133612063, 187.37826200539928, 189.25650135505683, 191.0590520761958, 192.5550391837935, 194.32614979093523, 196.22413178732108, 198.05790922675584, 200.02071915626823, 199.44357169307926, 201.0489180441862, 202.26856399085835, 203.5989185606754, 205.09675070290487, 206.55059936923934, 207.8434167424683, 209.28344156798863, 210.7969951901331, 212.3143561272751, 211.050859136672, 212.04111483751598, 212.9942479305435, 214.16458409990486, 215.28493107288926, 216.0439803349085, 217.13627266044534, 217.81339690954582, 218.93516619037968, 220.17242480919845, 218.77268384055967, 220.9120773363553, 222.36913916576805, 224.52105883813766, 225.98474796747112, 227.86949705986063, 229.76079071849696, 231.66409245242215, 233.49505967007883, 235.0776494528153, 233.768861449522, 233.8650168749645, 234.44290675501932, 234.88218538642917, 235.08852155424768, 235.3583759124904, 235.8308977489754, 236.22364751082526, 236.51284824062998, 236.71092148159497, 236.05613381578567, 236.80591027968237, 237.76694721649378, 238.36228493515344, 239.4301885780202, 240.1494758279322, 240.99384073068623, 241.82670218287078, 242.6362898100343, 243.38885667811059, 243.78411130107946, 244.57656880183146, 245.73964692392926, 246.67467554029585, 247.36697498289212, 248.28740654768322, 249.4249933099777, 250.27932646067717, 251.33854968301347, 252.059023831959, 252.8635479838987, 253.6036541218037, 254.37236857139436, 255.55756977275186, 256.46037220798354, 257.4394022501138, 258.0191004962225, 258.97214628632, 260.0731916118536, 260.90845653195544, 261.57381489910125, 263.5972207875767, 265.5858416323634, 267.6901395595357, 269.58816630447666, 271.99365846186396, 273.8039069241205, 275.7906894397054, 278.2553549555908, 280.2705361462285, 279.92951416714925, 280.58929160902585, 281.64008171067155, 282.58030614424365, 283.47617685222076, 284.2336889647061, 284.83212604230926, 286.05602111991396, 286.44629426552353, 287.6980728154406, 286.64625237907717, 287.7135592940805, 288.77043466217356, 289.5282310335332, 290.72719691897754, 291.65781772850556, 292.72814540148073, 293.8207949705585, 294.6924538284921, 295.64731643070576, 295.17791279258023, 297.1153065774761, 298.56250334904155, 300.3295611837964, 301.88166885727355, 303.6607510621016, 305.3818624886651, 306.97425627043316, 308.8908841382507, 310.57571956045393],
            boulderRepeat: 2.5
        },
        player: {
            startPos: [0, 0],
            boulderRepeat: 12
        }
    },
    {
        name: 'Level 3',
        mountain: {
            startx: -100,
            stepx: 2,
            cols: [-33.62261475174147, -34.77833467721614, -34.793108414652224, -35.099422592380535, -35.929708842147605, -36.39635838989831, -36.61782592990762, -36.877498182135156, -36.95238518509996, -38.21256408482065, -37.38908666771998, -36.60323490667077, -35.49080470506463, -33.54055384295653, -32.9879166700809, -31.73937357847747, -30.389720133204634, -29.38834929742489, -27.47616379338011, -25.96493583151607, -23.600313932501113, -22.132264620018468, -21.252544904780372, -20.2066715973342, -19.13363842959305, -18.379460432369033, -17.569520776353947, -16.614970460561036, -15.407801038036517, -14.048080503233345, -11.005077272286801, -10.197418697993621, -9.1237441324967, -8.449059476549756, -8.5132793511873, -8.078784276674883, -6.744335625432122, -5.9732004441841, -6.09784244292671, -5.599883812166283, -2.547954443028149, -1.7232491754640815, -1.477134461825428, -1.5119026856412354, -1.1769353873943391, -0.4874466106836328, -0.39114443474551264, 0.29898360092166065, 0.6636745123881418, 1.1007268555968381, 2.712645140152304, 3.7135737946780187, 5.181944107688544, 7.08094468868873, 8.383789440817075, 10.027365684264085, 11.1182894860644, 12.988403865630353, 14.554572580625063, 16.01646500430715, 19.86805143767599, 21.04657246780271, 21.85290572274417, 21.902031891715836, 23.58306545495146, 24.176895059151548, 25.345849284795243, 26.007991131748103, 27.117130450572358, 27.337942960601048, 31.240317179920204, 32.10547790694389, 32.169978515652176, 32.41982794906074, 32.49812145658606, 32.812689385190964, 32.16019338417982, 32.8912807880289, 32.83207753131566, 32.89856500786782, 34.59896508615655, 35.172860214634944, 36.291108931452875, 37.508128168728, 39.33538534526967, 40.710346924128174, 41.946047879344974, 42.18600138420568, 43.99496460897049, 45.44559461262078, 48.49626163029994, 49.04347790639781, 49.55757862566977, 50.24178071929663, 51.00830780828016, 51.56043876551531, 52.45629308551916, 52.22591611152725, 53.12623122340394, 53.394005910004324, 56.47702740028641, 56.60855717219763, 57.129068311911276, 58.02966181722961, 58.5002705963435, 59.80802951528228, 60.6464179024384, 60.88675041379432, 61.62747794977594, 62.71683286337824, 63.64146139368897, 64.85094898505925, 66.38098543238661, 68.08090694461845, 68.75580462831466, 69.92508511512905, 71.47947048064802, 72.27367073655485, 73.73596589551262, 75.2712409526889, 79.00195038287808, 80.02683550374958, 80.8569755027073, 81.3519845732782, 82.19507749530888, 82.73360529178213, 83.61025260147186, 84.26935480878551, 84.99761380268828, 85.60208566746468, 89.50993306734053, 90.12116953220075, 90.99795902646258, 91.46851231268279, 91.47643034273369, 92.1616676998323, 93.02938449246919, 93.50431892925542, 94.00565571565144, 94.41062268674699, 97.79153289751973, 97.69092096026425, 98.40644529061066, 99.33125263168353, 99.99943643567363, 100.35642424354987, 101.42609763456302, 102.17073144148863, 102.30104853683281, 103.10886509784324, 105.6190617167984, 106.56688772062583, 107.8082199530484, 108.1412713632944, 109.02391850578367, 109.83988763911104, 111.39923132456282, 111.57166679639353, 112.94762102480217, 113.5255459964016, 115.90291999901312, 116.64058121268808, 117.12291369190025, 117.85899640581948, 118.37003204078869, 118.98137559704632, 120.03204371610431, 119.77661484330524, 120.71055946161657, 121.30153414126937, 122.67132587724029, 124.22190879568434, 125.74189441835564, 127.89034301191951, 129.00087047385986, 131.18203533341432, 132.51259398960983, 134.41076267287173, 136.10666862737037, 137.4563278300904, 142.92659465278035, 143.29765402304037, 142.81673061282478, 143.43010538497418, 143.46690101529492, 144.69400643371185, 144.70666424446867, 144.4115719909987, 145.00731545125717, 145.82797068839304, 148.45158961082424, 149.04688921796645, 149.8228691002634, 150.57848505803307, 151.03399831849126, 151.76958849213935, 152.80225280160877, 153.2267653496812, 154.33041715777074, 155.03586558603118, 158.4994471604606, 159.66697007658559, 160.64971174411963, 162.1979299277112, 163.30282355782316, 164.36190058835626, 165.00057357129023, 166.4405862736073, 167.54734412581078, 168.16279512549139, 173.82202752254503, 174.0610913850209, 175.01418590536517, 175.7246977025569, 176.29953261582696, 176.27820644062004, 176.89779332046163, 178.2506434984405, 178.13730120235394, 178.739693432377, 184.11294192495677, 184.32247817973212, 185.18182370512682, 185.5814464914539, 186.0841739611442, 186.7711691006671, 187.45306856846491, 187.53466093129921, 188.4754389997568, 188.78961685806604, 192.97889117741263, 192.89188972632866, 193.87205961018046, 193.87060155369983, 194.63372450236835, 194.36001796870204, 195.01190540932558, 195.85529057187483, 195.81871006910185, 196.1875205862723, 198.61836600174064, 199.48499340099704, 199.49487844180868, 200.3515390393529, 200.85299932129797, 201.28701018309886, 202.15387853472006, 202.21892610236128, 202.91044275470708, 203.65415215226687, 205.64861494533923, 206.99901661404937, 207.44887474843912, 208.90379515898834, 209.93901745611095, 210.4710168772791, 211.4104301481151, 212.51894615141686, 213.46478146902305, 215.004453464817, 217.7995799889208, 219.20945723419192, 220.26717074281885, 221.0518846707855, 222.4999539110689, 224.14175067397017, 225.1501550580102, 225.9577450800628, 227.35896143165832, 228.11916465319723, 232.6400645123005, 232.95921090079477, 233.9024982470355, 234.70669075332518, 235.05503256990156, 235.12494061999092, 235.2759440680751, 236.10175179851282, 236.59931899213606, 236.95638235106816, 240.55017934147537, 241.5673143710552, 242.2100200435617, 243.96969920573414, 244.548060051922, 245.4383371837987, 246.75424287334707, 247.88039272277456, 248.95252058385935, 249.6915832500633, 254.59239385305105, 254.4357020740089, 254.34800410223508, 254.06849762682555, 254.47635262145147, 253.8806618939101, 253.45834899627613, 253.6128712040505, 253.0201365138913, 253.05288307932656, 253.67149751050684, 255.05959345356555, 255.32161303809363, 255.67293147357498, 256.6153406034809, 257.31393183626693, 258.4425076772362, 258.7980558260383, 259.76995785384133, 260.9264675579814, 261.22825124946286, 263.1966447340198, 265.14710048257945, 266.28491344772294, 268.19899347248185, 270.263401327007, 271.85151208810373, 273.33862954928156, 274.995993292187, 276.47475409432894, 281.53604722625346, 282.5456222638604, 283.0419122990623, 284.13101663112127, 284.52601818900484, 285.64504201957186, 286.5463733745119, 286.90634882133986, 288.05058714603734, 288.59282949196836, 292.8581377233601, 293.45960019888247, 294.1567380732088, 294.41269833216285, 295.49098479442733, 295.99746448752484, 295.95004234394617, 296.2131137434717, 296.6214599358814, 297.2896203097859, 300.9056342804082, 301.5152214421413, 301.6440037087292, 301.3424986416837, 301.73830997093444, 301.89797221333157, 302.72922587298797, 302.94481882930785, 302.92814919067774, 302.86197189200215],
            boulderRepeat: 2
        },
        player: {
            startPos: [0, 0],
            boulderRepeat: 10
        }
    },
    {
        name: 'Level 4',
        mountain: {
            startx: -100,
            stepx: 2,
            cols: [27.381985476711787, 25.419684881065493, 23.89759682167376, 22.78860867026989, 21.051729308932963, 18.727996217582977, 17.219829885892164, 15.473772481488297, 14.519245298261417, 12.608818130294566, 10.503273744699413, 9.68349742433383, 10.618153398766424, 11.552647008111556, 11.291169933203463, 11.879035290909936, 12.789641876344998, 13.010640552625922, 14.096817868030087, 14.63059092443131, 14.723960046927274, 15.188270971358214, 18.063973015296447, 16.82316195793555, 15.297767981764359, 14.149330299226847, 13.16267833902717, 12.164930603582413, 10.660513178810218, 9.917549169215983, 9.156321691956066, 7.733289476379314, 6.439313512363455, 5.44577538209187, 6.346826447461037, 6.596143832703277, 7.179763014255219, 7.707566069334657, 8.964723584254067, 9.217766336771213, 10.35742423643402, 10.628616407253869, 11.428813489082382, 11.921635775851492, 14.07661010322214, 15.216853576525029, 15.690023671778826, 18.46575075428361, 20.18199224076289, 22.76006705022012, 24.91016383886985, 27.389023176715234, 29.402418243839733, 31.825024780432592, 34.310886008031204, 39.15901104680232, 39.534048937840055, 39.233345814969546, 38.73660060810779, 37.668615751185946, 37.925282831195574, 37.02325504720949, 36.74327349424665, 36.77857698554942, 36.17947129407295, 36.080437378682205, 36.340501882032555, 37.846179697550724, 40.407879832372686, 41.83764999611657, 43.86750079583831, 45.69020593620818, 47.88052309635148, 50.55467334914299, 51.88196089745535, 53.969030114729875, 56.691775356223985, 60.63122687785808, 60.695263572802006, 61.50049518028498, 61.97595866702687, 62.732368590226095, 63.31382467806877, 64.28880535955957, 65.04940201581528, 65.67706155308575, 66.26727454664734, 66.95488953294631, 68.27865690612087, 70.1164770860592, 72.51056659176561, 74.9966476618862, 76.61402974098914, 79.08537275126201, 86.33780466903707, 88.40010688645349, 90.78583191749547, 92.44916995550602, 94.85817244959347, 99.15683494806223, 100.58275714039125, 102.0063966116528, 103.85685148214517, 104.78350371689967, 105.99039007302221, 107.66568727015715, 109.04464849769789, 110.50587370970557, 112.15169205306537, 113.08222842955902, 117.17539886773793, 118.26277280480406, 118.93961344694576, 118.92902927708575, 119.98805376615913, 120.9074758514155, 121.24020034272242, 122.1008436465709, 122.55620398639087, 123.96348965126765, 124.12446270208643, 126.29583342339609, 127.34266094914642, 128.18971826751198, 128.80782485501294, 129.55136390423888, 130.5019303095624, 131.27754598963057, 132.75976263575868, 133.58183669167397, 133.80623499661772, 135.36744761183854, 136.38515137570536, 139.1941694010127, 141.31175262541808, 143.7508601644422, 145.71941778379488, 148.34217951336035, 150.75518140660682, 153.50341119882324, 156.15209557087013, 168.65557002248622, 169.40999134103507, 172.6529337788741, 171.4982837215972, 169.6003403620732, 167.49649166895793, 165.78895965958537, 164.51387848363674, 162.91633944930712, 161.14033458571444, 159.2491243360207, 157.41409670757636, 156.0728622133759, 155.1944754965901, 156.02057968635071, 156.29523919950088, 157.08945157073805, 157.18134306554373, 158.49584717723232, 158.4837411209823, 159.14659697809634, 159.5711547958996, 160.88354632069368, 161.42350426676092, 164.49892862708907, 163.95306365143358, 164.05057742120255, 163.51238649383902, 163.86085369995868, 163.17923449011454, 163.29280388931556, 162.79980266072113, 162.67626263389565, 162.3799585742252, 162.59768843314865, 165.30937205672598, 163.27901362588983, 161.58181296758093, 159.38240693197892, 158.04662522001163, 156.4356634250662, 154.18146580861657, 152.05413227494256, 150.89560239685244, 148.9349281651245, 146.63792598742774, 145.44537444089354, 147.1506345124218, 150.05203897432173, 152.7604914005408, 154.83063744922885, 158.10785971940606, 160.5103379792035, 163.64732586882576, 166.13444600604024, 168.58498020421018, 170.89999162314547, 177.2000029524258, 177.68215460045633, 177.9901340854006, 178.58309552245908, 179.26054083064716, 179.64373520943843, 180.62055643100723, 180.59645112881327, 181.85005512473597, 182.33179562152895, 182.3204647775211, 185.20057430859578, 186.0148004285623, 187.7003736853123, 188.384561883662, 189.6439209371881, 191.45973974580073, 192.52846090793642, 193.48933871811474, 194.34436109638233, 196.25054341032308, 197.16829161668835, 200.82882954008127, 201.52618870987448, 202.68455912750255, 203.5690049238423, 204.51556969560895, 204.8992604323118, 205.94621324158567, 207.16779433632263, 207.7399736370272, 208.37603475751033, 210.06646085047439, 212.13773251652552, 213.32018575297036, 214.26082293501582, 215.29735841903374, 220.62493477079764, 222.0244771934117, 222.74306606251443, 224.29462673390233, 225.6232541638791, 226.9236754852953, 227.52754162931936, 230.0315813240308, 231.33161071813254, 233.4660548159906, 235.3970037284898, 236.73235567714164, 238.2563087868498, 239.84988531370902, 241.8621315406577, 243.9679450697057, 244.9445144165622, 246.90220765598502, 250.0337535057665, 251.72863584321152, 252.77237233419146, 254.52125878653774, 255.05422550503266, 257.0477644153016, 258.40094983818125, 259.50405369121745, 260.9368204814107, 262.2723643626979, 263.2427937854923, 265.27797562154865, 268.3363070219191, 271.9611510177556, 274.629306868516, 277.53755504548116, 280.13915735650244, 283.5782935914746, 286.3014450822994, 289.3560189395445, 292.2892821365904, 295.07671707643294, 301.1281380505449, 301.6283406575006, 301.5834349543984, 301.2683048480757, 301.248475592169, 301.87212514447145, 301.74765314993266, 312.8369797527574, 312.32291692823856, 311.22187667665787, 310.1267412341712, 310.2047889665766, 310.78917638462656, 312.30376622247366, 313.00271320479237, 314.08683452101934, 314.2848966101473, 315.3467106079176, 316.26671736107187, 317.30866422264205, 317.9278483615683, 318.9885912517191, 321.3354520584254, 322.5083852205722, 323.0252424944973, 324.0247528690214, 324.73587957954123, 325.3491680772062, 326.72577127845045, 327.34295741393043, 328.26903124996414, 328.8531575109382, 329.83016375796007, 333.26668492027386, 333.99098439583605, 333.58602617700745, 334.5926830787592, 334.2945744400843, 334.92727223175484, 335.6747816410576, 336.0348623204236, 335.8352752234366, 336.07064310584497, 337.05280916164406, 338.77685316524696, 339.712606557916, 340.34842450603963, 340.87276913244057, 341.13430139362134, 341.89039996159227, 343.02546678791145, 343.3363604002824, 343.83280328581463, 344.2744078145493, 355.67633422477826, 358.7662515096733, 358.3430786035735, 357.8249371940457, 358.51385425398263, 357.72312708552835, 357.7217188485849, 357.8751891435391, 357.29325795727436, 357.214105225583, 356.9848954885635, 357.48329270883846, 356.817212205333, 359.11981873128855, 360.8134576130825, 362.94256903268945, 365.6917003842067, 367.5636443233476, 369.26493260039, 371.46190539318684, 373.37308927747154, 375.4550083987534, 377.20564127151374, 382.01010955027806, 382.8770542097335, 382.4684067950957, 382.94682218537747, 383.40629090264554, 383.0716785879091, 383.6774241742577, 384.0145278826325, 384.0818318935099, 383.65307726039606, 384.3435935075786, 386.0834106675226, 387.34881243255137, 387.9065665635658, 388.62940536769844, 389.7239649280155, 390.53104180694214, 391.6690501380967, 392.1937676027604, 393.0778224304063, 393.8426106603782, 394.98728525346667, 397.95072439956556, 398.6867049490749, 411.923820963213, 412.9510832941679, 413.50428833214227, 414.8187329287797, 415.8070339654235, 417.2524631109176, 418.31041132031277, 418.6148843603729, 419.61024367696353, 423.6176025218166, 423.7644409345545, 423.3810011909132, 422.8293924790373, 422.90684194371704, 422.9729445403906, 422.20477885325124, 422.58227090861374, 422.0794064577462, 421.4806294297546, 421.3494447041153, 423.2554582840253, 423.8241793150668, 424.73777124486566, 425.57187674676925, 426.84968041905086, 427.7609513251328, 429.0379133734948, 429.2703007379358, 430.6184407645829, 431.94746015788996, 432.2560056113271, 435.88046724320793, 435.93922635485535, 436.57954595610374, 436.30213069691973, 436.4348530991207, 436.06367056067415, 435.93032146015713, 436.3058914836894, 436.20691479683137, 436.7922937333312, 436.27932177450134, 438.8378626560525, 439.4919327563317, 440.8535752652107, 442.4861718852402, 443.6977806810079, 454.74985135548775, 455.76291599854886, 456.18557257511804, 457.05867990774686, 457.77236717430367, 458.00400470080564, 462.1411809513244, 461.3265085506184, 460.64895451781916, 459.36606520962334, 458.324108428063, 457.21124872725954, 456.4867801153875, 454.9472805594802, 453.8932660466392, 453.47413223856165, 452.1844691453312, 453.66889329324016, 454.00107875537856, 454.04955799582365, 454.51504152134464, 455.2440497637284, 456.28313844701734, 456.1762192432191, 457.0712556803632, 457.72162343870014, 457.625966493203, 458.41662567338636, 462.17323029777435, 460.4314502149355, 458.23424157911575, 457.0706194904231, 454.64678569494185, 453.0450404013182, 451.0791374437618, 449.3836354532816, 447.4446714893515, 445.0646259982598, 443.29311643267147, 441.721466101177, 441.7370898735393, 441.82664455991954, 442.84074382845824, 442.2293132928883, 442.75033843941037, 443.46273050497626, 443.0779155127362, 447.53174876208766, 448.0369650058938, 448.86047380093834, 450.04430134368175, 451.30861041732203, 451.76267868564696, 453.04769325767, 453.9504466410117, 454.72956546572317, 455.60539587213293, 456.65651201622404, 457.78971407125493, 458.47911352795774, 459.2782426536558, 461.9973545310207, 463.2826506639899, 463.9817640237973, 465.3213638414881, 466.343123523826, 466.460268099866, 467.80009768747607, 469.1791271218351, 469.4584587058834, 470.96892775249967, 471.51979984994864, 475.59631253967643, 475.87263847571137, 475.4470076455701, 475.50006104737633, 475.58654728712935, 475.6574708261055, 476.1377167627266, 475.7203224382048, 476.1331707311421, 475.2382090828339, 476.0493722104008, 478.1670100710912, 477.8185025646075, 476.41156164068366, 476.197762340834, 474.9189130121733, 474.1266917766465, 473.8294210917355, 473.1805971216935, 472.6144746083928, 471.50057196954276, 470.76094650663015, 470.3722547664549, 473.8008919350736, 476.587987796505, 479.47299839160866, 481.9278621888206, 484.7467675197968, 487.31843433390935, 490.8660803461158, 493.4211584539745, 496.4757658349906, 499.01479302907774, 503.19364931598284, 506.36180028335724, 508.92854342244874, 511.40688455343707, 513.6518391140486, 516.4796881129627, 518.6870723722695, 521.3018532603204, 523.901300730603, 526.1863061048683, 528.7844562368491, 533.3393893385952, 534.5273431802301, 536.6371111443492, 537.9705493171551, 539.2451554659858, 540.2953291996447, 542.3796164892256, 543.0408198628186, 544.499795442197, 546.2100112162657, 547.3130624448451, 550.2214634233043, 552.6895084208278, 554.4071134711985, 556.9249333761901, 559.8281844672788, 562.1642052080737, 564.4998316868694, 567.0087517104233, 569.7421772801619, 572.1731762966915, 574.1341205100481, 578.2930184233367, 579.6483672736613, 581.8108648777862, 595.18583365331, 595.7176117639201, 595.7985506998359, 595.8236156515952, 595.4915989665683, 595.1850495120154, 595.192648019736, 595.114955269041, 595.9553441735893, 597.7315395096977, 600.3729636326052, 601.6974916960428, 604.1173218144328, 606.2919556576348, 607.6441744679672, 610.1003025968432, 612.3949807147552, 613.7116941982432, 615.7309253343462, 621.6018994582639, 621.4203395029531, 622.0512012608231, 621.4768110117128, 621.2876790414991, 621.2772395371368, 621.0107159458813, 621.1188447266502, 621.5838180296305, 621.6431323662509, 621.2433710148396, 624.2360859049005, 624.621051745717, 624.98091942698, 624.7686923848871, 625.3884580612266, 626.0236660070783, 625.854250594811, 626.3049753436317, 626.8431447900413, 627.0128384257309, 627.5012989703873, 630.9267827334472, 630.9444891684552, 631.0123646175232, 631.5070500285142, 631.3022918607022, 631.7064491603309, 641.6801782569572, 642.021924055124, 642.3938527821275, 642.7753670731, 643.010929609631, 646.4588049908475, 645.9626251078103, 645.8334481292785, 644.6428346808726, 643.6982818691184, 643.6348220496415, 642.9252006336569, 642.1207692485572, 641.7656419280296, 640.2669152890081, 640.4306391521993, 640.3360959522713, 641.0830911785145, 642.2830094283014, 644.1419439905385, 645.1886148798521, 646.6980270692515, 648.6681353007295, 649.3558127243417, 650.9173806487748, 652.873727053566, 653.9807833615771, 657.4809781498215, 658.2035541625029, 658.7187549550123, 659.2318002569745, 659.5206569918264, 659.9529399479263, 660.6051977174626, 661.6156459131743, 662.3876482986502, 662.2880586704796, 662.9549274160099, 665.7197363877531, 666.0168325400327, 665.3392949182145, 665.3168070985076, 665.6366246031513, 665.624797275829, 665.1526765957519, 664.8484712434556, 665.1059776420128, 674.8944623298654, 674.4283456176288, 673.8875201999441, 673.7288002296729, 673.5772952413316, 672.5882104801165, 673.0317030250045, 672.3488117420076, 672.2052047321108, 672.115156842018, 672.0002660395269, 671.4225978307493, 670.8851521012712, 671.32243928792, 670.9739276016585, 670.9795733187103, 670.5093944396814, 671.0515636054976, 670.7149120702045, 670.8643078183875, 669.9592062650611, 669.7522758228645, 670.230120738535, 669.4548236274509, 669.5188440418392, 670.4268952408725, 671.1943321250724, 672.7121978521353, 673.1833674032692, 673.706957894068, 674.4174572023561, 675.897380524378, 676.5917055342538, 676.8110513246083, 677.5556988545579, 680.6564867138148, 681.0568818301767, 681.6733203250539, 681.9866266730942, 681.8811739513148, 682.0199350641665, 682.4628115956195, 683.1318968132866, 683.1767451554936, 683.7527383958701, 683.3632936614914, 687.6820269412253, 689.3051912959651, 689.2591813882527, 689.6773455042471, 690.6981088577382, 690.9927617318109, 691.3951390275502, 692.3728272163626, 692.1317422638783, 692.7343359561892, 693.6680789758157, 697.4522060830958, 697.6628608931604, 698.6889087337607, 699.2620792172964, 700.2603785658426, 700.6628262932393, 701.2896337571271, 701.8473616168858, 702.6270734549737, 703.1920434912128, 703.8989844009723, 707.7131440747169, 708.4484025324672, 708.6738870764202, 708.4788960424912, 708.8983934397181, 709.1771502354899, 708.8555605254, 709.3891900438082, 709.4550558446188, 709.3939201046268, 709.4106151716737, 712.0869768979506, 712.5363905986312, 712.3501099811018, 712.1468133878216, 711.1480536642571, 711.5972163439191, 711.1714688211046, 711.0323952506525, 710.2494122540373, 710.4795290708769, 709.723618844889, 710.7104473921733, 712.9135133283314, 714.389428876015, 717.1291891182276, 720.5514468401973, 722.7848656838217, 724.9625499859454, 727.0385423011737, 729.3218444415812, 732.4505039743838, 734.7712211436656, 740.6009051841124, 740.789282002555, 741.0647377300152, 741.3825317705623, 742.3291734356935, 743.1839788531001, 743.3500107092356, 743.9632353034714, 744.2817266358147, 744.9354367536994, 746.006039007682, 749.3297844356246, 749.68020196344, 749.6355454911765, 749.2315938033054, 749.9710666624233, 749.5477928071356, 749.6492733656037, 749.9117715657037, 750.4992165865641, 749.8923599090467, 750.6352557166665, 752.4599571457131, 752.2997692358964, 752.4832698328936, 752.3945866212464, 752.704011963543, 753.2461641739263, 753.0856709940164, 753.4766384879047, 753.3406998567482, 753.5864467670327, 753.2944488550522, 753.8814734320333, 756.7284451044409, 759.1150997641357, 761.3871529436813, 764.1029925985266, 766.5211626985089, 768.9718017842748, 773.1150985551585, 776.4576748011185, 779.762074728216, 782.6992444679777, 788.9990821799661, 790.6793927174598, 791.4739796925556, 793.2930531977352, 794.1625788681533, 795.9295885006935, 797.1200617232657, 797.9855774632091, 800.0337330546776, 800.5351590846459, 801.8666094358113, 806.0306598024958, 807.7455756244701, 810.2139505131107, 811.3661442889897, 813.4975076315325, 814.8838560933766, 816.8487255875137, 818.4808501424637, 821.0519373001259, 822.3884894189424, 824.334439213309, 829.2794836159619, 829.7016612338384, 830.312965652694, 830.403920997665, 830.4978767329211, 831.1111061495782, 831.1038844422436, 831.7671890242227, 832.0272546045799, 832.924561560673, 833.1974066666766, 834.181288126156, 836.4136949216305, 838.1426250791349, 839.976737741945, 842.2383662933061, 843.8912465754485, 845.7430625915161, 847.6693047331888],
            boulderRepeat: 2
        },
        player: {
            startPos: [0, 0],
            boulderRepeat: 10
        }
    },
    {
        name: 'Level 5',
        mountain: {
            startx: -100,
            stepx: 2,
            cols: [-41.45427417832834, -38.74956606448926, -37.59359276427091, -34.66436237768256, -33.18503187078917, -30.935741180323593, -29.030862159525405, -26.861279525070515, -24.620119179547924, -22.42879918305737, -20.86842915497448, -18.629749956229883, -16.485363284098852, -18.051817633591327, -16.016077879779036, -14.778805905250607, -13.334292461991136, -11.96670637892949, -9.767425771583046, -8.735833874242871, -7.039303949648849, -5.556352384829712, -3.5417139864584755, -2.2677661530668747, -1.3621640309473015, 0.19094074371856706, -0.0551179531692334, 1.1700061233050043, 2.739548105659818, 3.5328447478082943, 4.694984075621555, 6.159564489807879, 7.172204303024413, 9.34343040653777, 10.290878242167528, 11.604555619759203, 12.459147295204106, 14.476320666679609, 15.207592575865393, 15.691940168203818, 11.181370197496475, 12.979241810082186, 14.546972925914798, 16.242676876232835, 17.9326279016524, 19.388083640739623, 21.42261798823714, 22.90793447695529, 24.60321949316007, 26.322662419921244, 28.844040483979565, 29.859083732005793, 28.734925641432557, 30.315053741389576, 31.559858451026727, 33.31515006778343, 34.40638248350664, 36.576334494171746, 37.68235757806123, 39.275539952224165, 40.79982280098336, 42.212981290456185, 43.35556384906555, 45.04825308342369, 46.74939819422876, 45.15040489737918, 46.47043473473695, 47.17585099334501, 49.52931972183883, 50.65351952636995, 52.07597266727048, 53.937732580786324, 54.919515243454754, 56.199005953718185, 58.4607923053013, 59.84083718797153, 61.246537150372916, 62.12475128739216, 60.81696358390463, 63.00581396279131, 57.364933049819186, 59.49485440118789, 61.04611772084134, 62.10244319673387, 63.374531601464156, 65.01213208161016, 66.79734413831598, 68.20593214273366, 69.02555979227546, 71.03028742904682, 72.40037686107956, 68.63036770961912, 69.02095751509772, 70.0781736075665, 71.14674868978508, 72.42934184224886, 73.01394166063523, 73.87050588348139, 75.29707286190447, 76.02284083739944, 77.01731041352068, 78.25954784376302, 78.68373458415769, 79.67416221206346, 75.98443202056289, 76.95296407036409, 78.15555236976402, 79.42149777888805, 80.07538686313927, 80.88177018561879, 82.03694020056247, 83.08606129151501, 84.1618693292752, 85.170340851209, 86.39380413664055, 87.2793407942762, 88.32985635741333, 85.11904610561457, 85.18053170007937, 85.43970047707671, 84.31819573127143, 85.03862027963878, 86.86135436419382, 87.945570249451, 88.31429965674138, 89.51167819156404, 90.49119119442308, 91.3410203981496, 92.3236227032926, 93.3020197952809, 93.27895390313151, 94.83189402521333, 96.20381017238923, 97.96761340196191, 100.35749785333596, 101.73213180202282, 103.18963742137234, 105.21913902319832, 107.09948143492842, 108.83005856602944, 110.90227834007102, 113.00433364972119, 114.58867886859618, 113.68486526690295, 115.60653346809846, 117.78376227832345, 119.38264494113979, 121.29615645837161, 122.48663250249786, 124.09282250716883, 126.1514784611231, 128.33582019185752, 130.33632985941784, 131.97393858038635, 133.19589960462412, 135.17764708297804, 134.59334920013254, 135.25770748094385, 137.57215615165467, 138.62719877163917, 133.75233628261282, 135.84825926943802, 136.53592144764133, 138.00207864033302, 139.5206380405118, 141.12447843364754, 141.62290554853732, 142.90549033792945, 144.33764517560354, 143.68354876664912, 144.56639188473582, 145.1420754298757, 146.194865117495, 146.56408844011227, 148.35543642314408, 148.6073891629773, 150.14200513782038, 150.98340578019605, 151.53965573262872, 151.9253227883134, 153.2536547954839, 153.81070280666023, 154.73431556210963, 157.59490261439836, 159.79081782404367, 162.20128085798717, 164.39766966174366, 167.46858660888296, 169.9768376974464, 172.09163352508733, 175.46656520236346, 177.43452313019685, 179.81140668279244, 182.52607584015945, 184.88332059801309, 182.38480619778935, 184.1637460133796, 186.08753626839902, 188.11637746024707, 189.93437426051983, 184.4201024735102, 186.18432907205178, 187.22524307729395, 188.90463635628424, 190.795771587491, 192.1620624864598, 194.3118757634081, 195.81123770366344, 192.1787144065741, 192.5355022868049, 193.44234079099562, 193.42742808300846, 193.90217382919357, 194.41637209416666, 195.90667988957946, 195.69478603854617, 196.36083066711166, 196.9207872116185, 198.07271434389347, 197.7709756385831, 198.7267714001024, 198.03623868196937, 199.2943405181669, 200.2668459054066, 201.523061523085, 203.28721177750467, 204.64568048953396, 206.49443362366569, 207.75270163260967, 208.82746103509874, 210.51989720075193, 212.40585756697354, 213.03441849742921, 215.0385082734447, 213.97040577933248, 216.12448584215807, 217.2897971268011, 218.97080731207114, 220.39315650147665, 223.00142498305087, 217.15787057900553, 218.5601873414581, 220.4266959979475, 221.55545990920743, 223.87300329559682, 224.83510768003424, 226.78406070782574, 225.26035815705814, 226.9817257064328, 228.64612437376798, 230.42283140379726, 232.57702942822064, 234.57414721950533, 236.5259954866135, 237.89321594846825, 240.27622122282136, 241.09244760488795, 243.8257950475524, 245.36595038717633, 247.2901844445842, 243.60477693132168, 246.02852727992823, 247.49113927196902, 248.9432435937298, 249.88331755506653, 251.56336088583328, 253.11430185978557, 254.50340276904706, 255.38748319357202, 257.04898263319564, 258.47658843537795, 260.5648358273698, 261.20398361196396, 257.9487723123868, 260.4670985652629, 262.07557025633474, 263.74634476826867, 265.0556474182836, 266.76900482272197, 269.1004687507233, 263.5774790904684, 265.0735788868604, 266.41494196398304, 267.9976414802326, 269.0362738469561, 269.8221217078865, 265.9490316687911, 266.036228947741, 266.3867199706522, 266.4624338088754, 267.5709875333512, 267.4702629953332, 267.8622459937554, 267.93416775610353, 267.77788192474577, 267.5552701611887, 267.9159013525442, 268.738670933474, 268.92194823797104, 267.68557084836516, 268.3171946243817, 270.0107374448982, 271.31184847121233, 271.7436139049028, 273.2411985940028, 273.9422068275453, 275.1600238984991, 276.64573178661146, 278.3333325038641, 279.1960100855455, 280.53642494784566, 282.13121416446165, 280.2462899670038, 280.99440558615436, 282.28201923705154, 283.84146754572606, 285.19345007097934, 286.7455310028704, 287.4315564832488, 288.98594797561816, 286.98806699146627, 288.4196463768841, 290.34601753132245, 291.8495280239039, 292.8838748554966, 291.52738258716585, 291.43990804113287, 293.2059452941779, 293.6903117781334, 293.9144519697117, 294.68440527191706, 296.2027366523566, 296.9047645212279, 297.55599858989655, 297.74762854132973, 299.1636013463914, 300.0555605964523, 300.6111129985173, 299.0157458140251, 301.00892113973777, 303.7295177084116, 305.1704787125059, 307.4254068958511, 308.3611733341803, 311.2427747412949, 312.77634951552625, 314.9404650325028, 316.5978646328131, 317.75260095895754, 320.3571843141432, 321.7891061853774, 319.0153683505621, 319.25456430492255, 319.62920702497416, 320.2225850062713, 319.85572562811427, 320.5618216817111, 320.488716594233, 320.6767420897984, 321.5102990766707, 320.04017882421317, 320.50119530488746, 320.4685493995902, 321.83276410169725, 321.75038725941295, 324.19687051920823, 325.7573436926086, 328.0261428117806, 329.69873932666854, 332.16177395550164, 333.21854997020046, 335.13693964346544, 337.3089704533102, 339.21092605519675, 341.67003849870656, 343.6005138034691, 345.733562751266, 344.8917009101324, 346.2748114676847, 346.9302001331206, 348.3452831002555, 348.3738797373144, 349.74920289231267, 351.23972157718697, 352.1761037373882, 352.39715844530116, 353.5190682040899, 355.26265048289906, 356.1308239906219, 356.65955766578844, 357.4194209831968, 358.6685511861644, 361.4210929128055, 363.2994738741479, 365.2734159792685, 366.2403992499739, 368.71297474104784, 370.03158956104505, 372.0691649225144, 373.81216662274005, 370.50771037951057, 372.0190630565356, 373.4651525037109, 372.2941814187775, 373.4585215554805, 375.0910592605556, 376.3250645289251, 377.3162195873219, 378.81628700214105, 380.041345968301, 381.1226963302142, 382.20751008444296, 383.59953337891193, 384.0656330924161, 385.3614017605086, 386.424986254142, 385.83430419186504, 386.51228700655633, 388.57355630608185, 390.7189201268711, 391.78406975458046, 394.3072255310663, 395.5275927790065, 397.729628337141, 398.9267906377369, 400.990323995336, 401.8853904790102, 404.2514927455391, 405.3346464279619, 402.62407213608407, 402.531172711457, 402.49571112772765, 403.07772264951274, 402.7970331274545, 402.4825167240514, 402.43337258940596, 402.2038213486744, 402.95688204342673, 402.7259978171239, 402.8609795378867, 399.60201383846095, 400.11481399558335, 399.7207171460603, 401.6572251316514, 403.8547710462078, 406.36486289133455, 408.3596352556605, 411.046288702402, 413.36390332678553, 415.50039206302, 416.93400121114036, 419.5629051748659, 421.657235507811, 423.87233865576343, 425.8530729675957, 423.3433490966775, 424.36395992542134, 425.30389534107724, 425.6863798479914, 426.97182127928386, 427.5942966462187, 428.35257875720004, 428.9606707387167, 429.59715099462505, 431.02048248425865, 431.75647031832113, 432.3377236024445, 432.62906824315354, 430.7171870125123, 432.89492438767405, 433.7555933916664, 435.19964184082363, 437.2987706180563, 438.479870305868, 439.63759542688797, 441.991179826362, 443.09751150108104, 444.5874052004876, 445.95311656706303, 447.1901563802716, 447.9394127307729, 445.45514396144677, 447.6032993246903, 449.06179513593094, 450.0033588499393, 452.53827665564563, 453.87278089312116, 456.0353084958591, 457.52043172839194, 458.5796134216812, 460.85064692417285, 462.30650625130266, 463.5093944800693, 466.16994205906275, 462.20229338801755, 463.47214600546357, 463.7218499815936, 465.0065989042096, 465.6167549793204, 466.84174881702495, 467.245642887699, 467.7288899186458, 468.69326781479253, 470.3641313835549, 470.4884577146946, 471.2437810664708, 472.85002452732033, 471.1680469886333, 471.33881566711693, 471.98410629522124, 472.74973134971356, 473.74305856195696, 474.7336256033214, 475.750809491709, 476.48908601329276, 476.8118031973611, 477.2201350300479, 478.5405885583214, 478.8449232245424, 479.6346295378983, 477.87649759527915, 479.50006178556436, 482.12634329571966, 483.87014038597323, 485.50944238839844, 487.6765477239057, 489.8066898365765, 491.4094371414373, 493.6881201774913, 494.81620355397314, 497.6194166540702, 499.1110785147722, 501.38284416627414, 499.495352378266, 501.47905096624083, 503.089460083391, 503.8249875771521, 506.25261433974083, 506.88546765104144, 508.28526675229915, 510.1093051588767, 511.38298965465253, 513.7786653952763, 514.8133723543248, 516.6296558014037, 517.3468342845055, 516.0280069228254, 516.751206766096, 516.8810405006632, 518.2428796885526, 519.2409644373045, 520.1608653563165, 521.1737202233571, 522.1269340813035, 522.590864891819, 523.8491112928452, 524.7397912171136, 524.8925530816311, 525.5398952972347, 525.4725746377201, 523.0918889356195, 525.3236808220364, 527.1620956709336, 528.4385668404836, 531.0874420149084, 532.7043790195212, 533.8849400050354, 536.2003603767879, 537.3313295641326, 539.8700013574917, 541.2554278501765, 542.431437874155, 541.9195091196191, 542.4557817165582, 543.745433583248, 544.6490271958113, 545.5128355822199, 547.0316961178953, 548.4016851598452, 549.0210961698759, 550.5140938054726, 550.9523948802702, 552.6600345679849, 553.477715763305, 554.3105809690462, 553.8054666552141, 556.1575905035622, 557.6179723191119, 559.6525958647512, 560.9290258834042, 562.8656693354684, 563.9803902561484, 565.6966630066117, 566.9636982486553, 568.9659174708216, 570.3701333975825, 572.0927238370911, 574.2816679142418, 574.0324701997528, 575.6344302998435, 571.2552847994713, 572.0315409411793, 573.9887894858374, 574.8205923376879, 575.9438924420231, 576.9719687462795, 578.4931575998853, 579.2528680852049, 580.4126242051298, 582.6222536851444, 583.5288554663115, 582.0126158495528, 583.3844855821718, 583.8653195402086, 584.4035103541102, 585.058777137254, 586.1384820212448, 586.2747806189147, 587.8434893312224, 587.6859640690318, 589.3660230556515, 590.1036120759873, 590.1229748337798, 591.3995390091562, 590.428855074116, 591.8765082754946, 593.0578043072721, 594.3238212635421, 594.8029833816646, 596.5453293139828, 597.2404490649925, 598.7288592844005, 599.5354385267939, 600.7588502166586, 601.1954421134411, 602.022023643981, 603.8498436703431, 603.2820772867864, 605.1310528303505, 607.6513437611823, 605.4697126716011, 608.2379911654432, 610.0402183295328, 612.0717561312725, 615.0191418338841, 617.0523776628748, 618.6277417503658, 621.0696374185176, 623.2878677175921, 625.4232216710682, 623.3705622455899, 624.3561922427347, 624.9676742539917, 625.765147833155, 625.9748026625748, 627.3656427192141, 627.5140366362541, 629.0309828608537, 629.3722883897037, 630.2747316286894, 631.2876789630893, 631.9364107187663, 632.2633403955521, 632.0182550621453, 633.3439539773173, 634.5094480157471, 635.4470395931177, 637.3224825739411, 638.5911445369672, 639.3656012402155, 641.061566327042, 642.101297105736, 644.070462395752, 645.3285534714744, 645.970890946736, 647.1331849611943, 647.4703070960219, 648.8886155503192, 650.3853467148433, 652.7975913860269, 649.1094414213658, 650.8494734746231, 652.981729629269, 655.003340162061, 656.3454766707306, 658.6544361217452, 660.5500748231294, 662.4107128978198, 663.88150795159, 663.0126506668843, 663.5531048294256, 665.6409478248744, 666.6971979394963, 668.1101764906281, 669.5144034276829, 670.2477186653679, 671.4887461856995, 672.8490380894505, 674.9903778150649, 675.5728687417384, 676.7577908683209, 678.4674136795456, 677.614979785908, 679.0390880585876, 679.7660507795482, 681.0530688395173, 682.3126843455203, 683.1612108889142, 685.2765565869615, 685.6798846348672, 687.1234392571306, 689.1831024123323, 689.7808028290409, 690.7599467415911, 692.4285597792724, 692.3518760625058, 693.8006778044204, 695.4103728818732, 696.5650278288977, 698.4443477578312, 693.337320273729, 694.242375658381, 695.4557895203304, 696.327672293888, 697.58222186094, 698.3854006145395, 699.3067237679347, 699.857476278537, 698.8950230229714, 699.0593597447519, 699.5660778095831, 700.2551414186534, 700.9761962271853, 701.3484126386563, 702.065803809325, 702.237442165551, 702.6941305935268, 703.1832091486361, 703.7415677345035, 704.0417088778129, 704.3985489821318, 704.3075880416168, 706.012381022556, 707.0302827425392, 707.8514514377821, 709.5006024586564, 710.5207697625304, 712.6546390359938, 713.7653512578657, 714.4294113664082, 715.7811263385074, 717.7953158935021, 718.8859471300198, 720.2338018157658, 719.3051822432748, 719.8662929302051, 721.6595388713191, 721.8981358309217, 723.6663352100268, 724.6955583191152, 723.5742515619215, 725.3933081491958, 726.6650968618818, 728.43910760373, 730.4407524966208, 731.6791582035996, 733.3820445348364, 732.4054403165626, 734.5354281626035, 735.8887790071872, 737.6828506740324, 739.6185482883593, 741.901466404782, 743.5282348474425, 745.6855726635756, 747.4892819855282, 749.4054870763916, 750.7874280629977, 752.3960036432654, 754.8524373331747, 752.6684143981826, 754.8650127968639, 755.6572174847538, 757.4796147916019, 759.7121946539248, 761.3693943184069, 762.8169698781312, 763.7840034171699, 765.3962029245603, 766.840521484708, 769.3856816016176, 770.4662093835791, 772.4399856024709, 770.3780582996095, 771.7080742210954, 773.1139530074555, 775.1114416195845, 776.8950114274184, 778.5997303944896, 779.8145808314441, 776.8463445980763, 777.7159467148492, 780.0538438969401, 781.6619724721863, 783.0873923048114, 783.7944326895292, 781.9805748523413, 782.7071214249223, 783.8487205908615, 785.0040508075839, 785.6828285412537, 787.1612636872584, 788.6666398802597, 789.5435472012022, 790.8141057853695, 791.2243556443575, 792.2070802967344, 794.1709047231252, 795.0177265195041, 793.1042476299174, 795.0012254450619, 796.1218728392097, 797.4856737454285, 799.3916987539263, 799.9308188209199, 802.0488816051295, 802.8480658380075, 804.2052483139087, 805.6803759114955, 806.7195179001005, 808.2071357420988, 809.7018010097623, 808.8143794454779, 810.8661400649898, 812.8559536402802, 814.9834670299115, 817.3492272207515, 819.6148204455598, 821.9380365058863, 823.9782978696009, 819.9875110228666, 821.6786056544281, 823.5234853819662, 825.3176765495352, 827.2035143288774, 825.0984020573784, 825.0831190067187, 824.829691038786, 825.1708911136238, 826.248881933268, 825.6879710836133, 826.7742330093436, 826.6325579931039, 827.4053116250252, 827.1923778020879, 828.0820913919844, 828.256937154512, 828.0986326044184, 828.1051079069886, 829.6665204026199, 831.8526161577784, 834.5781593236485, 836.2646793860445, 838.7873397028322, 840.6675757318523, 842.6131584948332, 844.726376629392, 847.5236363646657, 849.3392684250571, 852.1817416980012, 854.3126740896928, 851.1244494406762, 852.513187112261, 854.7889388493593, 855.6482003352309, 857.0323724944423, 858.4200664369354, 860.2334398201009, 861.8301257913505, 863.565230377263, 859.4119669346773, 860.0050781979357, 861.7762433636158, 861.9344078614741, 858.8859243982831, 858.7632492554648, 860.1519859757036, 860.0027819516101, 860.6455853987678, 861.6575966554581, 862.3323380764216, 862.7703964345844],
            boulderRepeat: 1.5
        },
        player: {
            startPos: [0, 0],
            boulderRepeat: 8
        }
    },
    {
        name: "Level 6",
        mountain: {
            startx: -100,
            stepx: 2,
            cols: [-39.458251480971846, -39.34341541027056, -39.21779576266872, -38.90602215717686, -39.161911842054096, -39.52147633149165, -38.86205683382593, -39.31596190262753, -39.198337646425685, -39.08439540635488, -31.201489261521523, -31.508870326197147, -31.717204183257095, -31.048872760661162, -31.084677451809462, -30.821267094261454, -30.664374312676188, -30.515188789077058, -29.902152123876725, -29.866143169721628, -23.978641973307553, -24.110234084581904, -23.01987356628647, -22.858962066354025, -22.04791076122896, -22.168774327180515, -21.295113124692996, -20.837519608987666, -20.110830741072174, -20.2659125201782, -8.453484490459124, -8.112553904877547, -7.960881268980723, -8.621887135245977, -8.808131087186505, -8.97830536115922, -9.00132444456442, -8.965228093022436, -8.767264801258326, -9.251778173597526, -1.2911332982978578, -1.2806920283337568, -0.20074595572080156, -0.7538604207587696, -0.4331951603718869, -0.18866168919717285, 0.09377445789808014, 0.6335692821586612, 0.606183109230706, 1.0080437389661234, 13.094330388228514, 12.7144975003371, 12.41491945826495, 12.115210303205147, 11.537196091298213, 11.27098000365194, 11.846697699408468, 11.36534691054721, 11.215116067082189, 10.519344371897713, 15.106106651531272, 16.29300943271262, 16.730939472869615, 16.63882409859659, 16.97445208779582, 18.108733134008876, 18.419873500008322, 19.433769358209936, 19.195106364534492, 19.73952894564945, 29.854079294777684, 29.8572169515515, 29.956033058997967, 29.386133630328697, 29.664433202293488, 29.648093096024056, 29.790657783967443, 30.236268841265034, 30.790951245556144, 29.9849564280257, 32.6575047711536, 33.610169275575885, 34.39470790200332, 35.00385668654561, 35.52450910889992, 36.21294472375416, 37.20761555716412, 37.69243236781503, 38.600408070241976, 39.66007132062848, 52.47709809169503, 52.497155123469014, 52.11245197282935, 52.02718793796332, 51.20442101972122, 51.98758172790618, 51.72931415161103, 51.332279048436064, 51.26700151185086, 51.19800931542014, 57.42768352611134, 58.38810258207552, 58.873354659896734, 58.289860238554816, 59.044690471006525, 58.83040470360837, 59.65610433939873, 59.9184650257788, 60.54729160403771, 60.235279654613954, 67.29767375278226, 66.809193693174, 67.83024907685439, 68.31450826968361, 67.96218952454414, 68.8750021698136, 68.81480700623821, 69.55852907400467, 70.06693625319116, 70.72971255578503, 83.83312899855005, 83.78254981117472, 83.19672553785445, 83.08002203003838, 82.01341524444365, 82.08931114135481, 81.30971399647828, 81.65241973499693, 81.18490511530246, 81.34925006885591, 81.96333413623655, 83.13456797038322, 83.37160372414112, 84.57722522629419, 85.6191334286091, 86.08017672118407, 87.19193548506202, 87.65095022068509, 89.28884979702946, 89.96165645644403, 91.62697428912568, 92.58875879894529, 93.66711889889096, 95.18779399645298, 95.50103083361479, 95.94324209181896, 97.04179139113108, 98.52157868633584, 98.53381478186526, 99.62837889964544, 106.72661465742783, 106.84646475949332, 107.2864105629616, 107.98744152330823, 108.28863202235338, 108.33880257024859, 108.7130586672561, 109.10597128354297, 109.58261015154956, 110.56001737573949, 119.17158244880085, 119.20096790293316, 119.52749237035583, 119.26530378927959, 119.40272951495896, 119.58221650241518, 120.09051768122508, 119.65122064631456, 120.04972569011969, 120.0953789999329, 128.15321561457927, 128.12589024090076, 129.02586298675305, 129.2124679017079, 129.19940903181836, 129.24690886967397, 130.09991058386706, 129.84301692844818, 130.37799113579024, 130.83345610286383, 139.55417740367764, 139.2200935279735, 139.99722413122603, 139.28023857101581, 139.68632986210275, 140.21186095731062, 139.66618595143277, 139.9105613973671, 139.9247815494792, 140.9417136251656, 142.23754009423848, 142.47085991283828, 143.02638489675908, 144.38289277620854, 145.7719434340145, 146.5713147044381, 146.6677618671536, 147.43152579877128, 148.653502656264, 149.960664734463, 157.1719236658094, 157.01504119834985, 157.66071370359174, 158.16784206112013, 158.80744648230473, 159.12335915953844, 159.49603890144044, 159.3783780433294, 160.25872304611607, 160.40715718252343, 162.41476952632217, 163.88195108490422, 163.74529720754413, 165.3498668756496, 165.4460201006905, 167.0256086548667, 167.89980004850406, 168.1355237785865, 169.24738445734448, 169.89178273207114, 181.0783642348939, 181.36681092207067, 181.0541635682354, 181.10348074826135, 181.01970108676846, 180.5458401274778, 180.42065194843116, 181.02171218976127, 181.2474321513213, 180.21020248525107, 181.15633524664685, 182.0122449209156, 182.26418415391808, 183.18131054948796, 184.32152638032463, 185.91678466274388, 186.55372215324073, 187.78580475204285, 188.71368508901455, 189.19922132182677, 199.36490076188562, 199.4502405874082, 199.15532382379487, 199.6814409928765, 200.29368636157102, 200.39188804389724, 200.53977624473725, 200.61803180569655, 200.21988729930345, 200.21880191035058, 210.8701153209479, 210.29134996669129, 210.6914480933787, 210.00509818059157, 209.94596692763355, 210.777493652639, 210.80642823859012, 210.5789604337469, 210.5535092827414, 210.94546401042305, 212.95007106368786, 214.0358238148847, 214.55890271182818, 215.99015345582225, 216.33573402922164, 217.23060356306914, 217.34938953403596, 218.94680110812183, 218.68259486884844, 220.2220899756629, 233.1601643318417, 233.88745393099248, 233.03003415221826, 233.16554233624683, 232.66043163464917, 231.81171756367883, 232.3411506060285, 231.93646393096822, 231.8244290107525, 230.8217820564661, 242.77282158348817, 242.94753174222313, 241.99853531837368, 241.97518260607455, 242.26202637173827, 241.85558751184124, 241.54784648770698, 241.01642357360612, 240.83086771294916, 240.27566614031923, 245.85795977335886, 246.1758026741374, 247.15184799636575, 247.88232360648573, 248.50021657217408, 248.00034320431033, 248.62669907275105, 248.79209680469071, 249.33092955447523, 250.4760131458864, 254.3989259585538, 254.85803522375843, 255.53314616382065, 255.77376426391646, 257.00855735954013, 257.6551138693108, 257.66637268215413, 258.137927891981, 259.46449910670896, 260.2385558711697, 264.8281677964319, 265.82172885862235, 265.7999168998892, 266.8106848511894, 267.4797903031892, 267.73242738295266, 268.16795251897145, 268.7555104100788, 269.9126844521209, 270.06251798566586, 279.8982871659466, 280.15532257577735, 280.091114568543, 280.3525955348565, 280.85938574149753, 280.71301015571333, 280.57677919401107, 280.4782671982456, 280.8448498180993, 280.55631366609117, 284.0914637334018, 285.05267481322295, 285.9734521776658, 286.38974543283365, 286.52639022411904, 287.0944503639677, 287.8770096993038, 289.30003215743903, 289.22325804161113, 290.22915384073895, 301.8689770853368, 301.7099171340348, 301.8589867733859, 301.4484253690984, 301.3821286565082, 300.7864165721061, 301.4050181887108, 300.91787024884184, 301.20180668011994, 300.45412446369136],
            boulderRepeat: 1.5
        },
        player: {
            startPos: [0, 0],
            boulderRepeat: 8
        }
    },
    {
        name: 'Level 7',
        mountain: {
            startx: -100,
            stepx: 2,
            cols: [12.796833167176118, 11.787025580712573, 9.783113938733493, 9.125673902106854, 7.940988300845326, 5.932775926444364, 4.6926297635433585, 3.8759193351116963, 8.659399135534741, 7.449489747848933, 6.1998713854628775, 5.680751435995106, 4.691937129918273, 3.5059189136949414, 2.6701640615233977, 2.1774205358241545, 4.477817114158455, 4.826478873142207, 5.015987079568589, 5.036556012056565, 4.989666520156774, 5.446621369934473, 6.1329762856593035, 6.67487674770333, 15.197602132429699, 13.299560256095502, 11.50580622775402, 9.788435584047736, 8.348742211378106, 5.962429784379154, 26.020987288483454, 24.26539329871663, 23.725215668927078, 24.36682030852615, 25.13474082694682, 25.625848561529182, 26.381791829404346, 26.751592566044934, 27.46362039038005, 28.48732438364961, 34.20978613047717, 33.24656815492702, 32.43766290050399, 31.368610853282537, 30.589262893460898, 29.746987989126982, 29.186037418905844, 28.390199702870206, 27.26768011224179, 27.763390025939895, 27.85447947427423, 28.66631257354361, 28.954110507119758, 29.430774847239704, 29.137381747463433, 29.925688024243676, 30.728902827880336, 31.254082653279, 32.067988045419874, 33.29707848792631, 56.01246439383205, 56.53117881952793, 56.69715789166818, 57.06778027136427, 63.56419433948555, 62.63181493892939, 62.55245474171806, 61.9124942520765, 60.77767560569953, 60.1194657066873, 59.66570797534152, 58.248857303739484, 64.89191330268469, 63.56666059911508, 62.50255976647272, 61.31640052357138, 60.391079545218005, 59.26316999098392, 57.69817920726269, 56.95795486288114, 60.714083627693284, 59.779682239474866, 59.47130397750925, 58.22933635037067, 56.613464276090646, 55.66975533556395, 55.15115302429627, 53.61012418652022, 55.59419599901994, 54.63387509269802, 64.94548204481416, 65.05926858239877, 65.6645289950529, 65.89263168371014, 65.99315706931526, 66.08388789947416, 67.0082385543879, 67.99519909259709, 69.74515128389041, 71.56595041674814, 72.80219357062789, 74.01094320710929, 75.53667433851811, 77.51989593274894, 88.39748621412213, 87.68503570165471, 86.38893368909301, 85.69244839932713, 85.31640757663439, 83.80240244452183, 83.4953564297465, 82.129488621078, 87.46966973591901, 87.54674854400814, 86.53576437374981, 85.95891591452069, 85.42115164262967, 85.2161853512109, 84.35663475789764, 83.77957290475281, 97.81810159003204, 98.8262697720323, 98.99488246023428, 99.86630077540184, 100.2434996929571, 101.36677656492638, 101.79457994575553, 102.08493064187634, 109.02264735222444, 109.32760920506064, 108.39885329047624, 108.04947636827632, 107.75665121310932, 107.75757581228069, 106.54086117775472, 106.43567668181466, 111.11773896671322, 111.31880992474001, 111.53959912608231, 111.4838281650564, 111.82087094023737, 112.52429648197683, 112.35462688222569, 112.4834501857056, 119.60410994165883, 119.00645170207288, 118.322683866391, 117.8371796825393, 116.82422647293424, 116.20822370981348, 127.36938586799684, 127.03093786442123, 128.95487854259733, 129.6311154338562, 129.7749887929202, 130.32371572799568, 130.20495902791333, 130.6431670616397, 131.34348830140124, 131.3007608000151, 134.75911567148347, 135.4259170340797, 135.2582724800347, 136.28351511477834, 135.90706037652774, 136.48472170925317, 137.4179773635904, 137.39294535615682, 141.46845609492303, 142.09207884826867, 143.15688331702083, 143.25285243691613, 143.70178193782488, 144.1273984604053, 144.4370948767816, 144.72841199304776, 151.7589480625203, 151.87341771239252, 152.2803503814724, 151.94928688977248, 164.7758844557004, 164.87702465204018, 165.2880187510633, 165.67660638337463, 174.5551938897883, 174.9520795311177, 174.76624977328584, 173.8602970589024, 173.72577461875244, 174.1046964416128, 173.6926287314666, 173.70184656634837, 180.65200458089413, 179.853061783779, 180.06499652187327, 178.91319334615048, 178.7590945352162, 178.81451155471999, 177.9168218975694, 177.22368242526753, 180.0317047666802, 180.87182421038236, 181.76343276542633, 182.06378375184744, 183.57328058878858, 183.93460964007178, 184.7799884634274, 185.67189098188746, 191.09879885432593, 191.8333681674475, 220.0654896595984, 219.8901504536189, 218.59265137153835, 217.9794080113084, 217.79095026908428, 217.05443291952628, 225.75867634767005, 223.9924652290386, 221.5782308371771, 219.69664782495695, 217.41320896783563, 215.66019547843405, 213.17073891907017, 211.68899655957466, 215.45918870464882, 214.24274732624676, 212.24227140339286, 210.92097347165029, 209.99068257037482, 208.36121000365682, 207.0705848985205, 206.03490513883298, 209.63284740603794, 208.60397379531102, 207.63167948684423, 207.4398249930496, 206.7815857053872, 205.52011380086395, 204.3263294160056, 204.06002862015023, 216.7414795747569, 217.02123468410332, 217.68753146255187, 217.41594040871902, 217.5651607526487, 217.49179780524545, 218.13610081260003, 218.34623739522243, 224.72296848730892, 224.94586290422217, 224.72506902275177, 224.8958958986301, 225.2487497016753, 225.76993376676435, 225.05308546556378, 225.61111404260907, 227.3643139470887, 229.16216273437107, 230.77380775069705, 232.28582922316056, 234.23320534440748, 235.9065731554806, 236.972815846304, 238.69705882692642, 245.11492564186756, 245.6825848604369, 246.62199415682147, 248.00666717810165, 248.83933712714605, 249.2608638287538, 277.38062116052976, 276.6760345730861, 280.5071744000286, 278.8779861746215, 278.10000435243404, 277.5474237178682, 276.37897397280693, 275.04340288536446, 274.0922623665796, 273.70248590580206, 278.57514262074153, 276.91223854441205, 275.83781859574094, 274.7401627804131, 273.65501528348375, 272.3354692049003, 271.0919043287984, 269.92784825401145, 274.7494397384683, 273.5794221211555, 272.93925586950627, 271.6482723046749, 270.1729233409929, 269.94646333617663, 268.30027504036235, 267.7163686543128, 274.4171224066386, 272.7208806543176, 270.78839315603113, 268.8937695172254, 275.4762333953295, 274.4906554761207, 273.6783661776264, 273.2658996625477, 278.49914876367035, 277.68955905902317, 278.2424858902318, 277.4869041375566, 277.6131559178015, 277.41480909974945, 277.11853363568696, 277.45584108100553, 279.36902554752237, 279.7975109914951, 280.16180082622583, 280.289256394956, 280.77183771648845, 280.44171584072893, 281.3232442406867, 280.8713089523704, 282.2159467502719, 283.4897071027092, 285.22898571468795, 286.6216719329229, 288.43555799049614, 289.8518137013131, 291.57156370905284, 293.2203099103369, 304.33897458103786, 303.6702897285548, 312.2422998450455, 312.59649619602044, 312.2528686900346, 312.1598223899517, 311.5790189629806, 311.0295035672954, 320.22922483358633, 318.73011951189926, 317.15930408657977, 316.14302395116204, 314.22405266224524, 312.87990762592256, 311.4781919681862, 309.64270380749736, 309.8322231840776, 310.9855882295195, 311.3939604235203, 312.99915857856416, 313.4949926056937, 314.77726630050586],
            boulderRepeat: 1.5
        },
        player: {
            startPos: [0, 0],
            boulderRepeat: 8
        }
    },
    {
        name: 'Level 8',
        mountain: {
            startx: -100,
            stepx: 2,
            cols: [-42.66756448057243, -40.79838042915955, -38.27602587022515, -36.48612550718657, -33.91994725638139, -31.84758226209439, -29.820255757879686, -33.17075155842995, -30.741959309045917, -28.317373703157465, -25.614615536344004, -23.36868144143287, -20.779500347517548, -18.064523982952498, -22.68384714125313, -21.65493144704844, -20.961569596909897, -19.868227476541588, -19.09020447695345, -18.008241223459702, -17.263300259495942, -16.52538963843158, -14.685927002880437, -12.921824263054535, -11.317948136800997, -9.510611325760333, -7.88023095690502, -6.021140708272114, -5.935460636999046, -2.376160937981096, 1.4194282122381292, 4.894266457109653, 8.357937889287399, 12.155901348385852, 15.71445884103124, 8.79920868522587, 9.758962459566025, 10.361881253650079, 11.38080021464691, 11.842794500751879, 12.570735964583108, 13.424023224588202, 13.508765535891861, 16.951592035973583, 20.722459467952678, 24.63955277511706, 28.134762013275243, 17.470934878063694, 21.27119095267411, 14.206903618147658, 15.751204637746156, 17.866938749171833, 19.57325790797625, 21.243544341779483, 23.061229862834523, 24.848583788769666, 20.673374593813563, 21.69866233327835, 22.49414947716452, 23.602482672809707, 24.725262067983365, 25.58892476552151, 26.625424406788838, 26.499162390113156, 29.873642930773446, 33.31202024950039, 37.009675599615974, 40.27159969660174, 43.558252009187306, 47.06063395396569, 40.57480255493543, 42.968931888325464, 45.31588221359762, 47.3862523157646, 49.838562392072696, 51.94981824984119, 54.24745308911054, 48.97649807925622, 51.73406181603896, 55.16421664041161, 58.13063412586976, 61.2741053883352, 64.62464604394927, 67.72527524306943, 59.85450083503315, 61.93695319445009, 64.32844713303709, 66.99684025849433, 69.43209955814186, 71.57341550761532, 74.04364765739915, 67.47916674014485, 69.28840591028973, 71.10823460605278, 58.402149908029685, 59.93861181393565, 61.135585318606104, 62.46197923066817, 58.51140330368284, 59.5759973042765, 60.22234795782272, 61.04178289922739, 61.97467276884053, 62.7297127119025, 63.38043893591188, 62.894033436416855, 63.691635686204386, 64.64494279530409, 65.752488507243, 66.87158405731317, 67.87249746161878, 68.53120694563471, 69.05361240431662, 71.39238882568527, 73.88957646098564, 76.77586265804293, 79.12836488166657, 81.50123614809165, 84.45051732408733, 79.21789145943553, 81.29852281953431, 83.39007372140101, 85.56625595395444, 87.3875905192539, 89.55086036132545, 91.81085877124421, 85.82903407572863, 86.99795046238474, 88.29409739763257, 89.43482436310163, 90.76168096893976, 92.3605384557687, 93.53452835201942, 90.13021068621791, 92.0667322750001, 93.69611205392441, 95.51761351821474, 97.05365208087585, 98.73118704514923, 100.57428979803242, 96.95190949709443, 96.69127045718838, 98.33612242832879, 100.55294833451148, 102.6673405274936, 104.68247821236216, 106.50899436941774, 102.01719742657704, 104.12623704306331, 105.88816781391185, 107.67474125805663, 109.44595844774659, 111.31258588023987, 112.75516501887434, 109.07927880529137, 111.37017006912637, 113.36849443191873, 115.31102430410468, 117.66682288189376, 119.71993245581425, 121.8457392451264, 116.87490909312794, 118.18329756681584, 119.71987238765342, 120.84714503845875, 122.01545068823755, 123.40150046527307, 124.47039970755036, 122.21565076878291, 125.23953130095622, 127.8238185073531, 130.56452820031623, 133.0552656434599, 135.7243973882873, 138.36274712237815, 132.36627043325427, 135.0143012242701, 137.44346391500736, 139.5468790429782, 142.01139738596723, 144.4472344626731, 147.09951682142125, 140.26374428770322, 141.7719364313456, 143.09713952596283, 144.6869056492359, 146.39031489909803, 148.13302133232736, 147.45077034441266, 143.92179126142167, 147.11329423386252, 150.58227305153085, 153.61015978122182, 156.9075247955661, 160.11729271279387, 163.58376415412928, 156.5596225522718, 157.72939891529094, 158.57796194848734, 159.6513618698556, 160.6138758375963, 161.6220617982196, 162.48036041145505, 162.01641706665964, 164.90052681642408, 168.0367555565996, 171.01779368333382, 173.7739977959144, 177.04595308583316, 179.8012013336243, 175.58283857265295, 177.62493164017584, 179.94855201127095, 181.87102552582496, 184.0216537947024, 186.27822879592554, 188.6426882799722, 185.14621977599103, 186.20935544122318, 187.41179437760115, 188.41105944633242, 189.5828689367793, 190.83363182236639, 191.76104974818813, 192.33992101995156, 194.45358247947775, 196.30772275189085, 198.26903444224698, 200.07315057681535, 202.0917311581067, 203.9692018076411, 203.38157960892994, 205.74780215972228, 207.9708062601078, 209.72441015758474, 197.44021612144712, 198.87989761565228, 200.58669081776898, 198.70591075761376, 201.03099669177462, 203.32059311369207, 205.74179269541096, 208.2022638062081, 210.68105116309252, 213.1123809054047, 208.10785278192986, 209.56341656545413, 211.33156767546467, 213.45829165541434, 215.33063203219703, 216.74674527293885, 218.53316242871418, 214.29489959559461, 215.00122239691424, 216.09036428280427, 217.3699511354632, 218.08661796961653, 219.13436418929027, 220.31703613594686, 219.0781664729512, 221.56960255449454, 224.0629486789699, 226.73957877831796, 229.36820717341496, 231.61492424365488, 234.48733537547835, 229.00541462810898, 230.85400756304838, 232.06461474902318, 233.71889877435143, 235.22823423253578, 236.66448579786535, 238.5110917310817, 234.66893276036436, 236.49058159277172, 238.0878038234584, 239.52020867820303, 241.16069167332137, 242.74315784772315, 244.1339933863912, 241.3050681540968, 244.0394589475779, 240.8058872907598, 243.86718353002817, 246.843260953016, 249.76746980176716, 252.81827356231747, 247.2932041496941, 248.94462235655402, 250.22967552218708, 252.10657586413782, 253.64123793034815, 255.20104901984377, 257.1159966948264, 254.17060611164416, 256.6845766975025, 258.71484999839316, 261.0435596074566, 263.6333868169278, 265.6945614065369, 268.1290781397365, 264.9662180815722, 266.86740904916655, 268.82622263474576, 270.82405762940846, 272.87663902560155, 274.82665975735966, 276.80852160726124, 274.0976886984078, 275.8905959483051, 277.60517309942355, 279.4021988721089, 281.1374424036382, 283.02943520933115, 285.0818317524513, 283.2531376433271, 284.39159920674865, 285.7409950347006, 287.1808205920695, 288.7090199327618, 289.77629363550375, 291.25359725739145, 291.29030561908377, 294.40258646293756, 297.2194295977774, 300.2275763035192, 303.1957250299698, 306.3607928360033, 309.24962317645725, 291.1911165805615, 293.2245960976289, 295.6957665973127, 297.9379635166717, 300.1819886697858, 302.4855417973529, 304.5311301995105, 298.842685205852, 301.19623907405133, 303.76917094873374, 306.1120731525488, 308.79245681338665, 311.3628861457706, 313.79328804959823, 306.7255179916885, 307.6186994147705, 308.6094713720496, 309.4519325959477, 310.09947664861215, 311.00646872182097, 311.6971550977178],
            boulderRepeat: 1
        },
        player: {
            startPos: [0, 0],
            boulderRepeat: 5
        }
    },
    {
        name: 'Level 9',
        mountain: {
            startx: -100,
            stepx: 2,
            cols: [11.127195045109843, 10.75108112876486, 10.809891411983209, 10.843723425709044, 11.030272894297752, 10.875847699165988, 10.786074416293367, 11.23670944578101, 11.010511352897865, 10.857058711876682, 11.22113197391522, 11.245529663902424, 11.193200684881646, 17.548512880658265, 16.811618224511058, 15.891779910950788, 15.678712015517846, 14.972049446718525, 13.889165391868147, 13.605466441858876, 12.874415386997512, 12.215068671160765, 11.21075951252848, 10.857175526829511, 9.973415287580892, 9.532876062525773, 10.860199238022762, 10.741442454850205, 10.75110461521962, 10.82573733505728, 58.224050465910764, 56.927915434442724, 55.8458638008624, 54.28147250760267, 53.32483780625412, 52.260982543947634, 50.61313891697142, 49.72779086802887, 48.241462081771765, 54.127021506674964, 51.74747457037683, 49.85708749108862, 48.02612194064085, 45.523013389037885, 43.64700890535811, 41.551039550490245, 39.76963537292456, 37.77275225975731, 35.90689164804171, 33.87394723659264, 31.87609564802917, 29.425677056909976, 28.55100253459664, 27.665487755338546, 26.814078120415935, 25.919953003677715, 24.873468619356032, 23.733757871438215, 22.89631685495944, 21.97837149148554, 32.20354444974048, 33.93999073594643, 35.46347412792398, 36.878330496227775, 38.15191005020386, 48.48404467671174, 49.01002417855667, 49.14949478586343, 49.90194656139645, 49.8908879301473, 50.5650720252333, 50.67597761180993, 51.0860532711767, 51.39219247119475, 52.12559321769112, 52.37067334788007, 52.72154886329667, 52.95276513653265, 60.911082190230076, 61.983591895739735, 62.22173594834031, 63.12639460806368, 63.45598401149839, 64.42629865328912, 64.54850885161751, 65.3110293759567, 66.14862451434333, 66.49419684610982, 67.42094294057952, 67.83580954294216, 107.91191622258819, 115.03554361633947, 113.34803940267417, 111.70636894176988, 109.99515305741147, 108.2216608343416, 106.60882661270529, 104.91400225592949, 103.07515268210507, 101.22368885101406, 99.49292655838524, 98.10353369906068, 96.42672207491007, 94.64218887339567, 101.27327730140105, 99.97426527037956, 97.91518261669839, 96.59505130665907, 94.79713181222408, 92.92905461209685, 91.09816191461417, 89.77454322403318, 87.70343303757434, 85.91954898902597, 84.61150847074614, 83.00311753930205, 81.23739611754573, 87.663160722569, 85.82462672272305, 84.10546263472301, 85.0962313922053, 86.1931707953598, 87.198250482918, 87.94853332363836, 88.95303832432755, 90.11618326581096, 91.4737111284331, 92.11756805673807, 93.54497759855283, 94.30744798300124, 104.52944602047288, 105.35492997663279, 105.65591006566584, 106.44687726175493, 106.87159564998318, 107.79086371669327, 108.3173190980646, 108.7403551527933, 109.18841416743888, 110.14021333246346, 110.61319700751449, 111.54307815122301, 111.82438750005485, 114.76483340221617, 116.16995815452181, 118.28353895434992, 120.3369965940721, 122.12969249948675, 124.0642805505453, 125.92961069418955, 167.58307876076745, 167.32863977498346, 167.37011507717344, 167.35440884287883, 167.26503066510344, 166.93284048142567, 179.39535881230876, 177.79700128293067, 176.73656695993154, 175.04352415804132, 174.23366226573762, 172.4847125504318, 171.29493754445093, 169.93291346501204, 168.57382400974404, 167.30561131689115, 165.89123368056556, 164.67837752689218, 163.6714125356002, 174.59712762348306, 172.85403004407988, 171.00082536562724, 169.45289978341876, 167.57778192746656, 165.62582737057517, 163.83192000406547, 162.39465335859808, 160.49770766691975, 158.4384582375208, 156.9524003530445, 191.45457542979378, 188.800234854996, 188.8480662042731, 188.0209721701663, 187.31826285103827, 186.15920467523634, 185.14904830996562, 184.68244734951767, 183.6239319040601, 182.92995897328734, 181.63482438615782, 180.76326495314055, 180.16666964085783, 179.0564598497994, 178.38417713224635, 180.876138226581, 179.8142191656284, 178.37983958848852, 177.2941500505452, 175.91515735287487, 174.81882373046994, 173.81661989995862, 172.63972847087987, 171.29598206939164, 170.05617981492023, 168.85668827166617, 167.53353986488986, 166.26513387343087, 165.69343764738724, 165.16547845296586, 170.00543686716318, 171.44817254052566, 172.94403206494633, 174.35211725886063, 175.50089806952187, 176.83337060967892, 178.59818957961593, 179.71388065047452, 181.48110553129388, 182.72342319404726, 184.0158926475062, 191.85865589970626, 192.44027834947562, 192.965321369958, 193.66489981052865, 194.61766797393005, 195.03095121061523, 195.43298854361845, 196.14493916766497, 196.78553547572568, 197.67107138079643, 198.18871733342544, 198.80571754097588, 199.26747964536608, 205.01681830237783, 205.75448765641525, 206.5770280310797, 206.9571693213373, 207.4698813579696, 208.11934319988842, 233.17262214621496, 233.17091099786813, 233.3248724954979, 232.76999843404832, 232.5542258509573, 232.36335375251747, 232.67551221101826, 232.24203174317208, 233.19865991221388, 234.36884107076395, 235.1418660773615, 235.78147964243772, 237.1695153413058, 237.96364356172688, 238.47835237809528, 239.7528089775245, 240.72733328311847, 241.12510272806273, 242.11227916846434, 242.92987003819695, 254.49778989277198, 253.760849603466, 253.4359278035501, 252.83645111128598, 252.48798323069929, 251.70390190355903, 251.11513760129824, 250.75814167733347, 250.13087464902412, 249.91342345347996, 288.89666921043744, 287.12631462512496, 286.0100975990727, 290.8338042818192, 289.85726424103467, 288.9278466076727, 287.949531822571, 287.05541005519444, 286.55020855759324, 285.68494764063087, 284.4940281323097, 283.8365543909946, 282.7512155817294, 282.32536971723044, 281.26846075128435, 280.3527902526043, 290.10090191132406, 288.2263259599107, 287.0885632049469, 285.61651254179037, 283.97361676327614, 282.78113801950536, 281.1320403302536, 279.85819767443377, 278.01621070388916, 276.74933626994584, 275.1090982657752, 273.5837420330238, 272.51410634274697, 277.9379282293774, 305.0328299769775, 304.4716096941487, 304.1291192075181, 303.47560251796915, 302.81112352957143, 302.70536777723095, 302.1818587994595, 301.7086459791824, 301.39456911709897, 300.99179376543356, 300.53211215001625, 299.8099491628971, 307.90300615322906, 306.91259527442986, 305.80964783669987, 304.9281629514374, 304.1460649653506, 303.0896855443318, 301.951854983534, 300.8910162735579, 300.3028699587188, 299.01584261555024, 297.9946109514202, 297.22351262700766, 296.27765535529903, 295.78091998013946, 295.91017706105384, 296.3322747727341, 297.0027778974929, 297.1695690096978, 323.2659602841903, 323.7559097978677, 323.86811804318506, 324.13596891666907, 324.5262749562111, 324.5827980754482, 325.34765243976256, 325.48835814698566, 334.93364593651836, 334.08692499398165, 332.9003460812938, 331.65367983938216, 330.8551624663919, 329.8217768469334, 329.0660017858105, 327.9012298673159, 326.8568940268761, 325.52190051789495, 324.8176107687198, 323.596812125185],
            boulderRepeat: 1
        },
        player: {
            startPos: [0, 0],
            boulderRepeat: 5
        }
    },
    {
        name: 'Level 10',
        mountain: {
            startx: -100,
            stepx: 2,
            cols: [-16.497020512786282, -16.142105525673486, -15.654394288266012, -15.062958648595043, -14.539996792007862, -14.458768728703355, -14.07207809973984, -13.112511045277728, -12.681966684802646, -12.122826209643993, -12.044961844845826, -11.117874501548496, -11.153039645933276, -5.052449452546401, -4.514017612592287, -4.473178198103252, -4.530433368573334, -4.61033385322985, -4.3310003734457645, -4.317420877659345, -4.026279356680025, -3.8619988205477256, -4.031953467739328, -3.9831494472666122, -4.084488487907887, -3.4928200243705483, 3.308364448042827, 3.0385163210179815, 2.87913082504274, 2.256159576020419, 2.2949608254432583, 2.4959080507262748, 2.196101040208168, 2.078405766818687, 1.4947959304648304, 1.7822319895961645, 1.4738425222267573, 1.3515479612032433, 0.9837095358602852, 2.8051341823388505, 3.262326745543585, 3.4484061665418864, 4.116394005114422, 4.844133250843189, 5.346555915298385, 27.78290858014597, 28.423257500131587, 29.368767994786868, 30.15579662991981, 30.87831837013345, 31.68102705673306, 32.247759705578325, 41.36519668681076, 41.51281019524155, 41.46494786528242, 41.46260219399184, 41.430760852847804, 41.33665289208648, 41.190890730356045, 41.33220337844578, 41.671604037735406, 41.74758748222433, 41.382083363806544, 41.39314885911798, 41.73088832330521, 50.03181098303094, 50.19177482399438, 49.82988239347196, 49.8319820069591, 49.3968943884515, 49.39337803952992, 49.367779364496435, 48.990487698289975, 48.739669089093326, 48.801814237418725, 48.66681074706851, 48.454259442517255, 48.38343590451791, 50.39786905729095, 51.05764349991786, 51.864411392756296, 52.16397368264442, 53.11268563288081, 53.26606450317287, 54.21279158980944, 54.59979112259593, 55.2186350303471, 55.4779252518996, 56.26475992512894, 57.19441134963877, 100.1605391463449, 106.07569887613872, 105.69583331341028, 105.2981470005497, 104.87106651375385, 104.23725477601138, 104.30273195148614, 103.50037896007615, 103.62114659764806, 102.70661577244161, 102.52533100541895, 102.35241269278411, 101.60265541588711, 101.8514842809201, 104.21590466523296, 104.01748368956186, 104.11299925355837, 104.46283389244834, 104.30524021478793, 104.28807917711062, 104.448728929033, 104.61269644808947, 104.50819188389764, 104.68986335076441, 104.55501075979626, 104.33008732117409, 104.38102642394976, 112.1016277048318, 111.28541357061314, 110.75604565661371, 110.71787668902928, 110.14531768685322, 109.9110711130817, 109.60514232104967, 109.00795022150345, 108.45579588929635, 107.82546058990047, 107.48629944389818, 107.0451404106212, 106.75550171233122, 112.89344043078464, 112.88638956575366, 112.06931337790554, 111.821463636924, 111.65404140143835, 166.01270542306676, 164.84487776423552, 163.95715205168983, 162.52908535426968, 161.41006358435357, 159.95069414793815, 159.41337784126006, 158.07692709644033, 163.76644151839852, 162.55683682059745, 161.261978827668, 159.65115687541916, 158.5447560081541, 157.2370887151736, 156.26368397263852, 154.71387281687927, 153.77346735664307, 152.35082452795055, 151.19856249740408, 149.47226288454897, 148.51707580537712, 150.04123499350794, 149.22480715153574, 148.53696962704282, 147.98585038425523, 147.00688635263072, 146.77846239012928, 146.0076307675599, 145.24685907470376, 144.50627135828302, 143.58525590335077, 143.43924534261794, 142.51111006039912, 141.54104436977605, 149.66416596677263, 148.2012762175912, 146.67894397410416, 145.4688001524772, 144.08261965422952, 142.67932791768098, 141.30979433704266, 139.71990491916296, 138.10693903503434, 136.70070778277676, 135.36321260214763, 135.63122469504637, 135.7558913817218, 138.72187545258166, 139.60240601554577, 140.68956342400563, 141.49912168066405, 142.59364135400858, 143.44166782194986, 144.26293486941543, 145.47991685759627, 146.31267009858075, 147.03638117189257, 148.20944958551743, 149.06872983403048, 150.28583972721535, 159.35049676340054, 159.26166643006158, 159.64310046289492, 159.8990266391352, 160.3022998637893, 160.13885819015096, 160.64544779182626, 160.6903606138789, 160.87580176698216, 161.10569370103946, 161.76425014470013, 162.07667036686667, 161.94383333896022, 165.93956461570036, 167.09662841054057, 167.67981119643142, 168.6582176886763, 169.20876953029668, 170.1509871720635, 171.08039406602396, 171.80510924767555, 172.68628890011868, 173.20701394721397, 174.1320026916644, 175.08630904495598, 176.1792095486222, 183.90828309843903, 183.98389577370858, 184.31792273990308, 184.36214057503727, 192.817548194653, 192.77697737100655, 193.49224661481117, 193.32564296351984, 193.54396011915742, 193.30716722514396, 193.86890480660284, 193.93209546177002, 194.0305996554042, 194.38567269548687, 194.87445537412424, 196.22396601680552, 196.6445268822206, 197.84602984854635, 198.54367830299654, 199.5173301035669, 200.462089615299, 201.13227559106988, 202.30836316336337, 202.93606759834074, 203.55578420487493, 204.8003142353641, 208.25775495228785, 209.0559503541066, 209.39506039845406, 210.34320673874848, 211.2620396635393, 212.0541383714522, 213.02063339425396, 213.79086102310256, 214.79603967031923, 215.15750081961482, 216.51969715138324, 217.2533154529069, 217.59400795884858, 227.8220988681805, 227.7427769060295, 227.99932685758478, 227.82349992910164, 227.85660511590913, 228.2132749787486, 228.45150158251158, 228.4446788646687, 228.4201014562738, 228.42402648438915, 238.6231429473694, 238.85863955193867, 239.5695836782741, 247.25425737748373, 248.08811117731108, 248.30824350098737, 248.92402374057542, 248.913133363075, 249.49501815555953, 250.29804019827282, 250.37574115330295, 250.92198312313855, 251.24631947520515, 251.5503717796438, 251.9798559268155, 252.64342191614557, 256.73135602392244, 257.6278152644196, 258.2274197599468, 259.38793880772835, 260.1117792540662, 260.8478379641775, 261.77446570533687, 262.72743903743844, 263.4461744020757, 264.84695207940695, 265.57802806291676, 266.2990083525588, 267.03459206188165, 273.38127709521564, 273.4906707583358, 274.3205135019179, 275.4361627420191, 275.75795913430704, 276.51583175438094, 276.92093962137113, 277.82175016362993, 278.63789726993735, 279.531042189519, 279.898773636771, 280.7262713098544, 281.22019202826255, 285.127815552565, 286.05720874028077, 287.2067608790071, 341.1071948116544, 339.8392864048567, 339.2453936494466, 338.23138289418654, 337.6296066825747, 336.4746707494554, 335.438931224812, 334.81793756347804, 334.2491099569077, 332.8254973314769, 333.0614978216388, 332.43278657477396, 332.1416042658308, 331.52794328812394, 331.36132147606315, 331.0243124065293, 330.6536612110712, 329.7770331009845, 329.39988580231415, 329.18452033456623, 328.62165205980483, 328.14809624104515, 327.7327729026282, 334.80424561012296, 333.29733679275466, 331.7946253747432, 330.6759047327055, 329.3038404742958, 328.66717973643637, 327.21394706655593, 325.62863193290315, 324.9223601699208, 323.6280765751893, 322.4438885220153, 320.7467376545441, 320.0247617563848, 319.2239119357129, 319.2847213771334, 318.82396976024626, 318.38916647483586, 318.05322885321846, 317.5473063377799, 317.3865310775524, 316.78349617883833, 316.2367994882827, 324.7642562335608, 325.59675141573456, 326.6373956331023, 327.885148649009, 338.37466184820386, 338.6083733676792, 338.3081275242858, 338.9169769472515, 338.9716440367995, 338.9319347359175, 339.5961903331502, 339.49448247622985, 339.5888676321447, 339.840830025467, 340.14253639786955, 340.7206257399084, 340.7328696787695, 351.0257262615226, 351.02570909721004, 350.8619698640602, 351.2830085970505, 351.2658964271637, 351.0019048386756, 351.34789338145447, 350.7992200760914, 351.0893251781544, 351.1126134138059, 350.87933348866255, 351.1539827092687, 351.0026075884727, 356.79364249228945, 357.17740875839905, 357.3744036752742, 357.4461939949449, 358.3030376136004, 358.5274153284963, 358.7764924896547, 358.96116999181766, 359.5053282433459, 360.1459992612871, 360.33327233691466, 360.99891559907405, 361.00680441579414, 362.65470981271346, 363.63559281377854, 385.7167726659023, 386.80956287834505, 387.26891911445296, 387.3620480537691, 388.4789920656369, 388.62145347431675, 389.4630020940673, 390.0493505956888, 390.44552196389384, 391.06600825401085, 391.74298654361075, 401.9672449039204, 401.602482057279, 401.45941787892144, 400.5620004354095, 399.96590397070304, 399.9040371630049, 399.17774883895225, 398.6859628985311, 398.28772759694834, 397.4742701476506, 397.0280581407191, 396.64378423829055, 395.77727507722614, 401.60425395638623, 401.5669686786308, 401.53038403012886, 401.69126443227447, 401.23418079342076, 401.45776971848085, 401.42590046992274, 401.16289179915657, 401.2803738689082, 401.0326143166198, 400.9776863388096, 400.947526057624, 401.0832026219892, 408.14107566420125, 408.3509139164167, 407.75054054045563, 407.5740215644579, 407.1068145662678, 407.3966935920065, 406.64711397275795, 406.64057875190093, 408.3610202022836, 409.2811488585956, 409.6524590727921, 410.40584890551605, 411.3416671313101, 419.00893546944513, 419.4872902068238, 420.0117322736487, 420.52392471316, 421.0086459658257, 421.65996618911583, 422.4776648302808, 422.7537634552207, 423.7437501542481, 424.0174031146616, 424.54318602864635, 424.94122960544667, 425.5598116921432, 426.97640884553147, 428.1826596072425, 429.5674838475618, 431.10537595110014, 432.1995942924512, 433.1883877809762, 434.49080865239716, 435.7737626899056, 436.908328876943, 438.286488414067, 439.9580111546968, 440.7625219937793, 442.2328305593117, 446.2530199543668, 447.4007583789686, 448.4680403042108, 449.6644663259647, 451.1811641948999, 452.29951190450004, 453.74224402724104, 454.48101431141663, 455.6972479133006, 456.75033004888223, 458.15404050272673, 459.768460691983, 460.4981907480607, 469.71050080310437, 512.8057627652577, 512.0816753228823, 511.1827751394474, 510.13970451941856, 509.45572909187814, 508.39445050158747, 507.6869461407878, 506.4661561735294, 505.83267743806965, 504.9789314127913, 503.9332915564452, 503.31966985254223, 503.22711188606274, 503.1495482949627, 503.3489826339099, 503.2811959971471, 502.99588872582353, 503.2128950720685, 503.3476580361521, 503.16761228045914, 502.7389433459712, 503.17648979968516, 503.052673602346, 503.27231050060374, 503.2069636610211, 508.8951932729375, 508.7428047452926, 507.8115248921812, 507.56388140214824, 506.65576065034577, 506.40928073829656, 505.87918877698274, 504.9776118810711, 504.3666649487044, 504.32419380506695, 503.85146956250935, 503.12644397245555, 502.4293250132029, 508.7417469695763, 507.6753988551145, 507.11422086736746, 506.8041632867042, 506.5187158912613, 506.130591165345, 505.0631900627346, 529.4055253607663, 529.2438056658333, 529.2942016242419, 529.4096213748581, 529.4013114954653, 529.5584956151188, 538.4657968239873, 538.47341508562, 538.1182167069883, 537.6069902102923, 536.7423785036475, 536.8013356816808, 536.2224400533598, 535.8364438748235, 535.273964713436, 534.8405058910234, 534.6821928350555, 533.9825341215169, 533.6265289350034, 536.4496096947181, 536.2798246428632, 536.7107240549149, 536.9100564208098, 537.1778064282227, 537.200442232145, 537.4852896465737, 537.5628807674786, 537.6678463044735, 537.6058772443548, 537.8195851952555, 538.1068796114637, 538.4325755323682, 539.6285879507911, 540.1316633178736, 540.6336544618422, 541.0277532860614, 541.6570716427326, 542.2742859786457, 542.6095497580242, 542.8416561104304, 543.5457634337805, 544.2742390759283, 544.345457141199, 544.8854051307635, 545.56276892242, 576.8808826384364, 576.6451315201749, 576.7099435602348, 576.7399374245057, 576.9629257433046, 576.8257927378974, 576.6448531316406, 576.9683689831003, 576.7480901204686, 576.4144083581111, 576.9023313876835, 576.8484014186766, 576.6016012070281, 580.3748454772726, 580.3524031272034, 580.7635039483182, 580.6500278718376, 580.910920884059, 581.2817969644166, 581.5515004129528, 581.5558047669597, 581.6633693473204, 581.6601070418899, 581.9377126509661, 582.2474306403526, 582.2034963464293, 586.2069786734236, 586.3933882588141, 586.8863285666905, 587.2178052256733, 587.5078124698291, 588.2251569143341, 588.2165503424894, 588.7213270097435, 589.2563495267731, 589.5398905444422, 590.0292456951122, 590.049200663693, 590.577302286014, 599.9647930767184, 599.5652422807276, 599.2986610699387, 599.4296070074977, 598.7112262080215, 598.6690885632643, 626.0422044394114, 626.2501482007771, 625.8783171877207, 625.4384180384557, 625.254710354499, 625.0353347422467, 625.2695374206481, 630.7011140954407, 630.9847429656345, 630.5909228105112, 631.0507125578357, 630.6349164480467, 630.6351780974655, 630.6979096701308, 630.4298376616962, 630.7445119181216, 630.4170364764186, 630.5706909206767, 630.4384723032948, 630.9346032437624, 631.6670142217708, 632.6932776132642, 633.1621919277868, 634.3025793514244, 634.6744545990163, 635.233885371168, 635.8932377797689, 636.9473956082776, 637.8178754370016, 638.2206964235243, 639.0663088480298, 639.8938399026797, 640.4092478278752, 650.2618160655417, 649.7734323772373, 649.960272659546, 649.7136043605499, 649.6541028068373, 648.944290851106, 649.1127283119907, 648.7388952602068, 648.4229821140561, 648.4230860583789, 648.4583506633558, 648.3768330629754, 703.4452916881594, 708.4036030311026, 707.5019565203704, 706.4830427351369, 705.7139585850928, 705.0644335423175, 704.4276834862977, 703.7402447604968, 702.8800404771007, 701.7574247549825, 701.5424058602308, 700.5435707925727, 699.5150959754258, 698.9289449697598, 706.6868452082439, 705.7009684422426, 704.7929866677337, 704.1027811143491, 702.4469465918021, 701.5819433662906, 700.8554273206965, 699.575403534173, 698.6924455409209, 697.7174914099753, 696.2073994465062, 695.3813706415608, 694.3936020207386, 701.7621133550549, 700.6198034409663, 699.142377984931, 697.8799000385919, 696.682416301337, 695.5935824613279, 694.6676231440647, 693.223719399216, 692.4352517892589, 691.2295977688111, 689.440373533043, 688.7723443276435, 687.0929759549541, 688.6273901366342, 687.7838776264848, 687.1174403314282, 686.6137333966032, 686.237007562281, 723.1199210975578, 722.5533370795928, 722.4009709124248, 722.4157948255288, 722.5334275357575, 722.6634106871836, 722.6093359313826, 722.1755476118633, 725.731564730228, 725.0297418722262, 724.7456951510216, 724.5664339914615, 724.5452177616667, 724.6028314977987, 723.9794977975092, 724.1668539875127, 723.9520695057457, 723.4622698790889, 723.0700632601361, 723.4629371073755, 722.673778324041, 724.7301315592161, 724.8000537541279, 724.8487946249963, 724.843099313922, 725.0711182844859, 724.7836248167237, 724.8919681780718, 725.230377771236, 725.0965473770939, 724.8545945258215, 725.3871842829604, 725.4556713331137, 725.3810973780618, 731.6046209810161, 731.2932442392081, 730.970200557568, 730.5961996797366, 730.2622464835157, 729.3541450447595, 729.2887770419877, 728.7335888787985, 728.1931964832321, 728.0420699718495, 727.7401632742543, 751.5602486502811, 751.4598036063168, 757.1351337419395, 757.0057308057424, 756.4187857965966, 756.682863132863, 756.6026800934966, 756.2624327463978, 755.8500762804915, 756.2903144316662, 755.9493284274614, 755.7668575031618, 755.4312033861719, 755.4514530383436, 755.1583759901654, 763.3508772358329, 762.6231670491845, 762.2908948370291, 762.0330672730611, 761.4742039354903, 761.0358051635651, 760.362004222738, 760.2994156828299, 759.5751458446972, 759.3154731782598, 758.7111337159615, 758.4239665962164, 758.1959106497275, 762.0689044093399, 761.7048616790427, 761.6660957060848, 761.9610460103125, 762.1947164463534, 761.7731196818572, 761.8910600031829, 761.6927554511865, 761.5797556693103, 762.0153559133856, 761.7470777672952, 762.1617262924632, 761.740468474334, 768.2346566014713, 767.8636410729091, 767.4019375541303, 767.1942110448166, 767.3725943136453, 768.0746361589565, 768.8683624285305, 769.4359558870397, 769.7636548970316, 770.4248055860165, 770.8538538605912, 771.011542720219, 771.6413081228025, 773.0187938987561, 774.5687832364855, 775.8704514713694, 776.9783404813811, 778.9186966899968, 779.7290696132713, 781.498036069539, 782.5836491766964, 784.0135330949968, 785.3357494103216, 786.8136988862758, 788.1314423721443, 789.6915933015684, 801.1875150534702, 800.913827689908, 801.2494200135135, 801.6060217938198, 801.9705694716453, 802.5113998365296, 802.6686211444719, 803.4998539998019, 803.4607452214278, 803.7258379974751, 804.2389015837362, 804.5798751652648],
            boulderRepeat: .8
        },
        player: {
            startPos: [0, 0],
            boulderRepeat: 4
        }
    }
];


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var menu_item_1 = __webpack_require__(9);
var CHEVRON_CHAR = '\u203a';
var ButtonMenuItem = (function (_super) {
    __extends(ButtonMenuItem, _super);
    function ButtonMenuItem(meta) {
        var _this = _super.call(this) || this;
        _this.meta = meta;
        _this.lockedPostfix = '';
        _this.horizontalAlign = 'left';
        return _this;
    }
    ButtonMenuItem.prototype.handleEvent = function (evt) {
        if (_super.prototype.handleEvent.call(this, evt))
            return true;
        if (evt.type === 'abstractButtonTyped' && evt.name === 'select' && this.isFocused) {
            this.handleClicked();
            return true;
        }
        else if (evt.type === 'mouseMoved') {
            var _a = this.translateWindowPosition([evt.pageX, evt.pageY]), mousex = _a[0], mousey = _a[1];
            var hovering = true;
            if (mousex < 0 || mousex >= this.width || mousey < 0 || mousey >= this.height)
                hovering = false;
            if (this.frame.currentSelection === this && !hovering)
                this.frame.currentSelection = null;
            else if (hovering && this.frame.currentSelection !== this) {
                this.frame.currentSelection = this;
            }
            return false;
        }
        else if (evt.type === 'mouseButtonPressed' && evt.button === engine_1.MouseButton.Left && this.isFocused) {
            this.handleClicked();
            return true;
        }
        return false;
    };
    ButtonMenuItem.prototype.handleClicked = function () {
        if (this.isLocked)
            return;
        var meta = this.meta;
        meta.handler();
    };
    Object.defineProperty(ButtonMenuItem.prototype, "isLocked", {
        get: function () {
            var meta = this.meta;
            return meta.isLocked && meta.isLocked();
        },
        enumerable: true,
        configurable: true
    });
    ButtonMenuItem.prototype.resolveBoundsInternal = function () {
        switch (this.dock) {
            case 'left':
            case 'right':
                break;
            case 'up':
            case 'down':
                this._height = 30;
                break;
            case 'none':
            case 'fill':
                break;
        }
    };
    ButtonMenuItem.prototype.renderImpl = function (adapter) {
        if (adapter instanceof engine_1.DefaultGraphicsAdapter)
            this.renderImplContext2d(adapter);
        else
            throw new Error('Not implemented');
    };
    ButtonMenuItem.prototype.renderImplContext2d = function (adapter) {
        var context = adapter.context;
        var meta = this.meta;
        var locked = (meta.isLocked ? meta.isLocked() : false);
        context.fillStyle = locked ? 'grey' :
            this.isFocused ? 'orange' :
                'white';
        var text = meta.text + (locked ? this.lockedPostfix : '');
        context.textBaseline = 'top';
        context.textAlign = this.horizontalAlign === 'left' ? 'left' : 'center';
        context.font = '24px cambria';
        context.fillText(text, this.horizontalAlign === 'left' ? 15 : 0, 0);
        if (this.isFocused) {
            var prevTextAlign = context.textAlign;
            context.textAlign = 'right';
            context.fillStyle = 'orange';
            var offsetX = (this.horizontalAlign === 'left' ? 10 : -context.measureText(text).width / 2);
            context.fillText(CHEVRON_CHAR, offsetX, 0);
            context.textAlign = prevTextAlign;
        }
    };
    return ButtonMenuItem;
}(menu_item_1.MenuItem));
exports.ButtonMenuItem = ButtonMenuItem;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var gui_item_1 = __webpack_require__(17);
var ContainerGuiItem = (function (_super) {
    __extends(ContainerGuiItem, _super);
    function ContainerGuiItem() {
        var _this = _super.call(this) || this;
        _this._children = [];
        return _this;
    }
    ContainerGuiItem.prototype.removeChild = function (item) {
        var idx = this._children.indexOf(item);
        if (idx === -1)
            throw new Error("That GuiItem is not a child of the other!");
        this._children.splice(idx, 1);
    };
    ContainerGuiItem.prototype.addChild = function (item) {
        if (item.parent !== this)
            throw new Error("Cannot remove GuiItem. Its parent is not this!");
        if (item instanceof ContainerGuiItem && item.isAncestorOf(this))
            throw new Error("Cannot add child to GuiItem. Would create loop in hierarchy.");
        item._parent = this;
        this._children.push(item);
    };
    ContainerGuiItem.prototype.isAncestorOf = function (item) {
        while (item) {
            if (item === this)
                return true;
            item = item.parent;
        }
        return false;
    };
    ContainerGuiItem.prototype.handleEvent = function (evt) {
        if (_super.prototype.handleEvent.call(this, evt))
            return true;
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.handleEvent(evt))
                return true;
        }
        return false;
    };
    ContainerGuiItem.prototype.resolveBoundsInternal = function () {
        var bounds = {
            left: 0,
            right: (this.dock === 'left' || this.dock === 'right') ? 0 : this._width,
            top: 0,
            bottom: (this.dock === 'up' || this.dock === 'down') ? 0 : this._height
        };
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.resolveLayout(bounds);
        }
        var wid = bounds.left + -bounds.right;
        var hit = bounds.top + -bounds.bottom;
        switch (this.dock) {
            case 'left':
            case 'right':
                this._width = wid;
                for (var _b = 0, _c = this._children; _b < _c.length; _b++) {
                    var child = _c[_b];
                    if (child.dock === 'right') {
                        child._x += wid;
                    }
                }
                break;
            case 'up':
            case 'down':
                this._height = hit;
                for (var _d = 0, _e = this._children; _d < _e.length; _d++) {
                    var child = _e[_d];
                    if (child.dock === 'down') {
                        child._y += wid;
                    }
                }
                break;
            case 'none':
            case 'fill':
                break;
        }
        return bounds;
    };
    ContainerGuiItem.prototype.renderImpl = function (adapter) {
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.render(adapter);
        }
    };
    return ContainerGuiItem;
}(gui_item_1.GuiItem));
exports.ContainerGuiItem = ContainerGuiItem;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GuiFrame = (function () {
    function GuiFrame() {
        this._currentSelection = null;
    }
    Object.defineProperty(GuiFrame.prototype, "game", {
        get: function () {
            return this._game;
        },
        set: function (val) {
            this._game = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuiFrame.prototype, "scene", {
        get: function () {
            return this.game.scene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuiFrame.prototype, "currentSelection", {
        get: function () {
            return this._currentSelection;
        },
        set: function (val) {
            if (val === this._currentSelection)
                return;
            if (val && !val.canFocus)
                throw new Error("Cannot set the focus on a GuiItem with canFocus === false");
            if (this._currentSelection)
                this._currentSelection.unfocus.emit(void (0));
            this._currentSelection = val;
            if (this._currentSelection)
                this._currentSelection.focus.emit(void (0));
        },
        enumerable: true,
        configurable: true
    });
    return GuiFrame;
}());
exports.GuiFrame = GuiFrame;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var menu_item_1 = __webpack_require__(9);
var TextMenuItem = (function (_super) {
    __extends(TextMenuItem, _super);
    function TextMenuItem(meta) {
        var _this = _super.call(this, false) || this;
        _this.meta = meta;
        _this.horizontalAlign = 'left';
        _this.margin = { left: 0, right: 0, top: 0, bottom: 10 };
        return _this;
    }
    TextMenuItem.prototype.resolveBoundsInternal = function () {
        switch (this.dock) {
            case 'left':
            case 'right':
                break;
            case 'up':
            case 'down':
                this._height = this.margin.top + this.margin.bottom + 30;
                break;
            case 'none':
            case 'fill':
                break;
        }
    };
    TextMenuItem.prototype.renderImpl = function (adapter) {
        if (adapter instanceof engine_1.DefaultGraphicsAdapter)
            this.renderImplContext2d(adapter);
        else
            throw new Error('Not implemented');
    };
    TextMenuItem.prototype.renderImplContext2d = function (adapter) {
        var context = adapter.context;
        var meta = this.meta;
        context.fillStyle = 'white';
        context.textBaseline = 'top';
        context.textAlign = this.horizontalAlign === 'left' ? 'left' : 'center';
        context.font = '24px cambria';
        context.fillText(meta.text, this.margin.left + (this.horizontalAlign === 'left' ? 15 : 0), this.margin.top);
    };
    return TextMenuItem;
}(menu_item_1.MenuItem));
exports.TextMenuItem = TextMenuItem;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var menu_v2_1 = __webpack_require__(18);
var start_scene_1 = __webpack_require__(58);
var level_db_1 = __webpack_require__(45);
var LevelListMenuObject = (function (_super) {
    __extends(LevelListMenuObject, _super);
    function LevelListMenuObject() {
        return _super.call(this, 'Play', 'PLAY') || this;
    }
    LevelListMenuObject.prototype.initItems = function () {
        var _this = this;
        var _loop_1 = function (level) {
            this_1.addMenuItem({
                text: level.name,
                handler: function () {
                    _this.game.changeScene(new start_scene_1.StartScene(_this.scene, level));
                }
            });
        };
        var this_1 = this;
        for (var _i = 0, levels_1 = level_db_1.levels; _i < levels_1.length; _i++) {
            var level = levels_1[_i];
            _loop_1(level);
        }
        this.addMenuItem({
            text: "Randomly Generated",
            handler: function () {
                _this.game.changeScene(new start_scene_1.StartScene(_this.scene, null));
            }
        });
    };
    return LevelListMenuObject;
}(menu_v2_1.MenuV2Object));
exports.LevelListMenuObject = LevelListMenuObject;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var menu_v2_1 = __webpack_require__(18);
var level_list_1 = __webpack_require__(50);
var about_scene_1 = __webpack_require__(42);
var menu_scene_1 = __webpack_require__(19);
var MainMenuObject = (function (_super) {
    __extends(MainMenuObject, _super);
    function MainMenuObject() {
        return _super.call(this, 'MainMenu', 'PHYSICS GAME FINAL') || this;
    }
    MainMenuObject.prototype.initItems = function () {
        var _this = this;
        this.addMenuItem({
            text: "Play",
            handler: function () {
                var menu = new level_list_1.LevelListMenuObject();
                _this.game.changeScene(new menu_scene_1.MenuScene(menu, _this.scene));
            }
        });
        this.addMenuItem({
            text: "About",
            handler: function () {
                _this.game.changeScene(new about_scene_1.AboutScene(_this.scene));
            }
        });
        this.addMenuItem({
            text: "Exit",
            handler: function () {
                window.close();
            },
            isCancel: true
        });
    };
    return MainMenuObject;
}(menu_v2_1.MenuV2Object));
exports.MainMenuObject = MainMenuObject;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var my_game_1 = __webpack_require__(23);
var game = new my_game_1.MyGame();
game.start();
var kbProvider = new engine_1.KeyboardAbstractButtonProvider(game.eventQueue);
game.eventQueue.addAbstractButtonProvider(kbProvider);
kbProvider.bindAbstractButton('left', 'ArrowLeft', 'KeyA');
kbProvider.bindAbstractButton('right', 'ArrowRight', 'KeyD');
kbProvider.bindAbstractButton('up', 'ArrowUp', 'KeyW');
kbProvider.bindAbstractButton('down', 'ArrowDown', 'KeyS');
kbProvider.bindAbstractButton('jump', 'ArrowUp', 'KeyW', 'Space');
kbProvider.bindAbstractButton('select', 'Enter', 'Space');
kbProvider.bindAbstractButton('return', 'Escape');
var gpProvider = new engine_1.GamepadAbstractButtonProvider(game.eventQueue);
game.eventQueue.addAbstractButtonProvider(gpProvider);
gpProvider.bindAbstractButton('left', 'DPadLeft', 'LeftStickLeft');
gpProvider.bindAbstractButton('right', 'DPadRight', 'LeftStickRight');
gpProvider.bindAbstractButton('up', 'DPadUp', 'LeftStickUp');
gpProvider.bindAbstractButton('down', 'DPadDown', 'LeftStickDown');
gpProvider.bindAbstractButton('space', 'DPadUp', 'LeftStickUp', 'A');
gpProvider.bindAbstractButton('select', 'A');
gpProvider.bindAbstractButton('return', 'B');


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var BackdropObject = (function (_super) {
    __extends(BackdropObject, _super);
    function BackdropObject(mountain, opts) {
        var _this = _super.call(this, 'Backdrop', opts) || this;
        _this.mountain = mountain;
        _this.SKY_TOP = '#2d91c2';
        _this.SKY_BOTTOM = '#1e528e';
        _this.GROUND = '#AB5A0F';
        return _this;
    }
    BackdropObject.prototype.renderImpl = function (adapter) {
        if (adapter instanceof engine_1.DefaultGraphicsAdapter)
            this.renderImplContext2d(adapter);
        else
            throw new Error('Not implemented');
    };
    BackdropObject.prototype.renderImplContext2d = function (adapter) {
        var bounds = this.scene.camera.bounds;
        var maxy = this.mountain.maximumY;
        var descent = engine_1.clamp(bounds.top / maxy, 0, 1);
        if (isNaN(bounds.left)) {
            console.error("bounds are NaN!");
            return;
        }
        var context = adapter.context;
        var gradient = context.createLinearGradient(bounds.left, bounds.bottom, bounds.left, bounds.top);
        gradient.addColorStop(0, this.SKY_TOP);
        gradient.addColorStop(1, this.SKY_BOTTOM);
        context.fillStyle = gradient;
        context.fillRect(bounds.left, bounds.bottom, bounds.right - bounds.left, bounds.top - bounds.bottom);
        context.fillStyle = this.GROUND;
        context.fillRect(bounds.left, bounds.top - (bounds.top - bounds.bottom) * (.1 + .2 * descent), bounds.right - bounds.left, bounds.top - bounds.bottom);
    };
    return BackdropObject;
}(engine_1.GameObject));
exports.BackdropObject = BackdropObject;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var boulder_1 = __webpack_require__(20);
var BoulderControllerObject = (function (_super) {
    __extends(BoulderControllerObject, _super);
    function BoulderControllerObject(player, mountain, playerBoulderRepeat, mountainBoulderRepeat) {
        if (playerBoulderRepeat === void 0) { playerBoulderRepeat = 5; }
        if (mountainBoulderRepeat === void 0) { mountainBoulderRepeat = 1; }
        var _this = _super.call(this, 'BoulderController', {
            shouldRender: false
        }) || this;
        _this.player = player;
        _this.mountain = mountain;
        _this.playerBoulderRepeat = playerBoulderRepeat;
        _this.mountainBoulderRepeat = mountainBoulderRepeat;
        _this._pBoulderTime = 0;
        _this._mBoulderTime = -20;
        _this.boulders = [];
        return _this;
    }
    BoulderControllerObject.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        if (this.player.shouldTick) {
            this._pBoulderTime -= delta;
            while (this._pBoulderTime < 0) {
                this._pBoulderTime += this.playerBoulderRepeat;
                var xdiff = Math.random() * -30;
                var ydiff = Math.random() * -60 - 30;
                var boulder = new boulder_1.BoulderObject({
                    x: this.player.x + xdiff,
                    y: this.player.y + ydiff,
                    hspeed: Math.random() * (-xdiff / 10),
                    vspeed: Math.random() * (-ydiff / 10)
                });
                this.scene.addObject(boulder);
                this.boulders.push(boulder);
            }
        }
        this._mBoulderTime -= delta;
        while (this._mBoulderTime < 0) {
            this._mBoulderTime += this.mountainBoulderRepeat;
            var xdiff = Math.random() * -20;
            var ydiff = Math.random() * -60 - 70;
            var fromq = Math.floor(Math.random() * this.mountain.data.length);
            var fromqd = this.mountain.data[fromq];
            if (typeof fromqd[0] !== 'number' || isNaN(fromqd[0]))
                throw new Error("fromqd[0] is " + fromqd[0]);
            if (typeof fromqd[1] !== 'number' || isNaN(fromqd[1]))
                throw new Error("fromqd[1] is " + fromqd[1]);
            if (typeof xdiff !== 'number' || isNaN(xdiff))
                throw new Error("xdiff is " + xdiff);
            if (typeof ydiff !== 'number' || isNaN(ydiff))
                throw new Error("ydiff is " + ydiff);
            var boulder = new boulder_1.BoulderObject({
                x: fromqd[0] + xdiff,
                y: fromqd[1] + ydiff,
                hspeed: Math.random() * (-xdiff / 10),
                vspeed: Math.random() * (-ydiff / 10)
            });
            this.scene.addObject(boulder);
            this.boulders.push(boulder);
        }
        var maxy = this.mountain.maximumY;
        for (var q = 0; q < this.boulders.length; q++) {
            var boulder = this.boulders[q];
            if (boulder.y - boulder.radius > maxy + 20) {
                this.scene.removeObject(boulder);
                this.boulders.splice(q--, 1);
            }
        }
    };
    return BoulderControllerObject;
}(engine_1.GameObject));
exports.BoulderControllerObject = BoulderControllerObject;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var boulder_1 = __webpack_require__(20);
var mountain_1 = __webpack_require__(21);
var merge = __webpack_require__(22);
exports.SCALE = 30;
var SquishyPlayerObject = (function (_super) {
    __extends(SquishyPlayerObject, _super);
    function SquishyPlayerObject(player, opts) {
        var _this = _super.call(this, 'SquishyPlayer', merge({
            shouldRender: false
        }, opts)) || this;
        _this.player = player;
        _this.mask = new engine_1.CircleCollisionMask(_this, 24 / exports.SCALE, [0, -54 / exports.SCALE]);
        _this.mask.isFixed = true;
        _this.mask.isTrigger = true;
        return _this;
    }
    SquishyPlayerObject.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        _a = [this.player.x, this.player.y], this.x = _a[0], this.y = _a[1];
        if (!this.player.isAlive)
            return;
        var triggers = this.mask.triggers;
        for (var _i = 0, triggers_1 = triggers; _i < triggers_1.length; _i++) {
            var trigger = triggers_1[_i];
            var triggerGobj = trigger.gameObject;
            if (triggerGobj instanceof boulder_1.BoulderObject) {
                this.player.isAlive = false;
                break;
            }
        }
        var _a;
    };
    return SquishyPlayerObject;
}(engine_1.GameObject));
var FloorCheckPlayerObject = (function (_super) {
    __extends(FloorCheckPlayerObject, _super);
    function FloorCheckPlayerObject(player, opts) {
        var _this = _super.call(this, 'FloorCheckPlayer', merge({
            shouldRender: false
        }, opts)) || this;
        _this.player = player;
        _this.mask = new engine_1.CircleCollisionMask(_this, 32 / exports.SCALE, [0, -10 / exports.SCALE]);
        _this.mask.isFixed = true;
        _this.mask.isTrigger = true;
        return _this;
    }
    FloorCheckPlayerObject.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        _a = [this.player.x, this.player.y], this.x = _a[0], this.y = _a[1];
        if (!this.player.isAlive)
            return;
        this.player.isOnFloor = false;
        var triggers = this.mask.triggers;
        for (var _i = 0, triggers_2 = triggers; _i < triggers_2.length; _i++) {
            var trigger = triggers_2[_i];
            var triggerGobj = trigger.gameObject;
            if (triggerGobj instanceof boulder_1.BoulderObject || triggerGobj instanceof mountain_1.MountainObject) {
                this.player.isOnFloor = true;
                break;
            }
        }
        var _a;
    };
    return FloorCheckPlayerObject;
}(engine_1.GameObject));
var PlayerObject = (function (_super) {
    __extends(PlayerObject, _super);
    function PlayerObject(opts) {
        var _this = _super.call(this, 'Player', merge({
            sprite: {
                src: '/img/player.png',
                pivot: { x: 32, y: 86 }
            },
            imageScale: 1 / exports.SCALE
        }, opts)) || this;
        _this.MOVE_FORCE_MAGNITUDE = .5;
        _this.isAlive = true;
        _this.isOnFloor = true;
        return _this;
    }
    PlayerObject.prototype.addToScene = function (scene) {
        _super.prototype.addToScene.call(this, scene);
        this.scene.addObject(new SquishyPlayerObject(this));
        this.scene.addObject(new FloorCheckPlayerObject(this));
    };
    PlayerObject.prototype.init = function () {
        this.mask = new engine_1.CircleCollisionMask(this, 32 / exports.SCALE, [0, -32 / exports.SCALE]);
        this.shouldRender = true;
        this.shouldTick = true;
        this.isAlive = true;
        this.isOnFloor = false;
    };
    PlayerObject.prototype.handleEvent = function (e) {
        if (_super.prototype.handleEvent.call(this, e))
            return true;
        if (e.type === 'abstractButtonPressed' && e.name === 'jump' && this.isOnFloor) {
            this.mask.addForce(0, -10);
            return true;
        }
        if (e.type === 'keyPressed' && e.code === 'F3') {
            this.game.renderPhysics = !this.game.renderPhysics;
            return true;
        }
        return false;
    };
    PlayerObject.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        if (this.isAlive) {
            var hdelta = 0;
            if (this.events.isAbstractButtonDown('left'))
                hdelta -= 1;
            if (this.events.isAbstractButtonDown('right'))
                hdelta += 1;
            if (!this.isOnFloor)
                hdelta *= .2;
            var hforce = hdelta * this.MOVE_FORCE_MAGNITUDE;
            this.mask.addForce(hforce, this.isOnFloor ? Math.abs(hforce) * .2 : 0);
            if (this.x - 2 > this.scene.camera.clampRight) {
                this.scene.removeObject(this);
            }
        }
    };
    return PlayerObject;
}(engine_1.GameObject));
exports.PlayerObject = PlayerObject;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var StatusOverlayObject = (function (_super) {
    __extends(StatusOverlayObject, _super);
    function StatusOverlayObject(player) {
        var _this = _super.call(this, 'StatusOverlay', {
            renderCamera: 'none'
        }) || this;
        _this.player = player;
        player.shouldRender = true;
        player.shouldTick = false;
        return _this;
    }
    StatusOverlayObject.prototype.tick = function (delta) {
        _super.prototype.tick.call(this, delta);
        this.bringToFront();
        if (!this.player.shouldTick && this.animationAge > 2) {
            this.player.init();
        }
    };
    StatusOverlayObject.prototype.renderImpl = function (adapter) {
        if (adapter instanceof engine_1.DefaultGraphicsAdapter)
            this.renderImplContext2d(adapter);
        else
            throw new Error('Not implemented');
    };
    StatusOverlayObject.prototype.renderImplContext2d = function (adapter) {
        var context = adapter.context;
        var _a = this.game.canvasSize, canvasWidth = _a[0], canvasHeight = _a[1];
        if (!this.player.isAlive) {
            context.fillStyle = 'rgba(0, 0, 0, .6)';
            context.fillRect(0, (canvasHeight / 2) - 200, canvasWidth, 400);
            context.fillStyle = 'white';
            context.font = '120px Cambria';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText('You Lose!', canvasWidth / 2, canvasHeight / 2);
            context.fillStyle = 'white';
            context.font = '24px Cambria';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText('Press escape to return to menu', canvasWidth / 2, (canvasHeight / 2) + 80);
        }
        else if (!this.player.scene) {
            context.fillStyle = 'rgba(0, 0, 0, .6)';
            context.fillRect(0, (canvasHeight / 2) - 200, canvasWidth, 400);
            context.fillStyle = 'white';
            context.font = '120px Cambria';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText('You Win!', canvasWidth / 2, canvasHeight / 2);
            context.fillStyle = 'white';
            context.font = '24px Cambria';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText('Press escape to return to menu', canvasWidth / 2, (canvasHeight / 2) + 80);
        }
        else if (this.animationAge < 3) {
            context.fillStyle = 'rgba(0, 0, 0, .6)';
            context.fillRect(0, (canvasHeight / 2) - 200, canvasWidth, 400);
            context.fillStyle = 'white';
            context.font = '120px Cambria';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            var text = this.animationAge < 1 ? 'Ready...' :
                this.animationAge < 2 ? 'Set...' :
                    'Go!';
            context.fillText(text, canvasWidth / 2, canvasHeight / 2);
        }
    };
    return StatusOverlayObject;
}(engine_1.GameObject));
exports.StatusOverlayObject = StatusOverlayObject;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var MountainCollisionMask = (function (_super) {
    __extends(MountainCollisionMask, _super);
    function MountainCollisionMask(mountain) {
        var _this = _super.call(this, mountain) || this;
        _this.mountain = mountain;
        _this.possibleContactPoints = [];
        _this.isCheckingCollisions = false;
        _this.isFixed = true;
        return _this;
    }
    MountainCollisionMask.prototype.clearContacts = function () {
        _super.prototype.clearContacts.call(this);
        this.possibleContactPoints.length = 0;
    };
    MountainCollisionMask.prototype.checkForCollisions = function (other) {
        if (this.isCheckingCollisions)
            throw new Error("Already checking collisions!");
        this.isCheckingCollisions = true;
        try {
            if (other instanceof engine_1.CircleCollisionMask) {
                var data = this.mountain.data;
                var minx = data[0][0];
                var maxx = data[data.length - 1][0];
                var _a = [other.gameObject.x + other.offset[0], other.gameObject.y + other.offset[1]], otherxx = _a[0], otheryy = _a[1];
                if (isNaN(otherxx) || isNaN(otheryy))
                    throw new Error('Their position is NaN');
                if (otherxx + other.radius < minx)
                    return null;
                if (otherxx - other.radius > maxx)
                    return null;
                var minCheckX = otherxx - other.radius;
                var maxCheckX = otherxx + other.radius;
                var minq = 0, maxq = data.length - 1;
                minx = data[minq][0];
                for (var q = 0; q < data.length - 1; q++) {
                    var dqx = data[q][0];
                    if (dqx < minCheckX && dqx > minx) {
                        minq = q;
                        minx = dqx;
                    }
                    else if (dqx > maxCheckX) {
                        maxq = q;
                        break;
                    }
                }
                var collisions = [];
                for (var q = minq; q < maxq; q++) {
                    var dq1 = data[q];
                    var dq2 = data[q + 1];
                    var miny = Math.min(dq1[1], dq2[1]);
                    var maxy = Math.max(dq1[1], dq2[1]);
                    if (otheryy + other.radius < miny || otheryy - other.radius > maxy)
                        continue;
                    var A1 = dq2[1] - dq1[1];
                    var B1 = dq1[0] - dq2[0];
                    var C1 = (dq2[1] - dq1[1]) * dq1[0] + (dq1[0] - dq2[0]) * dq1[1];
                    var C2 = (-B1 * otherxx) + (A1 * otheryy);
                    var det = A1 * A1 - -B1 * B1;
                    var _b = (!!det ? [(A1 * C1 - B1 * C2) / det, (A1 * C2 - -B1 * C1) / det] : [otherxx, otheryy]), cx = _b[0], cy = _b[1];
                    if (isNaN(det) || isNaN(cx) || isNaN(cy))
                        continue;
                    if (cx < dq1[0])
                        cx = dq1[0], cy = dq1[1];
                    else if (cx > dq2[0])
                        cx = dq2[0], cy = dq2[1];
                    var dist2 = engine_1.pointDistance2(cx, cy, otherxx, otheryy);
                    var isCollision = dist2 < other.radius * other.radius;
                    this.possibleContactPoints.push([cx, cy, isCollision]);
                    if (!isCollision)
                        continue;
                    if (this.isTrigger || other.isTrigger) {
                        other.triggers.push(this);
                        this.triggers.push(other);
                    }
                    else {
                        var dist = Math.sqrt(dist2);
                        var normal = [(otherxx - cx) / dist, (otheryy - cy) / dist];
                        var penetration = other.radius - dist;
                        var collision = {
                            first: this,
                            second: other,
                            contactNormal: normal,
                            contactPoint: [cx, cy],
                            penetration: penetration + .01
                        };
                        this.contacts.push(collision);
                        other.contacts.push(collision);
                        collisions.push(collision);
                    }
                }
                return collisions.length ? collisions : null;
            }
            else {
                return other.checkForCollisions(this);
            }
        }
        finally {
            this.isCheckingCollisions = false;
        }
    };
    MountainCollisionMask.prototype.resolveCollisions = function () {
        for (var q = 0; q < this.contacts.length; q++) {
            var contact = this.contacts[q];
            if (contact.first !== this)
                continue;
            var other = contact.second;
            if (this.isFixed && other.isFixed)
                return;
            var relativeMass = this.mass / (this.mass + other.mass);
            if (isNaN(relativeMass))
                throw new Error("relativeMass is not a number");
            if (this.isFixed)
                relativeMass = 1;
            else if (other.isFixed)
                relativeMass = 0;
            var eAbsorb = 1 - relativeMass;
            if (!this.isFixed || !other.isFixed) {
                if (!this.isFixed) {
                    if (isNaN(contact.contactNormal[0]) || isNaN(eAbsorb) || isNaN(contact.penetration))
                        throw new Error("No bueno!");
                    this.collisionImpulseX -= contact.contactNormal[0] * eAbsorb * contact.penetration;
                    this.collisionImpulseY -= contact.contactNormal[1] * eAbsorb * contact.penetration;
                    this.impulseCount++;
                }
                if (!other.isFixed) {
                    if (isNaN(contact.contactNormal[0]) || isNaN(eAbsorb) || isNaN(contact.penetration))
                        throw new Error("No bueno!");
                    other.collisionImpulseX += contact.contactNormal[0] * relativeMass * contact.penetration;
                    other.collisionImpulseY += contact.contactNormal[1] * relativeMass * contact.penetration;
                    other.impulseCount++;
                }
                var a1 = (contact.contactNormal[0] * this.gameObject.hspeed) + ((contact.contactNormal[1] * this.gameObject.vspeed));
                var a2 = (contact.contactNormal[0] * other.gameObject.hspeed) + ((contact.contactNormal[1] * other.gameObject.vspeed));
                var optimizedP = (2 * (a1 - a2)) / (this.mass + other.mass);
                if (!this.isFixed) {
                    _a = [
                        this.gameObject.hspeed - optimizedP * other.mass * contact.contactNormal[0],
                        this.gameObject.vspeed - optimizedP * other.mass * contact.contactNormal[1]
                    ], this.gameObject.hspeed = _a[0], this.gameObject.vspeed = _a[1];
                }
                if (!other.isFixed) {
                    _b = [
                        other.gameObject.hspeed + optimizedP * this.mass * contact.contactNormal[0],
                        other.gameObject.vspeed + optimizedP * this.mass * contact.contactNormal[1]
                    ], other.gameObject.hspeed = _b[0], other.gameObject.vspeed = _b[1];
                }
            }
        }
        var _a, _b;
    };
    MountainCollisionMask.prototype.renderImpl = function (context) {
        var camera = this.gameObject.renderCamera === 'default' ? this.gameObject.scene.camera :
            this.gameObject.renderCamera !== 'none' ? this.gameObject.renderCamera :
                null;
        var zoomScale = !!camera ? 1 / camera.zoomScale : 1;
        context.strokeStyle = this.contacts.length ? 'red' : 'green';
        context.lineWidth = zoomScale;
        context.beginPath();
        var data = this.mountain.data;
        context.moveTo(data[0][0], data[0][1]);
        for (var q = 1; q < data.length; q++) {
            var _a = data[q], x = _a[0], y = _a[1];
            context.lineTo(x, y);
        }
        context.stroke();
        context.lineWidth *= 2;
        for (var q = 0; q < this.possibleContactPoints.length; q++) {
            var _b = this.possibleContactPoints[q], cx = _b[0], cy = _b[1], onSegment = _b[2];
            context.beginPath();
            context.strokeStyle = onSegment ? 'green' : 'red';
            context.moveTo(cx - context.lineWidth * 6, cy - context.lineWidth * 6);
            context.lineTo(cx + context.lineWidth * 6, cy + context.lineWidth * 6);
            context.moveTo(cx + context.lineWidth * 6, cy - context.lineWidth * 6);
            context.lineTo(cx - context.lineWidth * 6, cy + context.lineWidth * 6);
            context.stroke();
        }
    };
    return MountainCollisionMask;
}(engine_1.CollisionMask));
exports.MountainCollisionMask = MountainCollisionMask;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var engine_1 = __webpack_require__(0);
var backdrop_1 = __webpack_require__(53);
var player_1 = __webpack_require__(55);
var mountain_1 = __webpack_require__(21);
var boulder_controller_1 = __webpack_require__(54);
var status_overlay_1 = __webpack_require__(56);
var speed_scale_camera_1 = __webpack_require__(43);
var stack_scene_1 = __webpack_require__(3);
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene(parentScene, level) {
        var _this = _super.call(this, parentScene) || this;
        _this.level = level;
        _this.initialized = false;
        return _this;
    }
    StartScene.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this.initialized)
            return;
        this.initialized = true;
        this.addForceGenerator(new engine_1.GravityForceGenerator(9.8));
        this.addForceGenerator(new engine_1.DragForceGenerator(.05, .5));
        var _a = (this.level && this.level.player && this.level.player.startPos) || [0, 0], psx = _a[0], psy = _a[1];
        var player = new player_1.PlayerObject({
            x: psx,
            y: psy
        });
        var data = null;
        if (this.level) {
            data = [];
            var sx = this.level.mountain.startx || 0;
            var step = this.level.mountain.stepx;
            var cols = this.level.mountain.cols;
            for (var q = 0; q < cols.length; q++) {
                data.push([sx + q * step, cols[q]]);
            }
        }
        var mountain = new mountain_1.MountainObject(data);
        var playerBoulderRepeat = (this.level && this.level.player && this.level.player.boulderRepeat) || undefined;
        var mountainBoulderRepeat = (this.level && this.level.mountain.boulderRepeat) || undefined;
        var boulderController = new boulder_controller_1.BoulderControllerObject(player, mountain, playerBoulderRepeat, mountainBoulderRepeat);
        var backdrop = new backdrop_1.BackdropObject(mountain);
        var statusOverlay = new status_overlay_1.StatusOverlayObject(player);
        this.addObject(backdrop);
        this.addObject(mountain);
        this.addObject(player);
        this.addObject(boulderController);
        this.addObject(statusOverlay);
        if (!this.level) {
            var data_1 = mountain.data;
            var levelMeta = "\n    {\n        name: 'Unknown',\n        mountain: {\n            startx: " + data_1[0][0] + ",\n            stepx: " + (data_1[1][0] - data_1[0][0]) + ",\n            cols: [" + data_1.filter(function (val, idx) { return idx < data_1.length - 2; }).map(function (_a) {
                var _ = _a[0], y = _a[1];
                return y;
            }).join(',') + "],\n            boulderRepeat: " + boulderController.mountainBoulderRepeat + "\n        },\n        player: {\n            startPos: [" + player.x + ", " + player.y + "],\n            boulderRepeat: " + boulderController.playerBoulderRepeat + "\n        }\n    }";
            console.log(levelMeta);
        }
        var camera = this.camera = new speed_scale_camera_1.SpeedScaleCamera(this);
        camera.clampLeft = mountain.data[0][0];
        camera.clampRight = mountain.data[mountain.data.length - 1][0];
        camera.floorCenterPosition = false;
        camera.follow = player;
        camera.clearColor = '';
        camera.maxZoomScale = 400;
        camera.minZoomScale = 1;
        camera.zoomScale = player_1.SCALE;
    };
    return StartScene;
}(stack_scene_1.StackScene));
exports.StartScene = StartScene;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);
//# sourceMappingURL=main.map