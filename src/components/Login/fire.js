import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBvrydp60aki3T7Jdhf14wfkB7DnR3dgYA",
    authDomain: "hop-login.firebaseapp.com",
    databaseURL: "https://hop-login.firebaseio.com",
    projectId: "hop-login",
    storageBucket: "hop-login.appspot.com",
    messagingSenderId: "522183277390",
    appId: "1:522183277390:web:d6278e6931616eb16c3c1f"
};

const fire =  firebase.initializeApp(firebaseConfig);

export default fire;
