import LevelScene from '../scenes/templates/level-scene';
export default function preloadCharacter(game: LevelScene) {
  game.load.spritesheet(
    'character.main.idle',
    location.href + 'http://simx72-mygame-assets.epizy.com/assets/characters/1-Woodcutter/Woodcutter_idle.png',
    {
      frameWidth: 27,
      frameHeight: 32,
      margin: 0,
      spacing: 21,
      endFrame: 4
    }
  )
  game.load.spritesheet(
    'character.main.attack.1',
    location.href + 'http://simx72-mygame-assets.epizy.com/assets/characters/1-Woodcutter/Woodcutter_attack1.png',
    {
      frameWidth: 45,
      frameHeight: 38,
      margin: 0,
      spacing: 3,
      endFrame: 6
    }
  )
}