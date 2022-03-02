import "./WidgetLg.css"
import photo from "../images/magdi.jpeg";
import React, { useEffect, useState } from "react";
import { backendAPI } from "../../../store";
import { useSelector } from "react-redux";


export default function WidgetLg() {

    const [checkout, setCheckout] = useState([]);
    const [items, setItems] = useState([]);
    const [orderID, setorderID] = useState(null);
    const [Rerender, setRerender] = useState(false);
    const owner = useSelector((state) => state.auth.user);
    console.log(owner)


    useEffect(() => {

        backendAPI
            .get("cart/list/", {
                params: { owner_id: 1 },
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            })
            .then((response) => {
                console.log(response.data)
                setCheckout(response.data)
            })
            .catch((error) => console.log("Error Status : ", error.response.status));
    }, [Rerender]);

    useEffect(() => {
        backendAPI
        .put("cart/done/", {
            owner_id: 1,
            order_id: orderID
        })
        .then((response) => {
            console.log("update==>", response.data);
            setRerender(true)
        })
        .catch((error) => console.log(error));

      }, [orderID]);

    console.log(checkout)

    const temp = checkout.Checkout
    console.log(temp)


    return (
        <div className="WidgetLg">
            <h3 className="WidgetLgTittle">Latest Checkouts</h3>
            <table className="WidgetLgTable">
                <thead>
                    <tr className="WidgetLgTr">
                        <th className="WidgetLgTh">Order ID</th>
                        <th className="WidgetLgTh">Customer</th>
                        <th className="WidgetLgTh">Date</th>
                        <th className="WidgetLgTh">Payment Method</th>
                        <th className="WidgetLgTh">Amount</th>
                        <th className="WidgetLgTh">Status</th>
                        <th className="WidgetLgTh">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {temp?.map((order, index) => {
                        console.log(order)
                        return (

                            <tr className="WidgetLgTr" key={index} >
                                <td className="WidgetLgUser">

                                    <span className="WidgetLgNamre">{order.order_detail[0].id}</span>
                                </td>
                                <td className="">

                                    {order.customer[0].first_name} {order.customer[0].last_name}
                                </td>
                                <td className="WidgetLgDate">{order.order_detail[0].orderDate}</td>
                                <td className="WidgetLgAmount">{order.total[0]} EGP</td>
                                <td className="">{order.order_detail[0].payment}</td>

                                <td className="WidgetLgStatus">{order.order_detail[0].state}</td>
                                {/* onClick={ setorderID(order.order_detail[0].id)} */}
                                <td className="WidgetLgStatus WidgetLgBtn">
                                    <button className=" WidgetLgBtn Approved"
                                        onClick={() => { setRerender(false); setorderID(order.order_detail[0].id);   }}>
                                        Done
                                    </button>
                                </td>


                            </tr>

                        );
                    })}



                </tbody>
            </table>
        </div>
    )
}
