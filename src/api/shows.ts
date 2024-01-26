// To be deleted

// showsAPI.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '../constants';

export const fetchShows = createAsyncThunk('shows/fetchShows', async () => {
  const response = await fetch(`${API_URL}/shows/6771`);
  const data = await response.json();

  // throw new Error('Something went wrong');
  return data;
});