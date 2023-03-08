import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
const baseURL2 = 'https://api.opensea.io/api/v1/asset/';
export const fetchSingleAsset = createAsyncThunk('single/fetch', (data) => axios.get(`${baseURL2}${data.address}/${data.id}/?include_orders=false`)
  .then((data) => data.data)
  .then((data) => {
    const dataInfo = {
      opensea: data.permalink,
      image: data.image_url,
    };
    return dataInfo;
  }));

const singleSlice = createSlice({
  name: 'single',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSingleAsset.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchSingleAsset.pending, () => 'loading');
    builder.addCase(fetchSingleAsset.rejected, () => 'Bad error');
  },
});

export default singleSlice.reducer;
