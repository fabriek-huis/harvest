/**
 * Redux Saga Firebase (https://github.com/n6g7/redux-saga-firebase)
 * 
 * @desc By default a Firebase/Redux object is exported. However, other services
 * may import the default Firebase Application, Authentication, Database, etc...
 * objects for direct implementation without Redux.
 *  
 */
/* ------------------------- External Dependencies -------------------------- */
import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

/* ------------------------- Internal Dependencies -------------------------- */
import { FIREBASE_CONFIG } from 'secrets/Firebase';

/* ------------------------ Initialize Dependencies ------------------------- */
export const fireApp = firebase.initializeApp(FIREBASE_CONFIG);
export const fireAuth = fireApp.auth();
export const fireDatabase = fireApp.database();

/* ----------------------------- Export Default ----------------------------- */
const firebaseAppRedux = new ReduxSagaFirebase(fireApp)

export default firebaseAppRedux