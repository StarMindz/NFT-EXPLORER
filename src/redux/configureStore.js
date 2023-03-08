import { configureStore } from '@reduxjs/toolkit';
import assetReducer from './assets/assetSlice';
import singleReducer from './single/singleSlice';

const store = configureStore({
  reducer: {
    assets: assetReducer,
    singleAsset: singleReducer,
  },
});

export default store;
