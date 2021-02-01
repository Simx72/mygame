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
 * @class LevelScene
 * creates a level scene (a level for adding platforms and other things)
 */
var LevelScene = /** @class */ (function (_super) {
    __extends(LevelScene, _super);
    /**
     * @param config - ethier a scene-key or a settings object
     */
    function LevelScene(config) {
        var _this = _super.call(this, config) || this;
        _this._object = { object: {}, data: {} };
        _this.$preload = function () { };
        _this.$create = function () { };
        _this.$update = function () { };
        _this.centerX = 0;
        _this.centerY = 0;
        /**
         * preload
         */
        _this._preload = function () {
            _this.centerX = _this.game.scale.width / 2;
            _this.centerY = _this.game.scale.height / 2;
            _this.$preload();
        };
        /**
         * create
         */
        _this._create = function () {
            _this.$create();
        };
        /**
         * update
         */
        _this._update = function () {
            _this.$update();
        };
        return _this;
    }
    LevelScene.prototype.object = function (id, val) {
        if (typeof val == "undefined") {
            return this._object.object[id];
        }
        else {
            this._object.object[id] = val;
            return this._object.object[id];
        }
    };
    LevelScene.prototype.dato = function (id, val) {
        if (typeof val == "undefined") {
            return this._object.data[id];
        }
        else {
            this._object.data[id] = val;
            return this._object.data[id];
        }
    };
    return LevelScene;
}(DefaultScene));
//# sourceMappingURL=level-scene.js.map