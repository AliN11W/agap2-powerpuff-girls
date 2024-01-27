import {
  EpisodeDetailsActionTypes,
  EpisodeDetailsState,
  FETCH_EPISODE_DETAILS_FAILURE,
  FETCH_EPISODE_DETAILS_REQUEST,
  FETCH_EPISODE_DETAILS_SUCCESS
} from "./episodeDetailsTypes";

const initialState: EpisodeDetailsState = {
  episode: null,
  loading: false,
  error: null,
};

export const episodeDetailsReducer = (state = initialState, action: EpisodeDetailsActionTypes): EpisodeDetailsState => {
  switch (action.type) {
    case FETCH_EPISODE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case FETCH_EPISODE_DETAILS_SUCCESS:
      return { ...state, episode: action.payload, loading: false };
    case FETCH_EPISODE_DETAILS_FAILURE:
      return { ...state, error: action.payload, loading: false, episode: null };
    default:
      return state;
  }
};
