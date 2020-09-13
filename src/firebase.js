import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC05C79Ju8EkZK4ayDC5VhYG575hHDSYa0",
    authDomain: "clone-ad00c.firebaseapp.com",
    databaseURL: "https://clone-ad00c.firebaseio.com",
    projectId: "clone-ad00c",
    storageBucket: "clone-ad00c.appspot.com",
    messagingSenderId: "407168010540",
    appId: "1:407168010540:web:a3b6b9bcfa5fa78e824489",
    measurementId: "G-MRTTQQT4TQ"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { db, auth};