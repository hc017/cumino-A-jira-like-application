import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AfterSignUpForm from "../Pages/Profile/AfterSignUpForm";

const BlankRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/siginuph" element={<AfterSignUpForm />}></Route>
      </Routes>
    </>
  );
};

export default BlankRoutes;
