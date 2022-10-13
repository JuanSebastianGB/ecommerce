// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCR6ckhBGQZNMeWIrj-xyH5k7Nc7Uea6KM',
  authDomain: 'backend-ecommerce-3624f.firebaseapp.com',
  projectId: 'backend-ecommerce-3624f',
  storageBucket: 'backend-ecommerce-3624f.appspot.com',
  messagingSenderId: '722009843266',
  appId: '1:722009843266:web:d77d1d791648d52c59afdb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
