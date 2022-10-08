import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import DashHeader from "../../Components/Dashboard/Header/DashHeader";
import DashData from "../../Components/Dashboard/Structure/DashData";
const index = () => {
  return (
    <>
      <DashHeader />
      <DashData />
      <Footer />
    </>
  );
};

export default index;
