/*
Utilizar el arreglo de productos del ejercicio anterior, y crear una función aplicarDescuento(id, porcentaje, callbackExito, callbackError) que haga lo siguiente:
Buscar el producto por su id.
Si no existe, ejecutar callbackError con un mensaje “Producto no encontrado”.
Si el porcentaje de descuento no es válido (≤0 o >100), ejecutar callbackError con un mensaje “Porcentaje inválido”.
Si todo es correcto, aplicar el descuento sobre el precio del producto y ejecutar callbackExito mostrando el nombre del producto y su nuevo precio.
A continuación, invocar a aplicarDescuento() y dentro de su callback de éxito, llamar/invocar a comprar() con sus propios callbacks de éxito y error.
*/
let productos = [
    {id: 0, nombre: "Mate", precio: 8000, stock: 40},
    {id: 1, nombre: "Termo", precio: 40000, stock: 22},
    {id: 2, nombre: "Pava", precio: 20000, stock: 26},
    {id: 3, nombre: "Bombilla", precio: 1500, stock: 8}
];

function aplicarDescuento(id, porcentaje, callbackExito, callbackError){
    if(porcentaje < 0 || porcentaje > 100){
        callbackError("El procentaje es inválido")
    }else{
        let prodcuto = null;
        prodcuto = productos.find(p => p.id === id);
        if(prodcuto){
            prodcuto.precio = prodcuto.precio * (100-porcentaje) / 100;
            callbackExito("Descuento aplicado exitosamente");
        }else{
            callbackError("El producto no existe")
        }
    }
}

function comprar(id, cantidad, callbackExito, callbackError){
    let prodcuto = null;
    prodcuto = productos.find(p => p.id === id);
    if(prodcuto){
        if(cantidad > prodcuto.stock){
            callbackError("El producto no dispone el stock suficiente")
        }else{
            prodcuto.stock -= cantidad;
            console.log("Producto: ", prodcuto.nombre, " precio unitario: $", prodcuto.precio, " total: $", prodcuto.precio * cantidad);
            callbackExito("Compra exitosa");
        }
    }else{
        callbackError("El producto no existe")
    }
}

aplicarDescuento(1, 15, msj => {
    console.log(msj);
    comprar(1, 4, msj => console.log(msj), msjError => console.log(msjError))
}, msjError => console.log(msjError))