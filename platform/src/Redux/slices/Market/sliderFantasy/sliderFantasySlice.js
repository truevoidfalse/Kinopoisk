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

const sliderFantasySlice = createSlice({
    name: 'sliderFantasy',
    initialState,
    reducers: {
        changeMainFantasyCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainFantasyPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainFantasyPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubFantasyCount(state, action) {
            state.subCount = action.payload
        },
        changeSubFantasyPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubFantasyPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumFantasyHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumFantasyHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHideFantasy(state, action) {
            state.isHide = action.payload
        },
        changePageFantasy(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainFantasyCount, changeMainFantasyPosInc, changeMainFantasyPosDec, changeSubFantasyCount, changeSubFantasyPosInc, changeSubFantasyPosDec, changeNumFantasyHorizInc, changeNumFantasyHorizDec, changeHideFantasy, changePageFantasy } = sliderFantasySlice.actions
export default sliderFantasySlice.reducer