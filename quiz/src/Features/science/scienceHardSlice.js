import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple";

export const fetchQuestionsScienceHard= createAsyncThunk(
  "scienceHard/fetchQuestionsScienceHard",
  () => {
   return axios.get(url)
   .then((response) => {return response.data});
  }
);

export const scienceHardSlices = createSlice({
  name: "scienceHard",
  initialState: {
    question: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionsScienceHard.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchQuestionsScienceHard.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchQuestionsScienceHard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.question = [];
      });
  },
});

export default scienceHardSlices.reducer;
