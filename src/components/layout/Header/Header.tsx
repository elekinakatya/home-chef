import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>Homechef</div>
            <nav className={styles.nav}>
                <NavLink to="/shop" className={({isActive})=> isActive ? styles.navLinkActive : styles.navLink}>Shop</NavLink>
                <NavLink to="/features" className={({ isActive }) =>
                    isActive ? styles.navLinkActive : styles.navLink}>Features</NavLink>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? styles.navLinkActive : styles.navLink
                }>Recipes</NavLink>
                <NavLink to="/hotline" className={({ isActive }) =>
                    isActive ? styles.navLinkActive : styles.navLink
                }>Hotline</NavLink>
            </nav>
            <div className={styles.actions}>
                <button className={styles.login}>Login</button>
                <button className={styles.signup}>Sign Up</button>
            </div>
        </div>
    );
}