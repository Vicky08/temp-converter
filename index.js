function calc() {
    const input = document.getElementById("userInput").value
    const option = document.getElementById("unit").value

    if (input > 0) {
        var result = 0
        if (option == "kelvin") {
            result = parseFloat(input) - 273.15
        } else {
            result = (parseFloat(input) - (32)) * 5/9
        }

        document.getElementById("resultText").textContent = `${result}° Celcius`
    } else {
        alert("Invalid Input")
    }

}   