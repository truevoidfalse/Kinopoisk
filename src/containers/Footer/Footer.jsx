import styles from './Footer.module.sass'
import { FaVk, FaTelegramPlane, FaYoutube, FaYandexInternational, FaTiktok } from 'react-icons/fa'

const Footer = () => {

    return (
        <footer>
            <div className={styles.content}>
                <div className={styles.__item}>
                    <FaVk className={styles.icon} />
                    <FaTelegramPlane className={styles.icon} />
                    <FaYoutube className={styles.icon} />
                    <FaYandexInternational className={styles.icon} />
                    <FaTiktok className={styles.icon} />
                </div>
                <div className={styles.__item}>
                    <span className={styles.text}>Мы всегда готовы вам помочь.</span>
                </div>
                <div className={styles.__item}>
                    <span className={styles.question} >Задать вопрос</span>
                </div>
                <div className={styles.__item_around}>
                    <span className={styles.text}>
                        © 2003–2023 Кинопоиск. 18+ <br />
                        <br />
                        Федеральные каналы доступны для бесплатного просмотра круглосуточно <br />
                        <br />
                        HBO ® and related service marks are the property of Home Box Office, Inc <br />
                        <br />
                        ООО «Кинопоиск», адрес местонахождения: 115035, Россия, г. Москва, ул. Садовническая, д. 82, стр. 2, пом. 9А01 <br />
                        <br />
                        Адрес для обращений пользователей: kinopoisk@support.yandex.ru <br />
                        <br />
                        Соглашение
                        Справка
                    </span>
                    <span className={styles.text}>Проект компании Яндекс</span>
                </div>
            </div>
        </footer>
        
    )
}


export default Footer