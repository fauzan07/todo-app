import firebase from 'firebase';
require("firebase/database");
require("firebase/auth");

const config = {
    apiKey: "AIzaSyBGfZXfrS0-VlUkcjyjuppyNnpyvbvyLMM",
    authDomain: "todo-app-a1032.firebaseapp.com",
    databaseURL: "https://todo-app-a1032.firebaseio.com",
    projectId: "todo-app-a1032",
    storageBucket: "todo-app-a1032.appspot.com",
    messagingSenderId: "470447132223",
    appId: "1:470447132223:web:3b552d97e6ddf37618728a",
  };

const fire = firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();

export default fire;