import React from "react";

export default function NewPartner() {
  return (
    <>
      <form class="row m-2 p-2 g-3">
      <h3>Let's grow together with us</h3>
     <h3>join now!</h3> 
        <div class="col-md-9">
          <label for="inputtextname" class="form-label">
            Store Name
          </label>
          <input
            type="text"
            class="form-control"
            id="inputtextname"
            placeholder="Enter your store name"
            required
          />
        </div>
        <div class="col-md-3">
          <label for="Branches" class="form-label">
            <small>No. of Branches</small>
          </label>
          <input
            type="number"
            class="form-control"
            min="0"
            id="Branches"
            placeholder="No. of Branches"
            required
          />
        </div>
        <div class="col-md-8">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Enter your location"
            required
          />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            Area
          </label>
          <select id="inputState" class="form-select" required>
            <option selected>Cairo</option>
            <option>Alexandria</option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="inputname" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="inputname"
            placeholder="Enter your name"
            required
          />
        </div>
        <div class="col-md-8">
          <label for="inputmail" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="inputmail"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="col-md-5">
          <label for="phone" class="form-label">
            Phone
          </label>
          <input
            type="tel"
            class="form-control"
            id="phone"
            name="phone"
            placeholder="0100 123 4567"
            pattern="[0-9]{11}"
            required
          />
        </div>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <label for="floatingTextarea2">Leave a comment here</label>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-lg btn-outline-secondary my-4">
            Submit
          </button> <span className="m-2"> and we will contact with you</span>
        </div>
      </form>
    </>
  );
}
