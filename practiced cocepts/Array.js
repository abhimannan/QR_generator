import React from 'react'
import PropType from 'prop-types'
const Array = (props) => {
 // const family=[
 //     {id:1,name:"abhi",role:"kumar"},
 //     {id:2,name:"x",role:"geetha"},
 //     {id:3,name:"y",role:"vijay"},
 //     {id:4,name:"z",role:"aval"},
 // ];
 const family=[
  {id:1,name:"abhi"},
  {id:2,name:"geetha"},
  {id:3,name:"kumar"},
  {id:4,name:"vijay"}
];
//<Array family={family}/>

  return (
    <div>
     <h1>Family Names...</h1>
       {/* { 
       family.map((data)=>{return <ul>
             <li>{data.name}</li><br></br>
             <li>{data.role}</li>
       </ul>})
       } */
      props.family.map((data)=>(<ul>
       <li key={props.family.id}>{data.name}</li>
      </ul>))
       
       
       
       }
     
    </div>
  )
}

export default Array;
Array.PropType = {
   id:PropType.number,
   name:PropType.string
};
Array.defaultProp={
 id:5,
 name:"521"
}
