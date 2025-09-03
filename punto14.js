/*
Crear un arreglo productos con objetos { id, nombre, precio, stock }. 
Luego definir una función comprar(id, cantidad, callbackExito, callbackError) que:
Si el producto no existe, ejecutar callbackError con un mensaje “Producto no encontrado”
Si hay stock suficiente → que descuente y ejecute callbackExito mostrando el detalle de la compra.
Si no hay stock → ejecute callbackError con mensaje “no hay stock suficiente.
Probar la función con distintas compras.
*/

let productos = [
    {id: 0, nombre: "Mate", precio: 8000, stock: 40},
    {id: 1, nombre: "Termo", precio: 40000, stock: 22},
    {id: 2, nombre: "Pava", precio: 20000, stock: 26},
    {id: 3, nombre: "Bombilla", precio: 1500, stock: 8}
];

function comprar(id, cantidad, callbackExito, callbackError){
    let prodcuto = null;
    prodcuto = productos.find(p => p.id === id);
    if(prodcuto){
        if(cantidad > prodcuto.stock){
            callbackError("El producto no dispone el stock suficiente")
        }else{
            prodcuto.stock -= cantidad;
            console.log("Producto: ", prodcuto.nombre, " precio unitario: $", prodcuto.precio, " total: $", prodcuto.precio * cantidad);
            callbackExito("La compra se realizó exitosamente");
        }
    }else{
        callbackError("El producto no existe")
    }
}

comprar(4, 4, msj => console.log(msj), msjError => console.log(msjError));
comprar(1, 50, msj => console.log(msj), msjError => console.log(msjError));
console.log(productos);
comprar(1, 4, msj => console.log(msj), msjError => console.log(msjError));
console.log(productos);

