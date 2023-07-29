import React from 'react'
import styles from "./Footer.module.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container">
        <Link to='/'><h2>NoteIt</h2></Link>

        <p>&copy; 2023 NoteIt by Maclemon. All rights reserveved.</p>
      </div>
    </footer>
  )
}

export default Footer