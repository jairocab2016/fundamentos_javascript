let base = 5
let height = 7

// function trianguloArea(base, altura) {
//   return base * height / 2
// }

// arrow function
const triangleArea = (base, altura) => base * height / 2
console.log(`El area de un triangulo de base ${base} y altura ${height} es: ${triangleArea(base, height)}`);

// funcion para calcular el area de un circulo
let radio = 5
const circuloArea = (r) => Math.PI * r**2
console.log(`El area del circulo con radio ${radio} es ${circuloArea(radio)}`);
