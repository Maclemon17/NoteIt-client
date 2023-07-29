import React from 'react';
import styles from '../signin/signin.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios'
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUpRoute } from '../../../utils/APIRoutes';

const Signup = () => {
    const navigate = useNavigate();
    
    const toastOptions = {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "dark",
    }

    const Formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            hasAcceptedTerms: false
        },

        onSubmit: async (values) => {
            const data = {
                username: values.username,
                email: values.email,
                password: values.email,
                hasAcceptedTerms: values.hasAcceptedTerms
            }

            try {
                const res = await axios.post(signUpRoute, data);

                if (res.data.status) {
                    // redirect to sign in
                    toast(res.data.message, toastOptions);
                    setTimeout(() => {
                        navigate("/signin")
                    }, 3000);
                }
                // show error alert
                toast(res.data.message, toastOptions);

                console.log(res.data.message);

            } catch (err) {
                toast.error("Request Failed, try again", toastOptions);
                console.log("ERROR:", err);
            }

            // console.table(values, data);
        },


        // VALIDDATIONS
        validationSchema: Yup.object({
            username: Yup.string().min(3, "Must be atleast 3 characters")
                .required("Username is required"),
            email: Yup.string().email().required("Email is required"),
            password: Yup.string().min(8, "Password must be atleast 8 characters")
                .required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Password does not match"),
            hasAcceptedTerms: Yup.boolean().required()

        })
    })
    // console.log("Errors", Formik.touched && Formik.errors);


    // Formik.touched && Formik.errors ? toast(Formik.errors, toastOptions) : ""



    return (
        <section className='container'>
            <form className={styles.formWrapper} onSubmit={Formik.handleSubmit}>
                <div className={styles.formContainer}>
                    <h2>Create an account to continue</h2>
                    <div className={styles.formGroup}>
                        <label htmlFor="text">Username</label>
                        <input type="text" placeholder='Username'
                            name='username' id='username'
                            required autoFocus
                            onChange={Formik.handleChange}
                            onBlur={Formik.handleBlur}
                            value={Formik.values.username}
                        />
                        {Formik.touched.username && Formik.errors.username ?
                            (<small className={styles.errors}><i className='bi bi-info-circle'></i>{" "}
                                {Formik.errors.username}</small>) : null
                        }
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder='example@domain.com'
                            name='email' id='email' required
                            onChange={Formik.handleChange}
                            onBlur={Formik.handleBlur}
                            value={Formik.values.email}
                        />
                        {Formik.touched.email && Formik.errors.email ?
                            (<small className={styles.errors}><i className='bi bi-info-circle'></i>{" "}
                                {Formik.errors.email}</small>) : null
                        }
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='password'
                            name='password' id='password' required
                            onChange={Formik.handleChange}
                            onBlur={Formik.handleBlur}
                            value={Formik.values.password}
                        />
                        {Formik.touched.password && Formik.errors.password ?
                            (<small className={styles.errors}><i className='bi bi-info-circle'></i>{" "}
                                {Formik.errors.password}</small>) : null
                        }
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" placeholder='password'
                            id='confirmPassword' required
                            onChange={Formik.handleChange}
                            onBlur={Formik.handleBlur}
                            value={Formik.values.confirmPassword}
                        />
                        {Formik.touched.confirmPassword && Formik.errors.confirmPassword ?
                            (<small className={styles.errors}><i className='bi bi-info-circle'></i>{" "}
                                {Formik.errors.confirmPassword}</small>) : null
                            /*  <i className="bi bi-check-circle"></i> */
                        }
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="hasAcceptedTerma"></label>
                        <input type="checkbox" name="hasAcceptedTerms"
                            id="hasAcceptedTerms" required
                            onChange={Formik.handleChange}
                            onBlur={Formik.handleBlur}
                            value={Formik.values.hasAcceptedTerms}
                        />

                        <span>Accept terms and conditions</span>
                    </div>
                    <button type='submit'>Sign Up</button>

                    <p className={styles.para}>
                        Already have an account? {" "}
                        <Link to="/signin">Sign In</Link>
                    </p>
                </div>

            </form>
            <ToastContainer />
        </section>
    )
}

export default Signup