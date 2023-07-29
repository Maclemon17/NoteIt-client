import React from 'react';
import PlayStore from '../../../assets/play store badge.png';
import AppStore from '../../../assets/app store badge.png';
import HeroImage from '../../../assets/app-mockup.png';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={`container ${styles.heroBox}`}>
            <div className={styles.heroText}>
                <h1>Put down your thoughts <br /> seamlessly with NoteIt</h1>
                <p>Enjoy note taking in one app, share with your friends and loved ones.</p>

                <div className={styles.getAppBtn}>
                    <img src={PlayStore} alt="download app from playstore" />
                    <img src={AppStore} alt="download app from appstore" />
                    {/* <img src={AppStore} alt="download app from appstore" /> */}
                </div>
            </div>

            {/* <img src={require('../../../assets/circle.png')} alt="" /> */}
            <div className={styles.heroImg}>
                <img src={HeroImage} alt="app mockup" />
            </div>
        </section>
    )
}

export default Hero