import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialValues = {
    userData: [],
    loading: false,
    error: null
}

export const mediaSlice = createSlice({
    name: "Slice",
    initialState: initialValues,

    extraReducers: (builder) => {}
})
export default mediaSlice.reducer;
