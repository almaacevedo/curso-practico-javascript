function calculaPerimetroCuadrado() {
    const L = document.getElementById('ladocuadrado').value;
    const resultado = L * L;
    document.getElementById('resultadoPC').innerHTML = resultado;
    return L;
}