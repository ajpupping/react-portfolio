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

    const getNavLinkClass = ({ isActive }) => {
        return isActive ? `${styles.link} ${styles.activeLink}` : styles.link;
    };

    return (
        <nav className={styles.navbar}>
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
                    <li><NavLink to="/" className={getNavLinkClass}>About Me</NavLink></li>
                    <li><NavLink to="/portfolio" className={getNavLinkClass}>Portfolio</NavLink></li>
                    <li><NavLink to="/contact" className={getNavLinkClass}>Contact Me</NavLink></li>
                    <li><NavLink to="/resume" className={getNavLinkClass}>Resume</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;