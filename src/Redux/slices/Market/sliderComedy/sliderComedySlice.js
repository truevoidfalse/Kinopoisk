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

const sliderComedySlice = createSlice({
    name: 'sliderComedy',
    initialState,
    reducers: {
        changeMainComedyCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainComedyPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainComedyPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubComedyCount(state, action) {
            state.subCount = action.payload
        },
        changeSubComedyPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubComedyPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumComedyHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumComedyHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHideComedy(state, action) {
            state.isHide = action.payload
        },
        changePageComedy(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainComedyCount, changeMainComedyPosInc, changeMainComedyPosDec, changeSubComedyCount, changeSubComedyPosInc, changeSubComedyPosDec, changeNumComedyHorizInc, changeNumComedyHorizDec, changeHideComedy, changePageComedy } = sliderComedySlice.actions
export default sliderComedySlice.reducer