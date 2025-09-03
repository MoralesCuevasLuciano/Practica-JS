/*
Crear un arreglo carrito vacío.
Usar push() para agregar objetos con las propiedades: producto, cantidad, precioUnitario.
Usar reduce() para calcular el total a pagar.
Usar map() para generar un arreglo con el detalle de cada ítem en formato: "Producto X - Cantidad Y - Subtotal Z".
Mostrar el detalle y el total en consola.
*/

let carrito = [
    {producto: "mate", cantidad: 2, precioUnitario: 5000},
    {producto: "termo", cantidad: 1, precioUnitario: 20000},
    {producto: "yerba", cantidad: 5, precioUnitario: 2000}
];

console.log("original");
console.log(carrito);
carrito.push({producto: "bombilla", cantidad:1, precioUnitario: 600});

console.log("producto agregado");
console.log(carrito);

let total = carrito.reduce((acumulador, carrito) => acumulador + (carrito.cantidad * carrito.precioUnitario), 0);

let carritoDetalle = carrito.map(carrito => ({
    producto: carrito.producto,
    cantidad: carrito. cantidad,
    subtotal: (carrito.cantidad * carrito.precioUnitario)
}));

console.log("Detalle del carrito");
console.log(carritoDetalle);
console.log("El total de su carrito es de $", total);


