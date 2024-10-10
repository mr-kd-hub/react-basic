import { createSlice } from '@reduxjs/toolkit'

export interface InitialState {
  posts: any[],
  error: string | undefined,
  post: any
}

const initialState: InitialState = {
  posts: [],
  post: undefined,
  error: undefined
}

export const counterSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchData: (state,action) => {        
        state.posts = action.payload
    },
    getPost: (state,action) => {
        state.post = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { fetchData, getPost } = counterSlice.actions

export default counterSlice.reducer