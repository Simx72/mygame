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

}