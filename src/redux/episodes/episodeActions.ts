import { Dispatch } from 'redux';
import { API_URL } from '../../constants';
import { FETCH_EPISODES_FAILURE, FETCH_EPISODES_REQUEST, FETCH_EPISODES_SUCCESS } from './episodeTypes';

export const fetchEpisodes = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_EPISODES_REQUEST });
    try {
      const episodes = await fetch(`${API_URL}/shows/6771/episodes`);
      const episodesJson = await episodes.json();
      dispatch({ type: FETCH_EPISODES_SUCCESS, payload: episodesJson });
    } catch (error) {
      dispatch({ type: FETCH_EPISODES_FAILURE });
    }
  };
};