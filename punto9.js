/*
Crear un objeto literal tienda que tenga:
Un arreglo productos.
Un método vender(idProducto, cantidad) que:
Busque el producto por id usando find().
Si hay stock suficiente, reste la cantidad al stock y muestre "Venta realizada".
Si no hay stock, muestre "Stock insuficiente".
Probar el método vendiendo algunos productos.
*/

class Tienda{

    constructor(){
        this.productos = [
            {id: 0, nombre: "Yerba", precio: 2000, stock: 6},
            { id: 1, nombre: "Azúcar", precio: 1200, stock: 35 }
        ]
    }
    vender(id, cantidad){
        let producto = this.productos.find(p => p.id === id);
        let bandera;

        if(!producto || producto.stock < cantidad){
            bandera = false;
        }else{
            producto.stock = (producto.stock - cantidad);
            bandera = true;
        }

        if(bandera){
            console.log("Producto vendido con éxito, el stock restante es de", producto.stock);
        }elsec
            console.log("No se puede realizar la venta , el stock restante es de", producto.stock);
    }
    mostrarProductos(){
        console.log(this.productos);
    }
    agregarProducto(nombre, precio, stock){
        this.productos.push({id: this.productos.length, nombre: nombre, precio: precio, stock: stock});
    }
}

let tienda = new Tienda();
tienda.vender(0,15);
tienda.vender(1, 15);