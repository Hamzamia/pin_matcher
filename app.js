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