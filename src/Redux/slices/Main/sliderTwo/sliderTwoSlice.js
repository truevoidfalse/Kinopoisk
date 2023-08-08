import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    mainPos: 1,
    mainPage: 0,
    mainCount: 0,

    subPos: 1,
    subPage: 0,
    subCount: 0,

    numHoriz: 0,
    page: 1,
    isHide: true,

}

const sliderTwoSlice = createSlice({
    name: 'sliderTwo',
    initialState,
    reducers: {
        changeTwoMainCount(state, action) {
            state.mainCount = action.payload
        },
        changeTwoMainPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeTwoMainPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeTwoSubCount(state, action) {
            state.subCount = action.payload
        },
        changeTwoSubPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeTwoSubPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeTwoNumHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeTwoNumHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeTwoHide(state, action) {
            state.isHide = action.payload
        },
        changeTwoPage(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeTwoMainCount, changeTwoMainPosInc, changeTwoMainPosDec, changeTwoSubCount, changeTwoSubPosInc, changeTwoSubPosDec, changeTwoNumHorizInc, changeTwoNumHorizDec, changeTwoHide, changeTwoPage } = sliderTwoSlice.actions
export default sliderTwoSlice.reducer