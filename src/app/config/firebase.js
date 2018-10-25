import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRdO58kMXYdU0HtwZc2__0GItLBozGzw4",
  authDomain: "event-book-220301.firebaseapp.com",
  databaseURL: "https://event-book-220301.firebaseio.com",
  projectId: "event-book-220301",
  storageBucket: "",
  messagingSenderId: "589792563699"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
