function search() {
    let engine = document.getElementById('selEngine').value;
    let searchVal = document.getElementById('search').value;
    if (engine === 'nosel.html') {
        alert('Please select a Search Engine')
    }
    else window.open(engine + searchVal)
}

document.getElementById('accval').innerText = 'Not Logged In';

function changeEngine() {
    let engine = document.getElementById('selEngine').value;
}

//var loggedStatus = document.createElement("h3");
//var node = document.createTextNode('Not Logged In')
//loggedStatus.appendChild(node);
//var element = document.getElementById('accval');
//loggedStatus.appendChild(node);

//username = sessionStorage.getItem("uname")
//email = sessionStorage.getItem("email")
//signedUp = sessionStorage.getItem("signupTf")
//document.getElementById('accval').innerText = 'Logged In As ' + username;

const button = document.getElementById('btn1');


button.addEventListener('click', function() {
    let engine = document.getElementById('selEngine').value;
    let searchVal = document.getElementById('search').value;
    if (engine === 'nosel.html') {
        alert('Please select a Search Engine')
    }
    else window.open(engine + searchVal)
});

//log out
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', function() {
    document.getElementById('accval').innerText = 'Not Logged In';
    username = undefined
    email = undefined
    password = undefined
    alert('Logged Out.')
});
