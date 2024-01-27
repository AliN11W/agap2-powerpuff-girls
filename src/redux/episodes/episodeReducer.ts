import { EpisodesActionTypes, EpisodesState, FETCH_EPISODES_FAILURE, FETCH_EPISODES_REQUEST, FETCH_EPISODES_SUCCESS } from "./episodeTypes";

const initialState: EpisodesState = {
  episodes: null,
  loading: false,
  error: null,
};

export const episodesReducer = (state = initialState, action: EpisodesActionTypes): EpisodesState => {
  switch (action.type) {
    case FETCH_EPISODES_REQUEST:
      return { ...state, loading: true };
    case FETCH_EPISODES_SUCCESS:
      return { ...state, episodes: action.payload, loading: false };
    case FETCH_EPISODES_FAILURE:
      return { ...state, error: action.payload, loading: false, episodes: null };
    default:
      return state;
  }
};
