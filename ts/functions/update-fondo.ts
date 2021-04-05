import LevelScene from '../scenes/templates/level-scene';
export default function updateFondo(this: LevelScene) {

  let camera = { x: this.cameras.main.scrollX, y: this.cameras.main.scrollY };

  this.object<Phaser.GameObjects.Image>("fondo.1").setPosition(camera.x * 1 - 100, camera.y - 100);
  let x2 = this.object<Phaser.GameObjects.Image>("fondo.2.a").setX(
    this.calcularPos(
      camera.x, 0.04,
      this.scale.width
    )
  ).x;
  this.object<Phaser.GameObjects.Image>("fondo.2.b").setX(
    x2 + this.scale.width
  );
  let x3 = this.object<Phaser.GameObjects.Image>("fondo.3.a").setX(
    this.calcularPos(
      camera.x, 0.08,
      this.scale.width
    )
  ).x;
  this.object<Phaser.GameObjects.Image>("fondo.3.b").setX(
    x3 + this.scale.width
  );
  let x4 = this.object<Phaser.GameObjects.Image>("fondo.4.a").setX(
    this.calcularPos(
      camera.x, 0.16, this.scale.width
    )
  ).x;
  this.object<Phaser.GameObjects.Image>("fondo.4.b").setX(
    x4 + this.scale.width
  );
  let x5 = this.object<Phaser.GameObjects.Image>("fondo.5.a").setX(
    this.calcularPos(
      camera.x, 0.32, this.scale.width
    )
  ).x;
  this.object<Phaser.GameObjects.Image>("fondo.5.b").setX(
    x5 + this.scale.width
  );

  if (this.physics.config.debug) {
    // let texto = this.object<Phaser.GameObjects.Text>('texto.debug');
  }

}