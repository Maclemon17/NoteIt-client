import React from 'react'
import NoteContainer from '../../components/notes/NoteContainer'
import styles from './dashboard.module.css'

const Dashboard = () => {
  return (
    <section className={` ${styles.dash}`}>
        <NoteContainer />
    </section>
  )
}

export default Dashboard