// Include About Me, Portfolio, Contact, Resume
// Title should be highlighted to indicate current section user is on
// Clicking links should change the browser URL and display the corresponding section

import React, {useState} from 'react';

import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portfolio
            </a>
            <div className={styles.menu} >
                <button className={styles.menuBtn} onClick={toggleMenu}>
                    {menuOpen ? 'Close' : 'Menu'}
                </button>
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
                    onClick={() => setMenuOpen(false)}>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </div>
        </nav>
    );
};