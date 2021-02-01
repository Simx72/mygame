"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @class DefaultScene
 * creates a level scene (a level for adding platforms and other things)
 */
var DefaultScene = /** @class */ (function (_super) {
    __extends(DefaultScene, _super);
    /**
     * @param config - either a scene-key or a settings object
     */
    function DefaultScene(config) {
        var _this = _super.call(this, config) || this;
        _this._object = { object: {}, data: {} };
        _this._preload = function () { };
        _this._create = function () { };
        _this._update = function () { };
        _this.centerX = 0;
        _this.centerY = 0;
        return _this;
    }
    DefaultScene.prototype.object = function (id, val) {
        if (typeof val == "undefined") {
            return this._object.object[id];
        }
        else {
            this._object.object[id] = val;
            return this._object.object[id];
        }
    };
    DefaultScene.prototype.dato = function (id, val) {
        if (typeof val == "undefined") {
            return this._object.data[id];
        }
        else {
            this._object.data[id] = val;
            return this._object.data[id];
        }
    };
    /**
     * preload
     */
    DefaultScene.prototype.preload = function () {
        this.centerX = this.game.scale.width / 2;
        this.centerY = this.game.scale.height / 2;
        this._preload();
    };
    /**
     * create
     */
    DefaultScene.prototype.create = function () {
        this._create();
    };
    /**
     * create
     */
    DefaultScene.prototype.update = function () {
        this._update();
    };
    return DefaultScene;
}(Phaser.Scene));
//# sourceMappingURL=default-scene.js.map