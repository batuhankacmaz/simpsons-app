import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  simpsons: [],
  status: "idle",
  lastId: 0,
};

export const fetchSimpsons = createAsyncThunk(
  "simpsons/getSimpsons",
  async () => {
    try {
      const res = await axios.get(
        `https://5fc9346b2af77700165ae514.mockapi.io/simpsons`
      );
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const simpsonSlice = createSlice({
  name: "simpson",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSimpsons.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSimpsons.fulfilled, (state, action) => {
        let finalItems;
        let initialItems = [...action.payload];
        if (initialItems.length) {
          finalItems = initialItems.map((item, index) => {
            return {index: index + 1, item};
          });
        }
        state.lastId = finalItems.length;
        state.simpsons = finalItems;
        state.status = "success";
      })
      .addCase(fetchSimpsons.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const {} = simpsonSlice.actions;
export const selectSimpsons = (state) => state.simpson.simpsons;
export const selectLastId = (state) => state.simpson.lastId;
export default simpsonSlice.reducer;
