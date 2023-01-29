import React from 'react'

const Home = () => {
    return (
        <>
            <header>
                <nav>
                    <div className='logo'>
                        <ul>
                            <li>NoteIt</li>
                        </ul>

                    </div>

                    <div className='menuItems'>
                        <ul>
                            <li>About</li>
                            <li>Sign in</li>
                            <li>FAQS</li>
                        </ul>

                        <button>Subscribe</button>
                    </div>

                </nav>
            </header>

            <main>
                <section className="cards">
                    <div className="info">
                        <h1>Welcome, user</h1>

                        <div className="btnGroup">
                            <button>Profile</button>
                            <button>Log Out</button>
                        </div>
                    </div>

                    <div className="notesCards">
                        <div className="note">
                            <h3>Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit. Amet, quis?
                            </p>
                        </div>
                        <div className="note">
                            <h3>Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit. Amet, quis?
                            </p>
                        </div>
                        <div className="note">
                            <h3>Title</h3>
                            <p>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit. Amet, quis?
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <div>
                    <h1>NoteIt</h1>
                    <p>&copy; 20223 NoteIt Made with love by Maclemon</p>
                </div>
            </footer>
        </>
    )
}

export default Home