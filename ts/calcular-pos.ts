export default function calcularPos(camX: number, scale: number, width: number, text?: Phaser.GameObjects.Text) {

  var x: number;

  var pastoInicio = camX * scale
  var pastoFin = pastoInicio + width

  var rWidth: number = width;

  if (scale != 1)
    rWidth = width / (1 - scale)

  var part = Math.floor(camX / rWidth)

  x = (part * width) + pastoInicio

  if (typeof text != "undefined" && text != void 0) {
    let f = (x: number) => x ? Math.floor(x) : 0;
    text.text += `camX: ${f(camX)} - scale: ${scale} - width: ${f(width)}\n`;
    text.text += `pasto inicio: ${f(pastoInicio)} - pasto fin: ${f(pastoFin)} - part: ${part} \n`;
    text.text += `rWidth: ${f(rWidth)}\n`;
  }

  return x;

}