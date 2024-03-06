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
            <img className={styles.image} src={image} alt={title} />
            <div className={styles.links}>
                <ul>
                    <li>
                        <a href={repo}>GitHub Repository</a>
                    </li>
                    <li>
                        <a href={deployed}>Deployed Application</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Project;