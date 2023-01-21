import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Modal } from '@mui/material';
import './Services.css';
import cleaningWindow from "../images/cleaningWindow.jpg";
import groupClean from "../images/groupClean.jpg";



const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}


const Services = () => {

 
  

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return (
      
        
        <Box className="backgroundDiv2"
        
        sx={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',

           
           
            }}>
        
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height:'100vh',
                gap:'50px',
                
            }}
            >
                  <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={cleaningWindow}
                    alt="cleaningWindow"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Standard Cleaning
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      
                    <Button onClick={handleOpen}>Details</Button>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={modalStyle}>
                              <Typography id="modal-modal-title" variant="h6" component="h2">
                                Standard Cleaning
                              </Typography>
                              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                              <ul>
                                <li>Kitchen - Wipe fridge, clean countertops, wipe down appliances, clean the sink, stove, and microwave.</li>
                                <li>Bathrooms - Clean countertops, clean the washbasins, scrub toilets, rinse and wipe the tub and/or shower</li>
                                <li>Bedrooms - Quick de-clutter, make beds, dust all surfaces, and wipe down tables</li>
                                <li>All areas - Empty trash, vacuum and mop, dust all surfaces</li>
                              </ul>
                              <br></br>
                              Housework is a full-time job, and with Heavenly Help, doing it daily  becomes a choice. We feel that everyone should do the job they love and not the one they must.
                              </Typography>
                            </Box>
                          </Modal>

                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>


                  <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={groupClean}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Deep Cleaning
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      

                    <Button onClick={handleOpen}>Details</Button>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={modalStyle}>
                              <Typography id="modal-modal-title" variant="h6" component="h2">
                                Deep Cleaning Services include
                              </Typography>
                              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                              <ul>
                                <li>All Areas - Emptying bins, Vacuuming and mopping, Dusting all surfaces, Cleaning baseboards and light switches, Cleaning window ledges and Dusting and wiping the doors</li>
                                <li>Bedrooms - Quick de-cluttering, making beds, dusting all surfaces, and Wiping tables. Changing sheets is done upon request</li>
                                <li>Bathrooms - Cleaning countertops, Scrubbing Toilets, Cleaning sink, Scrubbing, rinsing and wiping the tub and showers, Polishing mirrors and chrome</li>
                                <li>Kitchen - Wiping the fridge, Cleaning countertops, Wiping appliances, Cleaning the sink, Cleaning the stove, Cleaning the stainless steel, Wiping the oven</li>
                              </ul>
                              <br></br>
                              Our deep Cleaning Service staff knows how to tackle dirt and grime most efficiently, organizing cleaning by your needs, preferences, and the time available for the job.
                              </Typography>
                            </Box>
                          </Modal>


                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>


                  <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Move In/Out Cleaning
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      
                    <Button onClick={handleOpen}>Details</Button>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={modalStyle}>
                              <Typography id="modal-modal-title" variant="h6" component="h2">
                                Move In/Out Cleaning 
                              </Typography>
                              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                              <ul>
                                <li>All Areas -  Emptying bins, Vacuuming and mopping, Dusting all surfaces, Cleaning baseboards and light switches, Cleaning window ledges and Dusting and wiping the doors</li>
                                <li>Bedrooms - Quick de-cluttering, Making beds, Dusting all surfaces and Wiping tables, Cleaning cabinets and drawers inside out. Changing sheets is done upon request</li>
                                <li>Bathrooms - Cleaning countertops, Scrubbing Toilets, Cleaning sink, Scrubbing, rinsing and wiping the tub and showers, Polishing mirrors and chrome, Cleaning cabinets and drawers inside as well as outside</li>
                                <li>Kitchen - Wiping the fridge, Cleaning countertops, Wiping appliances, Cleaning the sink, Cleaning the stove, Cleaning the stainless steel, Wiping the oven, Cleaning the microwave, cabinets, and drawers inside as well as outside</li>
                              </ul>
                              <br></br>
                              Don’t let cleaning dim the spark of excitement moving brings. Instead, focus on organizing your new home and life, and we’ll make sure your new home welcomes you all clean and fresh and ready for making memories. We promise to leave your old home spotless and in the best condition possible for new tenants and homeowners. We’ve got your back. 
                              </Typography>
                            </Box>
                          </Modal>


                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
        </Box>

      </Box>
    )
}

export default Services