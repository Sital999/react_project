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
        },
        deleteComment:(state,action)=>{
            state.comment.splice(action.payload,1)
        }
    }
})

export default commentSlice.reducer
export const {addComment,deleteComment} =  commentSlice.actions