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

const sliderFilmForSlice = createSlice({
    name: 'sliderFilmFor',
    initialState,
    reducers: {
        changeMainFilmForCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainFilmForPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainFilmForPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubFilmForCount(state, action) {
            state.subCount = action.payload
        },
        changeSubFilmForPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubFilmForPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumFilmForHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumFilmForHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHideFilmFor(state, action) {
            state.isHide = action.payload
        },
        changePageFilmFor(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainFilmForCount, changeMainFilmForPosInc, changeMainFilmForPosDec, changeSubFilmForCount, changeSubFilmForPosInc, changeSubFilmForPosDec, changeNumFilmForHorizInc, changeNumFilmForHorizDec, changeHideFilmFor, changePageFilmFor } = sliderFilmForSlice.actions
export default sliderFilmForSlice.reducer