import firebase from 'firebase/app'  
import 'firebase/firestore'
import 'firebase/auth'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBvTIn30DAe-UuM53vCHB21HK8lzLa8ss4",
    authDomain: "bananina-8fa5e.firebaseapp.com",
    databaseURL: "https://bananina-8fa5e.firebaseio.com",
    projectId: "bananina-8fa5e",
    storageBucket: "",
    messagingSenderId: "701420191422"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;