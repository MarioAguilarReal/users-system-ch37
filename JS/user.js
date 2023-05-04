//console.log(tableBody)

function displayUsers() {
    var users = readUser();
    let tableInfo = '';

    users.forEach(user => {
        console.log(user);
        //console.log('Hola')
        tableInfo += `
            <tr class="tr" id="${user.id}">

                <td class="table-rows">${user.id}</td>
                <td class="table-rows">${user.mail}</td>
                <td class="table-rows">${user.pass}</td>
                <td class="table-rows">${user.fName}</td>
                <td class="table-rows">${user.age}</td>
                <td class="table-rows">${user.addr}</td>
                <td class="table-rows">${user.pNum}</td>
                <td class="table-rows">${user.pay}</td>
                <td class="table-rows" style="background-color: ${user.color};"></td>
                <td class="table-rows" onclick="deleteUser(${user.id})" >Delete</td>

            </tr>
                `;
                i=+1;
    });

    $('#tableUsers').html(tableInfo);

}
function deleteUser(id){
    $(`#${id}`).remove();
    removeItemLS(id);
}

function init() {
    console.log('Listing users');
    // let arrayUsers = readUser();
    displayUsers();
}

window.onload = init;