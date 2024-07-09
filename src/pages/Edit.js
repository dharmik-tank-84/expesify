import React, { useEffect, useState } from "react";

// ! import @mui/material

import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";

// ! import react-router-dom

import { useNavigate, useParams } from "react-router-dom";

// * dropdown height

const ITEM_HEIGHT = 48;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
    },
  },
};

// * dropdown select name

const names = [
  "Traveling",
  "Cash Expense",
  "Refreshment",
  "G Pay",
  "Credit Card",
  "Prepaid Cards",
  "Autopay",
  "Cheques",
  "NetBanking",
  "stock market",
  "Cryptocurrencies",
  "Digital Wallets",
  "Buy Now, Pay Later",
  "Paytm Wallet",
  "Bank Account",
  "home Cost",
  "Enjoy",
  "Fast Food",
  "Premium",
  "Policy term",
  "provident fund",
  "Entertainment",
  "Addiction",
  "other",
];

const Edit = () => {
  const [editData, setEditData] = useState({
    payment: "",
    amount: "",
    description: "",
  });

  let { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("newData"));
    let newData = data?.find((user) => user.id === id);
    if (newData) {
      setEditData(newData);
    } else {
      setEditData({
        payment: "",
        amount: "",
        description: "",
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    let data = JSON.parse(localStorage.getItem("newData"));
    let index = data.findIndex((user) => user.id === id);
    if (index !== -1) {
      data[index] = editData;
    }
    localStorage.setItem("newData", JSON.stringify(data));
    navigate("/");
  };

  return (
    <>
      <Container>
        <Box sx={{ p: 3 }}>
          <Button onClick={() => navigate("/")} variant="contained">
            Go Back
          </Button>
          <Box sx={{ mt: 5 }}>
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label">
                    Payment
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    name="payment"
                    label="Payment"
                    value={editData.payment}
                    onChange={(e) => handleChange(e)}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => {
                      return (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <TextField
                  label="Enter Your Money"
                  type="number"
                  fullWidth
                  variant="outlined"
                  name="amount"
                  value={editData.amount}
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  label="Enter Your Description"
                  type="text"
                  fullWidth
                  variant="outlined"
                  name="description"
                  value={editData.description}
                  onChange={(e) => handleChange(e)}
                />
                <Button variant="contained" onClick={handleAdd}>
                  Edit
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Edit;
