import React, { useEffect, useState } from "react";

// ! import react-router-dom

import { Link, useNavigate } from "react-router-dom";

// ! import @mui/material

import {
  Container,
  Divider,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  Box,
  Button,
} from "@mui/material";

// ! import @mui/icons

import DeleteIcon from "@mui/icons-material/Delete";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import EditIcon from "@mui/icons-material/Edit";

const DashBoard = () => {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("newData");
    if (storedData) {
      setNewData(JSON.parse(storedData));
    }
  }, []);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    setNewData(newData.filter((user) => user.id !== id));
    localStorage.setItem(
      "newData",
      JSON.stringify(newData.filter((user) => user.id !== id))
    );
  };

  return (
    <>
      <Container>
        <Box>
          <Box
            sx={{
              mt: 3,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
              gridGap: "30px",
            }}
          >
            {newData?.map((value) => {
              return (
                <Paper key={value.id} sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    {value.payment}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography sx={{ textAlign: "center" }} variant="subtitle1">
                    {value.amount}
                  </Typography>
                  <Box
                    display="flex"
                    gap="5px"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Tooltip title="Edit">
                      <IconButton
                        size="small"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                      >
                        <Link to={`*/edit/${value.id}`}>
                          <EditIcon color="success" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Read">
                      <IconButton
                        size="small"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                      >
                        <Link to={`*/read/${value.id}`}>
                          <MarkEmailUnreadIcon color="primary" />
                        </Link>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        size="small"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={() => handleDelete(value.id)}
                      >
                        <DeleteIcon color="error" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Paper>
              );
            })}
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          position: "fixed",
          bottom: 40,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" onClick={() => navigate("*/add")}>
          Add New Expense
        </Button>
      </Box>
    </>
  );
};

export default DashBoard;
