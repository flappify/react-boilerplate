import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux';
import rootReducers from './redux/root-reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore,getFirestore} from 'redux-firestore';
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase';
import firebase from './firebase/firebase.utils';

const store=createStore(rootReducers,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase,{useFirestoreForProfile:true,userProfile:'users',attachAuthIsReady:true})
    ));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
