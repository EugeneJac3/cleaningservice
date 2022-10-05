import { Box } from '@mui/system'
import React from 'react'
import groupClean from "../images/groupClean.jpg"

const Welcome = () => {
    return (
        <Box
        sx={{
            
            // border: "1px solid black",
            backgroundImage: `url(${groupClean})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'


        }}
        >
        <p

        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: ' center',
            height: '80vh',
            color:'white',
            fontSize:'70px'

        }}
        >Welcome To Heavenly Cleaning</p>
        
      </Box>
    )
}

export default Welcome