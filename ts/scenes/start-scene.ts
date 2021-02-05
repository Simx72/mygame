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
    this.load.image(
      'bg',
      'http://simx72-mygame-assets.epizy.com/assets/background/PNG/Cartoon_Forest_BG_01/Cartoon_Forest_BG_01.png',
      {
        responseType: 'blob',
        withCredentials: false
      }
    )
  }

  $create = () => {
    this.object(
      'fondo.1',
      this.add.image(this.centerX, this.centerY, 'bg')
    ).setDisplaySize(this.scale.width, this.scale.height)
      .setAlpha(0)
    this.object(
      'fondo.2',
      this.add.image(this.centerX, this.centerY, 'bg')
    ).setDisplaySize(this.scale.width, this.scale.height)
      .setAlpha(0)

    this.object(
      'Titulo.2',
      this.add.text(
        this.centerX - 5,
        this.scale.height * 0.3 + 5,
        'El tesoro',
        {
          align: 'center',
          color: '#0009',
          fontSize: this.scale.width * 0.05 + 'pt',
          fontFamily: 'sans-serif'
        }
      ).setOrigin(0.5, 0)
    )
    this.object(
      'Titulo.1',
      this.add.text(
        this.centerX,
        this.scale.height * 0.3,
        'El tesoro',
        {
          align: 'center',
          color: '#ece74f',
          fontSize: this.scale.width * 0.05 + 'pt',
          fontFamily: 'sans-serif'
        }
      ).setOrigin(0.5, 0)
    )

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
            ).setInteractive(),
            this.add.text(
              this.centerX,
              this.centerY,
              'Iniciar',
              {
                fontFamily: 'sans-serif',
                color: '#2DB02D',
                fontSize: this.scale.width * 0.03 + 'pt'
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
      this.dato('iniciar', true)
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


    this.dato('iniciado', false)
    this.dato('iniciar', false)

  }

  $update = () => {
    var fondo1 = this.object<Phaser.GameObjects.Image>('fondo.1')
    var fondo2 = this.object<Phaser.GameObjects.Image>('fondo.2')

    fondo1.x -= 0.5;
    if (fondo1.x < (-this.centerX)) {
      fondo1.x = this.centerX
    }

    fondo2.x = fondo1.x + this.scale.width

    if (fondo1.alpha <= 1 && !this.dato('iniciado')) {
      fondo2.alpha = (fondo1.alpha += 0.008);
    } else {
      this.dato('iniciado', true)
    }


    if (this.dato('iniciar')) {
      fondo1.alpha = fondo2.alpha -= 0.02;
      if (fondo1.alpha <= 0) {
        this.game.scene.stop('start-scene').run('level-scene.1')
      }
    }
  }

}