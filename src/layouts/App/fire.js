import firebase from "firebase";


const firebaseConfig = ( {
    apiKey: "AIzaSyBPfvpZw-NH0yGX8nW3eIWCMUAgYUyeays",
    authDomain: "oddam-login.firebaseapp.com",
    databaseURL: "https://oddam-login.firebaseio.com",
    projectId: "oddam-login",
    storageBucket: "oddam-login.appspot.com",
    messagingSenderId: "965926132876",
    appId: "1:965926132876:web:d54839334d4c65998aafa9"
});


const db = firebase.initializeApp(firebaseConfig);

export default db;