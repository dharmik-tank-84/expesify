import React from "react";

// ! import @mui/material

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

// ! import firebase

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOut } from "../firebase";

// ! import react-router-dom

import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();

  const [user] = useAuthState(auth);

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <Button
          sx={{ marginTop: "5vh" }}
          onClick={() => navigate("/")}
          variant="contained"
        >
          Go Back
        </Button>
        <Card sx={{ minWidth: 275, marginTop: "5vh" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Name : {user?.displayName}
            </Typography>
            <Typography sx={{ fontSize: 14 }} gutterBottom>
              Email : {user?.email}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={handleLogOut}>
              Log Out
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default Profile;
