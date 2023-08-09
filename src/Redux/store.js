import { configureStore } from '@reduxjs/toolkit'


// * Main *//
import paralaxReducer from './slices/Main/uiSlice'
import sliderReducer from './slices/Main/slider/sliderSlice'
import sliderTwoReducer from './slices/Main/sliderTwo/sliderTwoSlice'
import sliderTopReducer from './slices/Main/sliderTop/sliderTopSlice'
import sliderForReducer from './slices/Main/sliderFor/sliderForSlice'
import sliderSpecialReducer from './slices/Main/sliderSpecial/sliderSpecialSlice'
import SlidersReducer from './slices/Main/SlidersMainSlice'
import contentCardMainReducer from './slices/Main/contentCardMainSlice'

// * Market *//
import sliderAdventuresReducer from './slices/Market/sliderAdventures/sliderAdventuresSlice'
import sliderComedyReducer from './slices/Market/sliderComedy/sliderComedySlice'
import sliderCriminalReducer from './slices/Market/sliderCriminal/sliderCriminalSlice'
import sliderDramaReducer from './slices/Market/sliderDrama/sliderDramaSlice'
import sliderFantasticReducer from './slices/Market/sliderFantastic/sliderFantasticSlice'
import sliderFantasyReducer from './slices/Market/sliderFantasy/sliderFantasySlice'
import sliderFilmForReducer from './slices/Market/sliderFilmFor/sliderFilmForSlice'
import sliderGenresReducer from './slices/Market/sliderGenres/sliderGenresSlice'
import sliderMilitiantsReducer from './slices/Market/sliderMilitiants/sliderMilitiantsSlice'
import sliderNewReducer from './slices/Market/sliderNew/sliderNewSlice'
import sliderPopularReducer from './slices/Market/sliderPopular/sliderPopularSlice'
import sliderThrillersReducer from './slices/Market/sliderThrillers/sliderThrillersSlice'
import SlidersMarketReducer from './slices/Market/SlidersMarketSlice'
import contentCardMarket from './slices/Market/contentCardMarketSlice'



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

        sliderAdventures: sliderAdventuresReducer,
        sliderComedy: sliderComedyReducer,
        sliderCriminal: sliderCriminalReducer,
        sliderDrama: sliderDramaReducer,
        sliderFantastic: sliderFantasticReducer,
        sliderFantasy: sliderFantasyReducer,
        sliderFilmFor: sliderFilmForReducer,
        sliderGenres: sliderGenresReducer,
        sliderMilitiants: sliderMilitiantsReducer,
        sliderNew: sliderNewReducer,
        sliderPopular: sliderPopularReducer,
        sliderThrillers: sliderThrillersReducer,
        slidersMarket: SlidersMarketReducer,
        contentCardMarket: contentCardMarket
    }
})

export default store