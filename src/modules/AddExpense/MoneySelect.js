import React, { useCallback, useEffect, useState } from "react";

// ! import @mui/material

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// ! import @mui/material

import { useNavigate } from "react-router-dom";

// ! import uuid

import { v4 as uuidv4 } from "uuid";

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

const MoneySelect = () => {
  const [data, setData] = useState({
    payment: "",
    amount: "",
    description: "",
  });

  let navigate = useNavigate();

  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("newData");
    if (storedData) {
      setNewData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleAdd = useCallback(() => {
    const newDataObject = { ...data, id: uuidv4() };
    setNewData((prevData) => [...prevData, newDataObject]);
    localStorage.setItem(
      "newData",
      JSON.stringify([...newData, newDataObject])
    );
    setData({ payment: "", amount: "" });
    navigate("/");
  }, [data, newData, navigate]);

  return (
    <>
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
              value={data.payment}
              onChange={(e) => handleChange(e)}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Enter Your Money"
            type="number"
            fullWidth
            variant="outlined"
            name="amount"
            value={data.amount}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            label="Enter Your Description"
            type="text"
            fullWidth
            variant="outlined"
            name="description"
            value={data.description}
            onChange={(e) => handleChange(e)}
          />
          <Button variant="contained" onClick={handleAdd}>
            ADD
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default MoneySelect;
