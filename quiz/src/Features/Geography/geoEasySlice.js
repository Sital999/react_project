import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const url =
//   "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple";

export const fetchQuestionsGeoEasy= createAsyncThunk(
  "geoEasy/fetchQuestionsGeoEasy",
  (url) => {
   return axios.get(url)
   .then((response) => {return response.data});
  }
);

const geoEasySlices = createSlice({
  name: "geoEasy",
  initialState: {
    question: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionsGeoEasy.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchQuestionsGeoEasy.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchQuestionsGeoEasy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.question = [];
      });
  },
});

export default geoEasySlices.reducer;
