class Carro {
  constructor( nome, motor){
    this.nome = nome
    this.motor = motor
  }

  stage2(potencia){
    return this.potencia = potencia * this.motor
  }
}

const palio = new Carro("palio", 110)

console.log(palio)

// definir potencia 

console.log(palio.stage2(1.2))

