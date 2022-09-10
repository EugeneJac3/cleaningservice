import React, {useEffect} from 'react';
import "../Auth.css";
import { useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie'
import axios from 'axios';


export default function Protected(){
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);
    useEffect(() => {
        const verifyUser = async () => {
            if(!cookies.jwt){
                navigate("/login");
            } else{
                const {data} = await axios.post(
                    "http://localhost:3001",
                    {},
                    {
                        withCredentials:true
                    }
                    );
                    console.log("front end data", data)
                    if(!data.status){
                        removeCookie("jwt")
                        navigate("/login");
                    } else console.log("Hi", data.user)
            }
        };
        console.log("i fire twice")
        verifyUser();
        
    }, [cookies,navigate, removeCookie]);

    const logOut = () => {
        removeCookie("jwt");
        navigate("/login")
    };
    return (
    
    <div className="private">
        <h1>Protected page</h1>
        <button onClick={logOut}>Log Out</button>
        </div>
        
   
   
    )
}