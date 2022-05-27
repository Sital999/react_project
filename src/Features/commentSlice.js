import { createSlice} from '@reduxjs/toolkit'

const initialState={
    comment:[]
}

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers:{
        addComment:(state,action)=>{
            state.comment.push(action.payload);
        }
    }
})

export default commentSlice.reducer
export const {addComment} = commentSlice.actions