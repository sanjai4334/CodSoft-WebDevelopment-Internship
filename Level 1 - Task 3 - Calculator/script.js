function clearDisplay() {
    document.getElementById("display").value = "";
}

function clearEntry() {
    var display = document.getElementById("display").value;
    var lastIndex = display.length - 1;
    
    while (lastIndex >= 0 && /[0-9.]/.test(display[lastIndex])) {
        lastIndex--;
    }

    document.getElementById("display").value = display.slice(0, lastIndex + 1).trim();
}

function deleteLast() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    var display = document.getElementById("display");
    try {
        display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (error) {
        display.value = "Error";
    }
}
