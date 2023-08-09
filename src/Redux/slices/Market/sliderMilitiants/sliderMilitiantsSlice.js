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

const sliderMilitiantsSlice = createSlice({
    name: 'sliderMilitiants',
    initialState,
    reducers: {
        changeMainMilitiantsCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainMilitiantsPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainMilitiantsPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubMilitiantsCount(state, action) {
            state.subCount = action.payload
        },
        changeSubMilitiantsPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubMilitiantsPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumMilitiantsHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumMilitiantsHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHideMilitiants(state, action) {
            state.isHide = action.payload
        },
        changePageMilitiants(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainMilitiantsCount, changeMainMilitiantsPosInc, changeMainMilitiantsPosDec, changeSubMilitiantsCount, changeSubMilitiantsPosInc, changeSubMilitiantsPosDec, changeNumMilitiantsHorizInc, changeNumMilitiantsHorizDec, changeHideMilitiants, changePageMilitiants } = sliderMilitiantsSlice.actions
export default sliderMilitiantsSlice.reducer