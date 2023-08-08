import { createSlice } from '@reduxjs/toolkit'

const  initialState = {
    slider: false,
    sliderTwo: false,
    sliderFor: false,
    sliderTop: false,
    sliderSpecial: false
}

const SlidersMainSlice = createSlice({
    name:  'sliders',
    initialState,
    reducers: {
        changeSlider(state, action) {
            state.slider = action.payload
            state.sliderTwo = false
            state.sliderFor = false
            state.sliderTop = false
            state.sliderSpecial = false
        },
        changeSliderTwo(state, action) {
            state.sliderTwo = action.payload
            state.slider = false
            state.sliderFor = false
            state.sliderTop = false
            state.sliderSpecial = false
        },
        changeSliderFor(state, action) {
            state.sliderFor = action.payload
            state.slider = false
            state.sliderTwo = false
            state.sliderTop = false
            state.sliderSpecial = false
        },
        changeSliderTop(state, action) {
            state.sliderTop = action.payload
            state.slider = false
            state.sliderTwo = false
            state.sliderFor = false
            state.sliderSpecial = false
        },
        changeSliderSpecial(state, action) {
            state.sliderSpecial = action.payload
            state.slider = false
            state.sliderTwo = false
            state.sliderTop = false
            state.sliderFor = false
        }
    }
})

export const { changeSlider, changeSliderTwo, changeSliderFor, changeSliderTop, changeSliderSpecial } = SlidersMainSlice.actions
export default SlidersMainSlice.reducer