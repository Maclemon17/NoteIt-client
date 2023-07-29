import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Button from '../button/Button';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='/'><h1>NoteIt</h1></Link>

            <nav className={styles.navItems}>
                <ul>
                    <li>About</li>
                    <Link to='signin'><li>Sign in</li></Link>
                    <li>FAQs</li>
                </ul>

                {/* <button>Subscribe</button> */}
                <Button text="Subscribe" />
            </nav>
        </header>
    )
}

export default Header