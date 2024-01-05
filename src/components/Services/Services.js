import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import useData from "../../Hooks/useData";
import { HashLink } from "react-router-hash-link";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { useHistory } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const Services = () => {
  // const [ourServices, setOurServices] = useState([])
  const services = useData();
  const history = useHistory();
  const ServiceDetails = (servId) => {
    history.push(`/services/details/${servId}`);
    console.log(servId);
  };

  return (
    <Box
      id="services"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "#fce4ec",
        color: "primary.main",
        p: 2,
        mb: 2,
        mt: 6,
        textAlign: "center",
      }}
    >
      {services[0].length > 1 ? (
        <Container maxWidth="xl">
          <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant="h6">
            Our Services
          </Typography>

          <Grid container spacing={3} style={{justifyContent: 'center'}}>
            {services[0]?.map((service) => (
              <Grid key={service.id} item xs={12} sm={6} md={6} lg={4} style={{justifyContent: 'center'}} >
                <Card
                  sx={{
                    mx: "auto",
                    maxWidth: 345,
                    transition: "0.5s all ease-in-out",
                    ":hover": {
                      boxShadow: 10,
                      color: "#e91e63",
                    },
                    img: { transition: "0.5s all ease-in-out" },
                    ":hover img": {
                      transform: "scale(1.1)",
                    },
                  }} 
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={service?.service_img}
                      alt="card image of service"
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        mx: "auto",
                        my: 2,
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: 40, mr: 1, mx: "auto" }}
                        image={service?.icon}
                        alt="service icon"
                      />
                      <Typography gutterBottom variant="h5" component="div">
                        Consult for {service.treatment}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Typography sx={{ mx: 2, p: 2, textAlign: "end" }}>
                      <Button
                        onClick={() => {
                          ServiceDetails(service.id);
                        }}
                        variant="contained"
                        color="primary"
                        startIcon={<ReadMoreIcon />}
                      >
                        See More Details...
                      </Button>
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <HashLink smooth to="/home#home" className="text-style">
            {" "}
            <Button
              variant="contained"
              color="primary"
              startIcon={<HomeIcon />}
              sx={{ mb: 5, mt: 5 }}
            >
              Back to Home
            </Button>
          </HashLink>
        </Container>
      ) : (
        <LoadingScreen></LoadingScreen>
      )}
    </Box>
  );
};

export default Services;
