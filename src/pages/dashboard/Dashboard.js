import React from 'react'
import NoteContainer from '../../components/notes/NoteContainer'
import styles from './dashboard.module.css'

const Dashboard = ({ openModal }) => {
  return (
    <section className={` ${styles.dash}`}>
      <NoteContainer setOpenModal={openModal} />

    </section>
  )
}

export default Dashboard