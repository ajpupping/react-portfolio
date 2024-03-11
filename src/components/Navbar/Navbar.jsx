// Include About Me, Portfolio, Contact, Resume
// Title should be highlighted to indicate current section user is on
// Clicking links should change the browser URL and display the corresponding section

import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';

import styles from '../Navbar/Navbar.module.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <NavLink className={styles.title} to="/" exact>
                Portfolio
            </NavLink>
            <div className={styles.menu} >
                <button 
                className={styles.menuBtn} 
                onClick={toggleMenu}
                aria-expanded={menuOpen}
                >
                    {menuOpen ? 'Close' : 'Menu'}
                </button>
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
                    onClick={() => setMenuOpen(false)}>
                    <li><NavLink to="/about" activeClassName={styles.activeLink}>About Me</NavLink></li>
                    <li><NavLink to="/contact" activeClassName={styles.activeLink}>Contact Me</NavLink></li>
                    <li><NavLink to="/resume" activeClassName={styles.activeLink}>Resume</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;