import { Box, Stack } from '@mui/system'
import React from 'react'
import Services from './Services'
import SignUp from './SignUp'
import Welcome from './Welcome'


const Landing = () => {
    return (
        <Box>
        <Stack>
            <Welcome/>
            <Services/>
            <SignUp/>
        </Stack>
      </Box>
    )
}

export default Landing