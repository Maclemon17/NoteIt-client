import React from 'react'
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>NoteIt</h1>

            <nav className={styles.navItems}>
                <ul>
                    <li>About</li>
                    <li>Sign in</li>
                    <li>FAQs</li>
                </ul>

                <button>Subscribe</button>
            </nav>
        </header>
    )
}

export default Header