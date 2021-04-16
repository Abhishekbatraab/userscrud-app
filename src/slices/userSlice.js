import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: []
}

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducer: {
        getUsers: (state, action)=>{
            //get users from api
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