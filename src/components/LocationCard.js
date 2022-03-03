import React from "react";
import { Link } from "react-router-dom";

export default function LocationCard(props) {
  const imgURL = props.loc
  const styles = {
    header: {
      width: '100%',
      height:193,
      backgroundImage: `url(${props.loc})`,
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
  const city=props.name
  return (
    <>


      <div className="col-lg-4 col-md-6 col-sm-6 mx-5 my-5  ">
        <div className="card text-center rounded border-0 locCard" style={{ width: "18rem" }}>
        
          <Link to={`/${city}/stores`} style={{ textDecoration:'none'}}>
            <div className="locCardb"
              style={styles.header}
            >
              <div className="locTitle" style={styles.content}>{city==='cairo'?'Cairo':'Alexandria'}</div>

            </div>
          </Link>
    
        </div>
      </div>
    </>
  );
}
