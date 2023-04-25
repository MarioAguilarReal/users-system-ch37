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
function validate(user){
    //assume that everything is fine
    let valid = true

    //check for empty elements
    if ( user.mail==''){
        alert('Todos los campos son obligatorios');
        valid = false
    }
    //display alert()

    return valid;
}

//Create the  register function
function register() {
    //get the values from inputs using Jquery
    let inputMail = $('#email-input').val();
    let inputPass = $('#password-input').val();
    let inputFName = $('#fName-input').val();
    let inputLName = $('#lName-input').val();
    let inputAge = $('#age-input').val();
    let inputAddress= $('#address-input').val();
    let inputNumber = $('#number-input').val();
    let inputPay = $('#payMethod').val();
    let inputColor = $('#color-input').val();
    //create a newUser
    let newUser = new User(inputMail, inputPass, inputFName, inputLName, inputAge, inputAddress, inputNumber, inputPay, inputColor);
    //display the newUser on the console
    console.log(newUser);
    console.log(validate(newUser))
    //clear the form
    $('input').val()='';
}