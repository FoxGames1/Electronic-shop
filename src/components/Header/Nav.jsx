import { Link, useLocation } from 'react-router-dom';
import styles from '../../css/Header/Nav.module.css';

const Nav = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={styles.nav}>
            <Link 
                className={`${styles.link} ${isActive('/home') ? styles.active : ''}`} 
                to="/home"
            >
                Доска объявлений
            </Link>
            <Link 
                className={`${styles.link} ${isActive('/service') ? styles.active : ''}`} 
                to="/service"
            >
                Сервисный центр
            </Link>
            <Link 
                className={`${styles.link} ${isActive('/shop') ? styles.active : ''}`} 
                to="/shop"
            >
                Интернет-магазин Dily.ru
            </Link>
            <Link 
                className={`${styles.link} ${isActive('/buy-back') ? styles.active : ''}`} 
                to="/buy-back"
            >
                Скупка
            </Link>
        </nav>
    );
};

export default Nav;
