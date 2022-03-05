import React, {  useState } from "react";
import { Link } from "react-router-dom";

export default function LocationCard(props) {



  // fetch(`${props.loc}`, { method: 'HEAD' })
  // .then(res => {
  //     if (res.ok) {
  //       setimg(`url(${props.loc})`)
  //     } else {
  //       setimg(`none`)
  //     }
  // }).catch(err => console.log('Error:', err));
  const img =props.name.toLowerCase();
  console.log(img)
  const styles = {
    header: {
      width: '100%',
      height:193,
      backgroundImage: `url(${require(`../files/Location/${img}.jpg`)})`,
      backgroundColor: 'rgba(0, 111, 104)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    content: {
      width: '100%',
      height:'100%',
      margin:0,
      paddingTop:'70px',  
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
  }
  console.log(img)
  const city=props.name
  return (
    <>


      
        <div className="card text-center rounded border-0 locCard" style={{ width: "18rem" }}>
        
          <Link to={`/${city}/stores`} style={{ textDecoration:'none'}}>
            <div className="locCardb"
              style={styles.header}
            >
              <div className="locTitle" style={styles.content}>{city}</div>

            </div>
          </Link>
    
        </div>
      
    </>
  );
}
