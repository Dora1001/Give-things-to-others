import firebase from "firebase";


var firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDNDuejqOA0OMDB4pLoAblkarI1XYFxpmw",
    authDomain: "oddam-contactform.firebaseapp.com",
    databaseURL: "https://oddam-contactform.firebaseio.com",
    projectId: "oddam-contactform",
    storageBucket: "oddam-contactform.appspot.com",
    messagingSenderId: "979059500562",
    appId: "1:979059500562:web:a77ff0b0c621f32d05dacb"
});


var db = firebaseApp.firestore();


export  { db };