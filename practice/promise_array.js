function addToArray (data, array) {
  const promise = new Promise((resolve, reject) => {
    if (!array) {
      reject(new Error('No existe un array'))
    } else {
      setTimeout(() => {
        array.push(data)
        resolve(array)
      }, 1000);
    }
  })
  return promise
}

const array = [1, 2, 3]
addToArray(4, array)
  .then(() =>  console.log(array))
  .catch(err => console.log(err.message))
