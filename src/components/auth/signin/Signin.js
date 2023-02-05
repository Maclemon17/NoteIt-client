import React from 'react'
import styles from './signin.module.css'

const Signin = () => {
    return (
        <section>
            <form>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='example@domain.com' />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Password</label>
                    <input type="password" placeholder='password' />
                </div>
            </form>
        </section>
    )
}

export default Signin