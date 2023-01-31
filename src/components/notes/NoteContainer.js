import React from 'react';
import styles from './NoteContainer.module.css'

const NoteContainer = () => {
    return (
        <main>
            <div className={`container ${styles.notes}`}>
                <div className={styles.actionsBox}>
                    <h1>Welcome, Maclemon</h1>

                    <div className={styles.buttons}>
                        <button>Profile</button>
                        <button>Log out</button>
                    </div>
                </div>

                <div className={styles.notesGroup}>
                    <div className={styles.note}>
                        <h2 className={styles.title}>Title</h2>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Delectus vel sequi neque voluptatum repellendus vitae unde ratione odio quae facilis.
                        </p>
                    </div>
                    <div className={styles.note}>
                        <h2 className={styles.title}>Title</h2>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Delectus vel sequi neque voluptatum repellendus vitae unde ratione odio quae facilis.
                        </p>
                    </div>
                    <div className={styles.note}>
                        <h2 className={styles.title}>Title</h2>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Delectus vel sequi neque voluptatum repellendus vitae unde ratione odio quae facilis.
                        </p>
                    </div>
                    <div className={styles.note}>
                        <h2 className={styles.title}>Title</h2>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Delectus vel sequi neque voluptatum repellendus vitae unde ratione odio quae facilis.
                        </p>
                    </div>
                    <div className={styles.note}>
                        <h2 className={styles.title}>Title</h2>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Delectus vel sequi neque voluptatum repellendus vitae unde ratione odio quae facilis.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NoteContainer