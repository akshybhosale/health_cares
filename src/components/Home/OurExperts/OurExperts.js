import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import useDocData from "../../../Hooks/useDocData";

const OurExperts = () => {
  const [ourExperts, setOurExperts] = useState([]);
  const mainData = useDocData();
  let experts = mainData[0];

  // handle undifined problem in mapping data
  useEffect(() => {
    if (experts.length > 1) {
      const serv = experts?.slice(0, 3);
      setOurExperts(serv);
    } else {
      <LinearProgress color="secondary" />;
    }
  }, [experts]);

  return (
    <Box
      sx={{
        bgcolor: "#fce4ec",
        color: "primary.main",
        p: 2,
        mb: 2,
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant="h6">
          Meet Our Expert Team
        </Typography>

        <Typography sx={{ mb: 8, fontWeight: 600 }} variant="h5">
          We are committed to ensure you the best service
        </Typography>

        {experts?.length > 1 && (
          <Grid container spacing={3}>
            {ourExperts?.map((experts) => (
              <Grid
                key={experts.doc_id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ mx: "auto" }}
              >
                <Card
                  sx={{
                    mx: "auto",
                    boxShadow: 10,
                    maxWidth: 345,
                    transition: "0.5s all ease-in-out",
                    ":hover": {
                      color: "#e91e63",
                      boxShadow: 1,
                    },
                    img: { transition: "0.5s all ease-in-out" },
                    ":hover img": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <CardActionArea>
                    <Avatar
                      alt="doctor image"
                      src={experts?.doc_img}
                      sx={{
                        width: 256,
                        height: 256,
                        mx: "auto",
                      }}
                    />

                    <CardContent sx={{ display: "flex", mx: "auto", my: 2 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        Specialist in {experts.specialize}
                      </Typography>
                    </CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Dr. {experts.name}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        <Typography sx={{ mx: 2, p: 2, textAlign: "end" }}>
          <HashLink
            smooth
            to="/doctors#doctors"
            className="text-style"
            color="primary"
          >
            {" "}
            Meet Our Expert Team{" "}
          </HashLink>
        </Typography>
      </Container>
    </Box>
  );
};

export default OurExperts;
