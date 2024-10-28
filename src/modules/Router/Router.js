import React, { useEffect, useState } from "react";

// ! import firebase

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logOut } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

// ! import react-router-dom

import { Route, Routes, useNavigate } from "react-router-dom";

// ! import components

import Navbar from "../../component/Navbar";
import SideBar from "../../component/Drawer";
import DashBoard from "../DashBoard/DashBoard";
import AddExpense from "../AddExpense/AddExpense";
import Profile from "../../pages/Profile";
import Read from "../../pages/Read";
import Edit from "../../pages/Edit";
import RecentExpense from "../../pages/RecentExpense";
import TotalExpense from "../../pages/TotalExpense";

const Router = () => {
  const [user, loading] = useAuthState(auth);

  const [userInfo, setUserInfo] = useState();

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    if (user) {
      fetchUserInfo();
    }
  }, [user, loading]);

  const fetchUserInfo = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const docs = await getDocs(q);
      const data = docs.docs[0].data();
      setUserInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  const manageDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar
        profile={userInfo}
        logout={logOut}
        handleMenuIcon={manageDrawer}
      />
      <SideBar isOpen={open} closeDrawer={closeDrawer} />
      <Routes>
        <Route exact path="" index element={<DashBoard />} />
        <Route exact path="*/add" element={<AddExpense />} />
        <Route exact path="*/profile" element={<Profile />} />
        <Route exact path="*/read/:id" element={<Read />} />
        <Route exact path="*/edit/:id" element={<Edit />} />
        <Route exact path="*/recent-expense" element={<RecentExpense />} />
        <Route exact path="*/total-expense" element={<TotalExpense />} />
      </Routes>
    </>
  );
};

export default Router;
