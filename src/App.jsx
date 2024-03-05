import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PortfolioPage from './components/Portfolio.jsx';
import AboutPage from './components/About.jsx';
import ContactPage from './components/Contact.jsx';
import ResumePage from './components/Resume.jsx';

import styles from './styles/App.module.css';
import { Navbar } from './components/Navbar.jsx';

function App() {
    return <div className={styles.App}>
        <Navbar />
        <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
        </Routes>
    </div>;
}

export default App;