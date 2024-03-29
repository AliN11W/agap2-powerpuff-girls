import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { showReducer } from "../show/showReducer";
import { episodesReducer } from "../episodes/episodesReducer";
import { episodeDetailsReducer } from "../episodes/episodeDetailsReducer";

const rootReducer = combineReducers({
  show: showReducer,
  episodes: episodesReducer,
  episodeDetails: episodeDetailsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
