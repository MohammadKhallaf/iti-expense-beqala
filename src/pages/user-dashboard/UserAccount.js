import React, { useEffect, useRef, useState } from "react";
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
// import Test from "../../test/pages/Test";
/**
 * User Account Page
 * |- Section Card
 * -- |- CardRow Info
 *
 */
//! this should be replaced with the user account photo -> if it will be an option
import profilePhoto from "../../files/user/MK.JPG";
import CardRowInfo from "../../components/user-dashboard/CardRowInfo";
import { useSelector } from "react-redux";
import { backendAPI } from "../../store";
import Cookies from "js-cookie";
import axios from "axios";
import { GOAPI_API_KEY } from "../../credits";

// Stack and Row may interchange

// Row Component

const UserAccount = () => {
  //<--states-->
  const [phoneValidated, setPhoneValidated] = useState(false);
  const [addressValidated, setAddressValidated] = useState(false);
  //<--refs-->
  const addressRef = useRef();
  const phoneRef = useRef();
  const csrftoken = Cookies.get("csrftoken");
  //<--hooks-->
  const user = useSelector((state) => state.auth.user);
  const { t, i18n } = useTranslation();

  //<==helper functions==>
  const phoneSubmitHandler = (event) => {
    const phoneReg = new RegExp("^01[0125][0-9]{8}$");

    event.preventDefault();
    event.stopPropagation();
    if (phoneReg.test(phoneRef.current.value)) {
      const phoneNumber = phoneRef.current.value;
      backendAPI.put(
        "/user/update/",
        { user_id: user.id, user_phone: phoneNumber },
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem("access")}`,
            "X-CSRFToken": csrftoken,
          },
        }
      );
    }

    setPhoneValidated(true);
  };
  const addressSubmitHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const address = addressRef.current.value;
    backendAPI.put(
      "/user/update/",
      { user_id: user.id, user_address: address },
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem("access")}`,
          "X-CSRFToken": csrftoken,
        },
      }
    );

    setAddressValidated(true);
  };

  const getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const cords = position.coords;
        axios
          .get(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${cords.latitude}&lon=${cords.longitude}&lang=en&format=json&limit=1&apiKey=${GOAPI_API_KEY}`
          )
          .then((response) => response.data.results[0])
          .then((res) => (addressRef.current.value = res.formatted));
      },
      () => {}
    );
  };

  useEffect(() => {}, [phoneRef, addressRef]);

  if (!user) return <>No Account</>;
  return (
    <>
      <h1 className="pb-3">{t("profile.my-account", "My Account")}</h1>
      <Row className="gy-4">
        {/* Profile Details */}
        <SectionCard icon="user" header={t("profile.profile")}>
          {/* name */}
          <CardRowInfo
            notChangable
            title={t("profile.name")}
            input={<FormControl></FormControl>}
          >
            {user.first_name} {user.last_name}
          </CardRowInfo>
          {/* email */}
          <CardRowInfo
            title={t("profile.email")}
            input={<FormControl type="email"></FormControl>}
            notChangable
          >
            {user.email}
          </CardRowInfo>
          {/* website */}
          {/* <CardRowInfo
            title="location"
            input={
              <FormSelect>
                <option>Alexandria</option>
                <option>Cairo</option>
              </FormSelect>
            }
          >
            Alexandria
          </CardRowInfo> */}
          {/* location */}
          <CardRowInfo title="Phone" notChangable>
            <Form
              noValidate
              validated={phoneValidated}
              className="w-100"
              onSubmit={phoneSubmitHandler}
            >
              <Row>
                <Form.Group as={Col} xs="12" md="9" controlId="phone">
                  <Form.Control
                    type="tel"
                    required
                    name="phone"
                    autoComplete="true"
                    pattern="^01[0125][0-9]{8}$"
                    aria-describedby="phoneHelpBlock"
                    ref={phoneRef}
                    defaultValue={user.phone}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid phone number.
                  </Form.Control.Feedback>
                  <Form.Text id="phoneHelpBlock" muted>
                    Important to reach you out for your orders
                  </Form.Text>
                </Form.Group>

                <Col xs="12" md="auto">
                  <Button variant="outline-success" type="submit">
                    OK
                  </Button>
                </Col>
              </Row>
            </Form>
          </CardRowInfo>
          <CardRowInfo title="Address" notChangable>
            <Form
              noValidate
              validated={addressValidated}
              className="w-100"
              onSubmit={addressSubmitHandler}
            >
              <Row>
                <Form.Group as={Col} xs="12" md="8" controlId="address">
                  <Form.Control
                    type="text"
                    required
                    name="address"
                    autoComplete="true"
                    aria-describedby="addressHelpBlock"
                    ref={addressRef}
                    defaultValue={user.address}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid address.
                  </Form.Control.Feedback>
                  <Form.Text id="addressHelpBlock" muted>
                    Important to reach you out for your orders
                  </Form.Text>
                </Form.Group>

                <Col xs="12" md="auto">
                  <Button variant="outline-success" type="submit">
                    OK
                  </Button>
                </Col>
                <Col xs="12" md="auto">
                  <Button
                    variant="outline-success"
                    type="button"
                    onClick={getLocationHandler}
                  >
                    <i className="fas fa-map-marker-alt"></i>
                  </Button>
                </Col>
              </Row>
            </Form>
          </CardRowInfo>
          {/* photo */}
        </SectionCard>

        <SectionCard
          header={t("profile.preferences", "preferences")}
          icon="sliders-h"
        >
          {/* <CardRowInfo
            title="Language"
            input={
              <FormSelect>
                <option>English</option>
                <option>عربي</option>
              </FormSelect>
            }
          >
            English
          </CardRowInfo> */}
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
