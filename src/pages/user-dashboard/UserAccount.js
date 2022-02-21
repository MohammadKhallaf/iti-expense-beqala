import React, { useState } from "react";
import {
  Row,
  Col,
  Stack,
  Container,
  Button,
  Form,
  FormControl,
  FormSelect,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionCard from "../../components/user-dashboard/SectionCard";
/**
 * User Account Page
 * |- Section Card
 * -- |- CardRow Info
 *
 */
//! this should be replaced with the user account photo -> if it will be an option
import profilePhoto from "../../files/user/MK.JPG";

// Stack and Row may interchange

// Row Component
const CardRowInfo = (props) => {
  const [showInput, setShowInput] = useState(false);
  // const []
  const clickHandler = () => {
    setShowInput((prevState) => !prevState);
    console.log(props);
    //! if input edit is enabled
    if (showInput) {
    }
  };

  return (
    <Row>
      <h4 style={{ color: "var(--bs-gray-dark)" }}>
        {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
      </h4>

      <Stack
        direction="horizontal"
        className="justify-content-between pb-3 text-muted ps-3 flex-xl-nowrap flex-wrap"
      >
        <Container fluid className="ps-0">
          {showInput ? props.input : props.children}
        </Container>
        {/* Here we get the action to change something */}
        {props.notChangable ? null : (
          <Button
            variant="outline-success"
            className="py-0"
            onClick={clickHandler}
          >
            {showInput ? "OK" : "Change"}
          </Button>
        )}
      </Stack>
      <hr
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(2,0,36,1) 30%, rgba(2,0,36,1) 65%, rgba(0,212,255,0) 100%)",
        }}
      />
    </Row>
  );
};

const UserAccount = () => {
  return (
    <Container as="section" className="p-5 m-auto">
      <h1 className="pb-3">My Account</h1>
      <Row className="gy-4">
        {/* Profile Details */}
        <SectionCard icon="user" header="profile">
          <CardRowInfo
            title="Photo"
            type="image"
            input={
              <FormControl
                type="file"
                accept="image/png, image/jpeg"
              ></FormControl>
            }
          >
            <img
              src={profilePhoto}
              alt=""
              style={{
                width: "60px",
                height: "60px",
                objectFit: "fill",
                border: "3px solid var(--bs-success)",
              }}
              className="rounded-circle"
            />
          </CardRowInfo>
          {/* name */}
          <CardRowInfo title="name" input={<FormControl></FormControl>}>
            Mohammed Khallaf
          </CardRowInfo>
          {/* email */}
          <CardRowInfo
            title="email"
            input={<FormControl type="email"></FormControl>}
            notChangable
          >
            mohammed.khallaf@gmail.com
          </CardRowInfo>
          {/* website */}
          <CardRowInfo
            title="location"
            input={
              <FormSelect>
                <option>Alexandria</option>
                <option>Cairo</option>
              </FormSelect>
            }
          >
            Alexandria
          </CardRowInfo>
          {/* location */}
          <CardRowInfo
            title="Phone"
            input={<FormControl type="number"></FormControl>}
          >
            01029149153
          </CardRowInfo>
          {/* photo */}
        </SectionCard>

        <SectionCard header="Preferences" icon="sliders-h">
          <CardRowInfo
            title="Language"
            input={
              <FormSelect>
                <option>English</option>
                <option>عربي</option>
              </FormSelect>
            }
          >
            English
          </CardRowInfo>
          <CardRowInfo
            title="Password"
            input={<Link to="/reset-password">Reset Password Page</Link>}
          >
            **********
          </CardRowInfo>
        </SectionCard>
      </Row>
    </Container>
  );
};

export default UserAccount;