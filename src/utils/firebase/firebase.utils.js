import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAW6X__vLlYLjvrtGV67vrRQKTqffQvY90',
  authDomain: 'crwn-clothing-db-85fd9.firebaseapp.com',
  projectId: 'crwn-clothing-db-85fd9',
  storageBucket: 'crwn-clothing-db-85fd9.appspot.com',
  messagingSenderId: '790387606240',
  appId: '1:790387606240:web:613355223dfbb09d9f0685',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = await doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAtDate = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAtDate,
        ...additionalInformation,
      });
    } catch (err) {
      console.log('error creating the user', err.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
