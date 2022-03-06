import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./conus.css";
import { useTranslation } from "react-i18next";

export const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "ExpenseBeqala",
        "template_8nav03v",
        form.current,
        "user_SK0t1O7lMmnJ9j14wUyTS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="regist" lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
      <div className="contianer m-5 p-5">
        <div className="wrapper rounded d-flex align-items-stretch ">
          <div className="bg-yellow">
            <div className="text-white">
              {" "}
              <span className="far fa-envelope"></span>{" "}
            </div>
            <div className="pt-5 cursive">
              {" "}
              {t("ContactUs.Please describe your problem in the message box")}{" "}
            </div>
            <div className="pt-sm-5 pt-5 cursive mt-sm-5">
              {" "}
              {t("ContactUs.We need your email to reach you back")}{" "}
            </div>
            <div className="pt-sm-5 nomarge pt-5 mt-sm-5">
              {" "}
              {t("ContactUs.ExpenseBeqala")}<br/> <i className="fas fa-phone-alt"></i> 190906<br/><small><i className="fas fa-envelope"></i> expensebeqala@gmail.com</small>{" "}
            </div>
          </div>
          <div className="contact-form">
            <div className="h3">{t("ContactUs.We'd love to hear from you!")}</div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group pt-3">
                {" "}
                <label htmlFor="message">{t("ContactUs.Message")}</label>{" "}
                <textarea
                  name="message"
                  className="form-control"
                  required
                ></textarea>{" "}
              </div>
              <div className="d-flex align-items-center flex-wrap justify-content-between pt-4">
                <div className="form-group pt-lg-2 pt-3">
                  {" "}
                  <label htmlFor="name">{t("ContactUs.Your Name")}</label>{" "}
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                  />{" "}
                </div>
                <div className="form-group pt-lg-2 pt-3">
                  {" "}
                  <label htmlFor="name">{t("ContactUs.Your Email")}</label>{" "}
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                  />{" "}
                </div>
              </div>

              <div className="d-flex align-items-center flex-wrap justify-content-between pt-lg-5 mt-lg-4 mt-5">
                <button
                  type="submit"
                  className="btn btn-lg btn-outline-secondary my-4"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  {t("ContactUs.Submit")}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="modal fade"
          id="myModal"
          tabIndex="-1"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="myModalLabel">
                  {t("ContactUs.Thank You")} <span className="fas fa-heart"></span>{" "}
                </h5>{" "}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="ps-2">
                  {t("ContactUs.Thank You for sharing your views with us. We will get back to you as soon as possible.")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
