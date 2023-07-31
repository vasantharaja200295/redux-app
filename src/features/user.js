import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: { value: { name: "Vasantharaja", age: 0, email: "adadfsadfa@fgfdgdg" } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { login } = userSlice.actions; // Destructure the action creators if needed

export default userSlice.reducer;
