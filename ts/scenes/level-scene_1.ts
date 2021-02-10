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

    var mainChar = this.object<Phaser.Types.Physics.Arcade.ImageWithDynamicBody>("character.main");

    this.isDebugModeOn(texto => {
      texto.text = `[game]: Player - x ${Math.floor(mainChar.x)} | y ${Math.floor(mainChar.y)} \n`;
    });

    const cursorKeys = this.input.keyboard.createCursorKeys();

    if (cursorKeys.right.isDown && cursorKeys.left.isUp) {
      mainChar.body.setVelocityX(500)
      mainChar.setFlipX(false)
    } else if (cursorKeys.left.isDown && cursorKeys.right.isUp) {
      mainChar.body.setVelocityX(-500)
      mainChar.setFlipX(true)
    } else {
      mainChar.body.setVelocityX(0)
    }

    if (cursorKeys.up.isDown) {
      mainChar.body.setVelocityY(-500)
    } else if (cursorKeys.down.isDown) {
      mainChar.body.setVelocityY(500)
    } else {
      mainChar.body.setVelocityY(0)
    }

  }

}
