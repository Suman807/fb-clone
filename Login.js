import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth,provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider"; 

function Login() {
    const [state, dispatch] = useStateValue();
    
    const Signin = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                console.log(result.user);
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="Login">
            <div className="Login_logo">
                <img className="apple_logo" src="apple_logo.png" 
                alt=""
                />
                <img className="apple_text" src="https://logoeps.com/wp-content/uploads/2013/07/apple-text-vector-logo.png" 
                alt=""
                />
            </div>
            <Button type="Submit" onClick={Signin}
            >
                Sign In
            </Button>
            
        </div>
    )
}


export default Login;
