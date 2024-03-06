// Should appear on multiple pages
// Include developer name
// Include navigation with titles 
// About Me, Portfolio, Contact, Resume

import React from 'react';

import styles from '../Header/Header.module.css';

import { Navbar } from '../Navbar/Navbar.jsx';

export const Header = () => {
    return (
        <section>
            <div className={styles.Header}>
                <h1 className={styles.title}>Alyssa Pupping</h1>
                <p className={styles.tagline}>Full-Stack Developer</p>
            </div>
            <Navbar />

        </section>
    );
};

export default Header;