import { Episode } from "./episodesTypes";

export const FETCH_EPISODE_DETAILS_REQUEST = 'FETCH_EPISODE_DETAILS_REQUEST';
export const FETCH_EPISODE_DETAILS_SUCCESS = 'FETCH_EPISODE_DETAILS_SUCCESS';
export const FETCH_EPISODE_DETAILS_FAILURE = 'FETCH_EPISODE_DETAILS_FAILURE';
export const RESET_EPISODE_DETAILS = 'RESET_EPISODE_DETAILS';

export type FetchEpisodeDetailsRequestAction = {
  type: typeof FETCH_EPISODE_DETAILS_REQUEST;
}

export type FetchEpisodeDetailsSuccessAction = {
  type: typeof FETCH_EPISODE_DETAILS_SUCCESS;
  payload: Episode;
}

export type FetchEpisodeDetailsFailureAction = {
  type: typeof FETCH_EPISODE_DETAILS_FAILURE;
  payload: string;
}

export type ResetEpisodeDetailsAction = {
  type: typeof RESET_EPISODE_DETAILS;
  payload: string;
}

export type EpisodeDetailsActionTypes =
  FetchEpisodeDetailsRequestAction
  | FetchEpisodeDetailsSuccessAction
  | FetchEpisodeDetailsFailureAction
  | ResetEpisodeDetailsAction;

export type EpisodeDetailsState = {
  episodeDetails: Episode | null;
  loading: boolean;
  error: string | null;
}
