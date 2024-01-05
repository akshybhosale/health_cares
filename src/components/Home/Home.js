import { Button, Container, TextField, Typography } from '@mui/material';
import { Box} from '@mui/system';
import React from 'react';
import About from '../About/About';
import Banner from './Banner/Banner';
import './Home.css'
import OurExperts from './OurExperts/OurExperts';
import Whyus from './Whyus/Whyus';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EmailIcon from '@mui/icons-material/Email';
import swal from 'sweetalert';

const Home = () => {
    //swal alert
    const mailSendBtn = () => {
        return swal("WOW!! Your subscription is done you will get update when we setup our mail server", {
            button: false,
            icon: "success"
        });
    }
    return (
        <div id='home'>
            <Banner></Banner>
            <Whyus></Whyus>
            <Container className='content-container' maxWidth="xl">
                <About></About>
            </Container>
            <OurExperts></OurExperts>
            <Box sx={{ p: 5, mb: 2, alignItems: 'center' }}>
                <Typography sx={{ textAlign: "center" }} variant="h5"> <SubscriptionsIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} /> Subscribe for our latest services and details</Typography>

                <Box sx={{ display: { xs: 'flex-wrap', md: 'flex' }, p: 2, mt: 1, mx: 'auto', minWidth: "70%" }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2, mx: 'auto', minWidth: "70%" }}>
                        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField fullWidth id="fullWidth" label="Enter Your Mail Address" variant="standard" />
                    </Box>
                    <Button variant="outlined" color="primary" onClick={mailSendBtn} startIcon={<SubscriptionsIcon />}>Subscribe</Button>
                </Box>
            </Box>
        </div>
    );
};

export default Home;