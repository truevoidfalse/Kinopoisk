import { useDispatch } from 'react-redux';
import styles from './item.module.sass'
import { AiOutlineAlipayCircle } from 'react-icons/ai'
import { changeCardState } from '../../../../../Redux/slices/Main/contentCardMainSlice';


export const Item = ({ props, callback }) => {

    const dispatch = useDispatch()
    const sendState = () => {
        dispatch(changeCardState(props.id))
        dispatch(callback(true))
    }
    
    return (
        <div onClick={sendState} className={styles.item}>
            <a href={props.url}>
                <img className={styles.picture} src={props.poster} alt="" />
            </a>
        </div>
    );
};