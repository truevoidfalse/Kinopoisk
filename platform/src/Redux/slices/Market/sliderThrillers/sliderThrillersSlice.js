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

const sliderThrillerSlice = createSlice({
    name: 'sliderThriller',
    initialState,
    reducers: {
        changeMainThrillerCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainThrillerPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainThrillerPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubThrillerCount(state, action) {
            state.subCount = action.payload
        },
        changeSubPThrillerInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubThrillerDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumThrillerorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumThrillerorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHideThriller(state, action) {
            state.isHide = action.payload
        },
        changePageThriller(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainThrillerCount, changeMainThrillerPosInc, changeMainThrillerPosDec, changeSubThrillerCount, changeSubThrillerPosInc, changeSubThrillerPosDec, changeNumThrillerHorizInc, changeNumThrillerHorizDec, changeHideThriller, changePageThriller } = sliderThrillerSlice.actions
export default sliderThrillerSlice.reducer