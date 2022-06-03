import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const url =
//   "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple";

export const fetchRandom= createAsyncThunk(
  "random/fetchRandom",
  (url) => {
   return axios.get(url)
   .then((response) => {return response.data});
  }
);

const randomSlice = createSlice({
  name: "random",
  initialState: {
    question: [],
    loading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandom.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchRandom.fulfilled, (state, action) => {
        state.loading = false;
        state.question = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchRandom.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.question = [];
      });
  },
});

export default randomSlice.reducer;
