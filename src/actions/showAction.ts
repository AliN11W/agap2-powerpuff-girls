import { API_URL } from './../constants';
import { Dispatch } from 'redux';
import { Show } from '../types';
import { handleResponse } from '../utils/api';

// Action Types
export const FETCH_SHOW_BEGIN = 'FETCH_SHOW_BEGIN';
export const FETCH_SHOW_SUCCESS = 'FETCH_SHOW_SUCCESS';
export const FETCH_SHOW_FAILURE = 'FETCH_SHOW_FAILURE';

// TypeScript types for the actions
type FetchShowBeginAction = {
  type: typeof FETCH_SHOW_BEGIN;
}

type FetchShowSuccessAction = {
  type: typeof FETCH_SHOW_SUCCESS;
  payload: Show;
}

type FetchShowFailureAction = {
  type: typeof FETCH_SHOW_FAILURE;
  payload: Error;
}

// Combine the action types
export type ShowActionTypes = FetchShowBeginAction | FetchShowSuccessAction | FetchShowFailureAction;

// Async Action Creator (Thunk)
export const fetchShow = () => {
  return (dispatch: Dispatch<ShowActionTypes>) => {
    dispatch({ type: FETCH_SHOW_BEGIN });
    return fetch(`${API_URL}/shows/6771`)
      .then(handleResponse)
      .then(data => {
        dispatch({ type: FETCH_SHOW_SUCCESS, payload: data });
        return data;
      })
      .catch(error => dispatch({ type: FETCH_SHOW_FAILURE, payload: error }));
  };
};

// Handle HTTP response
