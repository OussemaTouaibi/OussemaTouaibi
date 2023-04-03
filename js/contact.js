

                
var config = {
    apiKey: "AIzaSyAjlCiFfOf92UP0q61J78Mu4cWxtmAsB0E",
    authDomain: "contactform-71c94.firebaseapp.com",
    projectId: "contactform-71c94",
    storageBucket: "contactform-71c94.appspot.com", 
    messagingSenderId: "598252244651",
    databaseURL: "https://contactform-71c94-default-rtdb.firebaseio.com/"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('comments');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var comments = getInputVal('comments');

    // Save message
    saveMessage(name, email, subject, comments);

    

    // Clear form
    document.getElementById('contact-form').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, subject, email, comments) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        comments: comments
    });
}