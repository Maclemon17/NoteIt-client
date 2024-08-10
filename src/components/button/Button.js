import React from 'react';
import styles from './button.module.css'

const Button = ({ text, width, onClick }) => {
    return (
        <button style={{ width: width }}
            className={styles.btn}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button