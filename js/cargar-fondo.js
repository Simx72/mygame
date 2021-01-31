"use strict";
function cargarFondo(game) {
    var fondo1 = game.object('fondo.1', game.add.image(0, 0, 'fondo.1'));
    var fondo2a = game.object('fondo.2.a', game.add.image(0, 0, 'fondo.2'));
    var fondo2b = game.object('fondo.2.b', game.add.image(0, 0, 'fondo.2'));
    var fondo3a = game.object('fondo.3.a', game.add.image(0, 0, 'fondo.3'));
    var fondo3b = game.object('fondo.3.b', game.add.image(0, 0, 'fondo.3'));
    var fondo4a = game.object('fondo.4.a', game.add.image(0, 0, 'fondo.4'));
    var fondo4b = game.object('fondo.4.b', game.add.image(0, 0, 'fondo.4'));
    var fondo5a = game.object('fondo.5.a', game.add.image(0, 0, 'fondo.5', 0));
    var fondo5b = game.object('fondo.5.b', game.add.image(0 + game.game.scale.width, 0, 'fondo.5'));
    // fondo4.setVisible(false);
    // fondo3.setVisible(false);
    // fondo2.setVisible(false);
    // fondo1.setVisible(false);
    // fondo5b.setVisible(false);
    /*
      if (game.physics.config.debug)
        game.add.rectangle(
          game.scale.width / 2,
          game.scale.height / 2,
          100,
          100,
          0xFFFFFF
        ) */
    fondo1.displayWidth = game.scale.width + 200;
    fondo2a.displayWidth = game.scale.width;
    fondo2b.displayWidth = game.scale.width;
    fondo3a.displayWidth = game.scale.width;
    fondo3b.displayWidth = game.scale.width;
    fondo4a.displayWidth = game.scale.width;
    fondo4b.displayWidth = game.scale.width;
    fondo5a.displayWidth = game.scale.width;
    fondo5b.displayWidth = game.scale.width;
    fondo5b.displayWidth = game.scale.width;
    fondo1.displayHeight = game.scale.height + 200;
    fondo2a.displayHeight = game.scale.height;
    fondo2b.displayHeight = game.scale.height;
    fondo3a.displayHeight = game.scale.height;
    fondo3b.displayHeight = game.scale.height;
    fondo4a.displayHeight = game.scale.height;
    fondo4b.displayHeight = game.scale.height;
    fondo5a.displayHeight = game.scale.height;
    fondo5b.displayHeight = game.scale.height;
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
//# sourceMappingURL=cargar-fondo.js.map