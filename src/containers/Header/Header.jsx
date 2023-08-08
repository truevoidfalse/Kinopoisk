import styles from './Header.module.sass'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import { AiOutlineHome } from 'react-icons/ai'
import { FiPlay } from 'react-icons/fi'
import { BsDisplay } from 'react-icons/bs'
import { CgDisplaySpacing } from 'react-icons/cg'
import { MdSportsSoccer } from 'react-icons/md'
import { ImTicket } from 'react-icons/im'
import { GoFileMedia } from 'react-icons/go'

//* libs *//
import SmoothScroll from '../../lib/SmoothScroll/SmoothScroll'
//* libs *//

const Header = () => {
    
    //* libs *//
    SmoothScroll({ stepSize: 30 })
    //* libs *//
    const dispatch = useDispatch();
    const [isHide, setHide] = useState(false);

    const handleScroll = useCallback(() => {
        let currentScrollPos = window.scrollY;
        if (currentScrollPos) {
            // dispatch(changeValue(currentScrollPos));
        }
        if (prevScrollpos > currentScrollPos) {
            setHide(false);
        }
        if (prevScrollpos < currentScrollPos) {
            setHide(true);
        }
        prevScrollpos = currentScrollPos;
    }, [dispatch]);

    let prevScrollpos = window.scrollY;
    window.onscroll = handleScroll;


    return (
        <header className={isHide ? styles.headerHide : styles.header}>
            <div className={isHide ? styles.containerHide : styles.container}>
                <div className={styles.navItem}>
                    <Link className={styles.link} to='/'>
                        {<AiOutlineMenu className={styles.icon}/>}
                        <span>КИНОПОИСК</span>
                    </Link>
                    <ul style={isHide ? {display: 'none'} : null} className={styles.navbar}>
                        <li className={styles.navbar_item}>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? styles.navlinkActive : isActive ? styles.navlink : ""
                            }>
                                <AiOutlineHome style={{ marginRight: '10px' }} /> <p>Главная</p>
                            </NavLink>
                        </li>
                        <li className={styles.navbar_item}>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? styles.navlinkActive : isActive ? styles.navlink : ""
                            }>
                                <FiPlay style={{ marginRight: '10px' }} /><p>Онлайн-кинотеатр</p>
                            </NavLink>
                            
                        </li>
                        <li className={styles.navbar_item}>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? styles.navlinkActive : isActive ? styles.navlink  : ""
                            }>
                                <BsDisplay style={{ marginRight: '10px' }} /><p>Фильмы</p>
                            </NavLink>
                            
                        </li>
                        <li className={styles.navbar_item}>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? styles.navlinkActive : isActive ? styles.navlink  : ""
                            }>
                                <CgDisplaySpacing style={{ marginRight: '10px' }} /><p>Сериалы</p>
                            </NavLink>
                            
                        </li>
                        <li className={styles.navbar_item}>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? styles.navlinkActive : isActive ? styles.navlink  : ""
                            }>
                                <MdSportsSoccer style={{ marginRight: '10px' }} /><p>Спорт</p>
                            </NavLink>
                            
                        </li>
                        <li className={styles.navbar_item}>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? styles.navlinkActive : isActive ? styles.navlink : ""
                            }>
                                <ImTicket style={{ marginRight: '10px' }} /><p>Билеты в кино</p>
                            </NavLink>
                            
                        </li>
                        <li className={styles.navbar_item}>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? styles.navlinkActive : isActive ? styles.navlink : ""
                            }>
                                <GoFileMedia style={{ marginRight: '10px' }} /><p>Медиа</p>
                            </NavLink>
                            
                        </li>
                    </ul>
                </div>
                <div className={styles.navItem}>
                    <NavLink to='/'>
                        {({ isActive, isPending }) => (
                            <span className={isActive ? styles.navListActive : styles.navList}>Главное</span>
                        )}
                        </NavLink>
                    <NavLink to='/market'>
                        {({ isActive, isPending }) => (
                            <span className={isActive ? styles.navListActive : styles.navList}>Магазин</span>
                        )}
                    </NavLink>
                    <NavLink to='/channels'>
                        {({ isActive, isPending }) => (
                            <span className={isActive ? styles.navListActive : styles.navList}>Каналы</span>
                        )}
                    </NavLink>
                    <NavLink to='/sport'>
                        {({ isActive, isPending }) => (
                            <span className={isActive ? styles.navListActive : styles.navList}>Спорт</span>
                        )}
                    </NavLink>
                    <FaSearch className={styles.search} />
                </div>
                <div className={styles.navItem}>
                    <span className={styles.navList}>Войти</span>
                </div>
            </div>
        </header>
    )
}

export default Header