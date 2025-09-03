/*
Crear una función filtrarPorStock(minStock, callbackExito, callbackError) que:
Filtre todos los productos cuyo stock sea mayor o igual a minStock.
Si existen productos que cumplen la condición, ejecutar callbackExito pasando el listado filtrado.
Si no hay productos que cumplan la condición, ejecutar callbackError con un mensaje “No hay productos con ese stock”.
Probar la función con distintos valores de minStock: Mostrar los productos disponibles usando un callback de éxito y 
Manejar los posibles errores usando un callback de error.
*/

let productos = [
    {id: 0, nombre: "Mate", precio: 8000, stock: 40},
    {id: 1, nombre: "Termo", precio: 40000, stock: 22},
    {id: 2, nombre: "Pava", precio: 20000, stock: 26},
    {id: 3, nombre: "Bombilla", precio: 1500, stock: 8}
];

function filtrarPorStock(minStock, callbackExito, callbackError){
    let prodcutosFiltrados = productos.filter(p => p.stock >= minStock);

    if(prodcutosFiltrados.length > 0){
        callbackExito(prodcutosFiltrados);
    }else{
        callbackError("No hay productos que tengan al menos ese stock");
    }
}

filtrarPorStock(80, msj => console.log(msj), msjError => console.log(msjError));
filtrarPorStock(20, msj => console.log(msj), msjError => console.log(msjError));
