import styles from './Market.module.sass'
import { MdBookmarkAdd } from 'react-icons/md'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaPlay } from 'react-icons/fa'

import { useQuery } from 'react-query'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Slider } from '../../UI/Sliders/Slider/Slider'
import { useSelector } from 'react-redux'

import { changeSliderAdventures, changeSliderComedy, changeSliderCriminal, changeSliderDrama, changeSliderFantastic, changeSliderFantasy, changeSliderFilmFor, changeSliderMilitiants, changeSliderNew, changeSliderPopular, changeSliderRelease, changeSliderThrillers } from '../../Redux/slices/Market/SlidersMarketSlice'
import { changeMainAdventuresCount, changeMainAdventuresPosInc, changeMainAdventuresPosDec, changeSubAdventuresCount, changeSubAdventuresPosInc, changeSubAdventuresPosDec, changeNumAdventuresHorizInc, changeNumAdventuresHorizDec, changeHideAdventures, changePageAdventures } from '../../Redux/slices/Market/sliderAdventures/sliderAdventuresSlice'
import { changeMainComedyCount, changeMainComedyPosInc, changeMainComedyPosDec, changeSubComedyCount, changeSubComedyPosInc, changeSubComedyPosDec, changeNumComedyHorizInc, changeNumComedyHorizDec, changeHideComedy, changePageComedy } from '../../Redux/slices/Market/sliderComedy/sliderComedySlice'
import { changeMainCriminalCount, changeMainCriminalPosInc, changeMainCriminalPosDec, changeSubCriminalCount, changeSubCriminalPosInc, changeSubCriminalPosDec, changeNumCriminalHorizInc, changeNumCriminalHorizDec, changeHideCriminal, changePageCriminal } from '../../Redux/slices/Market/sliderCriminal/sliderCriminalSlice'
import { changeMainDramaCount, changeMainDramaPosInc, changeMainDramaPosDec, changeSubDramaCount, changeSubDramaPosInc, changeSubDramaPosDec, changeNumDramaHorizInc, changeNumDramaHorizDec, changeHideDrama, changePageDrama } from '../../Redux/slices/Market/sliderDrama/sliderDramaSlice'
import { changeMainFantasticCount, changeMainFantasticPosInc, changeMainFantasticPosDec, changeSubFantasticCount, changeSubFantasticPosInc, changeSubFantasticPosDec, changeNumFantasticHorizInc, changeNumFantasticHorizDec, changeHideFantastic, changePageFantastic } from '../../Redux/slices/Market/sliderFantastic/sliderFantasticSlice'
import { changeMainFantasyCount, changeMainFantasyPosInc, changeMainFantasyPosDec, changeSubFantasyCount, changeSubFantasyPosInc, changeSubFantasyPosDec, changeNumFantasyHorizInc, changeNumFantasyHorizDec, changeHideFantasy, changePageFantasy } from '../../Redux/slices/Market/sliderFantasy/sliderFantasySlice'
import { changeMainFilmForCount, changeMainFilmForPosInc, changeMainFilmForPosDec, changeSubFilmForCount, changeSubFilmForPosInc, changeSubFilmForPosDec, changeNumFilmForHorizInc, changeNumFilmForHorizDec, changeHideFilmFor, changePageFilmFor } from '../../Redux/slices/Market/sliderFilmFor/sliderFilmForSlice'
import { changeMainMilitiantsCount, changeMainMilitiantsPosInc, changeMainMilitiantsPosDec, changeSubMilitiantsCount, changeSubMilitiantsPosInc, changeSubMilitiantsPosDec, changeNumMilitiantsHorizInc, changeNumMilitiantsHorizDec, changeHideMilitiants, changePageMilitiants } from '../../Redux/slices/Market/sliderMilitiants/sliderMilitiantsSlice'
import { changeMainNewCount, changeMainNewPosInc, changeMainNewPosDec, changeSubNewCount, changeSubNewPosInc, changeSubNewPosDec, changeNumNewHorizInc, changeNumNewHorizDec, changeHideNew, changePageNew } from '../../Redux/slices/Market/sliderNew/sliderNewSlice'
import { changeMainPopularCount, changeMainPopularPosInc, changeMainPopularPosDec, changeSubPopularCount, changeSubPopularPosInc, changeSubPopularPosDec, changeNumPopularHorizInc, changeNumPopularHorizDec, changeHidePopular, changePagePopular } from '../../Redux/slices/Market/sliderPopular/sliderPopularSlice'
import { changeHideThriller, changeMainThrillerCount, changeMainThrillerPosDec, changeMainThrillerPosInc, changeNumThrillerHorizDec, changeNumThrillerHorizInc, changePageThriller, changeSubThrillerCount, changeSubThrillerPosDec, changeSubThrillerPosInc } from '../../Redux/slices/Market/sliderThrillers/sliderThrillersSlice'


const Market = () => {
    const [isHide, setHide] = useState(false)
    //* Axios *//
    axios.defaults.headers['X-API-KEY'] = 'X292QQY-9BEMPP6-K2FKC19-7W4N0W2'
    

    
    //* Framer Motion *//

    //* Redux *//
    const sliderAdventures = useSelector(state => state.sliderAdventures)
    const sliderComedy = useSelector(state => state.sliderComedy)
    const sliderCriminal = useSelector(state => state.sliderCriminal)
    const sliderDrama = useSelector(state => state.sliderDrama)
    const sliderFantastic = useSelector(state => state.sliderFantastic)
    const sliderFantasy = useSelector(state => state.sliderFantasy)
    const sliderFilmFor = useSelector(state => state.sliderFilmFor)
    const sliderMilitiants = useSelector(state => state.sliderMilitiants)
    const sliderNew = useSelector(state => state.sliderNew)
    const sliderPopular = useSelector(state => state.sliderPopular)
    const sliderThrillers = useSelector(state => state.sliderThrillers)
    const SlidersMarketState = useSelector(state => state.slidersMarket)
    const contentCardMarket = useSelector(state => state.contentCardMarket)
    console.log(SlidersMarketState)
    //* ReactQuery *//

    const dataRelease = useQuery('release', fetchRelease, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataPopular = useQuery('popular', fetchPopularity, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataNew = useQuery('new', fetchNew, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataDrama = useQuery('drama', fetchDrama, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataThrillers = useQuery('thrillers', fetchThrillers, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataMilitants = useQuery('militants', fetchMilitants, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataFantasy = useQuery('fantasy', fetchFantasy, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataComedy = useQuery('сomedy', fetchComedy, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataCriminal = useQuery('сriminal', fetchCriminal, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataFantastic = useQuery('fantastic', fetchFantastic, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataFilmFor = useQuery('filmFor', fetchFilmFor, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataAdventures = useQuery('adventures', fetchAdventures, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataContentCard = useQuery(['ContentCard', contentCardMarket.id], fetchDataById, { refetchOnWindowFocus: false, enabled: false })



    async function fetchAdventures() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?limit=10&rating.kp=6-8&genres.name=Приключения')
        return data
    }

    async function fetchFilmFor() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?limit=10&rating.kp=6-8&votes.kp=150000-250000')
        return data
    }

    async function fetchFantastic() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?limit=10&rating.kp=6-8&genres.name=Фантастика')
        return data
    }

    async function fetchCriminal() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?limit=10&rating.kp=6-8&genres.name=Криминал')
        return data
    }

    async function fetchComedy() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?limit=10&rating.kp=6-8&genres.name=Комедии')
        return data
    }

    async function fetchFantasy() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?limit=10&rating.kp=6-8&genres.name=Фэнтези')
        return data
    }

    async function fetchMilitants() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?limit=10&rating.kp=6-8&genres.name=Боевик')
        return data
    }

    async function fetchThrillers() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?limit=10&rating.kp=6-8&genres.name=Триллер')
        return data
    }

    async function fetchDrama() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?limit=10&rating.kp=6-8&genres.name=Драмма')
        return data
    }

    async function fetchNew() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?limit=10&rating.kp=6-8&year=2023')
        return data
    }

    async function fetchPopularity() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?limit=10&rating.kp=6-8')
        return data
    }

    async function fetchRelease() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?year=2023&limit=10&votes.kp=30000-45000')
        async function sortData(data) {
            const iterable = [];
            for (const el of data) {
                const result = await axios.get(`https://api.kinopoisk.dev/v1.3/movie/${el.id}`);
                if (result?.data?.videos?.trailers != undefined && result?.data?.videos?.trailers.length != 0) {
                    iterable.push(result.data)
                }
            }
            return iterable;
        }
        
        return sortData(data.docs)
    }

    async function fetchDataById(id) {
        const result = await axios.get(`https://api.kinopoisk.dev/v1.3/movie/${contentCardState.id}`)
        return result.data
    }


    useEffect(() => {
        const timer = setTimeout(() => {
            setHide(true)
        }, 10000)

        return () => clearTimeout(timer)
    }, [isHide])

    return (
        <main>
            <section className={styles.Release_section}>
                {isHide && dataRelease.data ? <div className={styles.wrapper}>
                    <div className={styles.Promo_logo}>
                        <img className={styles.logo} src="https://avatars.mds.yandex.net/get-ott/2439731/2a00000184c127da17bbd8a5374ff36dc678/960x540" alt="" />
                    </div>
                    <div className={styles.Promo_Block}>
                        <span className={styles.Promo_title}>30 дней бесплатно</span>
                        <span className={styles.Promo_price}>399 ₽ в месяц</span>
                    </div>
                    <div className={styles.player_controls}>
                        <div className={styles.content_buttons}>
                            <button className={styles._btn}>
                                <FaPlay style={{ marginRight: '5px' }} />
                                <span>
                                    Смотреть фильм
                                </span>
                            </button>
                            <button className={styles._btn}>Трейлер</button>
                            <button className={styles._btn}><MdBookmarkAdd /></button>
                            <button className={styles._btn}><FiMoreHorizontal /></button>
                        </div>
                    </div>
                    <div className={styles.Promo_discriptions}>
                        <span>По подписке more.tv</span>
                    </div>
                </div> : <div className={styles.Promo_loading}><span className='spinner'></span></div>}
                
                {isHide && dataRelease.data ?
                    <iframe width='1920' height='864' className={styles.trailer_player} src={`${dataRelease.data[0].videos.trailers[0]}?controls=0&autoplay=true&mute=1&loop=1&enablejsapi=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                :
                    dataRelease.data ? <img className={styles.Promo_background} src={`${dataRelease.data[0].backdrop.url}`} alt="" /> : null}
            </section>
            <div className={styles.Top_container}>
                <Slider props={dataPopular.data && dataPopular.data.docs} data={dataContentCard.data} refetch={dataPopular.refetch} callback={changeSliderPopular} slogan={'Популярные'} state={sliderPopular} globalState={SlidersMarketState.sliderPopular} changeMainCount={changeMainPopularCount} changeMainPosInc={changeMainPopularPosInc} changeMainPosDec={changeMainPopularPosDec} changeSubCount={changeSubPopularCount} changeSubPosInc={changeSubPopularPosInc} changeSubPosDec={changeSubPopularPosDec} changeNumHorizInc={changeNumPopularHorizInc} changeNumHorizDec={changeNumPopularHorizDec} changeHide={changeHidePopular} changePage={changePagePopular} />
                <Slider props={dataNew.data && dataNew.data.docs} data={dataContentCard.data} refetch={dataNew.refetch} callback={changeSliderNew} slogan={'Новинки'} state={sliderNew} globalState={SlidersMarketState.sliderNew} changeMainCount={changeMainNewCount} changeMainPosInc={changeMainNewPosInc} changeMainPosDec={changeMainNewPosDec} changeSubCount={changeSubNewCount} changeSubPosInc={changeSubNewPosInc} changeSubPosDec={changeSubNewPosDec} changeNumHorizInc={changeNumNewHorizInc} changeNumHorizDec={changeNumNewHorizDec} changeHide={changeHideNew} changePage={changePageNew} />
                <Slider props={dataThrillers.data && dataThrillers.data.docs} data={dataContentCard.data} refetch={dataThrillers.refetch} callback={changeSliderThrillers} slogan={'Триллеры'} state={sliderThrillers} globalState={SlidersMarketState.sliderThrillers} changeMainCount={changeMainThrillerCount} changeMainPosInc={changeMainThrillerPosInc} changeMainPosDec={changeMainThrillerPosDec} changeSubCount={changeSubThrillerCount} changeSubPosInc={changeSubThrillerPosInc} changeSubPosDec={changeSubThrillerPosDec} changeNumHorizInc={changeNumThrillerHorizInc} changeNumHorizDec={changeNumThrillerHorizDec} changeHide={changeHideThriller} changePage={changePageThriller} />
                <Slider props={dataDrama.data && dataDrama.data.docs} data={dataContentCard.data} refetch={dataDrama.refetch} callback={changeSliderDrama} slogan={'Драмма'} state={sliderDrama} globalState={SlidersMarketState.sliderDrama} changeMainCount={changeMainDramaCount} changeMainPosInc={changeMainDramaPosInc} changeMainPosDec={changeMainDramaPosDec} changeSubCount={changeSubDramaCount} changeSubPosInc={changeSubDramaPosInc} changeSubPosDec={changeSubDramaPosDec} changeNumHorizInc={changeNumDramaHorizInc} changeNumHorizDec={changeNumDramaHorizDec} changeHide={changeHideDrama} changePage={changePageDrama} />
                <Slider props={dataMilitants.data && dataMilitants.data.docs} data={dataContentCard.data} refetch={dataMilitants.refetch} callback={changeSliderMilitiants} slogan={'Боевики'} state={sliderMilitiants} globalState={SlidersMarketState.sliderMilitiants} changeMainCount={changeMainMilitiantsCount} changeMainPosInc={changeMainMilitiantsPosInc} changeMainPosDec={changeMainMilitiantsPosDec} changeSubCount={changeSubMilitiantsCount} changeSubPosInc={changeSubMilitiantsPosInc} changeSubPosDec={changeSubMilitiantsPosDec} changeNumHorizInc={changeNumMilitiantsHorizInc} changeNumHorizDec={changeNumMilitiantsHorizDec} changeHide={changeHideMilitiants} changePage={changePageMilitiants} />
                <Slider props={dataFilmFor.data && dataFilmFor.data.docs} data={dataContentCard.data} refetch={dataFilmFor.refetch} callback={changeSliderFilmFor} slogan={'Фильм на вечер'} state={sliderFilmFor} globalState={SlidersMarketState.sliderFilmFor} changeMainCount={changeMainFilmForCount} changeMainPosInc={changeMainFilmForPosInc} changeMainPosDec={changeMainFilmForPosDec} changeSubCount={changeSubFilmForCount} changeSubPosInc={changeSubFilmForPosInc} changeSubPosDec={changeSubFilmForPosDec} changeNumHorizInc={changeNumFilmForHorizInc} changeNumHorizDec={changeNumFilmForHorizDec} changeHide={changeHideFilmFor} changePage={changePageFilmFor} />
                <Slider props={dataFantasy.data && dataFantasy.data.docs} data={dataContentCard.data} refetch={dataFantasy.refetch} callback={changeSliderFantasy} slogan={'Фэнтези'} state={sliderFantasy} globalState={SlidersMarketState.sliderFantasy} changeMainCount={changeMainFantasyCount} changeMainPosInc={changeMainFantasyPosInc} changeMainPosDec={changeMainFantasyPosDec} changeSubCount={changeSubFantasyCount} changeSubPosInc={changeSubFantasyPosInc} changeSubPosDec={changeSubFantasyPosDec} changeNumHorizInc={changeNumFantasyHorizInc} changeNumHorizDec={changeNumFantasyHorizDec} changeHide={changeHideFantasy} changePage={changePageFantasy} />
                <Slider props={dataCriminal.data && dataCriminal.data.docs} data={dataContentCard.data} refetch={dataCriminal.refetch} callback={changeSliderCriminal} slogan={'Криминальные'} state={sliderCriminal} globalState={SlidersMarketState.sliderCriminal} changeMainCount={changeMainCriminalCount} changeMainPosInc={changeMainCriminalPosInc} changeMainPosDec={changeMainCriminalPosDec} changeSubCount={changeSubCriminalCount} changeSubPosInc={changeSubCriminalPosInc} changeSubPosDec={changeSubCriminalPosDec} changeNumHorizInc={changeNumCriminalHorizInc} changeNumHorizDec={changeNumCriminalHorizDec} changeHide={changeHideCriminal} changePage={changePageCriminal} />
                <Slider props={dataFantastic.data && dataFantastic.data.docs} data={dataContentCard.data} refetch={dataFantastic.refetch} callback={changeSliderFantastic} slogan={'Фантастика'} state={sliderFantastic} globalState={SlidersMarketState.sliderFantastic} changeMainCount={changeMainFantasticCount} changeMainPosInc={changeMainFantasticPosInc} changeMainPosDec={changeMainFantasticPosDec} changeSubCount={changeSubFantasticCount} changeSubPosInc={changeSubFantasticPosInc} changeSubPosDec={changeSubFantasticPosDec} changeNumHorizInc={changeNumFantasticHorizInc} changeNumHorizDec={changeNumFantasticHorizDec} changeHide={changeHideFantastic} changePage={changePageFantastic} />
                <Slider props={dataAdventures.data && dataAdventures.data.docs} data={dataContentCard.data} refetch={dataAdventures.refetch} callback={changeSliderAdventures} slogan={'Приключения'} state={sliderAdventures} globalState={SlidersMarketState.sliderAdventures} changeMainCount={ changeMainAdventuresCount} changeMainPosInc={changeMainAdventuresPosInc} changeMainPosDec={changeMainAdventuresPosDec} changeSubCount={changeSubAdventuresCount} changeSubPosInc={changeSubAdventuresPosInc} changeSubPosDec={changeSubAdventuresPosDec} changeNumHorizInc={changeNumAdventuresHorizInc} changeNumHorizDec={changeNumAdventuresHorizDec} changeHide={changeHideAdventures} changePage={changePageAdventures} />
                <Slider props={dataComedy.data && dataComedy.data.docs} data={dataContentCard.data} refetch={dataComedy.refetch} callback={changeSliderComedy} slogan={'Комедии'} state={sliderComedy} globalState={SlidersMarketState.sliderComedy} changeMainCount={changeMainComedyCount} changeMainPosInc={changeMainComedyPosInc} changeMainPosDec={changeMainComedyPosDec} changeSubCount={changeSubComedyCount} changeSubPosInc={changeSubComedyPosInc} changeSubPosDec={changeSubComedyPosDec} changeNumHorizInc={changeNumComedyHorizInc} changeNumHorizDec={changeNumComedyHorizDec} changeHide={changeHideComedy} changePage={changePageComedy} />
            </div>
        </main>
    )
}

export default Market