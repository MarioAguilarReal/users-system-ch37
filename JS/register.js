//variables

//Create the user constructor
class User {
    constructor(id, mail, pass, fName, lName, age, addr, pNum, pay, color) {
        this.id = id;
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

    //ESTE LO UTILIZO PARA SABER LA CANTIDAD DE USUARIOS QUE TENGO REGISTRADOS EN EL SISTEMA Y DARLE UN ID
    let arrayUsers = readUser();

    //Creo un nuevo usuario con el contructor
    let newUser = new User(arrayUsers.length, inputMail, inputPass, inputFName, inputLName, inputAge, inputAddress, inputNumber, inputPay, inputColor);
    //SE VALIDA SI EL USUARIO TIENE TODOS LOS CAMPOS COMPLETOS ANTES DE AGREGARLO AL ARREGLO
    if (validate(newUser)) {//RETURNA UN BOLEANO
        //console.log(newUser);
        saveUser(newUser);//GUARDO EL USUARIO EN LOCALSTORAGE
        clearForm();//lIMPIO EL FORMULARIO DESPUES DE GUARDARLO
    } else {//SI LOS CAMPOS NO ESTAN LLENOS HAY UN ERROR
        alert('Todos los campos son obligatorios');
    }
}

function clearForm() {//LIMPIAMOS FORMULARIO
    $('input').val('');
    $('#payMethod').val("");
}

function validate(user) {//FUNCION PARA VALIDAD USUARIO
    //assume that everything is fine
    let valid = true//aL INICIO ASUMIMOS QUE TODO ESTA BIEN

    //check for empty elements
    if (user.mail == '') {//ANALIZAMOS CADA DATO
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

function validateEmail(email) {//FUNCION PARA VALIDAR QUE SEA UN EMAIL Y QUE CONTENGA SUS DATOS
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    const resultado = regex.test(email)
    return resultado;
}