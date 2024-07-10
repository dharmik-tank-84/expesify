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

import { NavLink, useNavigate } from "react-router-dom";

const RecentExpense = () => {
  let [lastData, setLastData] = useState();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("newData"));
    let newData = data.pop();
    setLastData(newData);
  }, []);

  let navigate = useNavigate();

  if (lastData) {
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
              <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  Payment : {lastData?.payment}
                </Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  Amount : {lastData?.amount}
                </Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  Description : {lastData?.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </>
    );
  } else {
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
              <CardContent>
                <Typography
                  sx={{ fontSize: 20, margin: 0 }}
                  color="red"
                  gutterBottom
                >
                  ! Please Add Expense
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </>
    );
  }
};

export default RecentExpense;
