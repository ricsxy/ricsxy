
const users = ['rics'];
const passwords = ['ricaa'];

function loginform() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    let found = false;

    for (let i = 0; i < users.length; i++) {
        if (username === users[i] && password === passwords[i]) {
            found = true;
            break;
        }
    }

    if (found) {
        window.location.href = "home1.html";
        function logout() {
            window.location.href = "log.html";
            alert('Thank You For Using My Website');
            
          }
    } else {
        alert("Invalid Credentials");
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
    }
}

function registerform() {
    const newUsername = document.getElementById('signup-username').value;
    const newPassword = document.getElementById('signup-password').value;

    if (newUsername !== '' && newPassword !== '') {
        users.push(newUsername);
        passwords.push(newPassword);
        alert("Registered Successful");
    } else {
        alert('Please fill in all fields');
    }
}

