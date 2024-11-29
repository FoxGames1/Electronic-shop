import styles from '../../css/Header/Header.module.css';
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
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;