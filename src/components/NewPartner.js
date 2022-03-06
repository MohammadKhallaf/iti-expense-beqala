import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function NewPartner() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "ExpenseBeqala",
        "template_nr742jq",
        form.current,
        "user_SK0t1O7lMmnJ9j14wUyTS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <>
      <form className="row m-2 p-2 g-3 " ref={form} onSubmit={sendEmail}>
        <h3>Let's grow together with us</h3>
        <small className="text-danger ">*all fields are required!</small>
        <h3>join now!</h3>
        <div className="col-6">
          <label htmlFor="inputtextname" className="form-label">
            {" "}
            Store Name
          </label>
          <input
            type="text"
            name="storename"
            className="form-control partnerInput"
            id="inputtextname"
            placeholder="Enter your store name"
            required
          />
        </div>
        <div className="col-6">
          <label htmlFor="Branches" className="form-label">
            Branches No.
          </label>
          <input
            type="number"
            name="branches"
            className="form-control partnerInput"
            min="0"
            id="Branches"
            placeholder="Branches No."
            required
          />
        </div>
        <div className="col-6">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="form-control partnerInput"
            id="inputAddress"
            placeholder="Enter your location"
            required
          />
        </div>
        <div className="col-6">
          <label htmlFor="inputState" className="form-label">
            Area
          </label>
          <select
            id="inputState"
            className="form-select partnerInput"
            name="location"
            required
          >
            <option selected>Cairo</option>
            <option>Alexandria</option>
          </select>
        </div>
        <div className="col-12">
          <label htmlFor="inputname" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control partnerInput"
            id="inputname"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control partnerInput"
            id="inputmail"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control partnerInput"
            id="phone"
            name="phone"
            placeholder="+20-10-xxxx-xxxx"
            pattern="[0-9]{11}"
            required
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control partnerInput"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            name="message"
            style={{ height: "100px" }}
          ></textarea>
          <label className="px-4 " htmlFor="floatingTextarea2">
            Leave a comment here
          </label>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-lg subs my-4"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Submit
          </button>{" "}
          <span className="m-2"> and we will contact with you</span>
        </div>
      </form>

      <div
        className="modal fade"
        id="myModal"
        tabindex="-1"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="myModalLabel">
                Thank You <span className="fas fa-heart"></span>{" "}
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
                Thanks for your interest in joining ExpenseBeqala! Our team will
                come back to you within 3 working days.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
