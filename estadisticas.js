function calculaPromedio() {
    const valores = [
        90, 64, 23, 98, 10
    ];
    let suma = valores.reduce((valorAcum = 0, nuevo) => valorAcum + nuevo);
    let promedio = suma / valores.length;
    console.log(promedio);
    document.getElementById('resE').innerHTML = promedio;

}
