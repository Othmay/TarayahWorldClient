import firebase from 'firebase/app'
import 'firebase/firestore'

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDZ8Et5Q5Khk2yMlXhmdEpSkKs43VBmY2Y",
    authDomain: "tarayah-world.firebaseapp.com",
    databaseURL: "https://tarayah-world.firebaseio.com",
    projectId: "tarayah-world",
    storageBucket: "tarayah-world.appspot.com",
    messagingSenderId: "993421503462",
    appId: "1:993421503462:web:c4fefd4572d3553be60427",
    measurementId: "G-LE93QZYFDR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
