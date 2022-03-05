import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button, Form, FormCheck, Modal } from "react-bootstrap";
import axios from "axios";
import { GOAPI_API_KEY } from "../../credits";
import { backendAPI } from "../../store";
const GeoMap = () => {
  const checkRef = useRef();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState("");
  const [cities, setCities] = useState([]);
  const success = (position) => {
    const cords = position.coords;
    console.log("MAPS");
    axios
      .get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${cords.latitude}&lon=${cords.longitude}&lang=en&format=json&type=city&limit=1&apiKey=${GOAPI_API_KEY}`
      )
      .then((response) => response.data.results[0])
      .then((response) => {
        localStorage.setItem("location__geo", response.city);
        localStorage.setItem("location__show", true);
        return response.city;
      })
      .then((city) =>
        backendAPI.get("/location/cities/").then((res) => {
          setCurrent(city);
          setCities(res.data);
          setShow(true);
          return { cities: res.data, current: city };
        })
      )
      .then((res) => console.log("YOUR DATA IS", res))
      .catch((error) => console.log("error", error));
  };

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  useEffect(() => {
    console.log(localStorage.getItem("location__geo"));
    console.log(JSON.parse(localStorage.getItem("location__show")));
    console.log(localStorage.getItem("location__show"));

    // -- there is a location -- required not to show
    if (
      localStorage.getItem("location__geo") &&
      !JSON.parse(localStorage.getItem("location__show"))
    ) {
      return;
    }
    //-- there is a location -- required to show => just get the available stores
    else if (
      localStorage.getItem("location__geo") &&
      JSON.parse(localStorage.getItem("location__show"))
    ) {
      setCurrent(localStorage.getItem("location__geo"));
      backendAPI.get("/location/cities/").then((res) => {
        setCities(res.data);
        setShow(true);
      });
    }
    // -- there is no location provides => get the current location and avaliable locations
    else {
      setTimeout(() => {
        navigator.geolocation.getCurrentPosition(success, error);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    console.log(cities.includes(current));
  }, [current, show]);

  const handleClose = () => {
    if (checkRef.current.checked) {
      localStorage.setItem("location__show", false);
    }
    setShow(false);
  };

  const handleStore = () => {
    if (checkRef.current.checked) {
      localStorage.setItem("location__show", false);
    }
    setShow(false);
    navigate(`/${current.toLowerCase()}/stores`);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Location detected</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cities.includes(current)
            ? `Your location appears in ${current}`
            : `There is no nearby stores in your location , available stores in ${cities}`}

          <Form.Check
            className="pt-5 text-muted"
            type="checkbox"
            label={`Don't show it again`}
            ref={checkRef}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Dismiss
          </Button>
          {cities.includes(current) ? (
            <Button variant="primary" onClick={handleStore}>
              Go to the store
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GeoMap;
