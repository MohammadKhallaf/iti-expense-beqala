import React from "react";
import { Container } from "react-bootstrap";
import styles from "./UserCard.module.scss"
const UserCard = () => {
  const firstname = "Mohammed"
  const lastname = "Khallaf"
  return (
    <Container fluid className={`${styles.container}`}>
      <h1>Hello {firstname} {lastname}</h1>
      <p className="text-muted">
        This is some information about your expenses
      </p>
    </Container>
  );
};
export default UserCard
