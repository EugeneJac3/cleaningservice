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
import toilet from "../images/toilet.jpeg";
import moving from "../images/moving.jpg";



const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #d6caa9',
  boxShadow: 24,
  p: 4,
}


const Services = () => {

 
  

    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);


    const handleOpen1 = () => setOpen1(true);
    const handleOpen2 = () => setOpen2(true);
    const handleOpen3 = () => setOpen3(true);

    const handleClose1 = () => setOpen1(false);
    const handleClose2 = () => setOpen2(false);
    const handleClose3 = () => setOpen3(false);



    return (
      
        
        <Box className="backgroundDiv2"
        sx={{
          display: "flex",
          minHeight: "100vh",
         
        }}
        >
        
       


        


            <Grid container className="cardBox" 
            sx={{
                display: 'flex',
                flexDirection: 'row',
                rowGap:"30px",
                alignItems: 'center',
                justifyContent: 'space-evenly',
                padding: "50px",
                minHeight: "100vh",
                
                
                
                
                
               
            }}
            >
             
              <h1 className="service">Our Services</h1>
              

              <Grid item component={Card}> 
                              <Card sx={{ 
                                maxWidth: 345 ,
                                borderStyle: "solid",
                                borderWidth: 2,
                                borderColor: "#d6caa9",
                                }}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="100%"
                                image={cleaningWindow}
                                alt="cleaningWindow"
                              />
                              <CardContent sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                
                              }}>
                                <Typography gutterBottom variant="h5" component="div">
                                  Standard Cleaning
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  
                                <Button onClick={handleOpen1}>Details</Button>
                                      <Modal
                                        open={open1}
                                        onClose={handleClose1}
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
                  </Grid>

                          {/* Card 2 Start */}
                  <Grid item component={Card}>

                              <Card sx={{
                                 maxWidth: 345,
                                 borderStyle: "solid",
                                borderWidth: 2,
                                borderColor: "#d6caa9", }}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="100%"
                                image={toilet}
                                alt="green iguana"
                              />
                              <CardContent
                              sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                                 }}
                              >
                                <Typography gutterBottom variant="h5" component="div">
                                  Deep Cleaning
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  

                                <Button onClick={handleOpen2}>Details</Button>
                                      <Modal
                                        open={open2}
                                        onClose={handleClose2}
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
              </Grid>
                            {/* Card 3 Start */}

              <Grid item component={Card}>
                
                          <Card sx={{ 
                            maxWidth: 345,
                            borderStyle: "solid",
                                borderWidth: 2,
                                borderColor: "#d6caa9",
                                 }}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="100%"
                                image={moving}
                                alt="green iguana"
                              />
                              <CardContent
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                   }}
                              >
                                <Typography gutterBottom variant="h5" component="div">
                                  Move In/Out Cleaning
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  
                                <Button onClick={handleOpen3}>Details</Button>
                                      <Modal
                                        open={open3}
                                        onClose={handleClose3}
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
                </Grid>


        </Grid>

      </Box>
    )
}

export default Services