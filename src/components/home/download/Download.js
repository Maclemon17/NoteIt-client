import React from 'react';
import styles from './download.module.css';
import AppStoreWhite from '../../../assets/appstore badgewhite.png';
import PlayStoreWhite from '../../../assets/playstore badgewhite.png'
import AppImage from '../../../assets/app-mockup.png'

const Download = () => {
    return (
        <section className={styles.download}>
            <div className={`container ${styles.content}`}>
                <div className={styles.heroText}>
                    <h3>Download NoteIt</h3>

                    <h1>Join over 20,000+ users and make your life easier.</h1>

                    <div className={styles.downloadButton}>
                        <img src={AppStoreWhite} alt="download buttons" />
                        <img src={PlayStoreWhite} alt="download buttons" />
                    </div>
                </div>

                <div className={styles.heroImage}>
                    <img src={AppImage} alt="app mock-up"/>
                </div>
            </div>
        </section>
    )
}

export default Download