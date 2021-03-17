import React from 'react';
import firebase from '@react-native-firebase/firestore';
import * as firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRgZVw_Inp4hu4zDllJZf5xF-VzPgtXpk",
    authDomain: "myfyp-d024f.firebaseapp.com",
    databaseURL: "https://myfyp-d024f-default-rtdb.firebaseio.com",
    projectId: "myfyp-d024f",
    storageBucket: "myfyp-d024f.appspot.com",
    messagingSenderId: "1027251559937",
    appId: "1:1027251559937:web:46e1ea80055231d75b6a00",
    measurementId: "G-5PSHH9FJLS"
  };
  // Initialize Firebase
  if (firebase.apps.length === 0){
      firebase.initializeApp(firebaseConfig);
  }
  
