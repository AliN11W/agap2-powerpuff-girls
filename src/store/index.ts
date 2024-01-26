import { applyMiddleware, combineReducers } from 'redux';
import { showReducer } from '../reducers/showReducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  show: showReducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;