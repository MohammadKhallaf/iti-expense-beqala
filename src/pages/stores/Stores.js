// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Footer from "../../components/Footer";
// import Navbar from "../../components/Navbar";
// import StoreCard from "../../components/StoreCard";
// import FallbackImage from "./../../files/market.png";

// import { backendAPI } from "../../store";
// import "./Stores.css";
// export default function Stores() {
//   const [data, setData] = useState({});
//   const [filtered, setFilter] = useState();
//   useEffect(() => {
//     backendAPI.get("store/store/").then((response) => {
//       const filterResult = (catItem) => {
//         const result = response.filter(
//           (currentData) => {
//           return currentData.category_name.name == catItem;
//         });
//         setFilter(result);
//       };
//   //     console.log(response.data);
//   //     setData(response.data);
//     });
//   }
//   );

//   return (
//     <>
//       <hr></hr>
//       <div className="container text-center  mt-5">
//         <nav aria-label="breadcrumb ">
//           <ol className="breadcrumb ">
//             <li className="breadcrumb-item mx-1 bcItem">
//               <a className="text-light" href="#">
//                 <i className="fas fa-home"></i>{" "}
//               </a>
//             </li>
//             <li
//               className="text-light mx-1 breadcrumb-item active bcItem px-3"
//               style={{ filter: "brightness(0.95)" }}
//             >
//               Stores
//             </li>
//           </ol>
//         </nav>
//         <h3 className="text-start">Available stores</h3>
//         <div className="row">
//           {/* <StoreCard /> */}

//           {Object.keys(data).length &&
//             data.map((values, index) => {
//               // address: "20 Salama Moussa St., AL LABAN"
//               // category_name:
//               //    id: 3
//               //    name: "SuperMarket"
//               // city: "Alexandria"
//               // description: "Best Store. Best Quality"
//               // email: "zahran@gmail.com"
//               // id: 7
//               // name: "Zahran"
//               // phone: "(+20)0112-704-4823"
//               // user_account: 1
//               const {
//                 id,
//                 city,
//                 description: discreption,
//                 name: title,
//                 image:img
//               } = values;
//               return (
//                 <Link className="col-lg-3 col-md-6 col-sm-6  cardsGrid " to={`/products/${id}`} style={{ textDecoration: 'none' }} key={index}>
//                   <div >
//                     <div className="card my-3 storeCard" style={{ width: "15rem" }} >
//                       <img src={ img || FallbackImage } className="card-img-top background" alt="..." style={{height:"10rem"}}/>
//                       <div className="card-body cardTitle">
//                         <p className="card-title  cardTitle">{title}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>

//                 // <div className="col-md-6 col-lg-4 me-3" key={index}>
//                 //   <div
//                 //     className="card m-2"
//                 //     style={{ width: "15rem", height: "28rem" }}
//                 //     id="card"
//                 //   >
//                 //     <img
//                 //       src={FallbackImage}
//                 //       className="card-img-top"
//                 //       alt="..."
//                 //     />
//                 //     <div className="card-body">
//                 //       <h5 className="card-title">{title}</h5>
//                 //       <p>City: {city}</p>
//                 //       <p className="card-text">{discreption}</p>
//                 //     </div>
//                 //   </div>
//                 // </div>
//               );
//             })}
//           <hr></hr>
//         </div>
//       </div>
//     </>

//   );

//   // const filterResult = (catItem) => {
//   //   const result = response.storeData.filter(
//   //     (currentData) => {
//   //     return currentData.product.category.name == catItem;
//   //   });
//   //   setFilter(result);
//   // };
// }

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Category from "../../components/Category";
import StoreCard from '../../components/StoreCard';
import { backendAPI } from '../../store';
import "./Stores.css";


// const fetchstore = async () => {
//   const productcategory = await backendAPI.get(`product/category/`);

//   console.log(productcategory.data)
//   setstore(productcategory.data)
// }

// useEffect(() => {
//   fetchstore();
// }, [])
const Showstore = () => {
  let param = useParams();
  console.log("param=",param)
  const city = param.name
  const [store, setstore] = useState([])

  const fetchstore = async () => {
    const result = await backendAPI.get(`location/stores/Cairo/`)

    console.log(result.data)
    setstore(result.data)
  }

  useEffect(() => {
    fetchstore();
  }, [])

  return (

    <>
     <hr></hr>
       <div className="container text-center mt-5">
         <nav aria-label="breadcrumb">
           <ol className="breadcrumb">
             <li className="breadcrumb-item mx-1 bcItem">
               <a className="text-light" href="#"> <i className="fas fa-home"></i> </a>
             </li>
             <li className="text-light mx-1 breadcrumb-item active bcItem px-3" style={{filter: "brightness(0.95)"}} >
               Stores
             </li>
           </ol>
         </nav>
         <h3 className="text-start">Available Stores</h3>
         <div className="row">
           <StoreCard storeData={store}/>
           <hr></hr>
         </div>
       </div>
      {/* <hr></hr>
      <div className="container text-center mt-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item mx-1 bcItem">
              <a className="text-light" href="#"> <i className="fas fa-home"></i> </a>
            </li>
            <li className="text-light mx-1 breadcrumb-item active bcItem px-3" style={{ filter: "brightness(0.95)" }} >
              Stores
            </li>
            <li className="text-light mx-1 breadcrumb-item active bcItem px-3" style={{ filter: "brightness(0.95)" }} >
              Products
            </li>
          </ol>
        </nav>
        <h3 className="text-start">Available </h3>
        <div className="row">
          <Category storeData={store}/>
          <hr></hr>
        </div>
      </div> */}
    </>
  )
}
export default Showstore;

