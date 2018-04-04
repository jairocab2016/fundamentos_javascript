function saludarFamilia(apellido) {
  return function saludarMienbroDeFamilia(nombre) {
    console.log(`Hola ${nombre} ${apellido}`);
  }
}

const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez")

saludarGomez("Pedro")
saludarGomez("Juan")
saludarGomez("Laura")
saludarGomez("Mónica")

saludarPerez("Dario")
saludarPerez("Martin")
saludarPerez("Julieta")
