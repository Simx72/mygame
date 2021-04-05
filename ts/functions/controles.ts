import LevelScene from '../scenes/templates/level-scene';
export default function controles(this: LevelScene) {
  var mainChar = this.object<Phaser.Types.Physics.Arcade.ImageWithDynamicBody>("character.main");

    this.isDebugModeOn(texto => {
      texto.text += `[game]: Player - x ${Math.floor(mainChar.x)} | y ${Math.floor(mainChar.y)} \n`;
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
}