import {combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer} from 'react-redux-firebase'
import authReducers from './auth/auth.reducer';
import userReducer from './user/user.reducer';

const rootReducers=combineReducers({
    auth:authReducers,
    user:userReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
});

export default rootReducers;