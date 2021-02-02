import LevelScene from './level-scene';
import updateFondo from './update-fondo';

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

    if (this.physics.config.debug) {
      this.object(
        'texto.debug',
        this.add.text(10, 10, 'Camera Position').setOrigin(0, 0)
      );
    }

  }



  /* update part */
  $update = () => {

    let camera = { x: this.cameras.main.scrollX, y: this.cameras.main.scrollY };

    if (this.physics.config.debug) {
      let texto = this.object<Phaser.GameObjects.Text>('texto.debug');
      texto.setPosition(camera.x + 10, camera.y + 10);
      texto.text = `Camera Position\t| x: ${Math.floor(camera.x)}\t| y: ${Math.floor(camera.y)}\n`;
    }

    updateFondo(this)

    var mainChar = this.object<Phaser.Types.Physics.Arcade.ImageWithDynamicBody>("character.main");

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
