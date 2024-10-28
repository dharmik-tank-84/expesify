import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TotalExpense = () => {
  const [lastData, setLastData] = useState();

  const [amount, setAmount] = useState();

  useEffect(() => {
    if (localStorage.getItem("newData").length !== 2) {
      let data = JSON.parse(localStorage.getItem("newData"));
      setLastData(data);
      let totalAmount = data.map((item) => Number(item.amount));
      let sumAmount = totalAmount.reduce((prev, curr) => {
        return prev + curr;
      });
      setAmount(sumAmount);
    }
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
                {lastData.map((val, index) => {
                  return (
                    <>
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                          {val?.payment}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                          {val?.amount}
                        </Typography>
                      </Box>
                    </>
                  );
                })}
                <Divider sx={{ my: 2 }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 0 }} gutterBottom>
                    Total :
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 0 }} gutterBottom>
                    {amount}
                  </Typography>
                </Box>
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
                  ! Please Add Expense to Show to your Total Expense
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Container>
      </>
    );
  }
};

export default TotalExpense;
