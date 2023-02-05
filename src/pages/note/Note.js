import React from 'react'
import styles from './note.module.css'

const Note = () => {
    return (
        <section>
            <div className={`container ${styles.pageContent}`}>
                <div className={styles.text} contentEditable="true">
                    <h2>Title</h2>
                    <p>Celiac pour-over fanny pack, adaptogen yuccie trust fund
                        tote bag man braid activated charcoal narwhal church-key crucifix.
                        Farm-to-table sartorial retro snackwave mixtape,
                        live-edge 8-bit activated charcoal art party succulents.
                        Crucifix actually try-hard wayfarers echo park skateboard,
                        street art shaman intelligentsia humblebrag celiac umami farm-to-table.
                    </p>
                </div>

                <div className={styles.actions}>
                    <button><i className="bi bi-pencil"></i> Edit Note</button>
                    <button><i className="bi bi-trash"></i> Delete Note</button>
                </div>
            </div>
        </section>
    )
}

export default Note