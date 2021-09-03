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
    // console.log(pin);
}

// uodate calculator

// document.getElementById('keypad').addEventListener('click', function (event) {
//     const number = event.target.innerText;
//     const CalcInput = document.getElementById('typed-numbers');
//     if (isNaN(number)) {
//         if (number == 'C') {
//             CalcInput.value = '';
//         }
//     }
//     else {

//         const PreviousNumber = CalcInput.value;
//         const newNumber = PreviousNumber + number;
//         CalcInput.value = newNumber;
//     }

// })



document.getElementById('keypad').addEventListener('click', function (event) {
    // console.log("any key clicked")
    const number = event.target.innerText;
    // console.log(event.target.innerText);
    const calcInput = document.getElementById('typed-numbers');

    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        // console.log(number);
    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;

    }


    // NumberInput.value = number;
    // const newNumber = NumberInput + number;
    // NumberInput.value = newNumber;

});

//pin verify

function verifyPin() {
    // console.log("verify submit btn")
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-numbers').value;
    const successNotification = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-fail');

    if (pin == typedNumber) {
        // console.log('yeyh, pin matched')


        successNotification.style.display = 'block';
        failNotification.style.display = 'none';
    }
    else {
        // console.log("opps! pin not matchd")

        successNotification.style.display = 'none';
        failNotification.style.display = 'block';

    }
}