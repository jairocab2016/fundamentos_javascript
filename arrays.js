function suma(...numeros) {
  // let acum = 0
  // for (let i = 0; i < numeros.length; i++) {
  //   acum += numeros[i]
  // }
  return numeros.reduce(function (acum, numero) {
    acum += numero
    return acum
  }, 0)
}
const sumar = (...numeros) => numeros.reduce((acum, numero) => acum += numero, 0)

// function dobles(...numeros) {
//   const resultado = []
//   for (let i = 0; i < numeros.length; i++) {
//     resultado.push(numeros[i] * 2)
//   }
//   return resultado
// }
// function pares(...numeros) {
//   const resultado = []
//   const length = numeros.length
//   for (let i = 0; i < length; i++) {
//     const numero = numeros[i]
//     if (numero % 2 == 0) {
//       resultado.push(numero)
//     }
//   }
//   return resultado
// }

const dobles = (...numeros) => numeros.map(numero => numero * 2)
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)

suma(4, 8, 12, 8954, 7)
