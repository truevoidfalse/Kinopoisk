import { Item } from "./components/itemSpecial/itemSpecial";
import styles from './SliderSpecial.module.sass'
import { useDispatch } from "react-redux";
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { useEffect } from "react";


import { ContentCard } from "../Shared resource/ContentCard/ContentCard";

export const SliderSpecial = ({ props, data, refetch, callback, slogan, state, globalState, changeMainSpecialCount, changeMainSpecialPosInc, changeMainSpecialPosDec, changeSubSpecialCount, changeSubSpecialPosInc, changeSubSpecialPosDec, changeNumSpecialHorizInc, changeNumSpecialHorizDec, changeHideSpecial, changePageSpecial }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (props) {
            dispatch(changeMainSpecialCount(Math.floor(props.length / 5)))
            dispatch(changeSubSpecialCount(props.length % 5))
        }
    }, [props])


    const BackControl = () => {
        if (state.mainPos === state.mainCount && state.subPos <= state.subCount && state.subPos != 0) {
            dispatch(changeHideSpecial(true))
            dispatch(changeSubSpecialPosDec(1))
            dispatch(changeNumSpecialHorizDec(355))
            return
        }
        dispatch(changeNumSpecialHorizDec(1775))
        dispatch(changeMainSpecialPosDec(1))
    }
    const NextControl = () => {
        if (state.mainPos === state.mainCount) {
            if (state.subPos < state.subCount && state.subPos != state.subCount) {
                dispatch(changeHideSpecial(false))
                dispatch(changeSubSpecialPosInc(1))
                dispatch(changeNumSpecialHorizInc(355))
                return;
            } else {
                return
            }
        }
        dispatch(changeNumSpecialHorizInc(1775))
        dispatch(changeMainSpecialPosInc(1))
    }
    return (
        <>  
            <div className={styles.Accordion}>
                <h1 className={styles.slogan}>{slogan}</h1>
                <span onClick={BackControl} style={{ visibility: `${props ? 'visible' : 'hidden'}` }} className={state.numHoriz === 0 ? styles.control_hide : styles.control_left}><AiFillCaretLeft /></span>
                <div style={{ transform: `translateX(${state.numHoriz + 'px'})`, width: `${props ? null : '100vw'}` }} className={styles.AccordionStore}>
                    { props ? props.map((el) => <Item key={el.id} props={el} callback={callback} refetch={refetch} />) : <span className="spinner"></span>}
                </div>
                <span onClick={NextControl} style={{ visibility: `${props ? 'visible' : 'hidden'}` }} className={state.isHide ? styles.control_right : styles.control_hide}><AiFillCaretRight /></span>
            </div>
            <ContentCard data={data} refetch={refetch} state={state} changePage={changePageSpecial} globalState={globalState} />
        </>
    )
}