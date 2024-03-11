// Include profile picture and a short bio
// Should be selected by default upon first vist to the site

import React from 'react';

import styles from '../About/About.module.css';

export const About = () => {
    return (
        <section className={styles.container}>
            <div className={styles.profile}>
            <h2 className={styles.title} >About Me</h2>
            <img src="/assets/images/round-profile-pic.png" 
                alt="A photo of Alyssa Pupping" 
                className={styles.image}/>
            </div>
            <div>
                <h3 className={styles.heading}>Hello!</h3>
                <p className={styles.bio}>
                    My name is Alyssa Pupping, and I am a full-stack web developer based in Southern California. I am passionate about creating beautiful and accessible web applications. 
                    <br></br><br></br>
                    
                    I have almost completed a Full-Stack Web Development Bootcamp, through the UCSD Extended Studies Program. My education has equipped with the skills to build dynamic and responsive applications from scratch. I have also gained experience in implementing both structured and unstructured databases, creating RESTful APIs, and leveraging modern frameworks and libraries like React and Node.js for to streamline development. 
                    <br></br><br></br>

                    The principles of agile development resonate deeply with me, building on the skills I developed as an educator. Both fields require collaborative problem solving, flexible thinking, and a growth mindset. Furthermore, I am committed to practicing adaptive design, ensuring that my web applications are accessible and offer an equitable and inclusive user experience to people with a diverse array of abilites and preferences. 
                    <br></br><br></br>
                    I am excited to bring my unique perspective to the development community, exploring the boundaries of possibility and creating innovative solutions to complex problems.
                </p>
            </div>
        </section>

    );
}

export default About;