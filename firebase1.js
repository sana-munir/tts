import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDcZyBR3v96jBbIIILCvQXrGNUqh6Al5qk",
    authDomain: "bscs6db-9cc27.firebaseapp.com",
    databaseURL: "https://bscs6db-9cc27-default-rtdb.firebaseio.com",
    projectId: "bscs6db-9cc27",
    storageBucket: "bscs6db-9cc27.appspot.com",
    messagingSenderId: "486643714570",
    appId: "1:486643714570:web:ff51beb519db937b202df3"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const database=getFirestore();
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export{ auth, database};
