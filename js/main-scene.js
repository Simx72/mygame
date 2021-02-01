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
var LevelScene1 = /** @class */ (function (_super) {
    __extends(LevelScene1, _super);
    function LevelScene1() {
        var _this = this;
        var sceneConfig = {
            active: false,
            visible: false,
            key: 'main-scene',
        };
        _this = _super.call(this, sceneConfig) || this;
        _this.objects = {};
        return _this;
    }
    LevelScene1.prototype.object = function (id, val) {
        if (typeof val == "undefined") {
            return this.objects[id];
        }
        else {
            this.objects[id] = val;
            return this.objects[id];
        }
    };
    /* preload part */
    LevelScene1.prototype.preload = function () {
        // cargar fondo
        this.load.image('fondo.1', location.href + 'assets/background/PNG/Cartoon_Forest_BG_01/Layers/Sky.png');
        this.load.image('fondo.2', location.href + 'assets/background/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png');
        this.load.image('fondo.3', location.href + 'assets/background/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png');
        this.load.image('fondo.4', location.href + 'assets/background/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png');
        this.load.image('fondo.5', location.href + 'assets/background/PNG/Cartoon_Forest_BG_01/Layers/Ground.png');
        this.load.spritesheet('character.main.idle', location.href + 'assets/characters/1-Woodcutter/Woodcutter_idle.png', {
            frameWidth: 27,
            frameHeight: 32,
            margin: 0,
            spacing: 21,
            endFrame: 4
        });
        this.load.spritesheet('character.main.attack.1', location.href + 'assets/characters/1-Woodcutter/Woodcutter_attack1.png', {
            frameWidth: 45,
            frameHeight: 38,
            margin: 0,
            spacing: 3,
            endFrame: 6
        });
    };
    /* create part */
    LevelScene1.prototype.create = function () {
        var center = {
            x: this.scale.width / 2,
            y: this.scale.height / 2,
        };
        cargarFondo(this);
        // this.physics.world.gravity.y = 100;
        cargarMainCharacter(this);
        var camera = this.cameras.main;
        camera.setBounds(0, 0, this.scale.width * 5, 0);
        if (this.physics.config.debug) {
            this.object('texto.debug', this.add.text(10, 10, 'Camera Position').setOrigin(0, 0));
        }
    };
    /* update part */
    LevelScene1.prototype.update = function () {
        var camera = { x: this.cameras.main.scrollX, y: this.cameras.main.scrollY };
        if (this.physics.config.debug) {
            var texto = this.object('texto.debug');
            texto.setPosition(camera.x + 10, camera.y + 10);
            texto.text = "Camera Position\t| x: " + Math.floor(camera.x) + "\t| y: " + Math.floor(camera.y) + "\n";
        }
        updateFondo(this);
        var mainChar = this.object("character.main");
        var cursorKeys = this.input.keyboard.createCursorKeys();
        if (cursorKeys.right.isDown && cursorKeys.left.isUp) {
            mainChar.body.setVelocityX(500);
            mainChar.setFlipX(false);
        }
        else if (cursorKeys.left.isDown && cursorKeys.right.isUp) {
            mainChar.body.setVelocityX(-500);
            mainChar.setFlipX(true);
        }
        else {
            mainChar.body.setVelocityX(0);
        }
        if (cursorKeys.up.isDown) {
            mainChar.body.setVelocityY(-500);
        }
        else if (cursorKeys.down.isDown) {
            mainChar.body.setVelocityY(500);
        }
        else {
            mainChar.body.setVelocityY(0);
        }
    };
    return LevelScene1;
}(Phaser.Scene));
//# sourceMappingURL=main-scene.js.map