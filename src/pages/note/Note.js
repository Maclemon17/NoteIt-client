import React from 'react'
import styles from './note.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button';

const Note = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const editNote = () => {
        console.log("Edit note...");
    }

    const prevPage = () => {
        navigate(-1)
    }

    const text = <i className='bi bi-arrow-left-circle'></i>;

    return (
        <section>
            <div className={`container ${styles.pageContent}`}>
                <Button width={"15%"} text={text} onClick={prevPage} />

                <div className={styles.text} >
                    <h2>{state.title}</h2>
                    <p>{state.note}</p>

                </div>
                <div className={styles.timestamps}>
                    <span>Created At: {state.createdAt}</span>
                    <span>Updated At: {state.updatedAt}</span>
                </div>

                <div className={styles.actions}>
                    <button onClick={() => editNote()}><i className="bi bi-pencil"></i> Edit Note</button>
                    <button><i className="bi bi-trash"></i> Delete Note</button>
                </div>
            </div>
        </section>
    )
}

export default Note