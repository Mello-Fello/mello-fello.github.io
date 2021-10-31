var loginTime = 0;
var signedUp = false

function login() {
    const pass = document.getElementById('pass').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    if (loginTime > 0) {
        alert('You have already signed up!')
        return false
    }
    else if (pass === "") {
        alert('Please enter a password!')
        return false
    }
    else if (email === "") {
        alert('Please enter a email!')
        return false
    }
    else if (email.includes('@') === false) {
        alert('Invalid Email!')
        return false
    }
    else if (email === "") {
        alert('Please enter a email!')
        return false
    }
    else if (pass.length > 25) {
        alert('That password is Too long!')
        document.getElementById('pass').value = ""
        return false
    }
    else if (email.length > 35) {
        alert('That email is too long!')
        document.getElementById('email').value = ""
        return false
    }
    else if (pass.length < 5) {
        alert('That password is too short!')
        document.getElementById('pass').value = ""
        return false
    }
    else if (email.length < 5) {
        alert('That email is too short!')
        document.getElementById('email').value = ""
        return false
    }
    loginTime++
    window.location.href = "/homepage/HTMLPage1.html"
    alert('Welcome, ' + username + '. Your password is ' + pass + '.')
    signedUp = true
    sessionStorage.setItem("uname", username);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("pass", pass);
    sessionStorage.setItem("signupTf", signedUp);
};

