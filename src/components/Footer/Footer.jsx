// Include text or icon links to GitHup, LinkedIn, and 3rd platform of choice (maybe  Instagram?)

import React from 'react';

import styles from '../Footer/Footer.module.css';

export const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/alyssa-pupping-81a1432b1/" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </a>
            <a href="https://github.com/ajpupping" target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
            <a href="https://www.instagram.com/ajpupping/" target="_blank" rel="noopener noreferrer">
                Instagram
            </a>
        </div>
        </section>
    );
}

export default Footer;