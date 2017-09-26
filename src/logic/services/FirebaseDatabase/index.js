/* ------------------------- External Dependencies -------------------------- */
import firebase from 'firebase';
import { FIREBASE_CONFIG } from 'secrets/Firebase';

/* ------------------------ Initialize Dependencies ------------------------- */
 import { firebaseApp } from 'services/FirebaseTools';

const FirebaseDatabase = {

  /**
   * Return an instance of a firebase auth provider based on the provider string.
   *
   * Function Entry
   * @param data
   * @param metadata
   * 
   * Constants
   * @desc entity, id and depthTarget are extracted from the metadata
   * @const {String} id: unique identifier
   * @const {String} entity: collection classification (ex: user, form, product, etc...)
   * @const {Array} branch: path to object branch
   * @const {Object} rules: toggle logic gateways
   * 
   * @returns {DATABASE_WRITE_STATUS}
   */
    write: ({data, metadata}) => {
        const { entity, id, branch, rules } = metadata
        firebaseApp.database().ref(`${entity}/`+ path.join(...branch)).set({
            ...data
        });
    }
};

export default FirebaseDatabase;
