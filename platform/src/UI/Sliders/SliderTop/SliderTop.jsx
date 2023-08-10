import { Item } from "./components/item/itemTop";
import styles from './SliderTop.module.sass'
import { useDispatch } from "react-redux";
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { useEffect } from "react";
import { ContentCard } from "../Shared resource/ContentCard/ContentCard";


export const SliderTop = ({ props, data, refetch, callback, slogan, state, globalState, changeMainTopCount, changeMainTopPosInc, changeMainTopPosDec, changeSubTopCount, changeSubTopPosInc, changeSubTopPosDec, changeNumTopHorizInc, changeNumTopHorizDec, changeHideTop, changePageTop }) => {
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (props) {
            dispatch(changeMainTopCount(Math.floor(props.length / 5)))
            dispatch(changeSubTopCount(props.length % 5))
        }
    }, [props])


    const BackControl = () => {
        if (state.mainPos === state.mainCount && state.subPos <= state.subCount && state.subPos != 0) {
            dispatch(changeHideTop(true))
            dispatch(changeSubTopPosDec(1))
            dispatch(changeNumTopHorizDec(355))
            return
        }
        dispatch(changeNumTopHorizDec(1775))
        dispatch(changeMainTopPosDec(1))
    }
    const NextControl = () => {
        if (state.mainPos === state.mainCount) {
            if (state.subPos < state.subCount && state.subPos != state.subCount) {

                dispatch(changeSubTopPosInc(1))
                dispatch(changeNumTopHorizInc(355))
                return;
            } else {
                return
            }
        }
        dispatch(changeNumTopHorizInc(1775))
        dispatch(changeMainTopPosInc(1))
    }
    return (
        <> 
            <div className={styles.Slider}>
                <div className={styles.SliderTop_header}>
                    <span className={styles.logo}></span>
                    <h1 className={styles.slogan}>{slogan}</h1>
                </div>
                <span onClick={BackControl} style={{visibility: `${props ? 'visible' : 'hidden'}`}} className={state.numHoriz === 0 ? styles.control_hide : styles.control_left}><AiFillCaretLeft /></span>
                <div style={{ transform: `translateX(${state.numHoriz + 'px'})`, width: `${props ? 'auto' : '100vw'}` }} className={styles.SliderStore}>
                    {props ? props.map((el, i) => <Item key={el.id} props={el} top={i + 1} callback={callback} refetch={refetch} />) : <span className="spinner"></span>}
                </div>
                <span onClick={NextControl} style={{ visibility: `${props ? 'visible' : 'hidden'}` }} className={state.isHide ? styles.control_right : styles.control_hide}><AiFillCaretRight /></span>
            </div>
            <ContentCard data={data} refetch={refetch} state={state} changePage={changePageTop} globalState={globalState}/>
        </>
    )
}