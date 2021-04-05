import LevelScene from './templates/level-scene';

export default class LevelScene_1 extends LevelScene {

  constructor() {
    super({
      active: false,
      visible: false,
      key: 'level-scene.1',
    });
  }


  /* preload part */
  $preload = () => {
    this.preloadFondo(1)
  }



  /* create part */
  $create = () => {

    // this.physics.world.gravity.y = 100;

    var camera = this.cameras.main

    camera.setBounds(0, 0, this.scale.width * 5, 0)

  }



  /* update part */
  $update = () => {

    let camera = { x: this.cameras.main.scrollX, y: this.cameras.main.scrollY };

    this.isDebugModeOn(texto => {
      texto.text += `[game]: Camera Position - x ${Math.floor(camera.x)} | y ${Math.floor(camera.y)} \n`;
    });

  }

}
