import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authToken: ""
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    }
});

// export const {} = authSlice.actions;
export { authSlice };