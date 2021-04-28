import * as CONSTANTS from '../CONSTANTS';
import firebase from 'firebase';
import 'firebase/firestore';

export const doSearch = (query) => (dispatch) => {
  dispatch({
    type: CONSTANTS.SEARCH_REQUEST,
  });
  firebase
    .firestore()
    .collection('restaurants')
    .get()
    .then((querySnapshot) => {
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      dispatch({
        type: CONSTANTS.SEARCH_RESPONSE,
        payload: {
          results: results.filter(
            (item) => item.name.toLowerCase().search(query.toLowerCase()) >= 0,
          ),
        },
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
};

export const searchStart = () => (dispatch) => {
  dispatch({
    type: CONSTANTS.SEARCH_START,
  });
};

export const searchEnd = () => (dispatch) => {
  dispatch({
    type: CONSTANTS.SEARCH_END,
  });
};
