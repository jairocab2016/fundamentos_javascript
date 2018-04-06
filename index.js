class Toggable {
  constructor(el) {
    //inicializar el estado interno
    this.el = el
    this.el.innerHTML = 'Off'
    this.activated = false
    this.onClick = this.onClick.bind(this)
    this.el.addEventListener('click', this.onClick.bind(this.onClick))
  }

  onClick(ev) {
    this.activated = !this.activated //cambiar estado interno
    this.toggleText()//llamar a toogleText
  }

  toggleText() {
    this.el.innerHTML = this.activated ? 'On' : 'Off'
  }
}

const button = document.getElementById('boton')
const miBoton = new Toggable(button)
