console.log("Entro index.js");

let objStudents = JSON.parse(db); //parse convierte de JSON a objeto de Javascript
console.log(objStudents);
console.log(objStudents.students);

objStudents.students.forEach(student => {
    let sumGrades = student.grades.reduce((total, grade) => {return total + grade}, 0); //el "0" indica el valor en el que inicia el Total.
    //todas las funciones tienen que llevar "return", y en el caso de grade no especificamos en donde empieza porque iniciará desde el 0, y desde el momento en que especificamos
    //que es un array, se entiende que empezará en cero, a menos que nosotros modifiquemos ese valor.

    // let sumGrades = student.grades.reduce((total, grade) =>  total + grade, 0); HAY una excepción en JS que dice que
    // si realizamos una operación que solo ocupe una línea, se interpretará automáticamente como si le hubiéramos puesto los corchetes y el return SIN LA NECESIDAD DE AGREGARLO,
    // por eso, si usáramos esta función de flecha, también se mostraría correctamente en el navegador.


    student.average = sumGrades; //Aquí estamos creando una nueva propiedad a todo el array y le estamos asignando un valor.
    console.log(student);
});