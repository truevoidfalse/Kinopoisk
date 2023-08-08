import styles from './Market.module.sass'
import { MdBookmarkAdd } from 'react-icons/md'
import { FiMoreHorizontal } from 'react-icons/fi'
import { FaPlay } from 'react-icons/fa'

import { useQuery } from 'react-query'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Slider } from '../../UI/Sliders/Slider/Slider'


const Market = () => {
    const [isHide, setHide] = useState(false)
    //* Axios *//
    axios.defaults.headers['X-API-KEY'] = 'X292QQY-9BEMPP6-K2FKC19-7W4N0W2'
    

    
    //* Framer Motion *//

    //* Redux *//

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
                <Slider />
                <Slider />
                <Slider />
                <Slider />
                <Slider />
                <Slider />
                <Slider />
                <Slider />
                <Slider />
                <Slider />
                <Slider />
                <Slider />
            </div>
        </main>
    )
}

export default Market