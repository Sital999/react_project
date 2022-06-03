import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple";

export const fetchQuestionsScienceMedium= createAsyncThunk(
  "scienceMedium/fetchQuestionsScienceMedium",
  () => {
   return axios.get(url)
   .then((response) => {return response.data});
  }
);

export const scienceMediumSlices = createSlice({
  name: "scienceMedium",
  initialState: {
    question: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionsScienceMedium.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchQuestionsScienceMedium.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchQuestionsScienceMedium.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.question = [];
      });
  },
});

export default scienceMediumSlices.reducer;
