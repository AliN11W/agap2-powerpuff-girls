import { API_URL } from './../constants';
import { Dispatch } from 'redux';
import { Episode } from '../types';
import { handleResponse } from '../utils/api';

// Action Types
export const FETCH_EPISODE_BEGIN = 'FETCH_EPISODE_BEGIN';
export const FETCH_EPISODE_SUCCESS = 'FETCH_SHOW_SUCCESS';
export const FETCH_EPISODE_FAILURE = 'FETCH_EPISODE_FAILURE';

// TypeScript types for the actions
type FetchEpisodeBeginAction = {
  type: typeof FETCH_EPISODE_BEGIN;
}

type FetchEpisodeSuccessAction = {
  type: typeof FETCH_EPISODE_SUCCESS;
  payload: Episode;
}

type FetchEpisodeFailureAction = {
  type: typeof FETCH_EPISODE_FAILURE;
  payload: Error;
}

// Combine the action types
export type EpisodeActionTypes = FetchEpisodeBeginAction | FetchEpisodeSuccessAction | FetchEpisodeFailureAction;

// Action Creators
export const fetchEpisodeBegin = (): EpisodeActionTypes => ({
  type: FETCH_EPISODE_BEGIN
});

export const fetchEpisodeSuccess = (show: Episode): EpisodeActionTypes => ({
  type: FETCH_EPISODE_SUCCESS,
  payload: show
});

export const fetchEpisodeFailure = (error: Error): EpisodeActionTypes => ({
  type: FETCH_EPISODE_FAILURE,
  payload: error
});

// Async Action Creator (Thunk)
export const fetchEpisode = () => {
  return (dispatch: Dispatch<EpisodeActionTypes>) => {
    dispatch(fetchEpisodeBegin());
    return fetch(`${API_URL}/shows/6771/episodes`)
      .then(handleResponse)
      .then(data => {
        dispatch(fetchEpisodeSuccess(data));
        return data;
      })
      .catch(error => dispatch(fetchEpisodeFailure(error)));
  };
};

// Handle HTTP response
