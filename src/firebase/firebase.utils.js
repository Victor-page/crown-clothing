import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDuenpwjhrSdleiXKnocTAliWpW9JMIDLw',
  authDomain: 'crwn-e841d.firebaseapp.com',
  projectId: 'crwn-e841d',
  storageBucket: 'crwn-e841d.appspot.com',
  messagingSenderId: '619672216961',
  appId: '1:619672216961:web:0bbffbef7b7269a434f480',
};

const app = initializeApp(firebaseConfig);
// console.log(app);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();
