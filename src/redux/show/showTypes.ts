export const FETCH_SHOW_REQUEST = 'FETCH_SHOW_REQUEST';
export const FETCH_SHOW_SUCCESS = 'FETCH_SHOW_SUCCESS';
export const FETCH_SHOW_FAILURE = 'FETCH_SHOW_FAILURE';

export type FetchShowRequestAction = {
  type: typeof FETCH_SHOW_REQUEST;
}

export type FetchShowSuccessAction = {
  type: typeof FETCH_SHOW_SUCCESS;
  payload: Show;
}

export type FetchShowFailureAction = {
  type: typeof FETCH_SHOW_FAILURE;
  payload: string;
}

export type ShowActionTypes = FetchShowRequestAction | FetchShowSuccessAction | FetchShowFailureAction;

export type ShowState = {
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
