import { createSlice } from "@reduxjs/toolkit";


const initialState = {value: 0}

const uiSlice = createSlice({
    name: 'paralax',
    initialState,
    reducers: {
        changeValue(state, action) {
            state.value = action.payload
        }
    }
})


export const { changeValue } = uiSlice.actions
export default uiSlice.reducer