import DefaultScene from './default-scene'
import cargarMainCharacter from '../../functions/cargar-main-character';
import cargarFondo from '../../functions/cargar-fondo';
import calcularPos from '../../functions/calcular-pos';
import preloadCharacter from '../../functions/preload-character';
import updateFondo from '../../functions/update-fondo';
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
      this._preloadTiles()
      preloadCharacter(this)
      this.$preload()
    }

    /**
     * create
     */
    this._create = () => {
      this.cargarFondo()
      this._cargarMainCharacter()
      this.$create()
    }

    /**
     * update
     */
    this._update = () => {
      this._updateFondo()
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

  _updateFondo() {
    updateFondo(this)
  }

  calcularPos = calcularPos

  preloadFondo(fondo: 1 | 2 | 3 | 4) {
    // cargar fondo
    if (fondo == 1 || fondo == 2 || fondo == 3 || fondo == 4) {
      this.load.image('fondo.1', `background/PNG/Cartoon_Forest_BG_0${fondo}/Layers/Sky.png`);
      this.load.image('fondo.2', `background/PNG/Cartoon_Forest_BG_0${fondo}/Layers/BG_Decor.png`);
      this.load.image('fondo.3', `background/PNG/Cartoon_Forest_BG_0${fondo}/Layers/Middle_Decor.png`);
      this.load.image('fondo.4', `background/PNG/Cartoon_Forest_BG_0${fondo}/Layers/Foreground.png`);
      this.load.image('fondo.5', `background/PNG/Cartoon_Forest_BG_0${fondo}/Layers/Ground.png`);
    } else {
      throw new TypeError(`Parameter 'fondo' of type [ 1 | 2 | 3 | 4 ] is not assignable to ${fondo}`)
    }
  }

  _preloadTiles() {

    for (let i = 2; i < 129; i++) {
      this.load.image(`tile.${i}`, `enviroment/PNG/Tiles/tile${i}.png`)
    }

    this.load.image('tile.ground.start', 'enviroment/PNG/Tiles/tile31.png')
    this.load.image('tile.ground.center', 'enviroment/PNG/Tiles/tile32.png')
    this.load.image('tile.ground.end', 'enviroment/PNG/Tiles/tile30.png')

  }

}