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

const sliderGenresSlice = createSlice({
    name: 'sliderGenres',
    initialState,
    reducers: {
        changeMainGenresCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainGenresPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainGenresPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubGenresCount(state, action) {
            state.subCount = action.payload
        },
        changeSubGenresPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubGenresPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumGenresHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumGenresHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHideGenres(state, action) {
            state.isHide = action.payload
        },
        changePageGenres(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainGenresCount, changeMainGenresPosInc, changeMainGenresPosDec, changeSubGenresCount, changeSubGenresPosInc, changeSubGenresPosDec, changeNumGenresHorizInc, changeNumGenresHorizDec, changeHideGenres, changePageGenres } = sliderGenresSlice.actions
export default sliderGenresSlice.reducer