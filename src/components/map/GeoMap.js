import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button, Form, FormCheck, Modal } from "react-bootstrap";
import axios from "axios";
import { GOAPI_API_KEY } from "../../credits";
import { backendAPI } from "../../store";
import { useTranslation } from "react-i18next";
const GeoMap = () => {
  const checkRef = useRef();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
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
      .catch((error) => console.log("error", error));
  };

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  useEffect(() => {
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

  useEffect(() => {}, [current, cities, show]);

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
      <Modal
        show={show}
        onHide={handleClose}
        lang={i18n.language}
        dir={i18n.language === "ar" ? "rtl" : null}
      >
        <Modal.Header closeButton>
          <Modal.Title>{t("location.location-detected")}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {cities.includes(current)
            ? `${t("location.location-appears-in")} ${t(`location.${current}`)}`
            : `${t("location.no-nearby-sentence")} ${cities}`}

          <Form.Check
          
            className="pt-5 text-muted"
            type="checkbox"
            label={t('ui.dont-show')}
            ref={checkRef}
            
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            {t("ui.dismiss")}
          </Button>
          {cities.includes(current) ? (
            <Button variant="primary" onClick={handleStore}>
              {t("ui.go-to-store")}
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GeoMap;
