// Contact Form with fields for name, email address, and a message

import React from 'react';

import styles from '../Contact/Contact.module.css';

export const Contact = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Contact Me</h1>
            <form className={styles.contactForm}>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input className={styles.formInput} type='text' id='name' name='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input className={styles.formInput} type='email' id='email' name='email' />
                </div>
                <div>
                    <label htmlFor='message'>Message: </label>
                    <textarea className={styles.messageInput} id='message' name='message'/>
                </div>
                <button className={styles.button} type='submit'>Submit</button>
            </form>
            <div className={styles.email}>
                <p>
                    If you would like to get in touch with me, send me an email
                    at <a href='mailto:ajpupping@gmail.com'>ajpupping@gmail.com</a>
                </p>
            </div>
        </section>
    );
};

export default Contact;
