import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Services = () => {
    return (
      
        
        <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <div>1</div>
          </Grid>
          <Grid item xs={6}>
            <div>2</div>
          </Grid>
          <Grid item xs={6}>
            <div>3</div>
          </Grid>
          <Grid item xs={6}>
            <div>4</div>
          </Grid>
        </Grid>
      </Box>
    )
}

export default Services