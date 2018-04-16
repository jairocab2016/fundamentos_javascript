const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest //usar en caso de ejecutar desde pc.

//promise
// const promise = new Promise(function (resolve, reject) {
// 	setTimeout(function() {
// 		reject(new Error("Se produjo un error"))
// 	}, 1000)
// })
//
// promise
// 	.then(function () {
// 	})
// 	.catch(function (err) {
// 	})

function get(URL) {
  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        const DONE = 4
        const OK = 200
        if (this.readyState === DONE) {
          if (this.status === OK) {
            //Todo OK
            resolve(JSON.parse(this.responseText))
          } else {
            //Jubo un error
            reject(newError(`Se produjo un error al realizar el request ${this.status}`))
          }
        }
      }
      xhr.open('GET', URL);
      xhr.send(null);
    })
  }

  /* Funcion para tratar el error */
  function handleError(err) {
    console.log(`Request failed: ${err}`)
  }

let luke
  /*llamada al metodo */
  get('https://www.swapi.co/api/people/1/')
		.then((response) => {
			luke = response
			return get(luke.homeworld)
		})
		.then((homeworld) => {
			luke.homeworld = homeworld
      console.log(`${luke.name} nació en ${luke.homeworld.name}`)
		})
		.catch(err => handleError(err))

    // if (err) return handleError(err)
    //
    // /* Para traer el mundo */
    // get(luke.homeworld, function onHomeworldResponse(err, homeworld) {
    //   if (err) return handleError(err)
    //
    //   luke.homeworld = homeworld
    //   console.log(`${luke.name} nació en ${luke.homeworld.name}`)
    // })
    //
    // console.log(`Request succeded`)
    // console.log('luke', luke)
  // })
