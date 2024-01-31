
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; 

const firebaseConfig = {
 
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_API_KEY",
  projectId: "YOUR_API_KEY",
  storageBucket: "YOUR_API_KEY",
  messagingSenderId: "YOUR_API_KEY",
  appId: "YOUR_API_KEY"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { firebase, auth, firestore };
