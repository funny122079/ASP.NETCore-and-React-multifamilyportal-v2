/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link,useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { validate } from "./validate";
import { notify } from "./toast";
import styles from "./SignUp.module.css";
import Google from "./Google";
import Personal from "./Personal";
import Footer from "./Footer";
import axios from 'axios'

const DefaultLogin = () => {
    
    const [data, setData] = useState({
        email: "",
        password: "",
        isChecked: false,
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isSaving, setIsSaving] = useState(false);

   

 
    useEffect(() => {
        setErrors(validate(data, "login"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, touched]);

    const changeHandler = (event) => {
        if (event.target.name === "isChecked") {
            setData({ ...data, [event.target.name]: event.target.checked });
        } else {
            setData({ ...data, [event.target.name]: event.target.value });
        }
    };

    const focusHandler = (event) => {
        setTouched({ ...touched, [event.target.name]: true });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You Logged in", "success");
        } else {
            notify("invalid data", "error");
            setTouched({
                email: true,
                password: true,
                isChecked: true,
            });
        }
    };
   

    const handleSave = () => {
        /* kminchelle */
        /* 0lelplR */
        setIsSaving(true);
        var em = email;
        var pas = password;

        axios.post('/auth/login', {
            username: em,
            password: pas
        })
            .then(function (response) {
                localStorage.setItem("user", JSON.stringify(response.data));
                localStorage.setItem("token", response.data.token);
                Swal.fire({
                    icon: 'success',
                    title: 'Login successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate("/dashboard");
                setIsSaving(false);
                setEmail('');
                setPassword('');
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'An Error Occured!',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsSaving(false)
            });
    }

    const signinForm = () => (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h5 className={styles.header}>Login</h5>
                <div className="form-floating mb-3">
                    <input
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        type="text"
                        name="email"
                        className="form-control"
                        id="floatingEmail"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingEmail">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        type="text"
                        name="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="mb-3 d-flex align-items-center justify-content-center">
                    <label>Remember Me</label>
                    <input
                        value={data.isChecked}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        type="checkbox"
                        name="isChecked"
                    />
                </div>
                <div className={styles.formButtons}>
                    <button type="submit" disabled={isSaving} onClick={handleSave} className={styles.submitbutton}>Login</button>
                </div>
                <div className="mt-3">
                    <Link to="/account/forgot-password">Forgot your password</Link>
                </div>
                
            </form>
        </div>
    );

    return (
        <div>
            <img src="https://vdmpi.multifamilyportal.app/theme/branding/logo" alt="logo" className={styles.imagesize}></img>
            {signinForm()}
            <Personal />
            <Google />
            <Footer />
        </div>
    );
};

export default DefaultLogin;
