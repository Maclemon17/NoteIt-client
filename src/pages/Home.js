import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import NoteContainer from '../components/notes/NoteContainer'

const Home = () => {
    return (
        <>
          <Header />
          <NoteContainer />
          {/* <Footer /> */}
        </>
    )
}

export default Home