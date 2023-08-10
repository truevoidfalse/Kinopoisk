import { useDispatch } from 'react-redux';
import styles from './itemTop.module.sass'
import { changeCardState } from '../../../../../Redux/slices/Main/contentCardMainSlice';


export const Item = ({ props, top, callback }) => {
    const dispatch = useDispatch()

    const sendState = () => {
        dispatch(changeCardState(props.id))
        dispatch(callback(true))
    }

    return (
        <div onClick={sendState} className={styles.TopItem_container}>
            <div className={styles.text_container}>
                <h1 className={top <= 9 ? styles.top_large : styles.top}>{top}</h1>
                <p className={styles.slogan}>{props.slogan}</p>
            </div>
            <div className={styles.wrapper}>
                <img className={styles.picture} src={props.poster.previewUrl} alt="" />
            </div>
        </div>
    );
};