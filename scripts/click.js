function get(selector) {
    return document.querySelector(selector);
}

function gotData(data) {
    console.warn('gotData:', data.val());
    get('.list-group').innerHTML = createList(data);
}

function errData(err) {
    console.error('Error', err);
}

var score = get('.score'),
    counter = 0,
    ref = database.ref('scores');

ref.on('value', gotData, errData);

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

get('#click').addEventListener('click', function () {
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

get('#btnSignOut').addEventListener('click', function (e) {
    firebase.auth().signOut();
    location.href = '/clicking-app';
});

