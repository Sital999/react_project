import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://opentdb.com/api.php?amount=10&category=22&difficulty=hard&type=multiple";

export const fetchQuestionsGeoHard= createAsyncThunk(
  "geoHard/fetchQuestionsGeoHard",
  () => {
   return axios.get(url)
   .then((response) => {return response.data});
  }
);

export const geoHardSlices = createSlice({
  name: "geoHard",
  initialState: {
    question: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionsGeoHard.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchQuestionsGeoHard.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchQuestionsGeoHard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.question = [];
      });
  },
});

export default geoHardSlices.reducer;
