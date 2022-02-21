import {React, useState } from "react";
import { Container } from "react-bootstrap";
import Categories from "../../components/user-dashboard/categories/categories/Categories";
import UserCard from "../../components/user-dashboard/others/UserCard";
import TransFilters from "../../components/user-dashboard/transactions/transactions/TranFilters";
import Transactions from "../../components/user-dashboard/transactions/transactions/Transactions";
import SideDetails from "../../components/user-dashboard/others/SideDetails";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
import Sidebar from "../../components/user-dashboard/UI/Sidebar";
import { Routes } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip, Legend);

const UserDashboard = () => {
  const [chartData, setChartData] = useState({
    labels: ["Coffe", "Paper", "Fruits", "Cheese"],
    datasets: [
      {
        label: "Months",
        data: [300, 60, 50, 50],
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
      },
    ],
  });
  return (<>
  <Sidebar/>
  <Routes>
    
  </Routes>

    <Container className="w-75 py-5">
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
    </Container>
  </>
  );
};

export default UserDashboard;
