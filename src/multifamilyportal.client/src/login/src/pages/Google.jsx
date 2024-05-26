import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import styles from "./SignUp.module.css";

const clientId = 'Your-Client-Id';
// destructure props
const Google = ({informParent = f => f}) => {
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
    <div className='mt-3'>
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
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48">
                        <g b-8w8160xlh3=""><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" b-8w8160xlh3=""></path>
                          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" b-8w8160xlh3=""></path>
                          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" b-8w8160xlh3=""></path>
                          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" b-8w8160xlh3=""></path>
                          <path fill="none" d="M0 0h48v48H0z" b-8w8160xlh3=""></path>
                        </g>
                      </svg> 
                    </div>
                    <div className={styles.letterdiv}>Sign in with Google</div>
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

export default Google;
