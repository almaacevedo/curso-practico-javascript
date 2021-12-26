const arreglo = [1, 3, 4, 3, 1, 2, 3, 1, 3, 3, 4, 3];
const arregloOrdenado = arreglo.sort((a, b) => a - b);
console.log(arregloOrdenado);
const x = arreglo.map((elemento) => {
    const a = [];
    const repeticiones = arreglo.filter((e) => e == elemento)
    console.log('rep>> ', repeticiones.value);

})
