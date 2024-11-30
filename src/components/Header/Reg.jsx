import styles from '../../css/Header/Reg.module.css';
import { Link } from 'react-router-dom';
import locationIcon from '/Images/Header/Header__top/btn/locationIcon.svg';
import locationArrow from '/Images/Header/Header__top/btn/locationIcon_arrow.svg';
import registrationIcon from '/Images/Header/Header__top/btn/log in.svg';


const Reg = () => {
    return (
        <div className={styles.register}>
            <div className={styles.dropdown}>
                <Link className='Logo' to="/"><img src={ locationIcon } alt="locationIcon" /></Link>
                <Link className='link' to="/">Москва</Link>
                <Link to="/"> <img src={ locationArrow } alt="arrow" /> </Link>
            </div>
            <div className={styles.registration}>
                <img src={ registrationIcon } alt="reg" />
                <Link to="/">Вход/регистрация</Link>
            </div>
        </div>
    );
};

export default Reg;