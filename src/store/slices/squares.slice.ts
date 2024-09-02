import {
    Action,
    ActionCreatorWithPayload,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit'
import {
    AddSquarePayloadI,
    ItemI,
    SquaresSliceInitialStateI,
} from '../../types'

const initialState: SquaresSliceInitialStateI = {
    items: [],
}

export const squaresSlice = createSlice({
    name: 'Squares',
    initialState,
    reducers: {
        addNewSquare: (state, action: PayloadAction<AddSquarePayloadI>) => {
            state.items.unshift({
                id: action.payload.id,
                color: action.payload.color,
            })
        },
        deleteLastSquare: (state) => {
            state.items.pop()
        },
    },
})

export const { addNewSquare, deleteLastSquare } = squaresSlice.actions
export default squaresSlice.reducer
