/*
Crear un arreglo alumnos con objetos { id, nombre, notas: [números] }.
Luego:
Usar map() + reduce() para generar un nuevo array, que tenga guardado cada objeto con: el nombre del alumno, el id y el promedio de sus notas.
Generar un nuevo arreglo con solo los aprobados (promedio >= 6).
Mostrar en consola la lista de aprobados.
*/

let alumnos = [
    {id: 0, nombre: "Pepo", notas: [10, 8, 8, 5]},
    {id: 1, nombre: "Pipi", notas: [9, 8, 5, 1]},
    {id: 2, nombre: "Sofi", notas: [10, 8, 9, 9]},
    {id: 3, nombre: "Messi", notas: [10, 6, 3, 4]},
];

let nuevosAlumnos = alumnos.map(a =>({
    id: a.id,
    nombre: a.nombre,
    promedio: a.notas.length ?
    ((a.notas.reduce((acumulador, n) => acumulador + n, 0)) / (a.notas.length)) : 0
/*carrito.reduce((acumulador, carrito) => acumulador + (carrito.cantidad * carrito.precioUnitario), 0);*/
}));

let alumnosAprobados = nuevosAlumnos.filter(n => n.promedio >= 6);

console.log("Alumnos");
console.log(alumnos);
console.log("alumnos + promedio");
console.log(nuevosAlumnos);
console.log("alumnos aprobados");
console.log(alumnosAprobados);

