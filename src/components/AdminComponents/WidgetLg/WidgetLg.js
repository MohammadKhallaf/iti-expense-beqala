import "./WidgetLg.css"
import photo from "../images/magdi.jpeg";
import React, { useEffect, useState } from "react";
import { backendAPI } from "../../../store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



export default function WidgetLg() {
    const { t, i18n } = useTranslation();
    const [checkout, setCheckout] = useState([]);
    const [items, setItems] = useState([]);
    const [orderID, setorderID] = useState(null);
    const [Rerender, setRerender] = useState(false);
    const owner = useSelector((state) => state.auth.user);



    useEffect(() => {
        if (!owner) return;
        backendAPI
            .get("cart/list/", {
                params: { owner_id: owner.id },
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            })
            .then((response) => {
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
                setRerender(true)
            })
            .catch((error) => console.log(error));

    }, [orderID]);

    const temp = checkout.Checkout

    return (
        <div className="WidgetLg" lang={i18n.language}
        dir={i18n.language === "ar" ? "rtl" : null}>
            <h3 className="WidgetLgTittle">{t("WidgetLg.Latest Checkouts")}</h3>
            <table className="WidgetLgTable">
                <thead>
                    <tr className="WidgetLgTr">
                        <th className="WidgetLgTh">{t("WidgetLg.Order ID")}</th>
                        <th className="WidgetLgTh">{t("WidgetLg.Customer")}</th>
                        <th className="WidgetLgTh">{t("WidgetLg.Address")}</th>
                        <th className="WidgetLgTh">{t("WidgetLg.Phone")}</th>
                        <th className="WidgetLgTh">{t("WidgetLg.Date")}</th>
                        <th className="WidgetLgTh">{t("WidgetLg.Amount")}</th>
                        <th className="WidgetLgTh">{t("WidgetLg.Payment Method")}</th>
                        <th className="WidgetLgTh">{t("WidgetLg.Status")}</th>
                        <th className="WidgetLgTh">{t("WidgetLg.Action")}</th>
                        <th className="WidgetLgTh">{t("WidgetLg.View")}</th>
                    </tr>
                </thead>
                <tbody>
                    {temp?.map((order, index) => {
                        const toID = "#container" + order.order_detail[0].id;
                        return (

                            <tr className="WidgetLgTr" key={index} >
                                <td className="">
                                   {order.order_detail[0].id}
                                </td>
                                <td className="">
                                    {order.customer[0].first_name} {order.customer[0].last_name}
                                </td>
                                <td className="">
                                    {order.customer[0].address}
                                </td>
                                <td className="">
                                    {order.customer[0].phone}
                                </td>
                                <td className="WidgetLgDate">{order.order_detail[0].orderDate}</td>
                                <td className="WidgetLgAmount">{order.total[0]} {t("WidgetLg.EGP")}</td>
                                <td className="">{order.order_detail[0].payment}</td>

                                <td className="WidgetLgStatus">{order.order_detail[0].state}</td>
                                {/* onClick={ setorderID(order.order_detail[0].id)} */}
                                <td className="WidgetLgStatus WidgetLgBtn">
                                    <button className=" WidgetLgBtn Approved"
                                        onClick={() => { setRerender(false); setorderID(order.order_detail[0].id); }}>
                                        {t("WidgetLg.Done")}
                                    </button>
                                </td>
                                <td className="WidgetLgStatus WidgetLgBtn">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={toID} aria-expanded="true" aria-controls="collapseOne">
                                                    {t("WidgetLg.Cart Items")}
                                                </button>
                                            </h2>
                                            <table> </table>
                                            {order.cart?.map((item, ind) => {
                                              
                                                const id = "container" + item.cart_details[0].order;
                                                return (
                                                    <div id={id} key={ind} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div className="accordion-body">
                                                            <table className="WidgetLgTable">
                                                                <thead>
                                                                    <tr className="WidgetLgTr">
                                                                        <th className="WidgetLgTh">{t("WidgetLg.Product")}</th>
                                                                        <th className="WidgetLgTh">{t("WidgetLg.Price")}</th>
                                                                        <th className="WidgetLgTh">{t("WidgetLg.Quantity")}</th>
                                                                        <th className="WidgetLgTh">{t("WidgetLg.Offer")}</th>
                                                                      
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="WidgetLgTr" >
                                                                        <td className="WidgetLgUser">

                                                                            <img className="WidgetLgImg" src={item.product_details[0].image} alt="" />
                                                                            <span className="WidgetLgNamre">{item.product_details[0].name}</span>
                                                                        </td>
                                                                        <td className="WidgetLgAmount">

                                                                            {item.price} {t("WidgetLg.EGP")}
                                                                        </td>
                                                                        <td className="WidgetLgDate">{item.cart_details[0].quantity} </td>
                                                                        <td className="WidgetLgAmount"> - {item.offer}% </td>

                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                );
                                            })}

                                        </div>


                                    </div>
                                </td>

                            </tr>

                        );
                    })}



                </tbody>
            </table>

        </div>
    )
}
