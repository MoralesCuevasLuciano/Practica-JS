/*Crear un arreglo llamado productos que contenga al menos 5 objetos literales con las propiedades: id, nombre, precio y stock.
Agregar un nuevo producto usando push().
Eliminar el último producto con pop().
Mostrar el listado final en consola.

*/
let productos = [
    {id: 1, nombre: "Teclado", precio: 15000, stock: 10},
    {id: 2, nombre: "Mouse", precio: 10000, stock: 5},
    {id: 3, nombre: "Monitor", precio: 20000, stock: 3},
    {id: 4, nombre: "Audífono", precio: 12000, stock: 8},
    {id: 5, nombre: "Parlante", precio: 18000, stock: 6},
    {id: 6, nombre: "Teclado", precio: 15000, stock: 10},
    {id: 7, nombre: "Mouse", precio: 10000, stock: 5},
    {id: 8, nombre: "Monitor", precio: 20000, stock: 3},
    {id: 9, nombre: "Audífono", precio: 12000, stock: 8},
    {id: 10, nombre: "Parlante", precio: 18000, stock: 6},
]

console.log("Productos originales: ");
console.log(productos);

console.log("Productos modificados: ");
productos.push({id: 11, nombre: "Teclado", precio: 15000, stock: 10});
console.log(productos);

productos.pop();
console.log("Productos modificados: ");
console.log(productos);