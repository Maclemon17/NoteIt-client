import React, { useEffect, useState } from 'react';
import styles from './NoteContainer.module.css'
import NoteCard from '../note-card/NoteCard';
import cardStyles from '../note-card/note.module.css'
import axios from 'axios';
import { getAllNotesRoute } from '../../utils/APIRoutes';
import { toast } from 'react-toastify';

const NoteContainer = ({ setOpenModal, profileData, edit, deleteNote }) => {
    // const token = localStorage.token;
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        async function getAllNotes() {
            try {
                const token = localStorage.token;
                const response = axios.get(getAllNotesRoute, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                })
                const { data } = await response;

                if (data.status) {
                    // console.log(data.allNotes.reverse());
                    setNotes(data.allNotes.reverse());
                }

            } catch (error) {
                toast.error(error.message, { theme: "dark" })
                localStorage.removeItem("token");
            }
        }

        getAllNotes();

    }, [notes])

    // console.log(notes);
    return (
        <section>
            {
                !profileData ? (
                    <div>
                        <div className="spinner-grow text-light" style={{ width: "5rem", height: "5rem" }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className={`container ${styles.notes}`}>
                        <div className={styles.actionsBox}>
                            <h1>Welcome, {profileData.username}</h1>

                            <div className={styles.buttons}>
                                <button><i className="bi bi-person"></i> Profile</button>
                                <button><i className="bi bi-power"></i> Log out</button>
                            </div>
                        </div>

                        {/* NOTES CARDS */}
                        <div className={styles.notesGroup}>
                            {/* ADD NEW NOTE */}
                            <div className={cardStyles.cardWrapInner} >
                                <div className={`${cardStyles.card} ${styles.add}`}
                                    onClick={() => setOpenModal(true)}
                                >
                                    <div className={cardStyles.cardText} >
                                        <i className="bi bi-plus-circle"></i>
                                        <h3>Add New Note</h3>
                                    </div>

                                </div>
                            </div>

                            {/* NOTES GOES HERE...... */}
                            {
                                notes ? notes.map((note, index) => (
                                    <NoteCard note={note} key={index}
                                        edit={edit} deleteNote={deleteNote}
                                    />
                                )) : null
                            }

                        </div>
                    </div>
                )
            }

        </section>
    )
}

export default NoteContainer