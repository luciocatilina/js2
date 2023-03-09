const productos = [
    {id: 1,nombre: 'television 4k', precio: 4000},
    {id: 2,nombre: 'monitor 5k', precio: 3500},
    {id: 3,nombre: 'celular', precio: 1700},
    {id: 4,nombre: 'aire acondicionado', precio: 2000},
];

let busqueda = prompt('Ingrese el producto que desea: ');
let resultado;

productos.forEach(producto => {
    if (busqueda == producto.nombre) {
        resultado = `El precio del producto ${producto.nombre} es $${producto.precio}`
    };
});
if (resultado){
    alert(resultado)
}else {
    alert (`No hemos encontrado ningun resultado para "${busqueda}"`)
}
