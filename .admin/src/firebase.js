import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyC6DkfahEsczYb7GVdcIokeo-8TzIr7yOE',
  authDomain: 'netflix-ae2b8.firebaseapp.com',
  projectId: 'netflix-ae2b8',
  storageBucket: 'netflix-ae2b8.appspot.com',
  messagingSenderId: '1030845021580',
  appId: '1:1030845021580:web:62c1dd80c82088eeafaaa9',
  measurementId: 'G-W7C0KZ3C1Z',
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
