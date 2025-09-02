/*
Usar find() con una función callback para encontrar un producto por su nombre.
 Si lo encuentra, mostrarlo en la consola. Si no, mostrar el mensaje "Producto no encontrado".
*/
let productos = [
    {id: 1, nombre: "Teclado", precio: 15000, stock: 100},
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

let producto = productos.find(p => p.nombre == "Teclado");
console.log(producto); 
