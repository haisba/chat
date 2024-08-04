let activeUser = 1;

window.onload = function() {
    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => dataReady(data));

    fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => dataReady2(data));
}

function dataReady(data) {
    let result = data.results[0];
    document.getElementById('name').innerHTML = result.name.title + " " + result.name.first + " " + result.name.last;
    document.getElementById('avatar').src = result.picture.large;
    document.getElementById('username').innerHTML = result.login.username;
    document.getElementById('email').innerHTML = result.email;
    document.getElementById('country').innerHTML = result.location.country;

    document.getElementById('avatar').addEventListener('click', () => {
        activeUser = 1;
        console.log("Active user set to 1");
        setActiveUser(1);
    });
}

function dataReady2(data) {
    let result = data.results[0];
    document.getElementById('name2').innerHTML = result.name.title + " " + result.name.first + " " + result.name.last;
    document.getElementById('avatar2').src = result.picture.large;
    document.getElementById('username2').innerHTML = result.login.username;
    document.getElementById('email2').innerHTML = result.email;
    document.getElementById('country2').innerHTML = result.location.country;

    document.getElementById('avatar2').addEventListener('click', () => {
        activeUser = 2;
        console.log("Active user set to 2");
        setActiveUser(2);
    });
}

function setActiveUser(user) {
// Resetuj tło dla wszystkich użytkowników
document.getElementById("column_1").style.backgroundColor = "";
document.getElementById("column_2").style.backgroundColor = "";

// Ustaw aktywnego użytkownika
activeUser = user;

// Ustaw czerwone tło dla aktywnego użytkownika
document.getElementById("column_" + activeUser).style.backgroundColor = "rgb(96, 187, 240)";
}

document.getElementById('btntext').addEventListener('click', function() {
    document.getElementById('h3_conv').style.display='none';
    let text = document.getElementById('inptext').value;
    if (text) {
        // Tworzymy nowy paragraf dla nowej wiadomości
        let newMessage = document.createElement('p');
        newMessage.innerHTML = text + " (from user " + activeUser + ")";

        

        if (activeUser === 1) {
            newMessage.className = 'text1';
           
        } else {
            newMessage.className = 'text2';
        }
        // Dodajemy nowy paragraf do kontenera wiadomości
        document.getElementById('messages').appendChild(newMessage);
        
        // Czyścimy pole tekstowe
        document.getElementById('inptext').value = "";
    }
});
document.getElementById('clearConversation').addEventListener('click', function() {
    // Wyczyść zawartość div'a messages
    document.getElementById('messages').innerHTML = "";
});