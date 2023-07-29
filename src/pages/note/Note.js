import React from 'react'
import styles from './note.module.css'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';

const Note = () => {
    const { state } = useLocation();

    const editNote = () => {
        console.log("Edit note...");
    }

    return (
        <section>
            <div className={`container ${styles.pageContent}`}>
                <div className={styles.text} >
                    <h2>Title {state.title}</h2>
                    <p>
                        {state.note} <br />
                        Celiac pour-over fanny pack, adaptogen yuccie trust fund
                        tote bag man braid activated charcoal narwhal church-key crucifix.
                        Farm-to-table sartorial retro snackwave mixtape,
                        live-edge 8-bit activated charcoal art party succulents.
                        Crucifix actually try-hard wayfarers echo park skateboard,
                        street art shaman intelligentsia humblebrag celiac umami farm-to-table.
                    </p>

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