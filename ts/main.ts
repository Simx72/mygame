/// <reference path="../phaser/typings/phaser.d.ts" />
import LevelScene1 from './main-scene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Juego ejemplo',

  type: Phaser.AUTO,

  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: innerWidth,
    height: innerHeight,
    zoom: 4,
    min: {
      width: 185,
      height: 90
    },
    max: {
      width: 320,
      height: 200
    }
  },

  scene: [LevelScene1],

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },

  parent: 'game',
  backgroundColor: '#000000'

};

if (location.href.substr(location.href.length - 10) == 'index.html') location.href = location.href.substr(location.href.length - 10)

export default (new Phaser.Game(gameConfig));
