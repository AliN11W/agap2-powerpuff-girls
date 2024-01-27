export const FETCH_EPISODES_REQUEST = "FETCH_EPISODES_REQUEST";
export const FETCH_EPISODES_SUCCESS = "FETCH_EPISODES_SUCCESS";
export const FETCH_EPISODES_FAILURE = "FETCH_EPISODES_FAILURE";
export const SET_VISIBLE_EPISODES_NUMBER = "SET_VISIBLE_EPISODES_NUMBER";

export type FetchEpisodesRequestAction = {
  type: typeof FETCH_EPISODES_REQUEST;
};

export type FetchEpisodesSuccessAction = {
  type: typeof FETCH_EPISODES_SUCCESS;
  payload: Episode[];
};

export type FetchEpisodesFailureAction = {
  type: typeof FETCH_EPISODES_FAILURE;
  payload: string;
};

export type SetVisibleEpisodesNumberAction = {
  type: typeof SET_VISIBLE_EPISODES_NUMBER;
  payload: number;
};

export type EpisodesActionTypes =
  | FetchEpisodesRequestAction
  | FetchEpisodesSuccessAction
  | FetchEpisodesFailureAction
  | SetVisibleEpisodesNumberAction;

export type EpisodesState = {
  episodes: null | Episode[];
  visibleItems: number;
  loading: boolean;
  error: string | null;
};

export type Episode = {
  id: number;
  name: string;
  season: number;
  number: number;
  summary: string;
  image: {
    medium: string;
    original: string;
  };
  url: string;
};
