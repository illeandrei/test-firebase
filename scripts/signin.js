//user: andrei@click.com
//pass: clickapp
//python -m http.server

function get(selector) {
    return document.querySelector(selector);
}

var txtEmail = get('#inputEmail'),
    txtPassword = get('#inputPassword'),
    btnSignIn = get('#btnSignIn'),
    btnSignUp = get('#btnSignUp');

btnSignIn.addEventListener('click', function (e) {
    e.preventDefault();

    var email = txtEmail.value.trim(),
        pass = txtPassword.value.trim();

    firebase.auth().signInWithEmailAndPassword(email, pass)
        .catch(function (e) {
            console.log(e.message);
        })
});

btnSignUp.addEventListener('click', function (e) {
    e.preventDefault();

    var email = txtEmail.value.trim(),
        pass = txtPassword.value.trim();

    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .catch(function (e) {
            console.log(e.message);
        })
});

//use realtime authentication listener for any auth state change
firebase.auth().onAuthStateChanged(function (firebaseUser) {
    if (firebaseUser) {
        location.href = '/clicking-app/click.html';
    } else {
        console.log('not logged in');
    }
});
