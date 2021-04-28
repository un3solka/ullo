import * as CONSTANTS from '../CONSTANTS';
import firebase from 'firebase';
import 'firebase/firestore';

export const getMarkers = () => (dispatch) => {
  firebase
    .firestore()
    .collection('restaurants')
    .get()
    .then((querySnapshot) => {
      const markers = [];
      querySnapshot.forEach((doc) => {
        markers.push({ ...doc.data(), id: doc.id });
      });
      dispatch({
        type: CONSTANTS.MAP_GET_MARKERS,
        payload: { markers },
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
};
