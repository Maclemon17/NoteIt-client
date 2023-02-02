import React from 'react';
import styles from './NoteContainer.module.css'
import Note from '../note/Note';
import cardStyles from '../note/note.module.css'

const NoteContainer = () => {
    return (
        <main>
            <div className={`container ${styles.notes}`}>
                <div className={styles.actionsBox}>
                    <h1>Welcome, Maclemon</h1>

                    <div className={styles.buttons}>
                        <button><i className="bi bi-person"></i> Profile</button>
                        <button><i className="bi bi-power"></i> Log out</button>
                    </div>
                </div>

                {/* NOTES CARDS */}
                <div className={styles.notesGroup}>
                    {/* ADD NEW NOTE */}
                    <div className={cardStyles.cardWrapInner} >
                        <div className={`${cardStyles.card} ${styles.add}`}>
                            <div className={cardStyles.cardText}>
                                <i className="bi bi-plus-circle"></i>
                                <h3>Add New Note</h3>
                            </div>
                            
                        </div>
                    </div>

                    {/* NOTES GOES HERE...... */}
                   <Note />
                   <Note />
                   <Note />
                   <Note />
                    
                </div>
            </div>
        </main>
    )
}

export default NoteContainer