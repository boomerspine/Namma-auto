import React, { useEffect, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import App from "./App";
import Button from '@mui/material/Button';
import './App.css';
import Home from "./home";

function SignIn(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    }, [])

return (
    <div>
        {value?<Home/>:
        <div className="center">
        <Button variant="contained" onClick={handleClick}>SignIn with Google</Button>
      </div>
        // <button onClick={handleClick}>Signin With Google</button>
        }
    </div>
);
}
export default SignIn;