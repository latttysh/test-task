export interface ItemI {
    id: string
    color: string
}

export type SquaresSliceInitialStateI = {
    items: ItemI[]
}

export type AddSquarePayloadI = ItemI
