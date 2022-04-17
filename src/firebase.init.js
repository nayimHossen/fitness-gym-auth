import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBuNyz0Fu8KEr-LC7s_ib3XXUFduyL4inw",
    authDomain: "assignment-10-aace0.firebaseapp.com",
    projectId: "assignment-10-aace0",
    storageBucket: "assignment-10-aace0.appspot.com",
    messagingSenderId: "1047946772521",
    appId: "1:1047946772521:web:09337936721050e1185c38"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;