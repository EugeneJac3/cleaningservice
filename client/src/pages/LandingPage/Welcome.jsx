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

        {/* Place holder below */}
        <div
        className="welcome">

            <div>House Cleaning Service</div>
            <div> Huntsville, AL and Memphis, TN</div>
         
        </div>
        </div>

   
    )
}

export default Welcome