import { Episode } from "./episodeTypes";

export const FETCH_EPISODE_DETAILS_REQUEST = 'FETCH_EPISODES_REQUEST';
export const FETCH_EPISODE_DETAILS_SUCCESS = 'FETCH_EPISODES_SUCCESS';
export const FETCH_EPISODE_DETAILS_FAILURE = 'FETCH_EPISODES_FAILURE';

export interface FetchEpisodeDetailsRequestAction {
  type: typeof FETCH_EPISODE_DETAILS_REQUEST;
}

export interface FetchEpisodeDetailsSuccessAction {
  type: typeof FETCH_EPISODE_DETAILS_SUCCESS;
  payload: Episode;
}

export interface FetchEpisodeDetailsFailureAction {
  type: typeof FETCH_EPISODE_DETAILS_FAILURE;
  payload: string;
}

export type EpisodeDetailsActionTypes = FetchEpisodeDetailsRequestAction | FetchEpisodeDetailsSuccessAction | FetchEpisodeDetailsFailureAction;

export interface EpisodeDetailsState {
  episode: Episode | null;
  loading: boolean;
  error: string | null;
}
