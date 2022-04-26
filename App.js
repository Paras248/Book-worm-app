import React from "react";
import Providers from "./src/navigation/Providers";
import firebase from "firebase";

var firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: "book-app-authentication.firebaseapp.com",
    projectId: "book-app-authentication",
    storageBucket: "book-app-authentication.appspot.com",
    messagingSenderId: "379041237722",
    appId: process.env.APPID
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
