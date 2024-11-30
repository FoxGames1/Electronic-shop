import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <Link to="/">Доска объяввлений</Link>
            <Link to="/">Сервисный центр</Link>
            <Link to="/">Интернет-магазин Dily.ru</Link>
            <Link to="/">Скупка</Link>
        </nav>
    );
};

export default Nav;