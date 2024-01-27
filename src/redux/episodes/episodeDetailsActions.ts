import { Dispatch } from 'redux';
import { API_URL } from '../../constants';
import { FETCH_EPISODE_DETAILS_FAILURE, FETCH_EPISODE_DETAILS_REQUEST, FETCH_EPISODE_DETAILS_SUCCESS } from './episodeDetailsTypes';


export const fetchEpisodeDetails = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_EPISODE_DETAILS_REQUEST });
    try {
      const episodes = await fetch(`${API_URL}/episodes/${id}}`);
      const episodesJson = await episodes.json();
      dispatch({ type: FETCH_EPISODE_DETAILS_SUCCESS, payload: episodesJson });
    } catch (error) {
      dispatch({ type: FETCH_EPISODE_DETAILS_FAILURE });
    }
  };
};