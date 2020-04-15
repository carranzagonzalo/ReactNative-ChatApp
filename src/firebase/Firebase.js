import firebase from 'firebase/app'
import "firebase/firestore"
require('firebase/auth')

import { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from 'react-native-dotenv'

var firebaseConfig = {
    apiKey: "AIzaSyDH_tHxSi_SVqhzHfqmP09ns2SuiFhpt-U",
    authDomain: "chatapp-31046.firebaseapp.com",
    databaseURL: "https://chatapp-31046.firebaseio.com",
    projectId: "chatapp-31046",
    storageBucket: "chatapp-31046.appspot.com",
    messagingSenderId: "645744932062",
    appId: "1:645744932062:web:b84973c480d1c4f8223e4f",
    measurementId: "G-BNC7P5WPF5"
  };

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export default firebase

