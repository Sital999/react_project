import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple";

export const fetchQuestionsGeoMedium= createAsyncThunk(
  "geoMedium/fetchQuestionsGeoMedium",
  () => {
   return axios.get(url)
   .then((response) => {return response.data});
  }
);

export const geoMediumSlices = createSlice({
  name: "geoMedium",
  initialState: {
    question: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionsGeoMedium.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchQuestionsGeoMedium.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchQuestionsGeoMedium.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.question = [];
      });
  },
});

export default geoMediumSlices.reducer;
