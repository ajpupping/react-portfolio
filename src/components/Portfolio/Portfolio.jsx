// Include 6 projects

import React from 'react';
import Project from '../Project/Project';

import styles from '../Portfolio/Portfolio.module.css';

const projects = [
    {
        title: 'Weather App',
        image: '/assets/images/weather-app.jpg',
        repo: 'https://github.com/ajpupping/weather-app',
        deployed: 'https://ajpupping.github.io/weather-app/'
    },
    {
        title: 'Tech Blog',
        image: '/assets/images/tech-blog.jpg',
        repo:  'https://github.com/ajpupping/tech-blog',
        deployed: 'https://ajp-tech-blog-67472f936680.herokuapp.com/'

    },
    {
        title: 'Trip Planner',
        image: '/assets/images/trip-planner.jpg',
        repo: 'https://github.com/RoopaThimmanacherla/trip-planner',
        deployed: 'https://roopathimmanacherla.github.io/trip-planner/'
    },
    {
        title: 'Next-Up Job Tracker',
        image: '/assets/images/next-up.jpg',
        repo: 'https://github.com/Andrew-seatter/Next-up',
        deployed: 'https://next-up.onrender.com/'
    },
    {
        title: 'Shopping List Helper',
        image: '/assets/images/shopping-list.jpg',
        repo: 'https://github.com/Jarede712/Shopping-List-Helper',
        deployed: 'https://shopping-list-helper-13d0cb3c2c45.herokuapp.com/login'

    },
    {
        title: 'Tavern Game - Work in Progress',
        image: '/assets/images/tavern-game.jpg',
        repo: 'https://github.com/ajpupping/tavern-game',
        deployed: 'https://ajpupping.github.io/tavern-game/'
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