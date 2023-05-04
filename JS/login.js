function login(){
    let mail = $('#username-input-index').val();
    let pass = $('#password-input-index').val();
    // console.log(email,password)
    console.log('Login')
    let users = readUser();
    for (let i=0; i<users.length; i++){
        // console.log(users[i]);
        let user = users[i];
        console.log(user.mail, user.pass);
        console.log(mail, pass);
        //compare users in the array with the sibmited creedentials

        if(mail == user.mail && pass == user.pass){
            window.location="users.html";
        }else{
            console.log('Invalid Credentials');
            $("#username-input-index").css({'backgorund-color':'rgb(249, 203, 203)'});
            $('#password-input-index').addClass('error');
        }
    }
}

function init(){
    //hook events
    $("#btnLogin").click(login);
}

window.onload = init;