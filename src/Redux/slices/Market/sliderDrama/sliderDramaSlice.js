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

const sliderTopSlice = createSlice({
    name: 'sliderTop',
    initialState,
    reducers: {
        changeMainTopCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainTopPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainTopPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubTopCount(state, action) {
            state.subCount = action.payload
        },
        changeSubTopPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubTopPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumTopHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumTopHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHideTop(state, action) {
            state.isHide = action.payload
        },
        changePageTop(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainTopCount, changeMainTopPosInc, changeMainTopPosDec, changeSubTopCount, changeSubTopPosInc, changeSubTopPosDec, changeNumTopHorizInc, changeNumTopHorizDec, changeHideTop, changePageTop } = sliderTopSlice.actions
export default sliderTopSlice.reducer