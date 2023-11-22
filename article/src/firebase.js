import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyDGk1OsEKN1adw_MLtY2Mi3Y2HmiW3NlH4",
	authDomain: "react-artical.firebaseapp.com",
	projectId: "react-artical",
	storageBucket: "react-artical.appspot.com",
	messagingSenderId: "9718846331",
	appId: "1:9718846331:web:3f36518314fb3ff095e3de"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
