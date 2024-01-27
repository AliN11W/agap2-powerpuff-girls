import { Dispatch } from "redux";
import { API_URL } from "../../constants";
import {
  FETCH_EPISODES_FAILURE,
  FETCH_EPISODES_REQUEST,
  FETCH_EPISODES_SUCCESS,
} from "./episodesTypes";
import { RootState } from "../store";

export const fetchEpisodes = (id: string) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { episodes: episodeState } = getState();

    if (episodeState.episodes) {
      dispatch({
        type: FETCH_EPISODES_SUCCESS,
        payload: episodeState.episodes,
      });
      return;
    }
    dispatch({ type: FETCH_EPISODES_REQUEST });
    try {
      const episodes = await fetch(`${API_URL}/shows/${id}/episodes`);
      const episodesJson = await episodes.json();
      dispatch({ type: FETCH_EPISODES_SUCCESS, payload: episodesJson });
    } catch (error) {
      dispatch({ type: FETCH_EPISODES_FAILURE });
    }
  };
};
