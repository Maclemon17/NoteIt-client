import React from 'react';
import noteStyles from './note.module.css';

const Note = () => {
    return (
        <>
            <div className={noteStyles.cardWrapInner}>
                <div className={noteStyles.card}>
                    <div className={noteStyles.cardTitle}>
                        <h2>Note Title</h2>
                    </div>

                    <div className={noteStyles.cardText}>
                        <p>Celiac pour-over fanny pack, adaptogen yuccie trust fund
                            tote bag man braid activated charcoal narwhal church-key crucifix.
                            Farm-to-table sartorial retro snackwave mixtape,
                            live-edge 8-bit activated charcoal art party succulents.
                            Crucifix actually try-hard wayfarers echo park skateboard,
                            street art shaman intelligentsia humblebrag celiac umami farm-to-table.
                        </p>
                    </div>
                    <div className={noteStyles.cardItem}>
                        <small>01 Feb, 2023</small>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Note