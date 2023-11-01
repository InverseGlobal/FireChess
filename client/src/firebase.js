import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC7mybMry1LzLSlpsmXMlN_9LbcPogoW2g",
  authDomain: "inverseprivate-304e0.firebaseapp.com",
  projectId: "inverseprivate-304e0",
  storageBucket: "inverseprivate-304e0.appspot.com",
  messagingSenderId: "246587992179",
  appId: "1:246587992179:web:a5a5fc429c9e9c7d2ca206",
  measurementId: "G-TGV55BWQJW"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();

export const db = firebase.firestore();
export const arrayUnion = firebase.firestore.FieldValue.arrayUnion
export const deleteField = firebase.firestore.FieldValue.delete
export const arrayRemove = firebase.firestore.FieldValue.arrayRemove
