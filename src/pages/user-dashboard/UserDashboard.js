import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
import Sidebar from "../../components/user-dashboard/UI/Sidebar";
import { Outlet } from "react-router-dom";

import UserAccount from "./UserAccount";
import styles from "./UserDashboard.module.css"
const UserDashboard = () => {
 
  return (
    <>
      <Sidebar />
      
      <Container className={styles.page__container}>
      <Container as="section" className="p-5 m-auto">
      <Outlet />
      </Container>
      </Container>

      {/* <Container className="w-75 py-5">
        <h2 className="pt-3">Overview</h2>
        <UserCard />
        <h2 className="pt-3">Categories</h2>
        <Container fluid className="mt-4 shadow-sm mx-auto">
          <Categories />
        </Container>
        <h2 className="pt-3">Expenses History</h2>
        <Container fluid className="mt-4">
          <TransFilters />
        </Container>
        <Container fluid className="mt-4 shadow-sm p-5">
          <Transactions />
        </Container>
        <Container fluid className="mt-4 shadow-sm p-5">
          <Doughnut data={chartData} options={{}} />
        </Container>
      </Container> */}
    </>
  );
};

export default UserDashboard;
