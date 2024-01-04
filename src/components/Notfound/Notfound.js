import { Box, Container, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <>
            <Container className='content-container App' sx={{ mx: 'auto', my: '20px' }} maxWidth="xl">
                <Box
                    component="img"
                    sx={{
                        height: 350,
                        width: 450,
                        maxHeight: { xs: 233, md: 300 },
                        maxWidth: { xs: 250, md: 400 },
                    }}
                    src="https://i.ibb.co/9Zr4rwK/image.png"
                    alt='404 image'
                />
                <Typography sx={{ mx: 'auto' }}>404 Page is not found Please check the url</Typography>


                <Button variant="contained" startIcon={<HomeIcon />}
                    to='/home'
                    component={Link}
                    sx={{ mb: 5, mt: 5 }}
                >
                    Back to Home
                </Button>


            </Container>

        </>
    );
};

export default Notfound;