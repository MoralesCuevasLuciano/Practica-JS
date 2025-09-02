/*
Crear un arreglo clientes con al menos 3 objetos literales que tengan las propiedades: id, nombre, edad, compras (array de strings). 
Usar forEach() para mostrar en consola el nombre de cada cliente junto con la cantidad de compras que realizó.
*/

let clientes = [
    {id: 0, nombre: "Pepolucho", edad: 22, compras: ["Camiseta", "botines", "hamburgesa"]},
    {id: 1, nombre: "María", edad: 25, compras: ["Libro", "Lápiz", "Cuaderno"]},
    {id: 2, nombre: "Juan", edad: 30, compras: ["Pantalón", "Zapatos"]}
];

clientes.forEach(c => console.log("Nombre: ", c.nombre, " - Cantidad de compras:", c.compras.length));