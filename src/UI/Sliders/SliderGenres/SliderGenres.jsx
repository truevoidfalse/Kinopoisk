import { Item } from "./components/item/item";
import styles from '../Shared resource/Sass/Slider.module.sass'
import { useDispatch } from "react-redux";
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { useEffect } from "react";


import { ContentCard } from "../Shared resource/ContentCard/ContentCard";

export const SliderGenres = ({ props, urls, data, refetch, callback, slogan, state, globalState, changeMainCount, changeMainPosInc, changeMainPosDec, changeSubCount, changeSubPosInc, changeSubPosDec, changeNumHorizInc, changeNumHorizDec, changeHide, changePage }) => {

    const dispatch = useDispatch()


    useEffect(() => {
        if(props) {
            dispatch(changeMainCount(Math.floor(props.length / 5)))
            dispatch(changeSubCount(props.length % 5))
        }
    }, [props])


    const BackControl = () => {
        if (state.mainPos === state.mainCount && state.subPos <= state.subCount && state.subPos != 0) {
            dispatch(changeHide(true))
            dispatch(changeSubPosDec(1))
            dispatch(changeNumHorizDec(355))
            return
        }
        dispatch(changeNumHorizDec(1775))
        dispatch(changeMainPosDec(1))
    }
    const NextControl = () => {
        if (state.mainPos === state.mainCount) {
            if (state.subPos < state.subCount && state.subPos != state.subCount) {
                dispatch(changeHide(false))
                dispatch(changeSubPosInc(1))
                dispatch(changeNumHorizInc(355))
                return;
            } else {
                return
            }
        }
        dispatch(changeNumHorizInc(1775))
        dispatch(changeMainPosInc(1))
    }
    return (
        <>
            <div className={styles.Accordion}>
                <h1 className={styles.slogan}>{slogan}</h1>
                <span onClick={BackControl} style={{ visibility: `${props ? 'visible' : 'hidden'}` }} className={state.numHoriz === 0 ? styles.control_hide : styles.control_left}><AiFillCaretLeft /></span>
                <div style={{ transform: `translateX(${state.numHoriz + 'px'})`, width: `${props ? 'auto' : '100vw'}` }} className={styles.AccordionStore}>
                    {props ? props.map((el) => <Item key={el.id} props={el} callback={callback} refetch={refetch} />) : <span className="spinner"></span>}
                </div>
                <span onClick={NextControl} style={{ visibility: `${props ? 'visible' : 'hidden'}` }} className={state.isHide ? styles.control_right : styles.control_hide}><AiFillCaretRight /></span>
            </div>
            <ContentCard data={data} refetch={refetch} state={state} changePage={changePage} globalState={globalState} />
        </>
    )
}