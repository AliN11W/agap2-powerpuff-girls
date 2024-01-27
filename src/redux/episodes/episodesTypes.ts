export const FETCH_EPISODES_REQUEST = 'FETCH_EPISODES_REQUEST';
export const FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS';
export const FETCH_EPISODES_FAILURE = 'FETCH_EPISODES_FAILURE';
export const SET_VISIBLE_EPISODES_NUMBER = 'SET_VISIBLE_EPISODES_NUMBER';

export interface FetchEpisodesRequestAction {
  type: typeof FETCH_EPISODES_REQUEST;
}

export interface FetchEpisodesSuccessAction {
  type: typeof FETCH_EPISODES_SUCCESS;
  payload: Episode[];
}

export interface FetchEpisodesFailureAction {
  type: typeof FETCH_EPISODES_FAILURE;
  payload: string;
}

export interface SetVisibleEpisodesNumberAction {
  type: typeof SET_VISIBLE_EPISODES_NUMBER;
  payload: number;
}

export type EpisodesActionTypes = FetchEpisodesRequestAction
  | FetchEpisodesSuccessAction
  | FetchEpisodesFailureAction
  | SetVisibleEpisodesNumberAction;

export interface EpisodesState {
  episodes: null | Episode[];
  visibleItems: number;
  loading: boolean;
  error: string | null;
}


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
}