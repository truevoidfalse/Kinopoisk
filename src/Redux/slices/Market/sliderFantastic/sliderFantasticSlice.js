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

const sliderFantasticSlice = createSlice({
    name: 'sliderFantastic',
    initialState,
    reducers: {
        changeMainFantasticCount(state, action) {
            state.mainCount = action.payload
        },
        changeMainFantasticPosInc(state, action) {
            state.mainPos = state.mainPos += action.payload
        },
        changeMainFantasticPosDec(state, action) {
            state.mainPos = state.mainPos -= action.payload
        },

        changeSubFantasticCount(state, action) {
            state.subCount = action.payload
        },
        changeSubFantasticPosInc(state, action) {
            state.subPos = state.subPos += action.payload
        },
        changeSubFantasticPosDec(state, action) {
            state.subPos = state.subPos -= action.payload
        },

        changeNumFantasticHorizInc(state, action) {
            state.numHoriz = state.numHoriz -= action.payload
        },
        changeNumFantasticHorizDec(state, action) {
            state.numHoriz = state.numHoriz += action.payload
        },

        changeHideFantastic(state, action) {
            state.isHide = action.payload
        },
        changePageFantastic(state, action) {
            state.page = action.payload
        }
    }
})

export const { changeMainFantasticCount, changeMainFantasticPosInc, changeMainFantasticPosDec, changeSubFantasticCount, changeSubFantasticPosInc, changeSubFantasticPosDec, changeNumFantasticHorizInc, changeNumFantasticHorizDec, changeHideFantastic, changePageFantastic } = sliderFantasticSlice.actions
export default sliderFantasticSlice.reducer