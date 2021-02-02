import DefaultScene from './default-scene'
import cargarMainCharacter from './cargar-main-character';
import cargarFondo from './cargar-fondo';
import calcularPos from './calcular-pos';
import preloadCharacter from './preload-character';
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
      preloadCharacter(this)
      this.$preload()
    }

    /**
     * create
     */
    this._create = () => {
      this._cargarMainCharacter()
      this.cargarFondo()
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


  _cargarMainCharacter() {
    cargarMainCharacter(this)
  }

  cargarFondo() {
    cargarFondo(this)
  }

  calcularPos = calcularPos

}