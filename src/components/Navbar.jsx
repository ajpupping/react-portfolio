// Include About Me, Portfolio, Contact, Resume
// Title should be highlighted to indicate current section user is on
// Clicking links should change the browser URL and display the corresponding section

import React from 'react';

import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
    return <nav className={styles.navbar}>
        <a className={styles.title} href="/">
            Portfolio
        </a>
        <div className={styles.menu} >
        <ul className={styles.menuItems}>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
        </ul>
        </div>

    </nav>
};