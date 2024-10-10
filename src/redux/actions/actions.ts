import axios from "axios"
import { AppDispatch } from "../store"
import { fetchData, getPost } from "../slices/posts.slice";

export const fetchDataAction = ():any => {
    return async (dispatch:AppDispatch) => {
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
            dispatch(fetchData(response?.data))
        }
        catch(err){}
    }
}

export const getPostAction = (id:string):any => {
    return async (dispatch:AppDispatch) => {
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`); 
            dispatch(getPost(response?.data))
        }
        catch(err){}
    }
}
// export const fetchData = createAsyncThunk(
//     'data/fetchPost',
//     async () => {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');     
//         throw error()  
//         return response?.data; // Return the fetched data

//     }
// );