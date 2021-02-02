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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("calcular-pos", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function calcularPos(camX, scale, width, text) {
        var x;
        var pastoInicio = camX * scale;
        var pastoFin = pastoInicio + width;
        var rWidth = width;
        if (scale != 1)
            rWidth = width / (1 - scale);
        var part = Math.floor(camX / rWidth);
        x = (part * width) + pastoInicio;
        if (typeof text != "undefined" && text != void 0) {
            var f = function (x) { return x ? Math.floor(x) : 0; };
            text.text += "camX: " + f(camX) + " - scale: " + scale + " - width: " + f(width) + "\n";
            text.text += "pasto inicio: " + f(pastoInicio) + " - pasto fin: " + f(pastoFin) + " - part: " + part + " \n";
            text.text += "rWidth: " + f(rWidth) + "\n";
        }
        return x;
    }
    exports.default = calcularPos;
});
define("default-scene", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @class DefaultScene
     * creates a scene
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
    exports.default = DefaultScene;
});
define("cargar-main-character", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function cargarMainCharacter(game) {
        /* CREATE */
        var mainChar = game.object("character.main", game.physics.add.sprite(game.scale.width / 2, game.scale.height / 2, 'character.main.idle'));
        /* OPTIONS */
        mainChar.setOrigin(0, 1);
        /* ANIMS */
        mainChar.anims.create({
            key: 'idle',
            frames: game.anims.generateFrameNumbers('character.main.idle', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        });
        mainChar.anims.create({
            key: 'attack',
            frames: game.anims.generateFrameNumbers('character.main.attack.1', { start: 0, end: 5 }),
            frameRate: 10
        });
        mainChar.setScale(2);
        mainChar.on('animationcomplete', function (anim, frame) {
            var _this = eval("this");
            _this.emit('anim_end[' + anim.key + ']', anim, frame);
        }, mainChar);
        mainChar.on('anim_end[attack]', function () {
            mainChar.anims.play('idle');
        });
        mainChar.anims.play('attack');
        /* CAMERA FOLLOW */
        game.cameras.main.startFollow(mainChar, false, 0.3, 0.3);
    }
    exports.default = cargarMainCharacter;
});
define("preload-character", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function preloadCharacter(game) {
        game.load.spritesheet('character.main.idle', location.href + 'assets/characters/1-Woodcutter/Woodcutter_idle.png', {
            frameWidth: 27,
            frameHeight: 32,
            margin: 0,
            spacing: 21,
            endFrame: 4
        });
        game.load.spritesheet('character.main.attack.1', location.href + 'assets/characters/1-Woodcutter/Woodcutter_attack1.png', {
            frameWidth: 45,
            frameHeight: 38,
            margin: 0,
            spacing: 3,
            endFrame: 6
        });
    }
    exports.default = preloadCharacter;
});
define("level-scene", ["require", "exports", "default-scene", "cargar-main-character", "cargar-fondo", "calcular-pos", "preload-character"], function (require, exports, default_scene_1, cargar_main_character_1, cargar_fondo_1, calcular_pos_1, preload_character_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    default_scene_1 = __importDefault(default_scene_1);
    cargar_main_character_1 = __importDefault(cargar_main_character_1);
    cargar_fondo_1 = __importDefault(cargar_fondo_1);
    calcular_pos_1 = __importDefault(calcular_pos_1);
    preload_character_1 = __importDefault(preload_character_1);
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
            _this.calcularPos = calcular_pos_1.default;
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
                preload_character_1.default(_this);
                _this.$preload();
            };
            /**
             * create
             */
            _this._create = function () {
                _this.cargarFondo();
                _this._cargarMainCharacter();
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
        LevelScene.prototype._cargarMainCharacter = function () {
            cargar_main_character_1.default(this);
        };
        LevelScene.prototype.cargarFondo = function () {
            cargar_fondo_1.default(this);
        };
        LevelScene.prototype.preloadFondo = function (fondo) {
            // cargar fondo
            if (fondo == 1 || fondo == 2 || fondo == 3 || fondo == 4) {
                this.load.image('fondo.1', "assets/background/PNG/Cartoon_Forest_BG_0" + fondo + "/Layers/Sky.png");
                this.load.image('fondo.2', "assets/background/PNG/Cartoon_Forest_BG_0" + fondo + "/Layers/BG_Decor.png");
                this.load.image('fondo.3', "assets/background/PNG/Cartoon_Forest_BG_0" + fondo + "/Layers/Middle_Decor.png");
                this.load.image('fondo.4', "assets/background/PNG/Cartoon_Forest_BG_0" + fondo + "/Layers/Foreground.png");
                this.load.image('fondo.5', "assets/background/PNG/Cartoon_Forest_BG_0" + fondo + "/Layers/Ground.png");
            }
            else {
                throw new TypeError("'parameter 'fondo' of type [ 1 | 2 | 3 | 4 ] is not assignable to " + fondo);
            }
        };
        return LevelScene;
    }(default_scene_1.default));
    exports.default = LevelScene;
});
define("cargar-fondo", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function cargarFondo(game) {
        var fondo1 = game.object('fondo.1', game.add.image(0, 0, 'fondo.1'));
        var fondo2a = game.object('fondo.2.a', game.add.image(0, 0, 'fondo.2'));
        var fondo2b = game.object('fondo.2.b', game.add.image(0, 0, 'fondo.2'));
        var fondo3a = game.object('fondo.3.a', game.add.image(0, 0, 'fondo.3'));
        var fondo3b = game.object('fondo.3.b', game.add.image(0, 0, 'fondo.3'));
        var fondo4a = game.object('fondo.4.a', game.add.image(0, 0, 'fondo.4'));
        var fondo4b = game.object('fondo.4.b', game.add.image(0, 0, 'fondo.4'));
        var fondo5a = game.object('fondo.5.a', game.add.image(0, 0, 'fondo.5', 0));
        var fondo5b = game.object('fondo.5.b', game.add.image(0 + game.game.scale.width, 0, 'fondo.5'));
        fondo1.displayWidth = game.scale.width + 200;
        fondo2a.displayWidth = game.scale.width;
        fondo2b.displayWidth = game.scale.width;
        fondo3a.displayWidth = game.scale.width;
        fondo3b.displayWidth = game.scale.width;
        fondo4a.displayWidth = game.scale.width;
        fondo4b.displayWidth = game.scale.width;
        fondo5a.displayWidth = game.scale.width;
        fondo5b.displayWidth = game.scale.width;
        fondo5b.displayWidth = game.scale.width;
        fondo1.displayHeight = game.scale.height + 200;
        fondo2a.displayHeight = game.scale.height;
        fondo2b.displayHeight = game.scale.height;
        fondo3a.displayHeight = game.scale.height;
        fondo3b.displayHeight = game.scale.height;
        fondo4a.displayHeight = game.scale.height;
        fondo4b.displayHeight = game.scale.height;
        fondo5a.displayHeight = game.scale.height;
        fondo5b.displayHeight = game.scale.height;
        fondo1.setOrigin(0, 0);
        fondo2a.setOrigin(0, 0);
        fondo2b.setOrigin(0, 0);
        fondo3a.setOrigin(0, 0);
        fondo3b.setOrigin(0, 0);
        fondo4a.setOrigin(0, 0);
        fondo4b.setOrigin(0, 0);
        fondo5a.setOrigin(0, 0);
        fondo5b.setOrigin(0, 0);
    }
    exports.default = cargarFondo;
});
define("update-fondo", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function updateFondo(game) {
        var camera = { x: game.cameras.main.scrollX, y: game.cameras.main.scrollY };
        game.object("fondo.1").setPosition(camera.x * 1 - 100, camera.y - 100);
        var x2 = game.object("fondo.2.a").setX(game.calcularPos(camera.x, 0.04, game.scale.width)).x;
        game.object("fondo.2.b").setX(x2 + game.scale.width);
        var x3 = game.object("fondo.3.a").setX(game.calcularPos(camera.x, 0.08, game.scale.width)).x;
        game.object("fondo.3.b").setX(x3 + game.scale.width);
        var x4 = game.object("fondo.4.a").setX(game.calcularPos(camera.x, 0.16, game.scale.width)).x;
        game.object("fondo.4.b").setX(x4 + game.scale.width);
        var x5 = game.object("fondo.5.a").setX(game.calcularPos(camera.x, 0.32, game.scale.width)).x;
        game.object("fondo.5.b").setX(x5 + game.scale.width);
        if (game.physics.config.debug) {
            // let texto = this.object<Phaser.GameObjects.Text>('texto.debug');
        }
    }
    exports.default = updateFondo;
});
define("main-scene", ["require", "exports", "level-scene", "update-fondo"], function (require, exports, level_scene_1, update_fondo_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    level_scene_1 = __importDefault(level_scene_1);
    update_fondo_1 = __importDefault(update_fondo_1);
    var LevelScene1 = /** @class */ (function (_super) {
        __extends(LevelScene1, _super);
        function LevelScene1() {
            var _this = _super.call(this, {
                active: false,
                visible: false,
                key: 'main-scene',
            }) || this;
            /* preload part */
            _this.$preload = function () {
                _this.preloadFondo(1);
            };
            /* create part */
            _this.$create = function () {
                // this.physics.world.gravity.y = 100;
                var camera = _this.cameras.main;
                camera.setBounds(0, 0, _this.scale.width * 5, 0);
                if (_this.physics.config.debug) {
                    _this.object('texto.debug', _this.add.text(10, 10, 'Camera Position').setOrigin(0, 0));
                }
            };
            /* update part */
            _this.$update = function () {
                var camera = { x: _this.cameras.main.scrollX, y: _this.cameras.main.scrollY };
                if (_this.physics.config.debug) {
                    var texto = _this.object('texto.debug');
                    texto.setPosition(camera.x + 10, camera.y + 10);
                    texto.text = "Camera Position\t| x: " + Math.floor(camera.x) + "\t| y: " + Math.floor(camera.y) + "\n";
                }
                update_fondo_1.default(_this);
                var mainChar = _this.object("character.main");
                var cursorKeys = _this.input.keyboard.createCursorKeys();
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
            return _this;
        }
        return LevelScene1;
    }(level_scene_1.default));
    exports.default = LevelScene1;
});
define("main", ["require", "exports", "main-scene"], function (require, exports, main_scene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.gameConfig = void 0;
    main_scene_1 = __importDefault(main_scene_1);
    exports.gameConfig = {
        title: 'Juego ejemplo',
        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: innerWidth,
            height: innerHeight,
            zoom: 4,
            min: {
                width: 185,
                height: 90
            },
            max: {
                width: 320,
                height: 200
            }
        },
        scene: [main_scene_1.default],
        physics: {
            default: 'arcade',
            arcade: {
                debug: true,
            },
        },
        parent: 'game',
        backgroundColor: '#000000'
    };
    if (location.href.substr(location.href.length - 10) == 'index.html')
        location.href = location.href.substr(location.href.length - 10);
    exports.default = (new Phaser.Game(exports.gameConfig));
});
define("ui-scene", ["require", "exports", "default-scene"], function (require, exports, default_scene_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    default_scene_2 = __importDefault(default_scene_2);
    /**
     * @class UIScene
     * creates a UI scene (a static level for buttons and images,
     * like a intro scene or a loose scene)
     */
    var UIScene = /** @class */ (function (_super) {
        __extends(UIScene, _super);
        /**
         * @param config - ethier a scene-key or a settings object
         */
        function UIScene(config) {
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
        UIScene.prototype.object = function (id, val) {
            if (typeof val == "undefined") {
                return this._object.object[id];
            }
            else {
                this._object.object[id] = val;
                return this._object.object[id];
            }
        };
        UIScene.prototype.dato = function (id, val) {
            if (typeof val == "undefined") {
                return this._object.data[id];
            }
            else {
                this._object.data[id] = val;
                return this._object.data[id];
            }
        };
        return UIScene;
    }(default_scene_2.default));
    exports.default = UIScene;
});
//# sourceMappingURL=game-bundle.js.map