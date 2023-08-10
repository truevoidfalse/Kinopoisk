import { createSlice } from '@reduxjs/toolkit'

const  initialState = {
    sliderAdventures: false,
    sliderComedy: false,
    sliderCriminal: false,
    sliderDrama: false,
    sliderFantastic: false,
    sliderFantasy: false,
    sliderFilmFor: false,
    sliderMilitiants: false,
    sliderNew: false,
    sliderPopular: false,
    sliderRelease: false,
    sliderThrillers: false
}

const SlidersMarketSlice = createSlice({
    name:  'slidersMarket',
    initialState,
    reducers: {
        changeSliderAdventures(state, action) {
            state.sliderAdventures = action.payload
            state.sliderComedy = false
            state.sliderCriminal = false
            state.sliderDrama = false
            state.sliderFantastic = false
            state.sliderFantasy = false
            state.sliderFilmFor = false
            state.sliderMilitiants = false
            state.sliderNew = false
            state.sliderPopular = false
            state.sliderRelease = false
            state.sliderThrillers = false
        },
        changeSliderComedy(state, action) {
            state.sliderAdventures = false
            state.sliderComedy = action.payload
            state.sliderCriminal = false
            state.sliderDrama = false
            state.sliderFantastic = false
            state.sliderFantasy = false
            state.sliderFilmFor = false
            state.sliderMilitiants = false
            state.sliderNew = false
            state.sliderPopular = false
            state.sliderRelease = false
            state.sliderThrillers = false
        },
        changeSliderCriminal(state, action) {
            state.sliderAdventures = false
            state.sliderComedy = false
            state.sliderCriminal = action.payload
            state.sliderDrama = false
            state.sliderFantastic = false
            state.sliderFantasy = false
            state.sliderFilmFor = false
            state.sliderMilitiants = false
            state.sliderNew = false
            state.sliderPopular = false
            state.sliderRelease = false
            state.sliderThrillers = false
        },
        changeSliderDrama(state, action) {
            state.sliderAdventures = false
            state.sliderComedy = false
            state.sliderCriminal = false
            state.sliderDrama = action.payload
            state.sliderFantastic = false
            state.sliderFantasy = false
            state.sliderFilmFor = false
            state.sliderMilitiants = false
            state.sliderNew = false
            state.sliderPopular = false
            state.sliderRelease = false
            state.sliderThrillers = false
        },
        changeSliderFantastic(state, action) {
            state.sliderAdventures = false
            state.sliderComedy = false
            state.sliderCriminal = false
            state.sliderDrama = false
            state.sliderFantastic = action.payload
            state.sliderFantasy = false
            state.sliderFilmFor = false
            state.sliderMilitiants = false
            state.sliderNew = false
            state.sliderPopular = false
            state.sliderRelease = false
            state.sliderThrillers = false
        },
        changeSliderFantasy(state, action) {
            state.sliderAdventures = false
            state.sliderComedy = false
            state.sliderCriminal = false
            state.sliderDrama = false
            state.sliderFantastic = false
            state.sliderFantasy = action.payload
            state.sliderFilmFor = false
            state.sliderMilitiants = false
            state.sliderNew = false
            state.sliderPopular = false
            state.sliderRelease = false
            state.sliderThrillers = false
        },
        changeSliderFilmFor(state, action) {
            state.sliderAdventures = false
            state.sliderComedy = false
            state.sliderCriminal = false
            state.sliderDrama = false
            state.sliderFantastic = false
            state.sliderFantasy = false
            state.sliderFilmFor = action.payload
            state.sliderMilitiants = false
            state.sliderNew = false
            state.sliderPopular = false
            state.sliderRelease = false
            state.sliderThrillers = false
        },
        changeSliderMilitiants(state, action) {
            state.sliderAdventures = false
            state.sliderComedy = false
            state.sliderCriminal = false
            state.sliderDrama = false
            state.sliderFantastic = false
            state.sliderFantasy = false
            state.sliderFilmFor = false
            state.sliderMilitiants = action.payload
            state.sliderNew = false
            state.sliderPopular = false
            state.sliderRelease = false
            state.sliderThrillers = false
        },
        changeSliderNew(state, action) {
            state.sliderAdventures = false
            state.sliderComedy = false
            state.sliderCriminal = false
            state.sliderDrama = false
            state.sliderFantastic = false
            state.sliderFantasy = false
            state.sliderFilmFor = false
            state.sliderMilitiants = false
            state.sliderNew = action.payload
            state.sliderPopular = false
            state.sliderRelease = false
            state.sliderThrillers = false
        },
        changeSliderPopular(state, action) {
            state.sliderAdventures = false
            state.sliderComedy = false
            state.sliderCriminal = false
            state.sliderDrama = false
            state.sliderFantastic = false
            state.sliderFantasy = false
            state.sliderFilmFor = false
            state.sliderMilitiants = false
            state.sliderNew = false
            state.sliderPopular = action.payload
            state.sliderRelease = false
            state.sliderThrillers = false
        },
        changeSliderRelease(state, action) {
            state.sliderAdventures = false
            state.sliderComedy = false
            state.sliderCriminal = false
            state.sliderDrama = false
            state.sliderFantastic = false
            state.sliderFantasy = false
            state.sliderFilmFor = false
            state.sliderMilitiants = false
            state.sliderNew = false
            state.sliderPopular = false
            state.sliderRelease = action.payload
            state.sliderThrillers = false
        },
        changeSliderThrillers(state, action) {
            state.sliderAdventures = false
            state.sliderComedy = false
            state.sliderCriminal = false
            state.sliderDrama = false
            state.sliderFantastic = false
            state.sliderFantasy = false
            state.sliderFilmFor = false
            state.sliderMilitiants = false
            state.sliderNew = false
            state.sliderPopular = false
            state.sliderRelease = false
            state.sliderThrillers = action.payload
        },
       
    }
})

export const { changeSliderAdventures, changeSliderComedy, changeSliderCriminal, changeSliderDrama, changeSliderFantastic, changeSliderFantasy, changeSliderFilmFor, changeSliderMilitiants, changeSliderNew, changeSliderPopular, changeSliderRelease, changeSliderThrillers } = SlidersMarketSlice.actions
export default SlidersMarketSlice.reducer