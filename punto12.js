/*
Crear un objeto literal agenda con un arreglo contactos que guarde objetos { id, nombre, telefono }. 
 Luego, implementar los siguientes métodos en la agenda:
agregarContacto(contacto) usando push().
eliminarContacto(id) usando filter(). (elimina todos los de mismo id por si hubiera repetidos)
buscarContacto(nombre) usando find().
listarContactos() que muestre todos.
*/

let agenda = [
    {id: 0, nombre: "Pepo", telefono: "11"},
    {id: 1, nombre: "Messi", telefono: "10"},
    {id: 2, nombre: "Sofi", telefono: "115"},
    {id: 3, nombre: "Pipi", telefono: "1188"},
]

function agregarContacto(nombre, telefono){
    const nextId = agenda.length ? Math.max(...agenda.map(c => c.id)) + 1 : 0;
    
    agenda.push({id: nextId, nombre: nombre, telefono: telefono});
    console.log("contacto agendado exitosamnete");
}

function eliminarContacto(id){
    agenda = agenda.filter(c => c.id != id);
    console.log("Se han borrado todos los contactos con id ", id);
}

function buscarContacto(nombre){
    let resultadoBusqueda = null;
    resultadoBusqueda = agenda.find(c => c.nombre.toLowerCase() === nombre.toLowerCase());
    
    if(resultadoBusqueda){
        console.log("Resultado:");
        console.log(resultadoBusqueda);
    }else{
        console.log("No existe el contacto ", nombre);
    }
}

function mostrarContactos(){
    console.log("Todos los contactos:");
    console.log(agenda);
}

mostrarContactos();
agregarContacto("Valente", 231546);
mostrarContactos();
eliminarContacto(2);
eliminarContacto(15);
mostrarContactos();
buscarContacto("Pepo");
buscarContacto("PIPI");
buscarContacto("mama");
