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
    ).setDisplaySize(this.scale.width, this.scale.height)
      .setAlpha(0)

    let boton = {
      start: this.object(
        'boton.start',
        this.add.group(
          [
            this.add.rectangle(
              this.centerX,
              this.centerY,
              this.centerX,
              this.scale.height * 0.09,
              0xFFFFFF
            ),
            this.add.text(
              this.centerX,
              this.centerY,
              'Iniciar',
              {
                fontFamily: 'sans-serif',
                color: '#2DB02D',
                fontSize: '20pt'
              }
            ).setOrigin(0.5, 0.5)
          ],
          {
            setOrigin: { x: 0.5, y: 0.5 }
          }
        )
      )
    }

    let btnstart = <Phaser.GameObjects.Rectangle>boton.start.children.getArray()[0]
    btnstart.on('pointerdown', () => {
      btnstart.setFillStyle(0xFFFFFF)
      this.game.scene.switch('loose-scene', 'main-scene')
      this.game.canvas.style.cursor = 'default'
    })
      .on('pointerover', () => {
        this.game.canvas.style.cursor = 'pointer'
        btnstart.setFillStyle(0xDDDD33)
      })
      .on('pointerout', () => {
        this.game.canvas.style.cursor = 'default'
        btnstart.setFillStyle(0xFFFFFF)
      })




  }

  $update = () => {
    var fondo = this.object<Phaser.GameObjects.Image>('fondo')
    if (fondo.alpha <= 1) {
      fondo.alpha += 0.008;
    }
  }

}