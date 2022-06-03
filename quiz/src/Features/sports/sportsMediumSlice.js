import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const url="https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple"

export const fetchQuestionSportsMedium=createAsyncThunk('sportsMedium/fetchQuestionSportsMedium',()=>{
    return axios.get(url).then((response)=>response.data)
})

const sportsMediumSlice = createSlice({
    name: 'sportsMedium',
    initialState:{
        loading: false,
        question: [],
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchQuestionSportsMedium.pending, (state)=>{
            state.loading = true
        }),
        builder.addCase(fetchQuestionSportsMedium.fulfilled, (state,action)=>{
            state.loading = false;
            state.question= action.payload
            state.error = ""
        }),
        builder.addCase(fetchQuestionSportsMedium.rejected, (state,action)=>{
            state.loading = false
            state.error = action.error.message
            state.question=[]
        })

    }
})

export default sportsMediumSlice.reducer