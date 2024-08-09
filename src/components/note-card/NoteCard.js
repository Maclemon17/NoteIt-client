import React from 'react';
import noteStyles from './note.module.css';
import { useNavigate } from 'react-router-dom';

const NoteCard = ({ note, edit, handleDelete }) => {
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
                            <i className="bi bi-trash"
                                onClick={() => handleDelete(note._id)}>
                            </i>
                        </span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default NoteCard