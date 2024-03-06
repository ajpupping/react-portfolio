// Include profile picture and a short bio
// Should be selected by default upon first vist to the site

import React from 'react';

import styles from '../styles/About.module.css';

function About() {
    return (
        <div className={styles.App}>
            <h1>About Me</h1>
            <p>Hi! My name is Alyssa Pupping, and I am a web developer.</p>
        </div>
    );
}

export default About;