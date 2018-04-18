function addToArray(data, array) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      array.push(data);
      resolve(array);
    }, 1000);
    if (!array) {
      reject(new Error('No existe un array'));
    }
  })
  return promise;
}

const array = [1, 2, 3];

async function processData(data, array) {
  try {
    const result = await addToArray(data, array);
    console.log(result)
  } catch (err) {
    return console.log(err.message);
  }
}

processData(4, array)
// [1,2,3,4]
processData(5, array)
// [1,2,3,4,5]
processData(6, array)
// [1,2,3,4,5,6]
