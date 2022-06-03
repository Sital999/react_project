import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url =
  "https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple";
export const fetchQuestionsHistoryMedium= createAsyncThunk(
  "historyMedium/fetchQuestionsHistoryMedium",
  () => {
   return axios.get(url)
   .then((response) => {return response.data});
  }
);

export const historyMediumSlices = createSlice({
  name: "historyMedium",
  initialState: {
    question: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestionsHistoryMedium.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchQuestionsHistoryMedium.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchQuestionsHistoryMedium.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.question = [];
      });
  },
});

export default historyMediumSlices.reducer;
