import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBFczAaCrw9OUGnjWwI4MqkX5-CP2arcUg",
  authDomain: "apna-khata-1e1f3.firebaseapp.com",
  databaseURL: "https://apna-khata-1e1f3-default-rtdb.firebaseio.com",
  projectId: "apna-khata-1e1f3",
  storageBucket: "apna-khata-1e1f3.firebasestorage.app",
  messagingSenderId: "858508565983",
  appId: "1:858508565983:web:d481acc483d3e818e9f86a"
};

const fire = firebase.initializeApp(firebaseConfig)
export default fire.database().ref()