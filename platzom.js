function platzom(str) {
  let translation = str

  //si la palabra termina en "ar", se le quitan esos dos caracteres.
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2)
  }

  //si la palabra inicia con z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }
  return translation
}

console.log(platzom("Programar")); //Program
console.log(platzom("Zorro")); // Zorrope
console.log(platzom("Zarpar")); // Zarppe
