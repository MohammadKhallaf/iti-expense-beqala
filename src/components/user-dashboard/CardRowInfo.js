import { useRef, useState } from "react";
import { Button, Container, Row, Stack } from "react-bootstrap";
const CardRowInfo = (props) => {
  const ref = useRef()
  const [showInput, setShowInput] = useState(false);
  // const []

  const clickHandler = (showInput) => {
    setShowInput((prevState) => !prevState);
    //! if input edit is enabled
    if (showInput) {
      console.log("Your input is", props);
      // props.onSubmit();
    }
  };

  return (
    <Row>
      <h4 style={{ color: "var(--bs-gray-dark)" }}>
        {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
      </h4>

      {/* <form> */}
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
      {/* </form> */}
      <hr
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(2,0,36,1) 30%, rgba(2,0,36,1) 65%, rgba(0,212,255,0) 100%)",
        }}
      />
    </Row>
  );
};
export default CardRowInfo;
