const KEY = 'users';
//let old = [];

function saveUser(user){
    let oldUsers = readUser();
    oldUsers.push(user)
    console.log(oldUsers);
    let val = JSON.stringify(oldUsers);//Parse to string
    console.log(val);
    localStorage.setItem(KEY,val)
    //readUser;
}

function readUser(){
    let users = localStorage.getItem(KEY);
    if(!users){
        //if u get here the LS is empty
        console.log('No users');
        return [];
    }else{
        console.log('We have some users')
        let objList = JSON.parse(users);
        return objList;
    }

}