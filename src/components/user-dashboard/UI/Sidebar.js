import React from "react";
import { useState } from "react";
import {
  Button,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
} from "react-bootstrap";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow((prevState) => !prevState);
  };
  return (
    <>
      <div>Sidebar</div>
      <Button variant="primary" onClick={toggleShow}>
        X
      </Button>
      <Offcanvas show={show} onHide={toggleShow} scroll={false} backdrop={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Overview</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>



        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
