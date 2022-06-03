import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple";

export const fetchQuestionsScienceEasy= createAsyncThunk(
  "scienceEasy/fetchQuestionsScienceEasy",
  () => {
   return axios.get(url)
   .then((response) => {return response.data});
  }
);

export const scienceEasySlices = createSlice({
  name: "scienceEasy",
  initialState: {
    question: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionsScienceEasy.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchQuestionsScienceEasy.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchQuestionsScienceEasy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.question = [];
      });
  },
});

export default scienceEasySlices.reducer;
