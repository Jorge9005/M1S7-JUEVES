class CalculadoraCientifica extends Calculadora { //Con extends le estamos diciendo que que va a heredar lo que la clase Calculadora tiene.
    constructor() {
        super(); //super nos ayuda a que la clase herede  métodos y todo lo que tiene la otra clase, por eso no se está definiendo el resultado.
    }

    potencia(valor1, valor2) {
        this.resultado = Math.pow(valor1, valor2);
        return this.resultado;
    }
    raizCuadrada(valor) {
        this.resultado = Math.sqrt(valor);
        return this.resultado;
    }
}