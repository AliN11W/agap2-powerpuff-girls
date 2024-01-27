import { Show, ShowActionTypes } from "./showTypes";

const initialState: {
  show: Show | null;
  loading: boolean;
  error: null | Error;
} = { show: null, loading: false, error: null };

export const showReducer = (state = initialState, action: ShowActionTypes) => {
  switch (action.type) {
    case "FETCH_SHOW_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_SHOW_SUCCESS":
      return { ...state, loading: false, show: action.payload };
    case "FETCH_SHOW_FAILURE":
      return { ...state, loading: false, error: action.payload, shows: null };
    default:
      return state;
  }
};
