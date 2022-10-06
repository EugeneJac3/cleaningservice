import { bgcolor, Box } from '@mui/system'
import React from 'react'
import livingRoom from "../images/livingRoom.jpg"
import heavenlyLogo from "../images/heavenlyLogo.png"
import './Welcome.css';

const Welcome = () => {

    return (
       

        <div
        className="backgroundDiv"
         style={{
            
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
         }}
        
        >
        <img 
       className="logo"
        src={heavenlyLogo}/>
        <p
        className="welcome"
        
        >House Cleaning Service in Huntsville, AL and Memphis, TN</p>
        </div>

   
    )
}

export default Welcome