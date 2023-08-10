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

const sliderAdventuresSlice = createSlice({
    name: 'sliderAdventures',
    initialState,
    reducers: {
        changeMainAdventuresCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainAdventuresPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainAdventuresPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubAdventuresCount(state, action) {
            state.subCount = action.payload
        },
        changeSubAdventuresPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubAdventuresPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumAdventuresHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumAdventuresHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHideAdventures(state, action) {
            state.isHide = action.payload
        },
        changePageAdventures(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainAdventuresCount, changeMainAdventuresPosInc, changeMainAdventuresPosDec, changeSubAdventuresCount, changeSubAdventuresPosInc, changeSubAdventuresPosDec, changeNumAdventuresHorizInc, changeNumAdventuresHorizDec, changeHideAdventures, changePageAdventures } = sliderAdventuresSlice.actions
export default sliderAdventuresSlice.reducer