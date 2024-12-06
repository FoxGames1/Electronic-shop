import styles from '../../css/Header/Header.module.css';
import MenuList from './Header__content/MenuList';
import SearchItem from './Header__content/SearchItem';
import Nav from './Nav';
import Reg from './Reg';
import logo from '/Images/Header/Header__top/Logo.png';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__top}>
				<div className={styles.header__topLine}></div>
				<div className={styles.header__topMenu}>
					<div className={styles.container}>
						<div className={styles.menuItems}>
							<img src={logo} alt="Logo" />
							<Nav />
							<Reg />
						</div>
					</div>
				</div>
			</div>
			<div className={"header__content"}>
				<div className={styles.container}>
					<div className="FlexBox">
						<MenuList />
						<SearchItem />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;