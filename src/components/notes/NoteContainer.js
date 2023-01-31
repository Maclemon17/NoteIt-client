import React from 'react';
import styles from './NoteContainer.module.css'

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

                <div className={styles.notesGroup}>
                    <div className={styles.note}>
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h2 className={styles.title}>Title</h2>
                            </div>

                            <div className={styles.cardBody}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Delectus vel sequi neque voluptatum repellendus vitae unde ratione odio quae facilis.
                                </p>
                            </div>

                            <div className={styles.cardFooter}>
                                <small>Wed 12-01 01:00</small>
                            </div>
                        </div>
                    </div>
                    <div className={styles.note}>
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h2 className={styles.title}>Title</h2>
                            </div>

                            <div className={styles.cardBody}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Delectus vel sequi neque voluptatum repellendus vitae unde ratione odio quae facilis.
                                </p>
                            </div>

                            <div className={styles.cardFooter}>
                                <small>Wed 12-01 01:00</small>
                            </div>
                        </div>
                    </div>
                    <div className={styles.note}>
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h2 className={styles.title}>Title</h2>
                            </div>

                            <div className={styles.cardBody}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Delectus vel sequi neque voluptatum repellendus vitae unde ratione odio quae facilis.
                                </p>
                            </div>

                            <div className={styles.cardFooter}>
                                <small>Wed 12-01 01:00</small>
                            </div>
                        </div>
                    </div>
                    <div className={styles.note}>
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h2 className={styles.title}>Title</h2>
                            </div>

                            <div className={styles.cardBody}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Delectus vel sequi neque voluptatum repellendus vitae unde ratione odio quae facilis.
                                </p>
                            </div>

                            <div className={styles.cardFooter}>
                                <small>Wed 12-01 01:00</small>
                            </div>
                        </div>
                    </div>
                    <div className={styles.note}>
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h2 className={styles.title}>Title</h2>
                            </div>

                            <div className={styles.cardBody}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Delectus vel sequi neque voluptatum repellendus vitae unde ratione odio quae facilis.
                                </p>
                            </div>

                            <div className={styles.cardFooter}>
                                <small>Wed 12-01 01:00</small>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </main>
    )
}

export default NoteContainer