import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const url="https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"

export const fetchQuestionSportsEasy=createAsyncThunk('sportsEasy/fetchQuestionsSportsEasy',()=>{
    return axios.get(url).then((response)=>response.data)
})

const sportsEasySlice=createSlice({
    name: 'sportsEasy',
    initialState:{
        loading: false,
        question: [],
        error:""
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestionSportsEasy.pending, (state)=>{state.loading=true}),
        builder.addCase(fetchQuestionSportsEasy.fulfilled, (state, action)=>{
            state.loading=false,
            state.question=action.payload,
            state.error=""
        }),
        builder.addCase(fetchQuestionSportsEasy.rejected, (state, action)=>{
            state.loading=false,
            state.question=[],
            state.error=action.error.message
        })
    }
})

export default sportsEasySlice.reducer