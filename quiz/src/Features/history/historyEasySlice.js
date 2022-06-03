import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple";

export const fetchQuestionsHistoryEasy= createAsyncThunk(
  "historyEasy/fetchQuestionsHistoryEasy",
  () => {
   return axios.get(url)
   .then((response) => {return response.data});
  }
);

export const historyEasySlices = createSlice({
  name: "historyEasy",
  initialState: {
    question: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionsHistoryEasy.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchQuestionsHistoryEasy.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchQuestionsHistoryEasy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.question = [];
      });
  },
});

export default historyEasySlices.reducer;
