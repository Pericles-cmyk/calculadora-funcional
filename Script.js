function insertToDisplay(data) {
    document.getElementById('display').value += data;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function removeLastCharacter() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}

function somar() {
    insertToDisplay('+');
}

function subtrair() {
    insertToDisplay('-');
}

function multiplicar() {
    insertToDisplay('*');
}

function dividir() {
    insertToDisplay('/');
}

function adicionarDecimal() {
    insertToDisplay('.');
}
