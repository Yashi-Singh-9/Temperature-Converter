// Enable convert button only if all fields are filled
function checkFields() {
    const temp = document.getElementById("temperature").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const convertBtn = document.getElementById("convertBtn");

    if (temp && fromUnit && toUnit) {
        convertBtn.disabled = false;
    } else {
        convertBtn.disabled = true;
    }
}

// Temperature conversion logic
function convertTemperature() {
    const temp = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    let result;

    if (fromUnit === toUnit) {
        result = temp; // If both units are same, no conversion needed
    } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        result = (temp * 9/5) + 32;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        result = temp + 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        result = (temp - 32) * 5/9;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        result = (temp - 32) * 5/9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        result = temp - 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        result = (temp - 273.15) * 9/5 + 32;
    }

    document.getElementById("result").innerText = `${temp} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;
}
