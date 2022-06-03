import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple";

export const fetchQuestions = createAsyncThunk(
  "sportsHard/fetchQuestions",
  () => {
   return axios.get(url)
   .then((response) => {return response.data});
  }
);

export const sportsHardSlices = createSlice({
  name: "sportsHard",
  initialState: {
    question: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.question = [];
      });
  },
});

export default sportsHardSlices.reducer;
