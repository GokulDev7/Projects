import {getAuth} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCuWHR2xq4drVYqe9-LNufG8cfqn7K2mro",
  authDomain: "build-2cfa6.firebaseapp.com",
  projectId: "build-2cfa6",
  storageBucket: "build-2cfa6.appspot.com",
  messagingSenderId: "123431487285",
  appId: "1:123431487285:web:4e56bb0118d9c194d0ae7c"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();


export {auth,db};
  
export default firebaseApp;
