const firebaseConfig = {
    apiKey: "AIzaSyAHRJ7n40IlOVex7seXPsrFsvroKDwNZSk",
    authDomain: "finish-task-90dde.firebaseapp.com",
    projectId: "finish-task-90dde",
    storageBucket: "finish-task-90dde.appspot.com",
    messagingSenderId: "906026634526",
    appId: "1:906026634526:web:803955754e1c0371690d0f",
    measurementId: "G-7SHQCMGPTD"
  };
  firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();