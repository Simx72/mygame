import DefaultScene from './default-scene';
/**
 * @class UIScene
 * creates a UI scene (a static level for buttons and images, 
 * like a intro scene or a loose scene)
 */
export default class UIScene extends DefaultScene {

  /**
   * @param config - ethier a scene-key or a settings object
   */
  constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
    super(config);
    this.$preload = () => { };
    this.$create = () => { };
    this.$update = () => { };
    /**
     * preload
     */
    this._preload = () => {
      this.centerX = this.game.scale.width / 2;
      this.centerY = this.game.scale.height / 2;
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