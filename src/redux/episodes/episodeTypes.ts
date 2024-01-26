export const FETCH_EPISODES_REQUEST = 'FETCH_EPISODES_REQUEST';
export const FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS';
export const FETCH_EPISODES_FAILURE = 'FETCH_EPISODES_FAILURE';

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

export type EpisodesActionTypes = FetchEpisodesRequestAction | FetchEpisodesSuccessAction | FetchEpisodesFailureAction;

export interface EpisodesState {
  episodes: Episode[];
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