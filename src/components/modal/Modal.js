import React, { useEffect } from 'react'
import styles from './modal.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { addNoteRoute } from '../../utils/APIRoutes'
import { ToastContainer, toast } from 'react-toastify'

const Modal = ({ open, setOpenModal }) => {
    let token = localStorage.token;
    const toastOptions = {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "dark",
    }


    useEffect(() => {
        const closeModal = (e) => {
            e.keyCode === 27 ? setOpenModal(false) : setOpenModal(true)
        }
        // add event to key
        window.addEventListener("keydown", closeModal)
        return () => window.removeEventListener("keydown", closeModal)

    }, [setOpenModal])

    const Formik = useFormik({
        initialValues: {
            title: "",
            note: "",
        },

        // VALIDATIONS
        validationSchema: Yup.object({
            title: Yup.string().required("Note title is required").min(2, "hh"),
            note: Yup.string().required("Note content is required")
        }),

        onSubmit: async (values) => {
            try {
                const response = await axios.post(addNoteRoute, values, {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    }
                })
                const { data } = response;

                if (data.status) {
                    toast.success("Note added successfully", toastOptions);
                    setOpenModal(false);

                } else {
                    toast("Unable to add note", toastOptions);
                }

                console.log(data);
            } catch (err) {
                toast("Unable to add note, please try again", toastOptions);

                console.log("ERROR", err.response.data);
            }
        },


    })


    return (
        <>
            <div className={`${styles.modal} ${open ? styles.out : ''}`}>
                <button className={styles.closeBtn} onClick={() => setOpenModal(false)}>
                    <i className="bi bi-x"></i>
                </button>
                <div className={styles.modalContent}>
                    <form onSubmit={Formik.handleSubmit}>
                        <h1>Add New Note</h1>
                        <div className={styles.formGroup}>
                            <label htmlFor="title">Title</label>
                            <input type="text" placeholder='Note Title / Heading'
                                name='title' id='title'
                                required autoFocus
                                onChange={Formik.handleChange}
                                onBlur={Formik.handleBlur}
                                value={Formik.values.title}

                            />
                            {Formik.touched && Formik.errors.note ?
                                (<small className={styles.errors}>
                                    <i className='bi bi-info-circle'></i>{" "}
                                    {Formik.errors.note}
                                </small>) : null
                            }
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="note">Note</label>
                            <textarea name="note" id='note'
                                placeholder='Put your note in here...'
                                cols="30" rows="20" required
                                onChange={Formik.handleChange}
                                onBlur={Formik.handleBlur}
                                value={Formik.values.note}
                            ></textarea>
                        </div>
                        <button type='submit'>Add Note</button>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default Modal