import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBd8NgTdeqZ3RknvBxn9-VVh6n1tYsIwR8",
    authDomain: "my-marioplan-react.firebaseapp.com",
    databaseURL: "https://my-marioplan-react.firebaseio.com",
    projectId: "my-marioplan-react",
    storageBucket: "",
    messagingSenderId: "877902306554",
    appId: "1:877902306554:web:bd72605c97b537f9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase;