import React from "react";

// ! import react-router-dom

import { Route, Routes } from "react-router-dom";

// ! import components

import Login from "./modules/Login/Login";
import Router from "./modules/Router/Router";

// ! import firebase

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// ! import @mui/material

import { Box, CircularProgress } from "@mui/material";

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </>
    );
  }

  if (user) {
    return (
      <>
        <Routes>
          <Route path="/*" exact element={<Router />} />
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <Routes>
          <Route path="/" exact element={<Login />} />
        </Routes>
      </>
    );
  }
};

export default App;
