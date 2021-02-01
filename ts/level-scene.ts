import DefaultScene from './default-scene'
/**
 * @class LevelScene
 * creates a level scene (a level for adding platforms and other things)
 */
export default class LevelScene extends DefaultScene {

  /**
   * @param config - ethier a scene-key or a settings object
   */
  constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
    super(config);
    this._object = { object: {}, data: {} };
    this.$preload = () => { };
    this.$create = () => { };
    this.$update = () => { };
    this.centerX = 0;
    this.centerY = 0;
    /**
     * preload
     */
    this._preload = () => {
      this.centerX = this.game.scale.width / 2;
      this.centerY = this.game.scale.height / 2;
      this.load.spritesheet(
        'character.main.idle',
        location.href + 'assets/characters/1-Woodcutter/Woodcutter_idle.png',
        {
          frameWidth: 27,
          frameHeight: 32,
          margin: 0,
          spacing: 21,
          endFrame: 4
        }
      )
      this.load.spritesheet(
        'character.main.attack.1',
        location.href + 'assets/characters/1-Woodcutter/Woodcutter_attack1.png',
        {
          frameWidth: 45,
          frameHeight: 38,
          margin: 0,
          spacing: 3,
          endFrame: 6
        }
      )
      this.$preload()
    }

    /**
     * create
     */
    this._create = () => {
      this.cargarMainCharacter()
      this.$create()
    }

    /**
     * update
     */
    this._update = () => {
      this.$update()
    }

  }




  object<T extends Phaser.GameObjects.GameObject>(id: string, val?: T | Phaser.GameObjects.GameObject): T {
    if (typeof val == "undefined") {

      return <T>this._object.object[id];

    } else {

      this._object.object[id] = val;

      return <T>this._object.object[id];

    }
  }

  dato<T = string | boolean | number>(id: string, val?: T): T {
    if (typeof val == "undefined") {

      return <T>this._object.data[id];

    } else {

      this._object.data[id] = val;

      return <T>this._object.data[id];

    }
  }

  centerX: number;
  centerY: number;

  _object: {
    object: { [c: string]: any },
    data: { [c: string]: any }
  }

  /**
   * should override
   * @override
   */
  $preload: () => void
  /**
   * should override
   * @override
   */
  $create: () => void
  /**
   * should override
   * @override
   */
  $update: () => void

  cargarMainCharacter() {

    /* CREATE */
    var mainChar = this.object(
      "character.main",
      this.physics.add.sprite(this.scale.width / 2, this.scale.height / 2, 'character.main.idle')
    );

    /* OPTIONS */
    mainChar.setOrigin(0, 1);

    /* ANIMS */
    mainChar.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('character.main.idle', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    })

    mainChar.anims.create({
      key: 'attack',
      frames: this.anims.generateFrameNumbers('character.main.attack.1', { start: 0, end: 5 }),
      frameRate: 10
    })

    mainChar.setScale(2);

    mainChar.on('animationcomplete', function (anim: { key: string; }, frame: any) {
      let _this = eval("this") as Phaser.GameObjects.Sprite
      _this.emit('anim_end[' + anim.key + ']', anim, frame);
    }, mainChar);

    mainChar.on('anim_end[attack]', () => {
      mainChar.anims.play('idle')
    })

    mainChar.anims.play('attack');

    /* CAMERA FOLLOW */
    this.cameras.main.startFollow(mainChar, false, 0.3, 0.3)

  }

}