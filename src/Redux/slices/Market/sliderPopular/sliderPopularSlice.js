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

const sliderPopularSlice = createSlice({
    name: 'sliderPopular',
    initialState,
    reducers: {
        changeMainPopularCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainPopularPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainPopularPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubPopularCount(state, action) {
            state.subCount = action.payload
        },
        changeSubPopularPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubPopularPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumPopularHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumPopularHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHidePopular(state, action) {
            state.isHide = action.payload
        },
        changePagePopular(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainPopularCount, changeMainPopularPosInc, changeMainPopularPosDec, changeSubPopularCount, changeSubPopularPosInc, changeSubPopularPosDec, changeNumPopularHorizInc, changeNumPopularHorizDec, changeHidePopular, changePagePopular } = sliderPopularSlice.actions
export default sliderPopularSlice.reducer