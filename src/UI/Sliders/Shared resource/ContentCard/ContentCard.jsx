import styles from './ContentCard.module.sass'
import { AiFillSound } from 'react-icons/ai'
import { PiSubtitlesFill } from 'react-icons/pi'
import { FaPlay } from 'react-icons/fa'
import { MdBookmarkAdd } from 'react-icons/md'
import { FiMoreHorizontal } from 'react-icons/fi'

import { useDispatch } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

export const ContentCard = ({data, state, changePage, globalState}) => {
    axios.defaults.headers['X-API-KEY'] = 'X292QQY-9BEMPP6-K2FKC19-7W4N0W2'

    const dispatch = useDispatch()
    const [isHide, setHide] = useState(true)
    const [isActive, setActive] = useState([false, true])
    const [isBlur, setBlur] = useState(false)
    const timerIdRef = useRef(null)
    
    useEffect(() => {
        if (state.page === 1 && data?.videos?.trailers.length) {
            timerIdRef.current = setTimeout(() => {
                setHide(false)
            }, 5000)
        } else {
            clearTimeout(timerIdRef.current)
        }
        return () => {
            clearTimeout(timerIdRef.current)
        }
    }, [state.page])
    

    const about = () => {
        setActive([false, true])
        dispatch(changePage(1))
        setBlur(false)
        if (data?.videos?.trailers.length) {
            setHide(true)
        } else {
            setHide(false)
        }
    }

    const details = () => {
        dispatch(changePage(2))
        setActive([true, false])
        setBlur(true)
        if (data?.videos?.trailers.length) {
            setHide(true)
        } else {
            setHide(false)
        }
    }
    
    return (
        <>
            {globalState
            ?
                <div className={styles.content_container}>
                    <div className={styles.content_background}>
                        <div className={styles.content_pages}>
                            <button onClick={about} className={isActive[0] ? styles._pages_btn : styles._pages_btn_active}>О фильме</button>
                            <button onClick={details} className={isActive[1] ? styles._pages_btn : styles._pages_btn_active}>Детали</button>
                        </div>
                        <div style={state.page === 1 ? { boxShadow: '30px 0px 30px 0px rgba(0, 0, 0, 1)' } : { height: '701.58px' }} className={styles._left}>
                            <div className={styles._left_content}>
                                <div className={styles.imageWrapper}>
                                    <img className={state.page === 1 ? styles.textImg : styles.textImglittle} src={data ? data.logo?.url : null} alt="" />
                                </div>

                                {state.page === 1 ? <div className={state.page === 1 ? styles.content_header_meta : styles.content_header_meta_hide}>
                                    <span className={styles._header_meta_item}>{data ? data.rating.kp : null}</span>
                                    <span className={styles._header_meta_item}>{data?.votes.kp ? Math.floor(data.votes.kp / 1000) + 'K' : null} </span>
                                    {data?.top10
                                        ?
                                        <>
                                            <span className={styles._header_meta_logo}></span>
                                            <span className={styles._header_meta_item}>Топ-10</span>
                                            <span className={styles._header_meta_item}>{data.top10} место</span>
                                        </> : null}
                                </div> : <div className={styles.content_header_meta}>
                                    <span className={styles._header_meta_rate}>{data?.rating?.kp}</span>
                                </div>}
                                {state.page === 1 ? <div className={styles.content_footer_meta}>
                                    <span className={styles._footer_meta_item}>{data?.year}, {data?.genres !== null || undefined ? data?.genres.map((el, i) => {
                                        if (i == data.genres.length - 1) {
                                            return `${el.name}`
                                        } else {
                                            return `${el.name}, `
                                        }
                                    }) : null}</span>
                                    <span className={styles._footer_meta_item}>{data?.countries !== null || undefined ? data?.countries.map((el, i) => {
                                        if (i == data.countries.length - 1) {
                                            return `${el.name}`
                                        } else {
                                            return `${el.name}, `
                                        }
                                    }) : null}</span>
                                    <span className={styles._footer_meta_item}>{`${Math.floor(data?.movieLength / 60)} ч`} {`${data?.movieLength % 60} мин`}</span>
                                    <span className={styles._footer_meta_item}>{data?.ageRating !== null ? `${data?.ageRating}+` : null}</span>
                                    <span className={styles._footer_meta_rating}>5.1</span>
                                    <span className={styles._footer_meta_voices}><AiFillSound style={{ width: '25px' }} /></span>
                                    <span className={styles._footer_meta_item}>Rus</span>
                                    <span className={styles._footer_meta_subtitles}><PiSubtitlesFill style={{ width: '25px' }} /></span>
                                    <span className={styles._footer_meta_item}>Rus, Kaz, Aze</span>
                                </div> : <div className={styles.content_footer_meta}>
                                    <span className={styles._footer_meta_rateDetails}>{data?.votes ? data.votes.imdb : null} оценок</span>
                                </div>}
                                {state.page === 1 ? <div className={styles.content_text}>
                                    {data?.shortDescription}
                                </div> : <div className={styles.content_text_detail}>
                                    {data?.description}
                                </div>}
                            </div>
                            {state.page === 1 ? <div className={styles.content_buttons}>
                                <button className={styles._btn}>
                                    <FaPlay style={{ marginRight: '5px' }} />
                                    <span>
                                        Смотреть фильм
                                    </span>
                                </button>
                                <button className={styles._btn}>Трейлер</button>
                                <button className={styles._btn}><MdBookmarkAdd /></button>
                                <button className={styles._btn}><FiMoreHorizontal /></button>
                            </div> : null}
                        </div>
                        <div className={styles._right}>
                            {data?.videos?.trailers.length ? isHide ? <img style={isBlur ? { filter: 'blur(3rem)', height: '701.58px' } : null} className={state.page === 1 ? styles.img : styles.imgAnim} src={data?.backdrop.url} alt="" />
                                :
                                <iframe className={styles.iframe} style={{ borderRadius: '20px' }} width='100%' height='581.58px' src={`${data?.videos?.trailers[0]?.url}?autoplay=1&mute=1&controls=0`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> : <img style={isBlur ? { filter: 'blur(3rem)', height: '701.58px' } : null} className={state.page === 1 ? styles.img : styles.imgAnim} src={data?.backdrop.url} alt="" />}
                            {state.page === 2
                                ?
                                <div className={styles.right_details}>
                                    <div className={styles._details_left}>
                                        <div className={styles._left_item}>
                                            <span className={styles._item_slogan}>В главных ролях</span>
                                            {data?.persons ? data.persons.filter(el => el.enProfession === 'actor').map(el => <a className={styles._item_link}>{el.name}</a>)
                                            : null}
                                        </div>
                                        <div className={styles._left_item}>
                                            <span className={styles._item_slogan}>Режиссёры</span>
                                            {data?.persons ? data.persons.filter(el => el.enProfession === 'director').map(el => <a className={styles._item_link}>{el.name}</a>) : null }
                                        </div>
                                    </div>
                                    <div className={styles._details_right}>
                                        <div className={styles._right_item}>
                                            <span className={styles._item_slogan}>Аудиодорожки</span>
                                            <a className={styles._item_link}>Русский (Мосфильм-мастер)</a>
                                            <a className={styles._item_link}>Русский (Мосфильм-мастер)</a>
                                            <span className={styles._item_slogan}>Еще 8</span>
                                        </div>
                                        <div className={styles._right_item}>
                                            <span className={styles._item_slogan}>Субтитры</span>
                                            <a className={styles._item_link}>Русские (форсированные)</a>
                                            <a className={styles._item_link}>Русские (форсированные)</a>
                                            <a className={styles._item_link}>Русские (форсированные)</a>
                                            <span className={styles._item_slogan}>Еще 6</span>
                                        </div>
                                        <div className={styles._right_item}>
                                            <span className={styles._item_slogan}>Качество</span>
                                            <div>
                                                <span>logo</span>
                                                <span>logo</span>
                                                <span>logo</span>
                                            </div>
                                            <span className={styles._item_link}>4К доступно только на больших экранах</span>
                                            <span className={styles._item_link}>Установить на ТВ</span>
                                        </div>
                                        <div className={styles._right_item}>
                                            <span className={styles._item_slogan}>Оригинальное название</span>
                                            <span className={styles._item_link}>The covenant</span>
                                        </div>
                                    </div>
                                </div>
                                :
                                null}
                        </div>
                    </div>
                    {state.page === 1 ? <div className={styles.content_footer}>
                        <div style={{ marginLeft: '100px', marginTop: '40px', marginBottom: '40px' }}>
                            <h3 className={styles._footer_title}>Бесплатно до конца лета</h3>
                            <p className={styles._footer_subtitle}>далее 299 Р в месяц</p>
                        </div>
                        <span className={styles._footer_corp}>Яндекс & Плюс</span>
                    </div> : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className={styles.content_footer}>
                        <FiMoreHorizontal />
                    </div>}
                </div>
            :
            <div></div>
            }
        </>
        
    )
}