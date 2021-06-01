import firebase from 'firebase';
 const firebaseConfig = {
    apiKey: "AIzaSyAg8OapC_fM3NNjFFTiFAXS8xpPSOwtcKc",
    authDomain: "arya-in-wireless-buzzer.firebaseapp.com",
    databaseURL: "https://arya-in-wireless-buzzer.firebaseio.com",
    projectId: "arya-in-wireless-buzzer",
    storageBucket: "arya-in-wireless-buzzer.appspot.com",
    messagingSenderId: "525385116606",
    appId: "1:525385116606:web:ea351640dd5d4bc99267ef",
    measurementId: "G-THTH21CSZJ"
  };
  // Initialize Firebase
 if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


  export default firebase.database();