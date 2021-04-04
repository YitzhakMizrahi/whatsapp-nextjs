import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCx_JgJfFQeg9LHrGNqUcjqm43CWHJrjc4',
  authDomain: 'whatsapp-clone-e90ab.firebaseapp.com',
  projectId: 'whatsapp-clone-e90ab',
  storageBucket: 'whatsapp-clone-e90ab.appspot.com',
  messagingSenderId: '666793993349',
  appId: '1:666793993349:web:aae8c618e63b0e480635ec',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
