import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];
const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;

export const fetchAsset = createAsyncThunk('asset/fetch', (address) => axios.get(`${baseURL}?owner=${address}&pageSize=20`)
  .then((data) => data.data)
  .then((response) => response.ownedNfts)
  .then((datas) => {
    const dataInfo = datas
      .filter((data) => data.title && data.description)
      .map((data) => ({
        id: data.metadata.tokenId,
        name: data.title,
        description: data.description.split(' ').slice(0, 20).join(' '),
        address: data.contract.address,
        image: data.metadata.image ? data.metadata.image : data.tokenUri.gateway,
        floorPrice: data.contractMetadata.openSea.floorPrice,
      }));
    return dataInfo;
  })
  .catch((error) => {
    throw error;
  }));

const AssetSlice = createSlice({
  name: 'asset',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsset.fulfilled, (state, action) => action.payload);
    builder.addCase(fetchAsset.pending, () => 'loading');
    builder.addCase(fetchAsset.rejected, () => 'Bad Error');
  },
});

export default AssetSlice.reducer;
