// INI KODE ORIGINAL!!!

// import firebase from 'firebase/app';
// import 'firebase/auth';

// const firebaseConfig = {
  // apiKey: "AIzaSyCbpPaEwoC-X-QFPIFHNoaimo95baQs-UE",
  // authDomain: "emergencyapps-baf36.firebaseapp.com",
  // projectId: "emergencyapps-baf36",
  // storageBucket: "emergencyapps-baf36.appspot.com",
  // messagingSenderId: "735152341016",
  // appId: "1:735152341016:web:ba561e8b05659c462a836d"

// };

// const app = firebase.initializeApp(firebaseConfig);



// export const auth = app.auth();


// export { firebase };


import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // Tambahkan ini untuk mengimpor modul firestore

const firebaseConfig = {
 
  apiKey: "AIzaSyCbpPaEwoC-X-QFPIFHNoaimo95baQs-UE",
  authDomain: "emergencyapps-baf36.firebaseapp.com",
  projectId: "emergencyapps-baf36",
  storageBucket: "emergencyapps-baf36.appspot.com",
  messagingSenderId: "735152341016",
  appId: "1:735152341016:web:ba561e8b05659c462a836d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore(); // Inisialisasi instance firestore

export { firebase, auth, firestore };
