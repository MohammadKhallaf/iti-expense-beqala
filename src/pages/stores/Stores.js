import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Category from "../../components/Category";
import StoreCard from '../../components/StoreCard';
import { backendAPI } from '../../store';
import { useTranslation } from "react-i18next";
import "./Stores.css";


const Showstore = () => {
  const { t, i18n } = useTranslation();
  let param = useParams();
  const city = param.name
  const [store, setstore] = useState([])

  const fetchstore = async () => {
    const result = await backendAPI.get(`location/stores/${city}/`)
    setstore(result.data)
  }
 
  useEffect(() => {
    fetchstore();
  }, [])

  return (

    <>
    <div lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
     <hr></hr>
       <div className="container text-center mt-5" lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
         <nav aria-label="breadcrumb">
           <ol className="breadcrumb">
             <li className="breadcrumb-item mx-1 bcItem">
               <a className="text-light" href="#"> <i className="fas fa-home"></i> </a>
             </li>
             <li className="text-light mx-1 breadcrumb-item active bcItem px-3" style={{filter: "brightness(0.95)"}} >
               {t("product.Stores")}
             </li>
           </ol>
         </nav>
         <div lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>

         <h3 className="text-start" lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>{t("product.Available Stores")}</h3>
         </div>
         <div className="row">
           <StoreCard storeData={store}/>
           <hr></hr>
         </div>
       </div>
</div>
      
    </>
  )
}
export default Showstore;

