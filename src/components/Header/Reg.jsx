import styles from '../../css/Header/Header.module.css';
import { Link } from 'react-router-dom';
import locationIcon from '/Images/Header/Header__top/btn/locationIcon.svg';
import locationArrow from '/Images/Header/Header__top/btn/locationIcon_arrow.svg';
import registrationIcon from '/Images/Header/Header__top/btn/log in.svg';


const Reg = () => {
    return (
        <div className={styles.register}>
            <div className={styles.dropdown}>
                <img src={ locationIcon } alt="locationIcon" />
                <Link to="/">Москва <img src={ locationArrow } alt="arrow" /></Link>
            </div>
            <div className={styles.registration}>
                <img src={ registrationIcon } alt="reg" />
                <Link to="/">Вход/регистрация</Link>
            </div>
        </div>
    );
};

export default Reg;