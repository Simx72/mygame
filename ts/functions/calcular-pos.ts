export default function calcularPos(camX: number, scale: number, width: number) {
  if (0 <= scale && scale <= 1) {
    var rWidth = width;

    if (scale != 1)
      rWidth = width / (1 - scale)

    return ((Math.floor(camX / rWidth) * width) + camX * scale)
  } else {
    console.error("'scale' param must be a number between 0 and 1")
    return 0;
  }
}