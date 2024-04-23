let txtAltura = document.querySelector('#txtAltura'),
    txtPeso = document.querySelector('#txtPeso'),
    res = document.querySelector('#res'),
    btnCalcular = document.querySelector('#btnCalcular'),
    situacion = document.querySelector('#situacion'),
    rbtnHombre = document.querySelector('#rbtnHombre'),
    rbtnMujer = document.querySelector('#rbtnMujer');

document.addEventListener('DOMContentLoaded', onFocus);
btnCalcular.addEventListener('click', calcular);
txtAltura.addEventListener('keydown', onKeyDown);
txtPeso.addEventListener('keydown', onKeyDown);

function onFocus() {
    txtPeso.focus();
}

function onKeyDown(e) {
    if (e.key === 'e') e.preventDefault();
}

function calcular() {
    if (!validar(txtPeso.value, txtAltura.value)) {
        let peso = parseFloat(txtPeso.value);
        let altura = parseFloat(txtAltura.value) / 100; // convertir cm a m
        let imc = calcImc(peso, altura);
        res.innerHTML = imc.toFixed(2);
        situacion.innerHTML = resultado(imc);
    }
}

function validar(peso, altura) {
    let ret = false;

    if (peso == '' || altura == '') ret = true;

    return ret;
}

function calcImc(peso, altura) {
    return peso / altura ** 2;
}

function resultado(imc) {
    let sit = "";

    if (rbtnHombre.checked) {
        if (imc < 20) sit = "Bajo peso";
        else if (imc <= 24.9) sit = "Normal";
        else if (imc <= 29.9) sit = "Sobrepeso";
        else if (imc <= 39.9) sit = "Obesidad";
        else sit = "Obesidad mórbida";
    } else {
        if (imc < 19) sit = "Bajo peso";
        else if (imc <= 23.9) sit = "Normal";
        else if (imc <= 28.9) sit = "Sobrepeso";
        else if (imc <= 38.9) sit = "Obesidad";
        else sit = "Obesidad mórbida";
    }
    return sit;
}
