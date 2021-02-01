"use strict";
function updateFondo(game) {
    var camera = { x: game.cameras.main.scrollX, y: game.cameras.main.scrollY };
    game.object("fondo.1").setPosition(camera.x * 1 - 100, camera.y - 100);
    var x2 = game.object("fondo.2.a").setX(calcularPos(camera.x, 0.04, game.scale.width)).x;
    game.object("fondo.2.b").setX(x2 + game.scale.width);
    var x3 = game.object("fondo.3.a").setX(calcularPos(camera.x, 0.08, game.scale.width)).x;
    game.object("fondo.3.b").setX(x3 + game.scale.width);
    var x4 = game.object("fondo.4.a").setX(calcularPos(camera.x, 0.16, game.scale.width)).x;
    game.object("fondo.4.b").setX(x4 + game.scale.width);
    var x5 = game.object("fondo.5.a").setX(calcularPos(camera.x, 0.32, game.scale.width)).x;
    game.object("fondo.5.b").setX(x5 + game.scale.width);
    if (game.physics.config.debug) {
        // let texto = this.object<Phaser.GameObjects.Text>('texto.debug');
    }
}
//# sourceMappingURL=update-fondo.js.map