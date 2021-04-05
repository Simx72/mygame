import LevelScene from '../scenes/templates/level-scene';
export default function preloadCharacter(this: LevelScene) {
  this.load.spritesheet(
    'character.main.idle',
    'characters/1-Woodcutter/Woodcutter_idle.png',
    {
      frameWidth: 27,
      frameHeight: 32,
      margin: 0,
      spacing: 21,
      endFrame: 4
    }
  )
  this.load.spritesheet(
    'character.main.attack.1',
    'characters/1-Woodcutter/Woodcutter_attack1.png',
    {
      frameWidth: 45,
      frameHeight: 38,
      margin: 0,
      spacing: 3,
      endFrame: 6
    }
  )
}