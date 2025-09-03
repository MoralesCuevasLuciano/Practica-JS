/*
Crear un arreglo libros, cada elemento debe ser un objeto con: id, titulo, autor, genero, disponible (booleano).
 Luego:
Usar filter() para obtener todos los libros de un género específico.
Usar map() para generar un arreglo con solo los títulos en mayúscula.
Crear una función prestarLibro(id) que:
Busque el libro con find().
Si está disponible, lo marque como no disponible.
Si no, devuelva "No disponible".
*/

let libros = [
    {id: 0, titulo: "Las mil y unas noches", autor: "Mia Khalifa", genero: "suspenso", disponible: true},
    {id: 1, titulo: "La metamorfosis", autor: "Lio Messi", genero: "terror", disponible: false},
    {id: 2, titulo: "El Rubius el libro del troll", autor: "El pela sape", genero: "drama", disponible: true},
    {id: 3, titulo: "Habitos atomicos", autor: "Algún buda", genero: "drama", disponible: true},
]

console.log("Libros: ");
console.log(libros);

let librosFiltrados = libros.filter(l => l.genero === "drama");
console.log("Libros filtrados: ");
console.log(librosFiltrados);

let titulosEnMayuscula = libros.map(libros => libros.titulo.toUpperCase());
console.log("Titulos en mayuscula: ");
console.log(titulosEnMayuscula);


function prestarLibro(id){
    let libro = libros.find(l => l.id === id);
    if(!libro){
        console.log("El libro no existe");
    }else{
        if(libro.disponible){
            libro.disponible = false;
            console.log("El libro se prestó con éxito");
        }else{
            console.log("El libro no se encuentra disponible");
        }
    }
}

prestarLibro(1);
prestarLibro(2);
prestarLibro(5);
console.log(libros);

