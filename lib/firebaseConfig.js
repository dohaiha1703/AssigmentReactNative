import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB8KODLzTdNhnGalg6FNR4RqAV_Ly2nI3c",
    authDomain: "react-native-mob307.firebaseapp.com",
    databaseURL: "https://react-native-mob307.firebaseio.com",
    projectId: "react-native-mob307",
    storageBucket: "react-native-mob307.appspot.com",
    messagingSenderId: "169917808505"
}

export default firebaseConf = firebase.initializeApp(config); 