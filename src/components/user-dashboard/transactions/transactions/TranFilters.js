import React from 'react';
import { Button, Stack } from "react-bootstrap";
import SingleTransaction from "./SingleTransaction";

const TransFilters = () => {
  return (
    <Stack direction="horizontal" gap={3} className="justify-content-center">
      <Button variant="outline-primary">
        Group by
        <i className="fas fa-sort" ></i>
      </Button>
      <Button variant="outline-primary">
        Dates
        <i className="fas fa-sort" ></i>
      </Button>
      <Button variant="outline-primary">
        Types
        <i className="fas fa-sort" ></i>
      </Button>
      <Button variant="outline-primary">Some random button</Button>
    </Stack>
  );
};
export default TransFilters