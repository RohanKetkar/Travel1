import React from 'react'
import Card from './Card'
import data from './data';
import { useState } from 'react'
import UI from './UI'
const Product = () => {
    const [currdatas, setcurrdatas] = useState(data);
    function removehandler(id) {
        console.log('removehandler');
        // console.log(id);
        console.log(currdatas)
        const datacurr = currdatas.filter(currdata => {
            console.log(currdata.id);
            console.log(currdata.id !== id); // it will return true and false value;
            return currdata.id !== id;


        })
        setcurrdatas(datacurr)
       

    }
    function getback(){
        setcurrdatas(data)
    }
    if(currdatas.length ===0){
        return(<div>
           <UI getbackk={getback}/>
        </div>);
    }
    return (
        <div style = {{
            backgroundColor:"royalblue",
            display:"flex",
            // marginLeft:"10px",
            // padding:"10px",
            flexWrap:"wrap",
            width:"100%"
           
        }}>
            {
                
                currdatas.map((currentdata) => {
                    return (<div style = {{
                        backgroundColor:"orange",
                        margin:"10px",
                        borderRadius:"40px"
                    }}>
                       
                        <Card key={currentdata.id} {...currentdata} remove={removehandler} />
                        </div>)
                })
            }

        </div>
    )
}

export default Product