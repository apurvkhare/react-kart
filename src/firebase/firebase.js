import firebase from 'firebase/app'
import 'firebase/auth'
import keys from '../../env.json'

const app = firebase.initializeApp({
    apiKey: keys.REACT_APP_FIREBASE_API_KEY,
    authDomain: keys.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: keys.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: keys.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: keys.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: keys.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth();
export const provider = new firebase.auth.GoogleAuthProvider()
export default app;