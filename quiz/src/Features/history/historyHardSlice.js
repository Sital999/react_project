import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://opentdb.com/api.php?amount=10&category=23&difficulty=hard&type=multiple";

export const fetchQuestionsHistoryHard= createAsyncThunk(
  "historyHard/fetchQuestionsHistoryHard",
  () => {
   return axios.get(url)
   .then((response) => {return response.data});
  }
);

export const historyHardSlices = createSlice({
  name: "historyHard",
  initialState: {
    question: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionsHistoryHard.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchQuestionsHistoryHard.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchQuestionsHistoryHard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.question = [];
      });
  },
});

export default historyHardSlices.reducer;
