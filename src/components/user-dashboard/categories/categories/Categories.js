import React from 'react';
import { Stack } from "react-bootstrap";
import  SingleCatgory  from "./SingleCategory";
import styles from "./Categories.module.scss";

 const Categories = () => {
  return (
    <>
      
      <Stack className={` ${styles.container}`} direction="horizontal">
        <SingleCatgory cat={"Home"} icon={"coffee"} color={"primary"} />
        <div className="vr"></div>
        <SingleCatgory cat={"Office"} icon={"mail-bulk"} color={"secondary"} />
        <div className="vr"></div>
        <SingleCatgory cat={"Cheese"} icon={"cheese"} color={"warning"} />
        <div className="vr"></div>
        <SingleCatgory cat={"Fruits"} icon={"apple-alt"} color={"success"} />
        <div className="vr"></div>
        <SingleCatgory cat={"Paper"} icon={"paste"} color={"info"} />
      </Stack>
    </>
  );
};
export default Categories