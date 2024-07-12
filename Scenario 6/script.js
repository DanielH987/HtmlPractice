function convertFtoC() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    let celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("result").innerText = `The converted temperature is ${celsius.toFixed(2)} °C`;
}

function convertCtoF() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result").innerText = `The converted temperature is ${fahrenheit.toFixed(2)} °F`;
}