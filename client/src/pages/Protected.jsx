import React from 'react';
import "../Auth.css";
import { useNavigate } from 'react-router-dom';

export default function Protected(){
    const navigate = useNavigate();
    const logOut = () => {
        navigate("/register")
    }
    return <div className="private">
        <h1>Protected page</h1>
        <button onClick={logOut}>Log Out</button>
    </div>
}