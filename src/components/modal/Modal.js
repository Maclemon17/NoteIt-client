import React from 'react'
import styles from './modal.module.css'

const Modal = () => {
    return (
        <>
            <div className={styles.modalBackground}>
                {/* <div className={styles.modalContainer}> */}
                   <form>
                        <h1>Add New Note</h1>

                        <div className={styles.formGroup}>
                            <label htmlFor="title">Title</label>
                            <input type="text" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="title">Note</label>
                            <input type="text" />
                        </div>

                   </form>
                    
                {/* </div>   */}
            </div>
        </>
    )
}

export default Modal