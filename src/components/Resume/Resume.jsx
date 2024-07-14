// Include a link to a downloadable resume
// Include a list of the developer's proficiencies

import React from 'react';

import styles from '../Resume/Resume.module.css';

export const Resume = () => {
    const resumePath = '/assets/docs/ajpupping-resume.pdf'
    return (
        <div className={styles.Resume}>
            <div className={styles.download}>
                <a href="/Alyssa_Pupping_Resume.pdf" download="Alyssa_Pupping_Resume.pdf">
                    <h2>Download Resume</h2>
                </a>
            </div>
            <div className={styles.pdfViewer}>
                <iframe 
                src={resumePath}
                width='100%'
                height='800px'
                title='Alyssa Pupping Resume'
                >
                </iframe>
            </div>
        </div>
    );
}

export default Resume;