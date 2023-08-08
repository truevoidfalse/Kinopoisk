import { configureStore } from '@reduxjs/toolkit'
import paralaxReducer from './slices/Main/uiSlice'
import sliderReducer from './slices/Main/slider/sliderSlice'
import sliderTwoReducer from './slices/Main/sliderTwo/sliderTwoSlice'
import sliderTopReducer from './slices/Main/sliderTop/sliderTopSlice'
import sliderForReducer from './slices/Main/sliderFor/sliderForSlice'
import sliderSpecialReducer from './slices/Main/sliderSpecial/sliderSpecialSlice'
import SlidersReducer from './slices/Main/SlidersMainSlice'
import contentCardMainReducer from './slices/Main/contentCardMainSlice'




const store = configureStore({
    reducer: {
        paralax: paralaxReducer,
        contentCardMain: contentCardMainReducer,
        sliders: SlidersReducer,
        slider: sliderReducer,
        sliderTwo: sliderTwoReducer,
        sliderTop: sliderTopReducer,
        sliderFor: sliderForReducer,
        sliderSpecial: sliderSpecialReducer,
    }
})

export default store