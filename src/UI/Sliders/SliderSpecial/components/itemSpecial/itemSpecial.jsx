import { useDispatch } from 'react-redux';
import styles from './itemSpecial.module.sass'
import { changeCardState } from '../../../../../Redux/slices/Main/contentCardMainSlice';

export const Item = ({ props, callback }) => {
    const dispatch = useDispatch()

    const sendState = () => {
        dispatch(changeCardState(props.id))
        dispatch(callback(true))
    }

    return (
        <div onClick={sendState} className={styles.item}>
            <img className={styles.picture} src={props.poster?.previewUrl} alt="" />
            <img className={styles.picture_sub} src={props.poster?.url} alt="" />
        </div>
    );
};