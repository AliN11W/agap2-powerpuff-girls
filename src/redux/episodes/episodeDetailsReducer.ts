import {
  EpisodeDetailsActionTypes,
  EpisodeDetailsState,
  FETCH_EPISODE_DETAILS_FAILURE,
  FETCH_EPISODE_DETAILS_REQUEST,
  FETCH_EPISODE_DETAILS_SUCCESS,
  RESET_EPISODE_DETAILS
} from "./episodeDetailsTypes";

const initialState: EpisodeDetailsState = {
  episodeDetails: null,
  loading: false,
  error: null,
};

export const episodeDetailsReducer = (state = initialState, action: EpisodeDetailsActionTypes): EpisodeDetailsState => {
  switch (action.type) {
    case FETCH_EPISODE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case FETCH_EPISODE_DETAILS_SUCCESS:
      return { ...state, episodeDetails: action.payload, loading: false };
    case FETCH_EPISODE_DETAILS_FAILURE:
      return { ...state, error: action.payload, loading: false, episodeDetails: null };
    case RESET_EPISODE_DETAILS:
      return { ...state, episodeDetails: null };
    default:
      return state;
  }
};
