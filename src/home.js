import React from "react";
import Button from '@mui/material/Button';
import './App.css';
import App from "./App";
function Home(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <><App /><div className="center">
            <Button variant="contained" onClick={logout}>Logout</Button>
        </div></>
            
    );
}
export default Home;