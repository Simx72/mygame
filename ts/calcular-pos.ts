function calcularPos(camX: number, scale: number, width: number, text?: Phaser.GameObjects.Text) {

  var x = 0

  /* scale = 32% ó 0.32 */

  var pastoInicio = camX * scale
  var pastoFin = pastoInicio + width

  var rWidth = width * scale + width

  var part = Math.floor(camX / rWidth)

  x = (part * width) + pastoInicio

  if (typeof text != "undefined") {
    let f = (x: number) => x ? Math.floor(x) : 0;
    text.text += `camX: ${f(camX)} - scale: ${scale} - width: ${f(width)}\n`;
    text.text += `pasto inicio: ${f(pastoInicio)} - pasto fin: ${f(pastoFin)} - part: ${part} \n`;
    text.text += `rWidth: ${f(rWidth)}\n`;
  }

  return x;

}