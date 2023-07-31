import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAzJ211wMlaYNcZpeHjjVUDhEUfdAZgFrE",
    authDomain: "restaurantapp-bcec5.firebaseapp.com",
    databaseURL: "https://restaurantapp-bcec5-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-bcec5",
    storageBucket: "restaurantapp-bcec5.appspot.com",
    messagingSenderId: "511522744033",
    appId: "1:511522744033:web:7b51fdc13b8a126ce8b9a0"
  };

const app = getApps.length > 0 ? getApp(): initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};