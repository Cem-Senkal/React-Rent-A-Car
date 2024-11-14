import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllData = createAsyncThunk("get/fetchAllData", async () => {
    try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
});

const initialState = {
    data: [],
    states: [
        {
            state: "Ohio",
            img: "/img/states/ohio.jpg",
        },
        {
            state: "Georgia",
            img: "/img/states/georgia.jpg",
        },
        {
            state: "Virginia",
            img: "/img/states/virginia.jpg",
        },
        {
            state: "Colorado",
            img: "/img/states/colorado.jpg",
        },
    ],
};

export const homeSlice = createSlice({
    name: "homeSlice",
    initialState,
    extraReducers(builder) {
        builder.addCase(fetchAllData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.cars.slice(0, 10);
        });
    },
});

export default homeSlice.reducer;
