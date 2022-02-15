import React from "react";

export default function NewPartner() {

  return (
    <>
      <form className="row m-2 p-2 g-3">
        <h3>Let's grow together with us</h3>
        <h3>join now!</h3>
        <div className="col-6">
          <label for="inputtextname" className="form-label"> Store Name</label>
          <input
            type="text"
            className="form-control partnerInput"
            id="inputtextname"
            placeholder="Enter your store name"
            required
          />
        </div>
        <div className="col-6">
          <label for="Branches" className="form-label">Branches No.</label>
          <input
            type="number"
            className="form-control partnerInput"
            min="0"
            id="Branches"
            placeholder="Branches No."
            required
          />
        </div>
        <div className="col-6">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control partnerInput"
            id="inputAddress"
            placeholder="Enter your location"
            required
          />
        </div>
        <div className="col-6">
          <label for="inputState" className="form-label">
            Area
          </label>
          <select id="inputState" className="form-select partnerInput" required>
            <option selected>Cairo</option>
            <option>Alexandria</option>
          </select>
        </div>
        <div className="col-12">
          <label for="inputname" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control partnerInput"
            id="inputname"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="col-md-6">
          <label for="inputmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control partnerInput"
            id="inputmail"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="col-md-6">
          <label for="phone" className="form-label">
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
            style={{ height: "100px" }}
          ></textarea>
          <label className="px-4 " for="floatingTextarea2">Leave a comment here</label>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-lg btn-outline-secondary my-4">
            Submit
          </button> <span className="m-2"> and we will contact with you</span>
        </div>
      </form>
    </>
  );
}
