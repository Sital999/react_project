import {createSlice} from '@reduxjs/toolkit'

const initialState={
    numOfItems:0
}

const cartSlice=createSlice({
    name: 'cart',
    initialState,
    reducers:{
        increase:(state)=>{
             state.numOfItems++},
        decrease:(state)=>{state.numOfItems--}
    }
})

export default cartSlice.reducer
export const  {increase,decrease} = cartSlice.actions