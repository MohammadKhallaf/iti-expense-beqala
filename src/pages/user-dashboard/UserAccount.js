import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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

  const clickHandler = (showInput) => {
    setShowInput((prevState) => !prevState);
    console.log(props);
    //! if input edit is enabled
    if (showInput) {
      console.log("submitted");
      props.onSubmit();
    }
  };

  return (
    <Row>
      <h4 style={{ color: "var(--bs-gray-dark)" }}>
        {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
      </h4>

      <form>
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
              onClick={clickHandler.bind(this, showInput)}
            >
              {showInput ? "OK" : "Change"}
            </Button>
          )}
        </Stack>
      </form>
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
  const { t, i18n } = useTranslation();

  // i18n.changeLanguage("ar");

  return (
    <>
      <h1 className="pb-3">My Account</h1>
      <Row className="gy-4">
        {/* Profile Details */}
        <SectionCard icon="user" header={t("profile.profile", "profile")}>
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

        <SectionCard
          header={t("profile.preferences", "preferences")}
          icon="sliders-h"
        >
          <CardRowInfo
            onSubmit={async () => {
              const test = await i18n.changeLanguage("ar");
              console.log("LANG", test);
            }}
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
    </>
  );
};

export default UserAccount;
