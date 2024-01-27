import { Dispatch } from "redux";
import { API_URL } from "../../constants";
import {
  FETCH_SHOW_FAILURE,
  FETCH_SHOW_REQUEST,
  FETCH_SHOW_SUCCESS,
} from "./showTypes";
import { RootState } from "../store";

export const fetchShow = (id: string) => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const { show: showState } = getState();

    if (showState.show) {
      dispatch({ type: FETCH_SHOW_SUCCESS, payload: showState.show });
      return;
    }

    dispatch({ type: FETCH_SHOW_REQUEST });
    try {
      const showDetails = await fetch(`${API_URL}/shows/${id}`);
      const showDetailsJson = await showDetails.json();
      dispatch({ type: FETCH_SHOW_SUCCESS, payload: showDetailsJson });
    } catch (error) {
      dispatch({ type: FETCH_SHOW_FAILURE });
    }
  };
};
