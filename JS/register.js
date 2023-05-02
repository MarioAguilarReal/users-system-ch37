//variables

//Create the user constructor
class User {
    constructor(mail, pass, fName, lName, age, addr, pNum, pay, color) {
        this.mail = mail;
        this.pass = pass;
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.addr = addr;
        this.pNum = pNum;
        this.pay = pay;
        this.color = color;

    }
}

//Create the  register function
function register() {
    //get the values from inputs using Jquery
    let inputMail = $('#email-input').val();
    let inputPass = $('#password-input').val();
    let inputFName = $('#fName-input').val();
    let inputLName = $('#lName-input').val();
    let inputAge = $('#age-input').val();
    let inputAddress = $('#address-input').val();
    let inputNumber = $('#number-input').val();
    let inputPay = $('#payMethod').val();
    let inputColor = $('#color-input').val();
    //create a newUser
    let newUser = new User(inputMail, inputPass, inputFName, inputLName, inputAge, inputAddress, inputNumber, inputPay, inputColor);
    //display the newUser on the console
    //console.log(validate(newUser));

    if (validate(newUser)) {
        //console.log(newUser);
        saveUser(newUser);
        clearForm();
    }else{
        alert('Todos los campos son obligatorios');
    }
    //clear the form
}

function clearForm() {
    $('input').val('');
    $('#payMethod').val("");
}

function validate(user) {
    //assume that everything is fine
    let valid = true

    //check for empty elements
    if (user.mail == '') {
        valid = false
    } else if (user.pass == '') {
        valid = false
    } else if (user.fName == '') {
        valid = false
    } else if (user.lName == '') {
        valid = false
    } else if (user.age == '') {
        valid = false
    } else if (user.addr == '') {
        valid = false
    } else if (user.pNum == '') {
        valid = false
    } else if (user.pay == '') {
        valid = false
    } else if (user.color == '') {
        valid = false
    }

    valid = validateEmail(user.mail)
    //display alert()

    return valid;
}

function validateEmail(email){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    const resultado = regex.test(email)
    return resultado;
}