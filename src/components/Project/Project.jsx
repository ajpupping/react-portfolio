// For each project include:
// An image of the deployed application
// The title of the project
// A link to the deployed application
// A link to the corresponding GitHub repository

import React from 'react';

import styles from '../Project/Project.module.css';

export const Project = ({ title, image, repo, deployed }) => {
    return (
        <div className={styles.project}>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <div>
                <a href={repo}>GitHub Repository</a>
                <a href={deployed}>Deployed Application</a>
            </div>
        </div>
    );
};

export default Project;