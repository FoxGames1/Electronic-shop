import styles from '../../css/Header/Nav.module.css';


import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Link className={styles.link} to="/">Доска объяввлений</Link>
            <Link className={styles.link} to="/">Сервисный центр</Link>
            <Link className={styles.link} to="/">Интернет-магазин Dily.ru</Link>
            <Link className={styles.link} to="/">Скупка</Link>
        </nav>
    );
};

export default Nav;