"use strict";
function cargarMainCharacter(game) {
    /* CREATE */
    var mainChar = game.object("character.main", game.physics.add.sprite(game.scale.width / 2, game.scale.height / 2, 'character.main.idle'));
    /* OPTIONS */
    mainChar.setOrigin(0, 1);
    /* ANIMS */
    mainChar.anims.create({
        key: 'idle',
        frames: game.anims.generateFrameNumbers('character.main.idle', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
    });
    mainChar.anims.create({
        key: 'attack',
        frames: game.anims.generateFrameNumbers('character.main.attack.1', { start: 0, end: 5 }),
        frameRate: 10
    });
    mainChar.setScale(2);
    mainChar.addListener('animationcomplete', function () {
        eval("console.log('anim complete', this)");
        mainChar.anims.play('idle');
    });
    mainChar.anims.play('attack');
    /* CAMERA FOLLOW */
    game.cameras.main.startFollow(mainChar, false, 0.3, 0.3);
}
//# sourceMappingURL=cargar-main-character.js.map