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
var sceneConfig = {
    active: false,
    visible: false,
    key: 'main-scene',
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.objects = {};
        return _this;
    }
    GameScene.prototype.object = function (id, val) {
        if (typeof val == "undefined") {
            return this.objects[id];
        }
        else {
            this.objects[id] = val;
            return this.objects[id];
        }
    };
    /* preload part */
    GameScene.prototype.preload = function () {
        // cargar fondo
        this.load.image('fondo.1', '/assets/background/PNG/Cartoon_Forest_BG_01/Layers/Sky.png');
        this.load.image('fondo.2', '/assets/background/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png');
        this.load.image('fondo.3', '/assets/background/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png');
        this.load.image('fondo.4', '/assets/background/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png');
        this.load.image('fondo.5', '/assets/background/PNG/Cartoon_Forest_BG_01/Layers/Ground.png');
        this.load.spritesheet('character.main.idle', '/assets/characters/1-Woodcutter/Woodcutter_idle.png', {
            frameWidth: 27,
            frameHeight: 32,
            margin: 0,
            spacing: 21,
            endFrame: 4
        });
        this.load.spritesheet('character.main.attack.1', '/assets/characters/1-Woodcutter/Woodcutter_attack1.png', {
            frameWidth: 45,
            frameHeight: 38,
            margin: 0,
            spacing: 3,
            endFrame: 6
        });
    };
    /* create part */
    GameScene.prototype.create = function () {
        var center = {
            x: this.scale.width / 2,
            y: this.scale.height / 2,
        };
        cargarFondo(this);
        // this.physics.world.gravity.y = 100;
        var mainChar = this.object("character.main", this.add.sprite(center.x, center.y, 'character.main.idle'));
        mainChar.setOrigin(0, 1);
        mainChar.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('character.main.idle', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        });
        mainChar.anims.create({
            key: 'attack',
            frames: this.anims.generateFrameNumbers('character.main.attack.1', { start: 0, end: 5 }),
            frameRate: 10
        });
        mainChar.setScale(2);
        mainChar.addListener('animationcomplete', function () {
            mainChar.anims.play('idle');
        });
        this.physics.add.existing(mainChar);
        mainChar.anims.play('attack');
        var camera = this.cameras.main.startFollow(mainChar, false, 0.3, 0.3);
        // camera.setBounds(0, 0, this.scale.width * 2, 0)
        this.object('texto.prueba', this.add.text(10, 10, 'Camera Position').setOrigin(0, 0));
    };
    /* update part */
    GameScene.prototype.update = function () {
        var fondo5a = this.object("fondo.5.a");
        // let fondo5b = this.object<Phaser.GameObjects.Image>("fondo.5.b");
        var texto = this.object('texto.prueba');
        var camera = { x: this.cameras.main.scrollX, y: this.cameras.main.scrollY };
        texto.setPosition(camera.x + 10, camera.y + 10);
        texto.text = "Camera Position - x: " + Math.round(camera.x) + " - y: " + Math.floor(camera.y) + "\n";
        texto.text += "Pasto 1 Position - x: " + Math.round(fondo5a.x) + " - y: " + Math.floor(fondo5a.y) + "\n";
        // texto.text += `Fondo.5.b (Ground b) Position - x: ${Math.round(fondo5b.x)} - y: ${Math.floor(fondo5b.y)}\n`;
        this.object("fondo.1").setPosition(camera.x * 1 - 100, camera.y - 100);
        this.object("fondo.2").setX(camera.x * 0.04);
        this.object("fondo.3").setX(camera.x * 0.08);
        this.object("fondo.4").setX(camera.x * 0.16);
        // this.object<Phaser.GameObjects.Image>("fondo.5.a").setPosition(camera.x * 0.32, camera.y * 0.32);
        this.object("fondo.5.a").setX(calcularPos(camera.x, 0.32, this.scale.width, texto));
        this.object("fondo.5.b").setX(camera.x * 0.32 + this.scale.width);
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
    return GameScene;
}(Phaser.Scene));
//# sourceMappingURL=main-scene.js.map