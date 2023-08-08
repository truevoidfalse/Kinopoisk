import { useSelector } from 'react-redux'
import axios from 'axios'
 import { useState } from 'react'
import styles from './Main.module.sass'

import { Slider } from '../../UI/Sliders/Slider/Slider'
import { SliderTop } from '../../UI/Sliders/SliderTop/SliderTop'
import { SliderSpecial } from '../../UI/Sliders/SliderSpecial/SliderSpecial'

import { changeMainCount, changeMainPosInc, changeMainPosDec, changeSubCount, changeSubPosInc, changeSubPosDec, changeNumHorizInc, changeNumHorizDec, changeHide, changePage } from '../../Redux/slices/Main/slider/sliderSlice'
import { changeTwoMainCount, changeTwoMainPosInc, changeTwoMainPosDec, changeTwoSubCount, changeTwoSubPosInc, changeTwoSubPosDec, changeTwoNumHorizInc, changeTwoNumHorizDec, changeTwoHide, changeTwoPage } from '../../Redux/slices/Main/sliderTwo/sliderTwoSlice'
import { changeMainTopCount, changeMainTopPosInc, changeMainTopPosDec, changeSubTopCount, changeSubTopPosInc, changeSubTopPosDec, changeNumTopHorizInc, changeNumTopHorizDec, changeHideTop, changePageTop } from '../../Redux/slices/Main/sliderTop/sliderTopSlice'
import { changeMainForCount, changeMainForPosInc, changeMainForPosDec, changeSubForCount, changeSubForPosInc, changeSubForPosDec, changeNumForHorizInc, changeNumForHorizDec, changeHideFor, changePageFor } from '../../Redux/slices/Main/sliderFor/sliderForSlice'
import { changeMainSpecialCount, changeMainSpecialPosInc, changeMainSpecialPosDec, changeSubSpecialCount, changeSubSpecialPosInc, changeSubSpecialPosDec, changeNumSpecialHorizInc, changeNumSpecialHorizDec, changeHideSpecial, changePageSpecial } from '../../Redux/slices/Main/sliderSpecial/sliderSpecialSlice'

import { changeSlider, changeSliderFor, changeSliderTop, changeSliderTwo, changeSliderSpecial } from '../../Redux/slices/Main/SlidersMainSlice'

import {
    motion,
    useTransform,
    useScroll,
} from 'framer-motion';


import { jsonData } from '../../JSON/data'
import { useQuery } from 'react-query'
import { useEffect } from 'react'

const Main = () => {
   
    //* Framer Motion *//
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [200, 0], [-300, 500])
    const y2 = useTransform(scrollY, [0, 150], [200, 600]);
    const y3 = useTransform(scrollY, [1600, 2100], [-400, 0])
    const opacity = useTransform(scrollY, [1, 0], [0, 1])
    console.log(scrollY.current)
    //* Redux *//
    const state = useSelector(state => state.paralax.value)
    const SlidersState = useSelector(state => state.sliders)
    const sliderOne = useSelector(state => state.slider)
    const sliderTwo = useSelector(state => state.sliderTwo)
    const sliderTop = useSelector(state => state.sliderTop)
    const sliderFor = useSelector(state => state.sliderFor)
    const sliderSpecial = useSelector(state => state.sliderSpecial)
    const contentCardState = useSelector(state => state.contentCardMain)

    //* ReactQuery *//
    const dataBackground = useQuery('background', fetchBackground, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataTop = useQuery('top10', fetchTop, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataNow = useQuery('now', fetchNow, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataContentCard = useQuery(['ContentCard', contentCardState.id], fetchDataById, { refetchOnWindowFocus: false, enabled: false })
    const dataSerials = useQuery('serials', fetchSerials, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataForYou = useQuery('forYou', fetchForYou, { keepPreviousData: true, refetchOnWindowFocus: false })
    const dataSpecial = useQuery('special', fetchSpecial, { keepPreviousData: true, refetchOnWindowFocus: false })

    console.log(dataBackground)
    //* Axios *//
    axios.defaults.headers['X-API-KEY'] = 'X292QQY-9BEMPP6-K2FKC19-7W4N0W2'


    async function fetchBackground() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?top10=!null&limit=48')
        async function sortData(data) {
            const iterable = [];
            for (const el of data) {
                const result = await axios.get(`https://api.kinopoisk.dev/v1.3/movie/${el.id}`);
                if (result?.data?.backdrop?.url != undefined && result?.data?.backdrop?.url.length != 0) {
                    iterable.push(result.data)
                }
            }
            return iterable;
        }

        return sortData(data.docs)
    }

    async function fetchTop() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?top10=!null')
        return data
    }
    async function fetchNow() {
        const currentDate = new Date()
        const month = currentDate.getMonth()
        currentDate.setMonth(month - 12)
        currentDate.toISOString
        const { data } = await axios.get(`https://api.kinopoisk.dev/v1.3/movie?premiere.world=!null&limit=15`)
        return data
    }
    async function fetchDataById(id) {
        const result = await axios.get(`https://api.kinopoisk.dev/v1.3/movie/${contentCardState.id}`)
        return result.data
    }
    async function fetchSerials() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?type=tv-series&year=2023&rating.imdb=6-8')
        return data
    }
    async function fetchForYou() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?type=movie&year=2020-2023&votes.kp=500000-1000000')
        return data
    }
    async function fetchSpecial() {
        const { data } = await axios.get('https://api.kinopoisk.dev/v1.3/movie?year=2020-2023&type=movie&top10=!null')
        return data
    }

    useEffect(() => {
        if (contentCardState.id !== null) {
            dataContentCard.refetch()
        }
    }, [contentCardState.id])

    //* Debug *//
    
    return (
        <>
            <main>
                <section className={styles.Main}>
                    <div style={{ opacity: state >= 400 ? 0 : 1 }} className={styles.Main__container}>
                        <div className={styles.bg}>
                            {dataBackground.data ? dataBackground.data.slice(0, 6).map(el => (
                                <div className={styles.bg_item}>
                                    <img className={styles.img} src={el.backdrop.url} alt="" />
                                </div>
                            )) : null}
                        </div>
                        <div className={styles.bg}>
                            {dataBackground.data ? dataBackground.data.slice(6, 12).map(el => (
                                <div className={styles.bg_item}>
                                    <img className={styles.img} src={el.backdrop.url} alt="" />
                                </div>
                            )) : null}
                        </div>
                        <div className={styles.bg}>
                            {dataBackground.data ? dataBackground.data.slice(12, 18).map(el => (
                                <div className={styles.bg_item}>
                                    <img className={styles.img} src={el.backdrop.url} alt="" />
                                </div>
                            )) : null}
                        </div>
                        <div className={styles.bg}>
                            {dataBackground.data ? dataBackground.data.slice(18, 24).map(el => (
                                <div className={styles.bg_item}>
                                    <img className={styles.img} src={el.backdrop.url} alt="" />
                                </div>
                            )) : null}
                        </div>
                        <div className={styles.bg}>
                            {dataBackground.data ? dataBackground.data.slice(24, 30).map(el => (
                                <div className={styles.bg_item}>
                                    <img className={styles.img} src={el.backdrop.url} alt="" />
                                </div>
                            )) : null}
                        </div>
                        <div className={styles.bg}>
                            {dataBackground.data ? dataBackground.data.slice(30, 36).map(el => (
                                <div className={styles.bg_item}>
                                    <img className={styles.img} src={el.backdrop.url} alt="" />
                                </div>
                            )) : null}
                        </div>
                        <div className={styles.bg}>
                            {dataBackground.data ? dataBackground.data.slice(36, 42).map(el => (
                                <div className={styles.bg_item}>
                                    <img className={styles.img} src={el.backdrop.url} alt="" />
                                </div>
                            )) : null}
                        </div>
                        <div className={styles.bg}>
                            {dataBackground.data ? dataBackground.data.slice(42, 48).map(el => (
                                <div className={styles.bg_item}>
                                    <img className={styles.img} src={el.backdrop.url} alt="" />
                                </div>
                            )) : null}
                        </div>
                    </div>
                    <motion.div
                        transition={{ type: 'spring' }}
                        style={{ y: y2, opacity: opacity }}
                        className={styles.Main__content}>
                        <span className={styles.autors}>Яндекс Плюс & Букмейт</span>
                        <h1 className={styles.title}>Фильмы и сериалы, музыка,<br />а ещё тысячи книг по подписке<br /> Плюс с Букмейт</h1>
                        <h2 className={styles.suptitle}>Бесплатно до конца лета</h2>
                        <p className={styles.slogan}>Отменяйте в любой момент, напишем <br /> за 3 дня до первого списания</p>
                    </motion.div>
                    <motion.div
                        transition={{ type: 'spring' }}
                        style={{ y: y2, opacity: opacity }}
                        className={styles.Main__sup}>
                        <h2 className={styles.text_free}>Бесплатно до конца лета</h2>
                        <div className={styles.range__meter}>
                            <span className={styles.range_line}></span>
                            <span className={styles.range_line_none}></span>
                        </div>
                        <p className={styles.descr}>Напишем на почту за 3 дня</p>
                        <button className={styles.btn}>Попробовать бесплатно до конца лета</button>
                        <span className={styles.price}>399 ₽ в месяц</span>
                    </motion.div>
                    <motion.div
                    transition={{type: 'spring'}}
                        style={{y: y1}}
                        className={styles.Top__container}>
                        <Slider props={dataNow.data && dataNow.data.docs} data={dataContentCard.data} refetch={dataContentCard.refetch} callback={changeSlider} slogan={'Смотрят сейчас'} state={sliderOne} globalState={SlidersState.slider} changeMainCount={changeMainCount} changeMainPosInc={changeMainPosInc} changeMainPosDec={changeMainPosDec} changeSubCount={changeSubCount} changeSubPosInc={changeSubPosInc} changeSubPosDec={changeSubPosDec} changeNumHorizInc={changeNumHorizInc} changeNumHorizDec={changeNumHorizDec} changeHide={changeHide} changePage={changePage} />
                        <SliderTop props={dataTop.data && dataTop.data.docs} data={dataContentCard.data} refetch={dataContentCard.refetch} callback={changeSliderTop} slogan={'Топ-10 за месяц'} state={sliderTop} globalState={SlidersState.sliderTop} changeMainTopCount={changeMainTopCount} changeMainTopPosInc={changeMainTopPosInc} changeMainTopPosDec={changeMainTopPosDec} changeSubTopCount={changeSubTopCount} changeSubTopPosInc={changeSubTopPosInc} changeSubTopPosDec={changeSubTopPosDec} changeNumTopHorizInc={changeNumTopHorizInc} changeNumTopHorizDec={changeNumTopHorizDec} changeHideTop={changeHideTop} changePageTop={changePageTop} />
                        <Slider props={dataSerials.data && dataSerials.data.docs} data={dataContentCard.data} callback={changeSliderTwo} refetch={dataContentCard.refetch} slogan={'Рекомендуемые сериалы'} state={sliderTwo} globalState={SlidersState.sliderTwo} changeMainCount={changeTwoMainCount} changeMainPosInc={changeTwoMainPosInc} changeMainPosDec={changeTwoMainPosDec} changeSubCount={changeTwoSubCount} changeSubPosInc={changeTwoSubPosInc} changeSubPosDec={changeTwoSubPosDec} changeNumHorizInc={changeTwoNumHorizInc} changeNumHorizDec={changeTwoNumHorizDec} changeHide={changeTwoHide} changePage={changeTwoPage} />
                        <Slider props={dataForYou.data && dataForYou.data.docs} data={dataContentCard.data} callback={changeSliderFor} refetch={dataContentCard.refetch} slogan={'Фильмы для вас'} state={sliderFor} globalState={SlidersState.sliderFor} changeMainCount={changeMainForCount} changeMainPosInc={changeMainForPosInc} changeMainPosDec={changeMainForPosDec} changeSubCount={changeSubForCount} changeSubPosInc={changeSubForPosInc} changeSubPosDec={changeSubForPosDec} changeNumHorizInc={changeNumForHorizInc} changeNumHorizDec={changeNumForHorizDec} changeHide={changeHideFor} changePage={changePageFor} />
                        <SliderSpecial props={dataSpecial.data && dataSpecial.data.docs} data={dataContentCard.data} callback={changeSliderSpecial} refetch={dataContentCard.refetch} slogan={'Снято специально для Кинопоиска'} globalState={SlidersState.sliderSpecial} state={sliderSpecial} changeMainSpecialCount={changeMainSpecialCount} changeMainSpecialPosInc={changeMainSpecialPosInc} changeMainSpecialPosDec={changeMainSpecialPosDec} changeSubSpecialCount={changeSubSpecialCount} changeSubSpecialPosInc={changeSubSpecialPosInc} changeSubSpecialPosDec={changeSubSpecialPosDec} changeNumSpecialHorizInc={changeNumSpecialHorizInc} changeNumSpecialHorizDec={changeNumSpecialHorizDec} changeHideSpecial={changeHideSpecial} changePageSpecial={changePageSpecial} />
                    </motion.div>
                    <motion.div
                        style={{y: y3}}
                        transition={{type: 'spring'}}
                        className={styles.end_content}>
                        <h1 className={styles.end_title}>Самый перспективный онлайн-кинотеатр это мы.</h1>
                        <p className={styles.end_text}>С развитием Интернета, каждому человеку стал доступен просмотр фильмов онлайн.</p>
                        <p className={styles.end_text}>Мы первые подключились к гонке в 2003 году и на сегодняшний день являемся самым большой площадкой для просмотров фильмов и сериалов.</p>
                    </motion.div>
                    <div className={styles.end_container}>
                        <h2 className={styles.end_subtitle}>Присоединяйся и ты!</h2>
                        <img className={styles.end_picture} src="https://newcdn.igromania.ru/mnt/news/c/6/5/a/d/b/112056/7fb5fb284cbbe5c1_original.webp" alt="" />
                    </div>
                    <section className={styles.end}>

                    </section>
                </section>
            </main>
        </>
    )
}


export default Main