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

const sliderForSlice = createSlice({
    name: 'sliderFor',
    initialState,
    reducers: {
        changeMainForCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainForPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainForPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubForCount(state, action) {
            state.subCount = action.payload
        },
        changeSubForPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubForPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumForHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumForHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHideFor(state, action) {
            state.isHide = action.payload
        },
        changePageFor(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainForCount, changeMainForPosInc, changeMainForPosDec, changeSubForCount, changeSubForPosInc, changeSubForPosDec, changeNumForHorizInc, changeNumForHorizDec, changeHideFor, changePageFor } = sliderForSlice.actions
export default sliderForSlice.reducer