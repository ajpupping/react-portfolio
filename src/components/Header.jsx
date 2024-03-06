// Should appear on multiple pages
// Include developer name
// Include navigation with titles 
    // About Me, Portfolio, Contact, Resume

    import React from 'react';

import styles from '../styles/Header.module.css';


function Header() {
    return (
        <div className={styles.App}>
            <h1>Alyssa Pupping</h1>
        </div>
    );
}

export default Header;