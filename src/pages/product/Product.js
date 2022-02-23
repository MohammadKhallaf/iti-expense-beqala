// import React from "react";
// import Category from "../../components/Category";
// import Footer from "../../components/Footer";
// import Navbar from "../../components/Navbar";

// export default function Product() {
//   return (
//     <>
//       <hr></hr>
//       <div className="container text-center mt-5">
//         <nav aria-label="breadcrumb">
//           <ol className="breadcrumb">
//             <li className="breadcrumb-item mx-1 bcItem">
//               <a className="text-light" href="#"> <i className="fas fa-home"></i> </a>
//             </li>
//             <li className="text-light mx-1 breadcrumb-item active bcItem px-3" style={{filter: "brightness(0.95)"}} >
//               Stores
//             </li>
//             <li className="text-light mx-1 breadcrumb-item active bcItem px-3" style={{filter: "brightness(0.95)"}} >
//               Products
//             </li>
//           </ol>
//         </nav>
//         <h3 className="text-start">Available Products</h3>
//         <div className="row">
//           <Category />
//           <hr></hr>
//         </div>
//       </div>
//     </>
//   );
// }


import axios from 'axios';
import React, {useState, useEffect} from 'react';


const Showstore = () => {

    const [store, setstore] = useState([])

    const fetchstore = async () => {
        const result = await axios.get('http://localhost:8000/store/category/bakery/');

        console.log(result.data)
        setstore(result.data)
    }

    useEffect(() => {
        fetchstore();
    }, [])

    
    return (
        <div>

            <div className="main-store-show">
            {
                store.map((store, index) => (
                    <div className="m-3 rounded shadow-lg main-store-show" style={{ width: '22em' }}>



                        <h1>{store.id}</h1>
                        <div> {store.email} </div>
                        <div> {store.phone} </div>
                        <div> {store.address} </div>
                        

                    </div>
                ))

            }
            </div>
           
            
        </div>
    );
};

export default Showstore;