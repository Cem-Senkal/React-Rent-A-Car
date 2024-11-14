import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

export const fetchAllCars = createAsyncThunk("get/fetchAllUsers", async () => {
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
    filteredData: [],
};

export const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        useFilter: (state, action) => {
            state.filteredData = current(state.data).filter(
                (car) =>
                    (action.payload.only ? action.payload.only === car.category : true) &&
                    (action.payload.location ? action.payload.location === car.location : true) &&
                    (action.payload.year ? car.year >= action.payload.year : true) &&
                    (action.payload.seats ? car.seats === action.payload.seats : true) &&
                    (action.payload.luggage ? car.luggage_capacity === action.payload.luggage : true) &&
                    (action.payload.price ? car.daily_price <= action.payload.price : true)
            );
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchAllCars.fulfilled, (state, action) => {
            state.data = action.payload.cars;
            state.filteredData = action.payload.cars;
        });
    },
});

export const { useFilter } = carSlice.actions;
export default carSlice.reducer;
