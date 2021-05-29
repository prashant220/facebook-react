import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBiwdKXmJQZdbZYbH0d_LringGR4fi70Jk",
  authDomain: "facebook-4b70a.firebaseapp.com",
  projectId: "facebook-4b70a",
  storageBucket: "facebook-4b70a.appspot.com",
  messagingSenderId: "468834283373",
  appId: "1:468834283373:web:60eda15a6a0e9559ec3464",
  measurementId: "G-8WQTPP04VV"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;