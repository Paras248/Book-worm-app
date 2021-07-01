import React from "react";
import Providers from "./src/navigation/Providers";
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAGJOtNo6bNdGvEM5XficJXSqtWb5q2xK8",
    authDomain: "book-app-authentication.firebaseapp.com",
    projectId: "book-app-authentication",
    storageBucket: "book-app-authentication.appspot.com",
    messagingSenderId: "379041237722",
    appId: "1:379041237722:web:39237cf0ea3338e80173e3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const App = ()  => {
	return (
		<Providers />
	);
}

export default App;