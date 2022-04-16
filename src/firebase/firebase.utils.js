import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  collection,
  writeBatch,
} from 'firebase/firestore';

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

const transformCollection = (doc) => {
  const { title, items } = doc.data();
  const { id } = doc;

  return {
    route: encodeURI(title.toLowerCase()),
    id,
    title,
    items,
  };
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.map(transformCollection);

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const { displayName, email, uid } = userAuth;
  const userReference = doc(db, 'users', uid);
  const documentSnapShot = await getDoc(userReference);

  if (!documentSnapShot.exists()) {
    try {
      const userDocument = {
        displayName,
        email,
        createdAt: new Date(),
        ...additionalData,
      };
      setDoc(userReference, userDocument);
    } catch (error) {
      console.log('error creating the user: ', error.message);
    }
  }

  return userReference;
};

export const addCollectionAndDocuments = async (
  collectionName,
  objectsToAdd
) => {
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const newDocumentReference = doc(collection(db, collectionName));
    batch.set(newDocumentReference, object);
  });

  return await batch.commit();
};

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
