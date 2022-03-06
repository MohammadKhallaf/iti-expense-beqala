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

const UserOverview = () => {
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
          <CardRowInfo title={t('profile.phone')} notChangable>
          {user.phone}
           
          </CardRowInfo>
          <CardRowInfo title={t('profile.address')} notChangable>
          {user.address}
           
          </CardRowInfo>
         
          {/* photo */}
        </SectionCard>

       
      </Row>
    </>
  );
};

export default UserOverview;
