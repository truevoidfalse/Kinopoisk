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

const sliderDramaSlice = createSlice({
    name: 'sliderDrama',
    initialState,
    reducers: {
        changeMainDramaCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainDramaPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainDramaPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubDramaCount(state, action) {
            state.subCount = action.payload
        },
        changeSubDramaPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubDramaPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumDramaHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumDramaHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHideDrama(state, action) {
            state.isHide = action.payload
        },
        changePageDrama(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainDramaCount, changeMainDramaPosInc, changeMainDramaPosDec, changeSubDramaCount, changeSubDramaPosInc, changeSubDramaPosDec, changeNumDramaHorizInc, changeNumDramaHorizDec, changeHideDrama, changePageDrama } = sliderDramaSlice.actions
export default sliderDramaSlice.reducer