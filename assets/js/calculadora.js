class Calculadora {

    constructor() { //los constructores son una función pero en este contexto se les llama métodos
        this.resultado = 0;//en las clases en vez de usar let se usa this.
    }
    sumar(valor1, valor2) {
        this.resultado = valor1 + valor2;
        return this.resultado;
    }
    restar(valor1, valor2) {
        this.resultado = valor1 - valor2;
        return this.resultado;
    }
    multiplicar(valor1, valor2) {
        this.resultado = valor1 * valor2;
        return this.resultado;
    }
    dividir(valor1, valor2) {
        this.resultado = valor1 / valor2;
        return this.resultado;
    }
}