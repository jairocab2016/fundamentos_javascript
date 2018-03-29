// 11 10 1991

const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado"
]
const nacimiento = new Date(1991, 10, 12)
const hoy = new Date()
const tiempo = hoy - nacimiento
const tiempoSegundos = tiempo / 1000
const tiempoMin = tiempoSegundos / 60
const tiempoHoras = tiempoSegundos / 60
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
console.log(diasSemana[proximo.getDay()]);
