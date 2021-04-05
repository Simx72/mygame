import LevelScene from "../scenes/templates/level-scene";
export default function cargarFondo(this: LevelScene) {

  var fondo1 = this.object(
    'fondo.1',
    this.add.image(
      0,
      0,
      'fondo.1'
    )
  );

  var fondo2a = this.object(
    'fondo.2.a',
    this.add.image(
      0,
      0,
      'fondo.2'
    )
  );
  var fondo2b = this.object(
    'fondo.2.b',
    this.add.image(
      0,
      0,
      'fondo.2'
    )
  );

  var fondo3a = this.object(
    'fondo.3.a',
    this.add.image(
      0,
      0,
      'fondo.3'
    )
  );
  var fondo3b = this.object(
    'fondo.3.b',
    this.add.image(
      0,
      0,
      'fondo.3'
    )
  );

  var fondo4a = this.object(
    'fondo.4.a',
    this.add.image(
      0,
      0,
      'fondo.4'
    )
  );
  var fondo4b = this.object(
    'fondo.4.b',
    this.add.image(
      0,
      0,
      'fondo.4'
    )
  );

  var fondo5a = this.object(
    'fondo.5.a',
    this.add.image(
      0,
      0,
      'fondo.5',
      0
    )
  );

  var fondo5b = this.object(
    'fondo.5.b',
    this.add.image(
      0 + this.this.scale.width,
      0,
      'fondo.5'
    )
  );

  fondo1.displayWidth = this.scale.width + 200;
  fondo2a.displayWidth = this.scale.width;
  fondo2b.displayWidth = this.scale.width;
  fondo3a.displayWidth = this.scale.width;
  fondo3b.displayWidth = this.scale.width;
  fondo4a.displayWidth = this.scale.width;
  fondo4b.displayWidth = this.scale.width;
  fondo5a.displayWidth = this.scale.width;
  fondo5b.displayWidth = this.scale.width;
  fondo5b.displayWidth = this.scale.width;

  fondo1.displayHeight = this.scale.height + 200;
  fondo2a.displayHeight = this.scale.height;
  fondo2b.displayHeight = this.scale.height;
  fondo3a.displayHeight = this.scale.height;
  fondo3b.displayHeight = this.scale.height;
  fondo4a.displayHeight = this.scale.height;
  fondo4b.displayHeight = this.scale.height;
  fondo5a.displayHeight = this.scale.height;
  fondo5b.displayHeight = this.scale.height;

  fondo1.setOrigin(0, 0);
  fondo2a.setOrigin(0, 0);
  fondo2b.setOrigin(0, 0);
  fondo3a.setOrigin(0, 0);
  fondo3b.setOrigin(0, 0);
  fondo4a.setOrigin(0, 0);
  fondo4b.setOrigin(0, 0);
  fondo5a.setOrigin(0, 0);
  fondo5b.setOrigin(0, 0);

}