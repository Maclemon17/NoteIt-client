import React from 'react';
import styles from './contact.module.css';
import AvatarOne from "../../../assets/avatar-1.jpg";
import AvatarTwo from "../../../assets/avatar-2.jpg";
import AvatarThree from "../../../assets/avatar-3.jpg";
import Button from '../../button/Button';

const ContactUs = () => {
    return (
        <section className={styles.contactUs}>
            <div className={`container ${styles.contactCard}`}>
                <div className={styles.content}>
                    <div className={styles.avatars}>
                        <img className={styles.avatarOne} src={AvatarOne} alt="avatar" />
                        <img className={styles.avatarTwo} src={AvatarTwo} alt="avatar" />
                        <img className={styles.avatarThree} src={AvatarThree} alt="avatar" />
                    </div>
                    <div className={styles.text}>
                        <h3>Do you have any questions?</h3>
                        <p>We are available 24/7 to answer any question you have about NoteIt</p>
                    </div>
                   
                    <Button text="Send a message" />
                </div>
            </div>
        </section>
    )
}

export default ContactUs