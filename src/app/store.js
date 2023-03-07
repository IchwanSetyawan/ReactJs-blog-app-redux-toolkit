import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice";
import usersReducer from "./users/usersSlice";

const store = configureStore({
    reducer:{
        post: postReducer,
        users: usersReducer
    }
})

export default store;


