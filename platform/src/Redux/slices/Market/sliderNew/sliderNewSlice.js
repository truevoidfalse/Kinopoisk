import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    mainPos: 1,
    mainCount: 0,

    subPos: 0,
    subCount: 0,

    numHoriz: 0,
    isHide: true,
    page: 1

}

const sliderNewSlice = createSlice({
    name: 'sliderNew',
    initialState,
    reducers: {
        changeMainNewCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainNewPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainNewPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubNewCount(state, action) {
            state.subCount = action.payload
        },
        changeSubNewPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubNewPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumNewHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumNewHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHideNew(state, action) {
            state.isHide = action.payload
        },
        changePageNew(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainNewCount, changeMainNewPosInc, changeMainNewPosDec, changeSubNewCount, changeSubNewPosInc, changeSubNewPosDec, changeNumNewHorizInc, changeNumNewHorizDec, changeHideNew, changePageNew } = sliderNewSlice.actions
export default sliderNewSlice.reducer