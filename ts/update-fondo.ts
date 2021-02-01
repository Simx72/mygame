function updateFondo(game: GameScene) {

  let camera = { x: game.cameras.main.scrollX, y: game.cameras.main.scrollY };

  game.object<Phaser.GameObjects.Image>("fondo.1").setPosition(camera.x * 1 - 100, camera.y - 100);
  let x2 = game.object<Phaser.GameObjects.Image>("fondo.2.a").setX(camera.x * 0.04).x;
  game.object<Phaser.GameObjects.Image>("fondo.2.b").setX(x2 + game.scale.width);
  let x3 = game.object<Phaser.GameObjects.Image>("fondo.3.a").setX(camera.x * 0.08).x;
  game.object<Phaser.GameObjects.Image>("fondo.3.b").setX(x3 + game.scale.width);
  let x4 = game.object<Phaser.GameObjects.Image>("fondo.4.a").setX(camera.x * 0.16).x;
  game.object<Phaser.GameObjects.Image>("fondo.4.b").setX(x4 + game.scale.width);
  let x5 = game.object<Phaser.GameObjects.Image>("fondo.5.a").setX(calcularPos(camera.x, 0.25, game.scale.width)).x;
  game.object<Phaser.GameObjects.Image>("fondo.5.b").setX(x5 + game.scale.width);

  if (game.physics.config.debug) {
    // let texto = this.object<Phaser.GameObjects.Text>('texto.debug');
  }

}