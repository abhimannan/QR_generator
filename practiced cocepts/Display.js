import React from "react";
import './display.css'
const Display = function(props){
 let nameClass="expression";
   return (
       <div>
          <h1>Abhi Mannan</h1>
          <button className="button">Sample</button>
          <h1 className="">1+1+1={1+1+1}</h1>
       </div>
   );
}
export default Display;