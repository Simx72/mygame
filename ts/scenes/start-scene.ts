import UIScene from './templates/ui-scene';
export default class StartScene extends UIScene {

  constructor() {
    super({
      active: false,
      visible: false,
      key: 'start-scene',
    });
  }

  $preload = () => {
    this.load.image('bg', '/assets/background/PNG/Cartoon_Forest_BG_01/Cartoon_Forest_BG_01.png')
  }

  $create = () => {
    this.object(
      'fondo',
      this.add.image(this.centerX, this.centerY, 'bg')
        .setDisplaySize(this.scale.width, this.scale.height)
    )
  }

  $update = () => {

  }

}