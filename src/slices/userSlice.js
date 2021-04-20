import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../src/api/globalAxios'

const initialState = {
    users: []
}

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducer: {
        getUsers: (state, action)=>{
            //get users from api
            // instance({
            //     method: 'get',
            //     url: '/users'
            // })
            // .then(response=>{
            //     console.log("Response in getusers", response);
            // })
        },
        addUser: (state, action)=> {
            //write code to add user
        },
        deleteUser: (state, action)=>{
            //write code to delete user
        },
        updateUser: (state, action)=>{
            //write code to update a specific user
        }
    }
})

export const { getUsers, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer