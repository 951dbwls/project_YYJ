import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-YkctaMRK8DGu05OpWDoQz4TUwjcAeI4",
    authDomain: "sns-cap01.firebaseapp.com",
    projectId: "sns-cap01",
    storageBucket: "sns-cap01.appspot.com",
    messagingSenderId: "95774283129",
    appId: "1:95774283129:web:b6f793a5e76dfa271e0ba8",
    measurementId: "G-NQFHJVY4RM"
  };

firebase.initializeApp(firebaseConfig)


export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()

export const USER_COLLECTION = db.collection('users')
export const TWEET_COLLECTION = db.collection('tweets')
export const COMMENT_COLLECTION = db.collection('comments')
export const RETWEET_COLLECTION = db.collection('retweets')
export const LIKES_COLLECTION = db.collection('likes')
export const MESSAGE_COLLECTION = db.collection('messages')
