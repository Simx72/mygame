const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: 'main-scene',
};

class GameScene extends Phaser.Scene {

  constructor() {
    super(sceneConfig);
    this.objects = {};
  }

  object<T extends Phaser.GameObjects.GameObject>(id: string, val?: T | Phaser.GameObjects.GameObject): T {
    if (typeof val == "undefined") {

      return <T>this.objects[id];

    } else {

      this.objects[id] = val;

      return <T>this.objects[id];

    }
  }

  objects: {
    [c: string]: Phaser.GameObjects.GameObject |
    Phaser.GameObjects.Arc | Phaser.GameObjects.BitmapText |
    Phaser.GameObjects.Blitter | Phaser.GameObjects.Container |
    Phaser.GameObjects.Curve | Phaser.GameObjects.DOMElement |
    Phaser.GameObjects.DisplayList | Phaser.GameObjects.DynamicBitmapText |
    Phaser.GameObjects.Ellipse | Phaser.GameObjects.Extern |
    Phaser.GameObjects.Image
  }



  /* preload part */
  public preload() {
    // cargar fondo
    this.load.image('fondo.1', location.pathname + 'assets/background/PNG/Cartoon_Forest_BG_01/Layers/Sky.png');
    this.load.image('fondo.2', location.pathname + 'assets/background/PNG/Cartoon_Forest_BG_01/Layers/BG_Decor.png');
    this.load.image('fondo.3', location.pathname + 'assets/background/PNG/Cartoon_Forest_BG_01/Layers/Middle_Decor.png');
    this.load.image('fondo.4', location.pathname + 'assets/background/PNG/Cartoon_Forest_BG_01/Layers/Foreground.png');
    this.load.image('fondo.5', location.pathname + 'assets/background/PNG/Cartoon_Forest_BG_01/Layers/Ground.png');


    this.load.spritesheet(
      'character.main.idle',
      '/assets/characters/1-Woodcutter/Woodcutter_idle.png',
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
      '/assets/characters/1-Woodcutter/Woodcutter_attack1.png',
      {
        frameWidth: 45,
        frameHeight: 38,
        margin: 0,
        spacing: 3,
        endFrame: 6
      }
    )
  }



  /* create part */
  public create() {
    let center = {
      x: this.scale.width / 2,
      y: this.scale.height / 2,
    }

    cargarFondo(this);

    // this.physics.world.gravity.y = 100;



    var mainChar = this.object(
      "character.main",
      this.add.sprite(center.x, center.y, 'character.main.idle')
    );

    mainChar.setOrigin(0, 1);

    mainChar.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('character.main.idle', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    })

    mainChar.anims.create({
      key: 'attack',
      frames: this.anims.generateFrameNumbers('character.main.attack.1', { start: 0, end: 5 }),
      frameRate: 10
    })

    mainChar.setScale(2);

    mainChar.addListener('animationcomplete', () => {
      mainChar.anims.play('idle');
    });

    this.physics.add.existing(mainChar);

    mainChar.anims.play('attack');

    var camera = this.cameras.main.startFollow(mainChar, false, 0.3, 0.3)

    // camera.setBounds(0, 0, this.scale.width * 2, 0)

    this.object(
      'texto.prueba',
      this.add.text(10, 10, 'Camera Position').setOrigin(0, 0)
    );

  }



  /* update part */
  public update() {

    let fondo5a = this.object<Phaser.GameObjects.Image>("fondo.5.a");
    // let fondo5b = this.object<Phaser.GameObjects.Image>("fondo.5.b");

    let texto = this.object<Phaser.GameObjects.Text>('texto.prueba');
    let camera = { x: this.cameras.main.scrollX, y: this.cameras.main.scrollY };
    texto.setPosition(camera.x + 10, camera.y + 10);
    texto.text = `Camera Position - x: ${Math.round(camera.x)} - y: ${Math.floor(camera.y)}\n`;
    texto.text += `Pasto 1 Position - x: ${Math.round(fondo5a.x)} - y: ${Math.floor(fondo5a.y)}\n`;
    // texto.text += `Fondo.5.b (Ground b) Position - x: ${Math.round(fondo5b.x)} - y: ${Math.floor(fondo5b.y)}\n`;

    this.object<Phaser.GameObjects.Image>("fondo.1").setPosition(camera.x * 1 - 100, camera.y - 100);
    this.object<Phaser.GameObjects.Image>("fondo.2").setX(camera.x * 0.04);
    this.object<Phaser.GameObjects.Image>("fondo.3").setX(camera.x * 0.08);
    this.object<Phaser.GameObjects.Image>("fondo.4").setX(camera.x * 0.16);
    // this.object<Phaser.GameObjects.Image>("fondo.5.a").setPosition(camera.x * 0.32, camera.y * 0.32);
    this.object<Phaser.GameObjects.Image>("fondo.5.a").setX(calcularPos(camera.x, 0.32, this.scale.width, texto));
    this.object<Phaser.GameObjects.Image>("fondo.5.b").setX(camera.x * 0.32 + this.scale.width);

    var mainChar = this.object<Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body }>("character.main");

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
