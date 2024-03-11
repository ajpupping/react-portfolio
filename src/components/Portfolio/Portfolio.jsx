// Include 6 projects

import React from 'react';
import Project from '../Project/Project';

import styles from '../Portfolio/Portfolio.module.css';

const projects = [
    {
        title: 'Project 1',
        image: '../../assets/images',
        repo: 'https://github.com/ajpupping',
        deployed: 'https://ajpupping.github.io/ajp-portfolio/'
    },
    {
        title: 'Project 2',
        image: './assets/images/placeholder-2.jpg',
        repo:  'https://github.com/ajpupping',
        deployed: 'https://ajpupping.github.io/ajp-portfolio/'

    },
    {
        title: 'Project 3',
        image: './assets/images/placeholder-3.jpg',
        repo: 'https://github.com/ajpupping',
        deployed: 'https://ajpupping.github.io/ajp-portfolio/'
    },
    {
        title: 'Project 4',
        image: './assets/images/placeholder-4.jpg',
        repo: 'https://github.com/ajpupping',
        deployed: 'https://ajpupping.github.io/ajp-portfolio/'
    },
    {
        title: 'Project 5',
        image: './assets/images/placeholder-5.jpg',
        repo: 'https://github.com/ajpupping',
        deployed: 'https://ajpupping.github.io/ajp-portfolio/'

    },
    {
        title: 'Project 6',
        image: './assets/images/placeholder-6.jpg',
        repo: 'https://github.com/ajpupping',
        deployed: 'https://ajpupping.github.io/ajp-portfolio/'
    }
];

export const Portfolio = () => {
    return (
        <section>
            <h2 className={styles.title} >My Portfolio</h2>
            <div className={styles.projects}>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        image={project.image}
                        repo={project.repo}
                        deployed={project.deployed}
                    />
                ))}
                </div>
            </section>
        
    );
}

export default Portfolio;