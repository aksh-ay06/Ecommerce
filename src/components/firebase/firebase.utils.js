import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAgLpbp4Oow3ZXeSe6H07bT3eSTL_jw2R0",
  authDomain: "crwn-db-e195d.firebaseapp.com",
  projectId: "crwn-db-e195d",
  storageBucket: "crwn-db-e195d.appspot.com",
  messagingSenderId: "1023565303654",
  appId: "1:1023565303654:web:684dbe8757d532cefd82a7",
  measurementId: "G-N4GX59EQPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export {auth,provider};

export const signInWithGoogle = () => signInWithPopup(auth, provider);
