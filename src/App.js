import React from "react";
// import data from './data';
// import Item from './Item';
import Product from "./Product";
import './index.css'
const App = () => {
  return <div>
  <h1 style = {{
    fontSize:"50px",
    backgroundColor:"black",
    color:"white",
    width:"100vw",
    // height:"30vh",
    padding:"30px",
    boxSizing:"border-box",
    justifyContent:"center",
    alignItems:"center",
    display:"flex",

   
  
  }}>Travel 🚀</h1>
   <Product></Product>
   
  </div>;
};

export default App;
