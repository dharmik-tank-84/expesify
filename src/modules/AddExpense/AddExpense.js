import React from "react";

// ! import @mui/material

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

// ! import react-router-dom

import { useNavigate } from "react-router-dom";

// ! import component

import MoneySelect from "./MoneySelect";

const AddExpense = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Box sx={{ p: 3 }}>
          <Button onClick={() => navigate(-1)} variant="contained">
            Go Back
          </Button>
          <Box sx={{ mt: 5 }}>
            <MoneySelect />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AddExpense;
