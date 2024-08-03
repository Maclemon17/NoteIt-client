import React from 'react'
import styles from './notFound.module.css'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'


const PageNotFound = () => {

    const buttonTextLink = <Link to="/">Go Home</Link>

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

                    <Button text={buttonTextLink} />
                </div>
            </div>

        </section>
    )
}

export default PageNotFound