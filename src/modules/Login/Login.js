import React, { useEffect } from "react";

// ! import @mui/material

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// ! import firebase

import { signInWithGoogle, auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

// ! import react-router-dom

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, loading] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      console.log("loading");
      return;
    }
    if (user) navigate("/router");
  }, [user, loading]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Button variant="contained" color="primary" onClick={signInWithGoogle}>
          <Typography color="white">Login With Google</Typography>
        </Button>
      </Box>
    </>
  );
};

export default Login;
