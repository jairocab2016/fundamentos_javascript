// function addToArray (data, array, callback) {
//   if (!array) {
//     callback(new Error('No existe el array'), null)
//   } else {
//     array.push(data)
//     callback(null, array)
//   }
// }
//
// var array = [1,2,3];
//
// addToArray(4, array, function (err) {
//   if (err) return console.log(err.message)
//   console.log(array)
// })

function addToArray (data, array, callback) {
  if (!array) {
    return callback(new Error('No existe el array', null))
  }
  setTimeout(function() {
    array.push(data)
    callback(null, array)
  }, 1000)
}

var array = [1,2,3];

addToArray(4, array, function (err) {
  if (err) return console.log(err.message)
  console.log(array)
})
