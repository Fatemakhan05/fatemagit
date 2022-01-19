const firebaseConfig = {
    apiKey: "AIzaSyDsLPAd2E3vAhmZtbRNr1NuvuRwWBjowqg",
    authDomain: "todolistproject-e0e05.firebaseapp.com",
    projectId: "todolistproject-e0e05",
    storageBucket: "todolistproject-e0e05.appspot.com",
    messagingSenderId: "1032103099317",
    appId: "1:1032103099317:web:83ced75de4723e0f2077fc",
    measurementId: "G-EJKL39DJE1"
  };
  firebase.initializeApp(firebaseConfig);

firebase.analytics();
  var db = firebase.firestore();