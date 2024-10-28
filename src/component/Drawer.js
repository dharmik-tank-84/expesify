import React from "react";

// ! import @mui/material

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { Divider, Typography } from "@mui/material";

// ! import react-router-dom

import { useNavigate } from "react-router-dom";

const SideBar = ({ isOpen, closeDrawer }) => {
  let navigate = useNavigate();

  const handleRecentExpense = () => {
    navigate("*/recent-expense");
    closeDrawer();
  };

  const handleTotalExpense = () => {
    navigate("*/total-expense");
    closeDrawer();
  };

  return (
    <>
      <Drawer anchor="left" open={isOpen}>
        <Box sx={{ width: 300, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <IconButton onClick={closeDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Typography
            variant="h5"
            sx={{ cursor: "pointer" }}
            onClick={handleRecentExpense}
          >
            Recent Expense
          </Typography>
          <Typography
            variant="h5"
            sx={{ cursor: "pointer", mt: "15px" }}
            // onClick={() => navigate("*/recent-expense")}
            onClick={handleTotalExpense}
          >
            Total Expense
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
