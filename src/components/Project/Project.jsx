// For each project include:
// An image of the deployed application
// The title of the project
// A link to the deployed application
// A link to the corresponding GitHub repository

import React from 'react';

import styles from '../Project/Project.module.css';

export const Project = () => {
    return (
        <div className={styles.App}>
            <h1>Projects</h1>
        </div>
    );
}

export default Project;