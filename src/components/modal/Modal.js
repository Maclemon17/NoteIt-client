import React from 'react'
import styles from './modal.module.css'

const Modal = ({ setOpenModal }) => {
    return (
        <>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={() => setOpenModal(false)}>
                    <i className="bi bi-x"></i>
                </button>
                <div className={styles.modalContent}>
                    <form>
                        <h1>Add New Note</h1>
                        <div className={styles.formGroup}>
                            <label htmlFor="title">Title</label>
                            <input type="text" name='title' />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="note">Note</label>
                            <textarea name="note" cols="30" rows="20"></textarea>
                        </div>
                        <button>Add Note</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Modal