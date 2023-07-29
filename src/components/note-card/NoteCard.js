import React from 'react';
import noteStyles from './note.module.css';
import { useNavigate } from 'react-router-dom';

const NoteCard = ({ note, edit, deleteNote }) => {
    const navigate = useNavigate()
    // console.log(note);
    return (
        <>
            <div id={note._id} className={noteStyles.cardWrapInner}>
                <div className={noteStyles.card} >
                    <div className={noteStyles.cardTitle}>
                        <h2>{note.title}</h2>
                    </div>

                    <div className={noteStyles.cardText}
                        onClick={() => navigate(`/note/${note._id}`, { state: note })}
                    >
                        <p>{note.note}</p>
                    </div>
                    <div className={noteStyles.cardItem}>
                        <small>{note.createdAt}</small>

                        <span>
                            <i onClick={() => edit(note)} className="bi bi-pencil"></i>
                            <i onClick={() => deleteNote(note._id)} className="bi bi-trash"></i>
                        </span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default NoteCard