import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './Banner.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {

    function Item(props) {
        return (
            <Paper>
                <div className='banner-container'>
                    <img src={props.item.img} alt="" />
                    <div className='banner-text tracking-in-expand'>
                        <Typography component="h4" variant="h5">
                            {props.item.name}
                        </Typography>
                        <Typography component="p">
                            {props.item.description}
                        </Typography>

                        <HashLink smooth to="/appointment#appointment" className='text-style'>
                            <Button sx={{ mt: 2 }} variant="contained" className="CheckButton">
                                Make an Appointment
                                <AddCircleIcon />
                            </Button>
                        </HashLink>
                    </div>
                </div>

            </Paper>
        )
    }
    const items = [
        {
            name: "You are just one click away from your healthy life",
            description: "Probably the most random thing you have ever seen!",
            img: "https://img.freepik.com/free-photo/close-up-doctor-is-showing-medical-analytics-data_33799-4417.jpg?w=996"
        },
        {
            name: "Consult with experts Online 24/7",
            description: "Get Online support from oue expert Doctor 24/7 and lead a healthy life",
            img: "https://img.freepik.com/free-photo/make-appointment-see-doctor-online-diagnosis-treatmentfamily-health-care_537132-1364.jpg?w=996"
        },
        {
            name: "Check Your Health Condition Regularly",
            description: "Upto date with your health condition prevention is always better than cure",
            img: "https://img.freepik.com/free-photo/young-male-psysician-with-patient-measuring-blood-pressure_1303-17879.jpg?t=st=1651807889~exp=1651808489~hmac=72e2292253947f9900d3250347f844e08a169fc70d5fb64d4cf51674000033fa&w=996"
        }
    ]
    return (
        <div>
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    );
};

export default Banner;