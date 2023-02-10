console.log("Entro index.js");

let objStudents = JSON.parse(db); //parse convierte de JSON a objeto de Javascript
console.log(objStudents);
console.log(objStudents.students);

objStudents.students.forEach(student => {
    let sumGrades = student.grades.reduce((total, grade) => {return total + grade}, 0); //el "0" indica el valor en el que inicia el Total. El Total es el acumulador y "grade" el inicializador
    //todas las funciones tienen que llevar "return", y en el caso de grade no especificamos en donde empieza porque iniciará desde el 0, y desde el momento en que especificamos
    //que es un array, se entiende que empezará en cero, a menos que nosotros modifiquemos ese valor.

    // let sumGrades = student.grades.reduce((total, grade) =>  total + grade, 0); HAY una excepción en JS que dice que
    // si realizamos una operación que solo ocupe una línea, se interpretará automáticamente como si le hubiéramos puesto los corchetes y el return SIN LA NECESIDAD DE AGREGARLO,
    // por eso, si usáramos esta función de flecha, también se mostraría correctamente en el navegador.


    student.average = sumGrades / 3; //Aquí estamos creando una nueva propiedad a todo el array y le estamos asignando un valor.
    console.log(student);
});


//¡UTILIZANDO FOR EN VEZ DE .REDUCE!
objStudents.students.forEach(student =>{
    let sumGrades = 0;
    for (let i= 0; i < student.grades.length; i++){ //Se usa ".length" (el largo del arreglo) para poder realizar las iteraciones
        sumGrades += student.grades[i];
    }
    student.average = sumGrades / student.grades.length;
    console.log(student);
});


//¡UTILIZANDO FOR EACH EN VEZ DE .REDUCE!
objStudents.students.forEach(student => {
    let sumGrades = 0;
    student.grades.forEach(grade => {
        sumGrades += grade;
    });
    student.average = (sumGrades / student.grades.length).toFixed(3); //toFixed se utiliza para elegir cuantas decimales queremos mostrar, en este caso solo queremos tres, pero convierte el valor en string.
    console.log(student);
    student.average = Number((sumGrades / student.grades.length).toFixed(2)); //Para convertirlo a número hay que agregar la función Number.
    console.log(student);
});


let miCalculadora = new Calculadora(); //creamos una instancia en la clase Calculadora; a partir de aquí yo puedo hacer uso de todos los métodos (funciones) de la clase.

console.log(miCalculadora.sumar(2,2), "Adición en calculadora");
console.log(miCalculadora.dividir(3,3), "División en calculadora");
console.log(miCalculadora.restar(15,1), "Sustracción en calculadora");
console.log(miCalculadora.multiplicar(5,5), "Multiplicación en calculadora");


let miCalculadoraCientifica = new CalculadoraCientifica();

console.log(miCalculadoraCientifica.sumar(3,3), "Suma desde calculadora científica");
console.log(miCalculadoraCientifica.raizCuadrada(25), "Raíz cuadrada desde calculadora científica");