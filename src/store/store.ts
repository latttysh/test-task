import { configureStore } from "@reduxjs/toolkit";
import squaresSlice from "./slices/squares.slice";

export const store = configureStore({
    reducer: {
        squares: squaresSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;