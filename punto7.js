/*Crear una función procesarClientes(clientes, callback) que reciba el arreglo de clientes y una función de callback. 
Llamar a procesarClientes con distintos callbacks:
-Un callback que muestre solo los nombres.
-Otro callback que muestre solo la cantidad total de compras.
*/

let clientes = [
    {id: 0, nombre: "Pepolucho", edad: 22, compras: ["Camiseta", "botines", "hamburgesa"]},
    {id: 1, nombre: "María", edad: 25, compras: ["Libro", "Lápiz", "Cuaderno"]},
    {id: 2, nombre: "Juan", edad: 30, compras: ["Pantalón", "Zapatos"]}
];

function procesarClientes(clientes, callback){
    callback(clientes);
}

function mostrarNombre(clientes){
    console.log("Nombres de los clientes: " + clientes.map(clientes => clientes.nombre));
}

function totalCompras(clientes){
    let totalCompras = clientes.reduce((acumulador, clientes) => acumulador + clientes.compras.length, 0)
    console.log("El total de compras fue de ", totalCompras);
}

procesarClientes(clientes, mostrarNombre);
procesarClientes(clientes, totalCompras);


