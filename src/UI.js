import React from 'react'

const UI = ({getbackk}) => {
  return (
    <div style = {{
        backgroundColor:"royalblue",
        width:"100vw",
        height:"100vh",
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
    }}>
        <h1>No visits left</h1>
        <button style = {{
                width:"30%",
                marginLeft:"80px",
                backgroundColor:"black",
                color:"white",
                padding:"30px",
                borderRadius:"5px",
                cursor:"pointer",
                fontSize:"18px"
            }}onClick={()=>getbackk()}>Refresh</button>
    </div>
  )
}

export default UI