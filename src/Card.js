import React from 'react'
import { useState } from 'react'
const Card = ({ name, id, info, price, image      ,remove}) => {
    const [currlength, setcurrlength] = useState(false);
    // const descr =`${ info.substring(0,200)} ...`;
    const descr = currlength ? info : `${info.substring(0, 200)} ...`
    function lengthhandler() {
        setcurrlength(!currlength)

    }
    return (
        <div style={{
        width:"290px",
        color:"white",
        height:"600px",
        marginRight:"10px",
        padding:"10px",
      
        

        }}>
           
            <h1>{name}</h1>
            <h3>{price}</h3>
            <img style = {{
                maxWidth:"400px", width:"300px" , height:"300px"
            }}src={image} alt='img'></img>
            <h3>{descr}
                <span style={{
                    color:"blue",
                    cursor:"pointer",
                   marginLeft:"10px",
                }} onClick={lengthhandler}>
                    {currlength ? 'show less' : ' Read more'}
                </span>
            </h3>
            <button style = {{
                width:"50%",
                marginLeft:"80px",
                backgroundColor:"black",
                color:"white",
                padding:"10px",
                borderRadius:"5px",
                cursor:"pointer",
                marginTop:"10px"
            }}onClick={()=>{
                remove(id)} //it will give id of the button which is clicked
                }>Not Interested</button>
        </div>
    )
}

export default Card