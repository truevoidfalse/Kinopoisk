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

const sliderCriminalSlice = createSlice({
    name: 'sliderCriminal',
    initialState,
    reducers: {
        changeMainCriminalCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainCriminalPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainCriminalPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubCriminalCount(state, action) {
            state.subCount = action.payload
        },
        changeSubCriminalPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubCriminalPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumCriminalHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumCriminalHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHideCriminal(state, action) {
            state.isHide = action.payload
        },
        changePageCriminal(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainCriminalCount, changeMainCriminalPosInc, changeMainCriminalPosDec, changeSubCriminalCount, changeSubCriminalPosInc, changeSubCriminalPosDec, changeNumCriminalHorizInc, changeNumCriminalHorizDec, changeHideCriminal, changePageCriminal } = sliderCriminalSlice.actions
export default sliderCriminalSlice.reducer