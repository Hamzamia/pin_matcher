function getPin() {
    const pin = Math.round(Math.random() * 10000)

    const PinString = pin + '';

    if (PinString.length == 4) {
        return pin;
    }
    else {
        //console.log('got 3 digit pin and calling again ', pin)
        getPin();
    }
}

function generatePin() {


    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    console.log(pin);
}

//uodate calculator

document.getElementById('keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const CalcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            CalcInput.value = '';
        }
    }
    else {

        const PreviousNumber = CalcInput.value;
        const newNumber = PreviousNumber + number;
        CalcInput.value = newNumber;
    }

})




