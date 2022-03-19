import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore, getDoc, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDuenpwjhrSdleiXKnocTAliWpW9JMIDLw',
  authDomain: 'crwn-e841d.firebaseapp.com',
  projectId: 'crwn-e841d',
  storageBucket: 'crwn-e841d.appspot.com',
  messagingSenderId: '619672216961',
  appId: '1:619672216961:web:0bbffbef7b7269a434f480',
};

initializeApp(firebaseConfig);

export const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = doc(db, 'users', userAuth.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating the user: ', error.message);
    }
  }

  return userRef;
};

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
