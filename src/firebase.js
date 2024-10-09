import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCFQYJpRIGOAEYRSMZHhViKPscckdPILkY",
    authDomain: "blogapp-c8626.firebaseapp.com",
    projectId: "blogapp-c8626",
    storageBucket: "blogapp-c8626.appspot.com",
    messagingSenderId: "440942738867",
    appId: "1:440942738867:web:43079b9fd31eb69f919fc6",
    measurementId: "G-5FTE916PKY"
});

const fb = firebase;

export default fb;
