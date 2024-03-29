import React from 'react'
import styles from './notFound.module.css'

const PageNotFound = () => {
    return (

        <section className={styles.section}>
            <div className="container">

                <div className={styles.pageContent}>
                    <div className={styles.icons}>
                        <i className="bi bi-4-circle"></i>
                        <i className="bi bi-0-circle"></i>
                        <i className="bi bi-4-circle"></i>
                    </div>

                    <h1>Page Not Found</h1>
                </div>
            </div>

        </section>
    )
}

export default PageNotFound