import React, { useState } from "react";
import { Container } from "react-bootstrap";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
import Sidebar from "../../components/user-dashboard/UI/Sidebar";
import { Outlet } from "react-router-dom";
import UserAccount from "./UserAccount";
import styles from "./UserDashboard.module.css";
import { useTranslation } from "react-i18next";
const UserDashboard = () => {
  const { t, i18n } = useTranslation();
  return (
    <div lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
      <Sidebar />

      <Container fluid="true" lang={i18n.language} className={styles.page__container}>
        <Container as="section" className="p-5 m-auto">
          <Outlet />
        </Container>
      </Container>
    </div>
  );
};

export default UserDashboard;
