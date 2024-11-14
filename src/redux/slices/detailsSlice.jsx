import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCarData = createAsyncThunk("get/fetchCarData", async (id) => {
    try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
})

const initialState = {
    data: [],
    carData: []
}

export const detailsSlice = createSlice({
    name: "detailsSlice",
    initialState,
    extraReducers(builder) {
        builder.addCase(fetchCarData.fulfilled, (state, action) => {
            state.data = action.payload.cars
            state.carData = state.data.find((car) => car.id == action.meta.arg)
        })
    }
})

export default detailsSlice.reducer