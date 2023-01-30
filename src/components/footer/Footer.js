import React from 'react'
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
        <h2>NoteIt</h2>

        <p>&copy; 2023 NoteIt by Maclemon. All rights reserveved.</p>
    </footer>
  )
}

export default Footer