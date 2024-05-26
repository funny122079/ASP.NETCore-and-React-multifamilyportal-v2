import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import styles from "./SignUp.module.css";

// destructure props
const clientId = 'Your-Client-Id';

const Personal = ({informParent = f => f}) => {
  const responseGoogle = (response) => {
    // request backend
    console.log(response.tokenId);
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API}/google-login`,
      data: {idToken: response.tokenId}
    })
    // pass to auth helpers to save userinfo in localstorage and cookie
    .then(response => {
      console.log('GOOGLE SIGN IN SUCCESS', response);
      // inform parent component
      informParent(response);
    })
    // catch errors
    .catch(error => {
      console.log('GOOGLE SIGN IN ERROR', error.response);
    });
  };

  return (
    <div className='mt-1'>
        <h5 className={styles.header}>Or use an existing account.</h5>
        <div className={styles.container}>
          <div className={styles.googlediv}>
            <GoogleLogin
              clientId={clientId}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className={styles.btn}>
                  <div className={styles.btnflex}>
                    <div className={styles.icondiv}>
                        <svg alt="Microsoft" role="presentation" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
                            <g fill="none" fillRule="evenodd">
                                <path fill="#F15022" d="M0 0h9v9H0z" className={styles.microsoft1}></path>
                                <path fill="#7FBA00" d="M10 0h9v9h-9z" className={styles.microsoft2}></path>
                                <path fill="#00A4EF" d="M0 10h9v9H0z" className={styles.microsoft3}></path>
                                <path fill="#FFB900" d="M10 10h9v9h-9z" className={styles.microsoft4}></path>
                            </g>
                        </svg>
                    </div>
                    <div className={styles.letterdiv}>Personal, Company or School</div>
                  </div>
                </button>
              )}
              cookiePolicy={'single_host_origin'}
            />
          </div>
       </div>
    </div>
  )
};

export default Personal;
