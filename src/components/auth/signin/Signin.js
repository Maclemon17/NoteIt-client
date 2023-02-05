import React from 'react'
import styles from './signin.module.css'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <section className='container'>
            <form>
                <div className={styles.formContainer}>
                    <h2>Sign in to continue</h2>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder='example@domain.com' />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='password' />
                    </div>
                    <button>Sign in</button>

                    <p className={styles.para}>
                        Don't have an account? {" "}
                        <Link to="/signup">Sign Up</Link>
                    </p>
                </div>

            </form>
        </section>
    )
}

export default Signin