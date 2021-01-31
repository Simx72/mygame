"use strict";
var line;
function cargarFondo(game) {
    var fondo1 = game.object('fondo.1', game.add.image(0, 0, 'fondo.1'));
    var fondo2 = game.object('fondo.2', game.add.image(0, 0, 'fondo.2'));
    var fondo3 = game.object('fondo.3', game.add.image(0, 0, 'fondo.3'));
    var fondo4 = game.object('fondo.4', game.add.image(0, 0, 'fondo.4'));
    var fondo5a = game.object('fondo.5.a', game.add.image(0, 0, 'fondo.5', 0));
    var fondo5b = game.object('fondo.5.b', game.add.image(0 + game.game.scale.width, 0, 'fondo.5'));
    fondo4.setVisible(false);
    fondo3.setVisible(false);
    fondo2.setVisible(false);
    fondo1.setVisible(false);
    fondo5b.setVisible(false);
    {
        line = game.add.line();
        line.setFillStyle(0xFFFFFF);
        line.setTo(0, 0, 0, game.scale.height);
        line.setLineWidth(10, 10);
    }
    fondo1.displayWidth = game.scale.width + 200;
    fondo2.displayWidth = game.scale.width;
    fondo3.displayWidth = game.scale.width;
    fondo4.displayWidth = game.scale.width;
    fondo5a.displayWidth = game.scale.width;
    fondo5b.displayWidth = game.scale.width;
    fondo1.displayHeight = game.scale.height + 200;
    fondo2.displayHeight = game.scale.height;
    fondo3.displayHeight = game.scale.height;
    fondo4.displayHeight = game.scale.height;
    fondo5a.displayHeight = game.scale.height;
    fondo5b.displayHeight = game.scale.height;
    fondo2.setOrigin(0, 0);
    fondo1.setOrigin(0, 0);
    fondo3.setOrigin(0, 0);
    fondo4.setOrigin(0, 0);
    fondo5a.setOrigin(0, 0);
    fondo5b.setOrigin(0, 0);
}
//# sourceMappingURL=cargar-fondo.js.map