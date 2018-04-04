var firebase,
    database;

function setup() {
    var config = {
        apiKey: "AIzaSyAy8HJ5xEljp0x5vGL77rnytOjjrCs_sS4",
        authDomain: "clicking-app-9f559.firebaseapp.com",
        databaseURL: "https://clicking-app-9f559.firebaseio.com",
        projectId: "clicking-app-9f559",
        storageBucket: "",
        messagingSenderId: "482292199247"
    };
    firebase.initializeApp(config);
    database = firebase.database();
}

setup();