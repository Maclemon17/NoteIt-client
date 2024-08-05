import React, { useEffect } from 'react'
import styles from './signin.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { signInRoute } from '../../../utils/APIRoutes'
import { ToastContainer, toast } from 'react-toastify'


const Signin = () => {
    const navigate = useNavigate();
    const token = localStorage.token;

    const toastOptions = {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "dark",
    }

    useEffect(() => {
        if (token) {
            navigate("/dashboard", { replace: true })
        }
    }, [token, navigate])


    const Formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        // VALIDATIONS
        validationSchema: Yup.object({
            email: Yup.string().email().required("Email is required"),
            password: Yup.string().min(8, "Password must be atleast 8 characters")
                .required("Password is required"),
        }),

        onSubmit: async (values) => {
            try {
                const res = await axios.post(signInRoute, values);
                if (res.data.status) {
                    // SET TOKEN TO LOCALSTORAGE
                    localStorage.setItem("token", res.data.token);

                    setTimeout(() => {
                        navigate('/dashboard', { replace: true });
                    }, 3000);

                    toast.success(res.data.message, toastOptions);
                }
                // console.log(res);
            } catch (err) {
                if (err.response) {
                    const { data, status } = err.response;

                    switch (status) {
                        case 401:
                            toast.error("Invalid credentials, try again", toastOptions);
                            break;
                        case 404:
                            toast.error("User not found, register an account", toastOptions);
                            break;
                        default:
                            toast.error(data.message, toastOptions);
                            break;
                    }
                } else {
                    toast.error(`${err.message}, Check internet connection`,
                        toastOptions);
                }
            }

            // console.log(Formik.isValid);
        },


    })

    return (
        <section className='container'>
            <form className={styles.formWrapper} onSubmit={Formik.handleSubmit}>
                <div className={styles.formContainer}>
                    <h2>Sign in to continue</h2>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder='example@domain.com'
                            required autoFocus
                            id='email' name='email'
                            onChange={Formik.handleChange}
                            onBlur={Formik.handleBlur}
                            value={Formik.values.email}
                        />
                        {Formik.touched.email && Formik.errors.email ?
                            (<small className={styles.errors}>
                                <i className='bi bi-info-circle'></i>{" "}
                                {Formik.errors.email}
                            </small>
                            ) : null
                        }
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='password'
                            required name='password' id='password'
                            onChange={Formik.handleChange}
                            onBlur={Formik.handleBlur}
                        />
                        {Formik.touched.password && Formik.errors.password ?
                            (<small className={styles.errors}>
                                <i className='bi bi-info-circle'></i>{" "}
                                {Formik.errors.password}
                            </small>
                            ) : null
                        }
                    </div>
                    <button type='submit'>Sign in</button>

                    <p className={styles.para}>
                        Don't have an account? {" "}
                        <Link to="/signup">Sign Up</Link>
                    </p>
                </div>

            </form>
            <ToastContainer />
        </section>
    )
}

export default Signin