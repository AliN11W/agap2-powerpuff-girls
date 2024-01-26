import { Dispatch } from 'redux';
import { API_URL } from '../../constants';
import { FETCH_SHOW_FAILURE, FETCH_SHOW_REQUEST, FETCH_SHOW_SUCCESS } from './showTypes';

export const fetchShow = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_SHOW_REQUEST });
    try {
      const showDetails = await fetch(`${API_URL}/shows/6771`);
      const showDetailsJson = await showDetails.json();
      dispatch({ type: FETCH_SHOW_SUCCESS, payload: showDetailsJson });
    } catch (error) {
      dispatch({ type: FETCH_SHOW_FAILURE });
    }
  };
};
