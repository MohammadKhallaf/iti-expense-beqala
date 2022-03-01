
// import marketTest from "./../files/market.svg"
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { backendAPI } from "../store";

// export default function StoreCard() {

//   const param = useParams();
//   const [StoreResult, setStoreResult] = useState([]);

//   console.log(param.name);

//   useEffect(() => {
//     backendAPI
//       .get(`location/stores/${param.name}/`)
//       .then((res) => {
//         console.log("API=====||=");
//         console.dir(res.data)
//         setStoreResult(res.data)
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <>
//       <div className="container ">
//         <div className="row " >
//           {StoreResult.map((store, index) => (
//             <Link className="col-lg-3 col-md-6 col-sm-6  cardsGrid " to={`/products/${store.id}`} style={{ textDecoration: 'none' }} key={store.id}>
//               <div >
//                 <div className="card my-3 storeCard" style={{ width: "15rem" }} >
//                   <img src={marketTest} className="card-img-top background" alt="..." />
//                   <div className="card-body cardTitle">
//                     <p className="card-title  cardTitle">{store.name}</p>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}

//         </div>
//       </div>
//     </>
//   );
// }
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FallbackImage from "./../files/market.png";
const StoreCard = (props) => {
  const [data, setData] = useState(props.storeData);
  const [filtered, setFilter] = useState(props.storeData);

  /**
   * 
   * @param  catItem category name
   */
  const filterResult = (catItem) => {
    const result = props.storeData.filter(
      (currentData) => {
        return currentData.category_name.name == catItem;
      });
    setFilter(result);
  };

  useEffect(() => {
    setData(props.storeData);
    setFilter(props.storeData)
  }, [props.storeData]);

  return (
    <>
      <h1></h1>
      <div className="container-fluid mx-2">
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
            <div className="row">
              {
                (data.map(item => item.category_name.name))
                  .filter((name, index, array) => {
                    console.log(array, index, name)
                    return array.indexOf(name) === index;
                  })
                  .map((name, index) =>
                    <button
                      className="btn btn-outline-success mb-4"
                      onClick={() => filterResult(name)}
                      key={index}
                    >
                      {name}
                    </button>

                  )
              }
              <button
                className="btn btn-outline-success mb-4"
                onClick={() => setFilter(props.storeData)}
              >
                All
              </button>
            
            </div>
          </div>
          <div className="col-md-9">
            <div className="row ">
              {filtered.map((values, index) => {

                const {
                  id,
                  description: discreption,
                  name: title,
                  image: img
                } = values;
                return (
                  <Link className="col-lg-4 col-md-8 col-sm-8  cardsGrid " to={`/products/${id}`} style={{ textDecoration: 'none' }} key={index}>
                    <div >
                      <div className="card my-3 storeCard" style={{ width: "15rem" }} >
                        <img src={img || FallbackImage} className="card-img-top background" alt="..." style={{ height: "20rem" }} />
                        <div className="card-body cardTitle">
                          <p className="card-title  cardTitle">{title}</p>
                        </div>

                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreCard;
