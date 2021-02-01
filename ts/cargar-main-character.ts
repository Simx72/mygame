import LevelScene from './level-scene';
export default function cargarMainCharacter(game: LevelScene) {

  /* CREATE */
  var mainChar = game.object(
    "character.main",
    game.physics.add.sprite(game.scale.width / 2, game.scale.height / 2, 'character.main.idle')
  );

  /* OPTIONS */
  mainChar.setOrigin(0, 1);

  /* ANIMS */
  mainChar.anims.create({
    key: 'idle',
    frames: game.anims.generateFrameNumbers('character.main.idle', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  })

  mainChar.anims.create({
    key: 'attack',
    frames: game.anims.generateFrameNumbers('character.main.attack.1', { start: 0, end: 5 }),
    frameRate: 10
  })

  mainChar.setScale(2);

  mainChar.on('animationcomplete', function (anim: { key: string; }, frame: any) {
    let _this = eval("this") as Phaser.GameObjects.Sprite
    _this.emit('anim_end[' + anim.key + ']', anim, frame);
  }, mainChar);

  mainChar.on('anim_end[attack]', () => {
    mainChar.anims.play('idle')
  })

  mainChar.anims.play('attack');

  /* CAMERA FOLLOW */
  game.cameras.main.startFollow(mainChar, false, 0.3, 0.3)

}