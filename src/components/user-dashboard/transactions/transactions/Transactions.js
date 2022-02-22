import React from "react";
import { Container } from "react-bootstrap";
import SingleTransaction  from "./SingleTransaction";
// This Component should be elemenated 
const Transactions = () => {
  return (
    <>
      <SingleTransaction color={"primary"} />
      <SingleTransaction color={"secondary"} />
      <SingleTransaction color={"warning"} />
      <SingleTransaction color={"success"} />
      <SingleTransaction color={"primary"} />
      <SingleTransaction color={"secondary"} />
      <SingleTransaction color={"warning"} />
      <SingleTransaction color={"success"} />
      <SingleTransaction color={"primary"} />
      <SingleTransaction color={"secondary"} />
      <SingleTransaction color={"warning"} />
      <SingleTransaction color={"success"} />
      <SingleTransaction color={"primary"} />
      <SingleTransaction color={"secondary"} />
      <SingleTransaction color={"warning"} />
      <SingleTransaction color={"success"} />
    </>
  );
};
export default Transactions;
