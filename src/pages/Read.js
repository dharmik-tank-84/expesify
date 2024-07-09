import React, { useEffect, useState } from "react";

// ! import @mui/material

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

// ! import react-router-dom

import { useNavigate, useParams } from "react-router-dom";

const Read = () => {
  const [readData, setReadData] = useState([]);

  let { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("newData"));
    let newData = data?.filter((user) => user.id === id);
    setReadData(newData);
  }, [id]);

  return (
    <>
      <Container>
        <Box sx={{ mt: 3 }}>
          <Button onClick={() => navigate("/")} variant="contained">
            Go Back
          </Button>
        </Box>
        <Box sx={{ mt: 5 }}>
          <Card sx={{ minWidth: 275, marginTop: "5vh" }}>
            {readData.map((value) => {
              return (
                <CardContent key={value.id}>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    Payment : {value.payment}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    Amount : {value.amount}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    Description : {value.description}
                  </Typography>
                </CardContent>
              );
            })}
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Read;
