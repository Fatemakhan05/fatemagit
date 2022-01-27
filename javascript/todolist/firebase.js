const firebaseConfig = {
  apiKey: "AIzaSyCJw02TpdSSeu4sX4aVbQrmuxAWuFWY9KY",
  authDomain: "todolistfinal-15f40.firebaseapp.com",
  projectId: "todolistfinal-15f40",
  storageBucket: "todolistfinal-15f40.appspot.com",
  messagingSenderId: "451726281474",
  appId: "1:451726281474:web:5c3df25f0527c81d9ed01b",
  measurementId: "G-4Z9VTWN29V"
};
  firebase.initializeApp(firebaseConfig);

firebase.analytics();
  var db = firebase.firestore();