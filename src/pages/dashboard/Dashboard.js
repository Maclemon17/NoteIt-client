import React from 'react'
import NoteContainer from '../../components/notes/NoteContainer'
import styles from './dashboard.module.css'
import Modal from '../../components/modal/Modal'

const Dashboard = () => {
  return (
    <section className={` ${styles.dash}`}>
        {/* <NoteContainer /> */}
        <Modal />
    </section>
  )
}

export default Dashboard