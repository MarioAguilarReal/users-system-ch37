const KEY = 'users';
//let old = [];

function saveUser(user) {//FUNCION PARA GUARDAR USUARIO
    let oldUsers = readUser(); //LA FUNCION READ USER RETORNA 
    oldUsers.push(user)
    console.log(oldUsers);
    let val = JSON.stringify(oldUsers);//Parse to string
    console.log(val);
    localStorage.setItem(KEY, val)
    //readUser;
}

function readUser() {
    let users = localStorage.getItem(KEY);
    if (!users) {
        //if u get here the LS is empty
        // console.log('No users');
        return [];
    } else {
        // console.log('We have some users')
        let objList = JSON.parse(users);
        return objList;
    }

}

function removeItemLS(id) {
    // console.log(id);
    let users = localStorage.getItem(KEY);
    //console.log(users);
    if (!users) {
        alert("Alert doesn't exist");
    } else {
        // console.log('h')
        let objList = JSON.parse(users);
        console.log(objList);
        for (let i = 0; i < objList.length; i++) {
            if (id == i) {
                console.log('Hola')
                console.log(id, i);
                objList.splice(i, 1);
                console.log(objList);

            }

        }
        for (let i = 0; i < objList.length; i++) {
            objList[i].id = i;
        }
        // console.log('Hola')
        localStorage.setItem(KEY, JSON.stringify(objList));
        displayUsers();
    }
}