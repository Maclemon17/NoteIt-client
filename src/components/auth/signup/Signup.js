import React from 'react';
import styles from '../signin/signin.module.css'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <section className='container'>
    <form>
        <div className={styles.formContainer}>
            <h2>Create an account to continue</h2>
            <div className={styles.formGroup}>
                <label htmlFor="text">Username</label>
                <input type="text" placeholder='Username' />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='example@domain.com' />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='password' />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Confirm Password</label>
                <input type="password" placeholder='password' />
            </div>
            <button>Sign Up</button>

            <p className={styles.para}>
                Already have an account? {" "}
                <Link to="/signin">Sign In</Link>
            </p>
        </div>

    </form>
</section>
  )
}

export default Signup