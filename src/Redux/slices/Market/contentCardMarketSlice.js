import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    callback: null
}

const contentCardMarketSlice = createSlice({
    name: 'contentCardMarket',
    initialState,
    reducers: {
        changeCardState(state, action) {
            state.id = action.payload
        },
        changeCallback(state, action) {
            state.callback = action.payload
        }
}})


export const { changeCardState } = contentCardMarketSlice.actions
export default contentCardMarketSlice.reducer