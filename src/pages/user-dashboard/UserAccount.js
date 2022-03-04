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

// Stack and Row may interchange

// Row Component

const UserAccount = () => {
  const user = useSelector((state) => state.auth.user);
  const { t, i18n } = useTranslation();

  if (!user) return <>No Account</>;

  return (
    <>
      <h1 className="pb-3">{t("profile.my-account", "My Account")}</h1>
      <Row className="gy-4">
        {/* Profile Details */}
        <SectionCard icon="user" header={t("profile.profile")}>
          {/* <CardRowInfo
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
          </CardRowInfo> */}
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
            mohammed.khallaf@gmail.com
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
          {/* <CardRowInfo
            title="Phone"
            input={<FormControl type="number"></FormControl>}
          >
            01029149153
          </CardRowInfo> */}
          {/* photo */}
        </SectionCard>

        {/* <SectionCard
          header={t("profile.preferences", "preferences")}
          icon="sliders-h"
        >
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
        </SectionCard> */}
      </Row>
    </>
  );
};

export default UserAccount;
