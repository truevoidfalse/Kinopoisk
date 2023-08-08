import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    callback: null
}

const contentCardMainSlice = createSlice({
    name: 'contentCardMain',
    initialState,
    reducers: {
        changeCardState(state, action) {
            state.id = action.payload
        },
        changeCallback(state, action) {
            state.callback = action.payload
        }
}})


export const { changeCardState } = contentCardMainSlice.actions
export default contentCardMainSlice.reducer