import { createSlice } from "@reduxjs/toolkit";
import { SquaresSliceInitialStateI } from "../../types";

const initialState: SquaresSliceInitialStateI = {
    items: []
}

export const squaresSlice = createSlice({
    name: "Squares",
    initialState,
    reducers: {
        addNewSquare: (state, action) => {
            state.items.unshift({id: state.items.length + 1, color: action.payload})
        },
        deleteLastSquare: (state) => {
            state.items.pop()
        }
    }
})

export const {addNewSquare,deleteLastSquare} = squaresSlice.actions
export default squaresSlice.reducer