import React from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { HashLink } from 'react-router-hash-link';
import useDocData from '../../../Hooks/useDocData';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import swal from 'sweetalert';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';


const Doctors = () => {
    const doctors = useDocData();

    const swalAlert = () => {
        console.log('swal is clicked');
        return swal("Write the data here:", {
            content: "input",
        })
            .then((value) => {
                swal(`You Appointment data is :➥ ${value} You will get a confirmation Email soon if the slot is free. We are trying to make it automated asap. Till then be patient`);
            });
    }
    return (
        <div id='doctors'>
            {doctors[0].length !==0 ? <>
                <Box sx={{ bgcolor: '#fce4ec', color: 'primary.main', p: 2, mb: 2, mt: 6, textAlign: "center" }}>
                    <Container maxWidth="xl">
                        <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }}
                            variant='h5'
                        >Our team always ready to assist you
                        </Typography>

                        <Grid container spacing={3}>
                            {
                                doctors[0]?.map((doctor) => (
                                    <Grid key={doctor.doc_id} item xs={12} sm={6} md={4} lg={3} sx={{ mx: 'auto' }}>
                                        <Card sx={{
                                            mx: 'auto',
                                            boxShadow: 10,
                                            maxWidth: 345, transition: '0.5s all ease-in-out', ':hover': {
                                                color: '#e91e63',
                                                boxShadow: 1
                                            }
                                            , 'img': { transition: '0.5s all ease-in-out' },
                                            ':hover img': {
                                                transform: 'scale(1.1)'
                                            }
                                        }}>
                                            <CardActionArea>

                                                <Avatar
                                                    alt="doctor image"
                                                    src={doctor?.doc_img}
                                                    sx={{
                                                        width: 256, height: 256, mx: 'auto'
                                                    }}
                                                />

                                                <CardContent sx={{ display: 'flex', mx: 'auto', my: 2 }}>

                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Specialist in {doctor.specialize}
                                                    </Typography>
                                                </CardContent>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    Dr. {doctor.name}
                                                </Typography>
                                            </CardActionArea>
                                            <CardActions sx={{ textAlign: "center" }} style={{justifyContent: 'center'}}>
                                                <Button onClick={swalAlert} sx={{ mt: 2, mb: 1 }} variant="contained" className="CheckButton">
                                                     Make an Appointment
                                                    <AddCircleIcon />
                                                </Button>
                                            </CardActions>
                                        </Card>



                                    </Grid>
                                ))
                            }


                        </Grid>

                        <HashLink smooth to="/home#home" className='text-style'> <Button variant="contained" startIcon={<HomeIcon />} sx={{ mb: 5, mt: 5 }}>
                            Back to Home
                        </Button></HashLink>

                    </Container>

                </Box> </> : <LoadingScreen></LoadingScreen>
            }
        </div>

    );
};

export default Doctors;