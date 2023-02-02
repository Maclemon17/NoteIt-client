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

                {/* NOTES CARDS */}
                <div className={styles.notesGroup}>
                    {/* ADD NEW NOTE */}
                    <div className={styles.cardWrapInner} >
                        <div className={`${styles.card} ${styles.add}`}>
                            <div className={styles.cardText}>
                                <i className="bi bi-plus-circle"></i>
                                <h3>Add New Note</h3>
                            </div>
                            
                        </div>
                    </div>

                    {/*  */}
                    <div className={styles.cardWrapInner}>
                        <div className={styles.card}>
                            <div className={styles.cardTitle}>
                                <h2>Card Title</h2>
                            </div>
        
                            <div className={styles.cardText}>
                                <p>Celiac pour-over fanny pack, adaptogen yuccie trust fund 
                                    tote bag man braid activated charcoal narwhal church-key crucifix. 
                                    Farm-to-table sartorial retro snackwave mixtape, 
                                    live-edge 8-bit activated charcoal art party succulents. 
                                    Crucifix actually try-hard wayfarers echo park skateboard, 
                                    street art shaman intelligentsia humblebrag celiac umami farm-to-table.
                                    </p>
                            </div>
                            <div className={styles.cardItem}>
                                <small>01 Feb, 2023</small>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.cardWrapInner}>
                        <div className={styles.card}>
                            <div className={styles.cardTitle}>
                                <h2>Card Title</h2>
                            </div>
        
                            <div className={styles.cardText}>
                                <p>Celiac pour-over fanny pack, adaptogen yuccie trust fund 
                                    tote bag man braid activated charcoal narwhal church-key crucifix. 
                                    Farm-to-table sartorial retro snackwave mixtape, 
                                    live-edge 8-bit activated charcoal art party succulents. 
                                    Crucifix actually try-hard wayfarers echo park skateboard, 
                                    street art shaman intelligentsia humblebrag celiac umami farm-to-table.
                                    </p>
                            </div>
                            <div className={styles.cardItem}>
                                <small>01 Feb, 2023</small>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.cardWrapInner}>
                        <div className={styles.card}>
                            <div className={styles.cardTitle}>
                                <h2>Card Title</h2>
                            </div>
        
                            <div className={styles.cardText}>
                                <p>Celiac pour-over fanny pack, adaptogen yuccie trust fund 
                                    tote bag man braid activated charcoal narwhal church-key crucifix. 
                                    Farm-to-table sartorial retro snackwave mixtape, 
                                    live-edge 8-bit activated charcoal art party succulents. 
                                    Crucifix actually try-hard wayfarers echo park skateboard, 
                                    street art shaman intelligentsia humblebrag celiac umami farm-to-table.
                                    </p>
                            </div>
                            <div className={styles.cardItem}>
                                <small>01 Feb, 2023</small>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.cardWrapInner}>
                        <div className={styles.card}>
                            <div className={styles.cardTitle}>
                                <h2>Card Title</h2>
                            </div>
        
                            <div className={styles.cardText}>
                                <p>Celiac pour-over fanny pack, adaptogen yuccie trust fund 
                                    tote bag man braid activated charcoal narwhal church-key crucifix. 
                                    Farm-to-table sartorial retro snackwave mixtape, 
                                    live-edge 8-bit activated charcoal art party succulents. 
                                    Crucifix actually try-hard wayfarers echo park skateboard, 
                                    street art shaman intelligentsia humblebrag celiac umami farm-to-table.
                                    </p>
                            </div>
                            <div className={styles.cardItem}>
                                <small>01 Feb, 2023</small>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.cardWrapInner}>
                        <div className={styles.card}>
                            <div className={styles.cardTitle}>
                                <h2>Card Title</h2>
                            </div>
        
                            <div className={styles.cardText}>
                                <p>Celiac pour-over fanny pack, adaptogen yuccie trust fund 
                                    tote bag man braid activated charcoal narwhal church-key crucifix. 
                                    Farm-to-table sartorial retro snackwave mixtape, 
                                    live-edge 8-bit activated charcoal art party succulents. 
                                    Crucifix actually try-hard wayfarers echo park skateboard, 
                                    street art shaman intelligentsia humblebrag celiac umami farm-to-table.
                                    </p>
                            </div>
                            <div className={styles.cardItem}>
                                <small>01 Feb, 2023</small>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default NoteContainer