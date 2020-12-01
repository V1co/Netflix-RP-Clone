import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyBNwZyE8Obn9V-q6GbSoN7L1VYDzt-J0jA",
    authDomain: "netflix-clone-2edea.firebaseapp.com",
    databaseURL: "https://netflix-clone-2edea.firebaseio.com",
    projectId: "netflix-clone-2edea",
    storageBucket: "netflix-clone-2edea.appspot.com",
    messagingSenderId: "891340082564",
    appId: "1:891340082564:web:69fd828f5c78dcb2e2a1d1",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
