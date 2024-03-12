import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PortfolioPage from './components/Portfolio/Portfolio.jsx';
import AboutPage from './components/About/About.jsx';
import ContactPage from './components/Contact/Contact.jsx';
import ResumePage from './components/Resume/Resume.jsx';

import styles from './styles/App.module.css';

import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';

function App() {
    return (
        <div className={styles.App}>
        <Header />
        <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <Footer />
    </div>
    );
}

export default App;