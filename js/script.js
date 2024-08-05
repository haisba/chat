let activeUser = 1;
let usersData = {};

window.onload = function() {
    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => dataReady(data, 1));

    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => dataReady(data, 2));
}

function dataReady(data, userNumber) {
    let result = data.results[0];
    document.getElementById(`name${userNumber}`).innerHTML = result.name.title + " " + result.name.first + " " + result.name.last;
    document.getElementById(`avatar${userNumber}`).src = result.picture.large;
    document.getElementById(`username${userNumber}`).innerHTML = result.login.username;
    document.getElementById(`email${userNumber}`).innerHTML = result.email;
    document.getElementById(`country${userNumber}`).innerHTML = result.location.country;
    
    usersData[userNumber] = {
        name: result.name.first + " " + result.name.last,
        avatar: result.picture.large,
        username: result.login.username,
        email: result.email,
        country: result.location.country
    };

    document.getElementById(`avatar${userNumber}`).addEventListener('click', () => {
        setActiveUser(userNumber);
    });
}

function setActiveUser(user) {
    // Reset background color for all users
    document.getElementById("column_1").style.backgroundColor = "";
    document.getElementById("column_2").style.backgroundColor = "";

    // Set active user
    activeUser = user;

    // Set background color for active user
    document.getElementById("column_" + activeUser).style.backgroundColor = "rgb(96, 187, 240)";
}

document.getElementById('btntext').addEventListener('click', function() {
    document.getElementById('h3_conv').style.display = 'none';
    let text = document.getElementById('inptext').value;
    if (text) {
        let userName = usersData[activeUser].name;
        // Create a new paragraph for the new message
        let newMessage = document.createElement('p');
        newMessage.innerHTML = `${text} (from ${userName})`;

        if (activeUser === 1) {
            newMessage.className = 'text1';
        } else {
            newMessage.className = 'text2';
        }

        // Add the new paragraph to the message container
        document.getElementById('messages').appendChild(newMessage);

        // Clear the text field
        document.getElementById('inptext').value = "";
    }
});

document.getElementById('clearConversation').addEventListener('click', function() {
    // Clear the content of the messages div
    document.getElementById('messages').innerHTML = "";
});