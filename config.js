import firebase from 'firebase'

const firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyBY7bN_aniqgVmrzEn8yLiMbPAG6vDZkGs",
  authDomain: "project-71-c59b6.firebaseapp.com",
  projectId: "project-71-c59b6",
  storageBucket: "project-71-c59b6.appspot.com",
  messagingSenderId: "911866935123",
  appId: "1:911866935123:web:ee6147e64c4c72f2af53a6"
};

if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig)

  export default firebase.firestore()

