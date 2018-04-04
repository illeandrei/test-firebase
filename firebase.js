var database,
    score = get('.score'),
    counter = 0;

setup();

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

    var ref = database.ref('scores');
    ref.on('value', gotData, errData);
}

function gotData(data) {
    console.warn('gotData:', data.val());
    get('.list-group').innerHTML = createList(data);
}

function errData(err) {
    console.error('Error', err);
}

function get(selector) {
    return document.querySelector(selector);
}

function createList(data) {
    var scores = data.val(),
        keys = Object.keys(scores),
        list = '<ul>';

    keys.forEach(function (key) {
        var initials = scores[key].initials,
            score = scores[key].score;
        
        list += '<li class="list-group-item">'+ initials + ' - ' + score +'</li>';
    });

    return list + '</ul>';
}

get('button').addEventListener('click', function () {
    get('h1').style.color = 'black';
    score.innerText = ++counter;
});

get('h1').addEventListener('click', function () {
    counter = 0;
    score.innerText = counter;
});

get('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var ref = database.ref('scores');

    var data = {
        score: parseInt(get('.score').innerText),
        initials: get('input').value
    };

    if (!data.score || !data.initials) {
        get('h1').style.color = 'red';
    } else {
        ref.push(data);
    }

});

