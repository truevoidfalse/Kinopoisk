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
            <div className={styles.ratingList}>
                {props.rating.imdb <= 5 ? <span className={styles.rating_three}>{props.rating.imdb}</span> : props.rating.imdb < 8 && props.rating.imdb >= 6 ? <span className={styles.rating}>{props.rating.imdb}</span> : props.rating.imdb < 9 && props.rating.imdb >= 8 ? <span className={styles.rating}>{props.rating.imdb}</span> : <span className={styles.rating_two}>{props.rating.imdb}</span>}
                <AiOutlineAlipayCircle className={styles.tv_logo} />
            </div>
            <img className={styles.picture} src={props.poster.url} alt="" />
        </div>
    );
};