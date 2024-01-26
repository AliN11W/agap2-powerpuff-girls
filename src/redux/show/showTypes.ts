export const FETCH_SHOW_REQUEST = 'FETCH_SHOW_REQUEST';
export const FETCH_SHOW_SUCCESS = 'FETCH_SHOW_SUCCESS';
export const FETCH_SHOW_FAILURE = 'FETCH_SHOW_FAILURE';

export interface FetchShowRequestAction {
  type: typeof FETCH_SHOW_REQUEST;
}

export interface FetchShowSuccessAction {
  type: typeof FETCH_SHOW_SUCCESS;
  payload: Show;
}

export interface FetchShowFailureAction {
  type: typeof FETCH_SHOW_FAILURE;
  payload: string;
}

export type ShowActionTypes = FetchShowRequestAction | FetchShowSuccessAction | FetchShowFailureAction;

export interface ShowState {
  show: Show | null;
  loading: boolean;
  error: string | null;
}

export type Show = {
  id: number;
  name: string;
  summary: string;
  image: {
    medium: string;
    original: string;
  };
  url: string;
  genres: string[];
}
