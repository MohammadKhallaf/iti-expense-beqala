
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
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FallbackImage from "./../files/market.png";
const StoreCard = (props) => {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState(props.storeData);
  const [filtered, setFilter] = useState(props.storeData);
  const [input, setInput] = useState('');


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
    i18n.changeLanguage("ar");
    setData(props.storeData);
    setFilter(props.storeData)
  }, [props.storeData]);

  const handelonchange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  useEffect(() => {
    if (input.length > 0) {
      setFilter(data.filter((item, index, array) => {
        console.log(array, index)
        return (item.name.toLowerCase().indexOf(input.toLowerCase()) > -1);
      }));
      console.log(data)
      console.log(input)
    }
    else {
      setFilter(data)
    }
  }, [input])

  return (
    <>
      <h1></h1>
      <div className="container mb-3 ">

        <input type="text" placeholder="search" className="form-control py-2" onChange={handelonchange} value={input} />
      </div>

      <div className="container">
        <div className="row ">
          <div>
            {
              (data.map(item => item.category_name.name))
                .filter((name, index, array) => {
                  console.log(array, index, name)
                  return array.indexOf(name) === index;
                })
                .map(name =>
                  <button

                    className="btn btn-outline-success mb-4 col-lg-3 py-2"
                    onClick={() => filterResult(name)}
                  >

                    {t(`category.${name}`, name)}
                  </button>

                )
            }
            <button
              className="btn btn-outline-success mb-4 col-lg-3 py-2"
              onClick={() => setFilter(props.storeData)}
            >
              All
            </button>

          </div>
        </div>
      </div>


      <div className="container">
        <div className="row ">
          {filtered.map((values, index) => {


            const {
              id: id,
              description: discreption,
              name: title,
              image: img
            } = values;
            return (
              <Link className="col-lg-3 col-md-6 col-sm-8  cardsGrid " to={`/products/${id}`} style={{ textDecoration: 'none' }} key={index}>
                <div >
                  <div className="card my-3 storeCard" style={{}} >
                    <img src={img || FallbackImage} className="card-img-top background" alt="..." style={{ height: "15rem" }} />
                    <div className="card-body cardTitle">{t(`category.${title}`, title)}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StoreCard;
