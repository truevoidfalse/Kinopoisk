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

const sliderSpecialSlice = createSlice({
    name: 'sliderSpecial',
    initialState,
    reducers: {
        changeMainSpecialCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainSpecialPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainSpecialPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubSpecialCount(state, action) {
            state.subCount = action.payload
        },
        changeSubSpecialPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubSpecialPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumSpecialHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumSpecialHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHideSpecial(state, action) {
            state.isHide = action.payload
        },
        changePageSpecial(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainSpecialCount, changeMainSpecialPosInc, changeMainSpecialPosDec, changeSubSpecialCount, changeSubSpecialPosInc, changeSubSpecialPosDec, changeNumSpecialHorizInc, changeNumSpecialHorizDec, changeHideSpecial, changePageSpecial } = sliderSpecialSlice.actions
export default sliderSpecialSlice.reducer