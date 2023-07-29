import React from 'react';
import styles from './features.module.css';

const Features = () => {
    return (
        <section className={`${styles.features} container`}>
            <h1>Features</h1>

            <div className={styles.featuresGroup}>
                <div className={styles.feature}>
                    <i className="bi bi-share"></i>
                    <h3>Share notes with friends</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Ut deleniti dolorem aspernatur sed fugiat alias!</p>
                </div>

                <div className={styles.feature}>
                    <i className="bi bi-lightning"></i>
                    <h3>Autocompletion</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Ut deleniti dolorem aspernatur sed fugiat alias!</p>
                </div>

                <div className={styles.feature}>
                    <i className="bi bi-people"></i>
                    <h3>Manage your notes with friends</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Ut deleniti dolorem aspernatur sed fugiat alias!</p>
                </div>
            </div>
        </section>
    )
}

export default Features