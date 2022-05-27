import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
// const axios = require('axios')
// idCategory,strCategory,strCategoryThumb,strCategoryDescription
const initialState={
   loading: false,
   food:[],
   error:""
}

export const fetchFood=createAsyncThunk('food/fetchFood',()=>{
return axios
.get('https://www.themealdb.com/api/json/v1/1/categories.php')
.then((response) => {return response.data})
}
)

const foodSlice = createSlice({
    name: 'food',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchFood.pending,(state)=>{state.loading=true});
        builder.addCase(fetchFood.fulfilled,(state,action)=>{
            state.loading=false;
            state.food=action.payload;
            state.error=""
        })
        builder.addCase(fetchFood.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
            state.food=[]
        })
    }
})

export default foodSlice.reducer