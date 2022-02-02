// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'emoti-chat-app.firebaseapp.com',
  projectId: 'emoti-chat-app',
  storageBucket: 'emoti-chat-app.appspot.com',
  messagingSenderId: '763995800473',
  appId: '1:763995800473:web:345a12665cc9d6b992c908',
  measurementId: 'G-KTMJC0ZP8M',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export const auth = getAuth()

export const db = getFirestore(app)
