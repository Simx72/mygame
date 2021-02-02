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
    this.dato('sistema.fondo')
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

  preloadFondo(fondo: 1 | 2 | 3 | 4) {
    // cargar fondo
    if (fondo == 1 || fondo == 2 || fondo == 3 || fondo == 4) {
      this.load.image('fondo.1', `assets/background/PNG/Cartoon_Forest_BG_0${fondo}/Layers/Sky.png`);
      this.load.image('fondo.2', `assets/background/PNG/Cartoon_Forest_BG_0${fondo}/Layers/BG_Decor.png`);
      this.load.image('fondo.3', `assets/background/PNG/Cartoon_Forest_BG_0${fondo}/Layers/Middle_Decor.png`);
      this.load.image('fondo.4', `assets/background/PNG/Cartoon_Forest_BG_0${fondo}/Layers/Foreground.png`);
      this.load.image('fondo.5', `assets/background/PNG/Cartoon_Forest_BG_0${fondo}/Layers/Ground.png`);
    } else {
      throw new TypeError(`'parameter 'fondo' of type [ 1 | 2 | 3 | 4 ] is not assignable to ${fondo}`)
    }
  }

}