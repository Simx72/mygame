/// <reference path="../phaser/typings/phaser.d.ts" />

const gameConfig: Phaser.Types.Core.GameConfig = {
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

  scene: GameScene,

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },

  parent: 'game',
  backgroundColor: '#000000'

};

var phaserGame = new Phaser.Game(gameConfig);
