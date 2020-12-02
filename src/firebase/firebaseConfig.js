import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDAVgLE9iMIKlX3_brAcZqzdKg6AvF-4mU",
    authDomain: "nodejs-server-45b8e.firebaseapp.com",
    databaseURL: "https://nodejs-server-45b8e.firebaseio.com",
    projectId: "nodejs-server-45b8e",
    storageBucket: "nodejs-server-45b8e.appspot.com",
    messagingSenderId: "931717535939",
    appId: "1:931717535939:web:91aea00715896b6ad2ea76",
    measurementId: "G-271ZKKY70K"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()


export {
    db,
    firebaseApp
}