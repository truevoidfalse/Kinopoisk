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

const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        changeMainCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubCount(state, action) {
            state.subCount = action.payload
        },
        changeSubPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHide(state, action) {
            state.isHide = action.payload
        },
        changePage(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainCount, changeMainPosInc, changeMainPosDec, changeSubCount, changeSubPosInc, changeSubPosDec, changeNumHorizInc, changeNumHorizDec, changeHide, changePage } = sliderSlice.actions
export default sliderSlice.reducer