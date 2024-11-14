import { configureStore } from '@reduxjs/toolkit'
import carsReducer from "./slices/carsSlice"
import homeReducer from "./slices/homeSlice"
import detailsReducer from './slices/detailsSlice'

export const store = configureStore({
  reducer: {
    home: homeReducer,
    cars: carsReducer,
    details: detailsReducer
  },
})