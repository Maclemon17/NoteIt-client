import React from 'react';
import styles from "./review.module.css"

const Review = () => {
    return (
        <section className={` ${styles.review}`}>
            <div className="container">
                <div className={styles.reviewCard}>
                    <div className={styles.text}>
                        <i className="bi bi-lightning-fill"></i>
                        <p>
                            I use NoteIt for all my note taking when working on a project.
                            I send it over to clients to crosscheck for me
                        </p>
                    </div>

                    <div className={styles.author}>
                        <img src={require('../../../assets/avatar-1.jpg')} alt="author avatar" />
                        <h3>John Doe</h3>
                        <p>Software Developer</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Review