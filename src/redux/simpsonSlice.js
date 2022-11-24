import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import Constants from "expo-constants";

const simpsonUrl = Constants.expoConfig.extra.simpsonUrl;
const defaultUrl = "https://5fc9346b2af77700165ae514.mockapi.io/simpsons";

const initialState = {
  simpsons: [],
  status: "idle",
  lastId: 0,
};

export const fetchSimpsons = createAsyncThunk(
  "simpsons/getSimpsons",
  async () => {
    try {
      const res = await axios.get(`${simpsonUrl || defaultUrl}`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const simpsonSlice = createSlice({
  name: "simpson",
  initialState,
  reducers: {
    addSimpson: (state, action) => {
      state.lastId += 1;
      state.simpsons = [
        ...state.simpsons,
        {
          ...action.payload,
        },
      ];
    },
    deleteSimpson: (state, action) => {
      console.log("action", action);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSimpsons.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSimpsons.fulfilled, (state, action) => {
        state.lastId = action.payload.length;
        state.simpsons = action.payload;
        state.status = "success";
      })
      .addCase(fetchSimpsons.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const {addSimpson} = simpsonSlice.actions;
export const selectSimpsons = (state) => state.simpson.simpsons;
export const selectLastId = (state) => state.simpson.lastId;
export default simpsonSlice.reducer;

/* name: action.payload.fullname,
        avatar: action.payload.avatar,
        job: action.payload.job,
        description: action.payload.description */
