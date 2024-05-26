/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { validate } from "./validate";
import { notify } from "./toast";
import styles from "./SignUp.module.css";
import Footer from "./Footer";


const ForgotPassword = () => {
    
    
    const [data, setData] = useState({
        email: "",
        password: "",
        isChecked: false,
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

   

 
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

    const signinForm = () => (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                
                <span className={styles.header1}>Forgot Password</span>
                <div className={styles.borderbottom}></div>
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
                
                <div className={styles.formButtons}>
                    <button type="submit" onClick={submitHandler} className={styles.submitbutton}>Reset Password</button>
                </div>
                <div className="mt-3">
                    <Link to="/account/login">Back to Login</Link>
                </div>
            </form>
        </div>
    );

    return (
        <div>
            <img src="https://vdmpi.multifamilyportal.app/theme/branding/logo" alt="logo" className={styles.imagesize}></img>
            {signinForm()}
            <Footer />
        </div>
    );
};

export default ForgotPassword;
