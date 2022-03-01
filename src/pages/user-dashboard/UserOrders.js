import React, { useEffect, useState } from "react";
import { Tabs, Tab, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SectionCard from "../../components/user-dashboard/SectionCard.js";
import { getAllOrders } from "../../redux/actions/Udashboard.js";

/**
 * get all orders
 * sort them
 * @returns
 */
const UserOrders = () => {
  // <---states--->
  const [key, setKey] = useState("home");
  const [init, setInit] = useState(true);

  //<>
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if(user)
    dispatch(getAllOrders(user.id));
  }, [user]);

  return (
    <div>
      <h1 className="pb-3">My Account</h1>
      <Row className="gy-4">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="home" title="All"></Tab>
          <Tab eventKey="profile" title="Pending"></Tab>
          <Tab eventKey="contact" title="Contact"></Tab>
        </Tabs>
        <SectionCard icon="user" header="orders" />
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Store</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

export default UserOrders;
