import React from 'react'
import './Login.css'
import Logo from './image/Facebook-logo.png'
import Text from './image/Text.png'
import { Button } from '@material-ui/core'
import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const[state,dispatch]=useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
    return (
        <div className="login">
            <div className="login_logo">
            <img src={Logo} alt=""  />
            <img src={Text} alt="" height= "50px" />
         
            </div>
            <Button type="submit" onClick={signIn}>
                Sign in
            </Button>
    
            
        </div>
    )
}

export default Login
