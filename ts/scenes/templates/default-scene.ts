
/**
 * @class DefaultScene
 * creates a scene
 */
export default class DefaultScene extends Phaser.Scene {

  /**
   * @param config - either a scene-key or a settings object
   */
  constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
    super(config);
    this._object = { object: {}, data: {} };
    this._preload = () => { };
    this._create = () => { };
    this._update = () => { };
    this.centerX = 0;
    this.centerY = 0;
  }

  object<T = Phaser.GameObjects.GameObject | Phaser.GameObjects.Group>(id: string, val?: T): T {
    if (typeof val == "undefined") {

      return <T>this._object.object[id];

    } else {

      return (this._object.object[id] = val);


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
  _preload: () => void
  /**
   * should override
   * @override
   */
  _create: () => void
  /**
   * should override
   * @override
   */
  _update: () => void

  /**
   * preload
   */
  public preload() {
    this.load.setBaseURL('https://pagina-simx72-aba9b.web.app/mygame-assets/')

    this.load.on('loaderror', (file: any) => {
      console.log(file)
    })

    this.load.xhr.withCredentials = false;

    this.centerX = this.game.scale.width / 2;
    this.centerY = this.game.scale.height / 2;
    this._preload()

  }
  /**
   * create
   */
  public create() {
    this._create()
  }
  /**
   * update
   */
  public update() {
    this._update()
  }

}