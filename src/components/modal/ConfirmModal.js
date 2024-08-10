import React, { useEffect } from 'react'
// import styles from './modal.module.css';
import styles from './ConfirmModal.module.css';

const ConfirmModal = ({ open, setOpenConfirmModal, deleteNote, noteId }) => {

    useEffect(() => {
        const closeModal = (e) => {
            e.keyCode === 27 ? setOpenConfirmModal(false) : setOpenConfirmModal(true)
        }
        // add event to key
        window.addEventListener("keydown", closeModal)
        return () => window.removeEventListener("keydown", closeModal)

    }, [setOpenConfirmModal]);



    return (
        <div className={`${styles.modal} ${open ? styles.out : ''}`}>
            <div className={styles.modalContent}>
                <div className={styles.modalText}>
                    <h1>Confirm Delete</h1>
                    <p>Are you sure you want to delete note?</p>

                </div>

                <div className={styles.buttonGroup}>
                    <button onClick={() => deleteNote(noteId)}>Delete</button>
                    <button onClick={() => setOpenConfirmModal(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal