import React from 'react'
import './Employee.css'
const Employee = (props) => {
  // App.js
//   import './App.css';
// import Employee from './Employee.js';
// function App() {
//   return (
//     <div className='app-container'>
//     <>
//       <Employee
//       status="OFFLINE"
//        employee_pic="https://media.licdn.com/dms/image/D5603AQG8GzwY0ObITA/profile-displayphoto-shrink_800_800/0/1669606352500?e=2147483647&v=beta&t=2blVCpnGjgkt9KoeeHJx1L_hMiOEaFSyilfgtKUEJQ8"       
//          name="James" 
//           country="America"
//           job_desc="Front-end Developer"
//           skill1="UI/UX"
//           skill2="Front-end Development"
//           skill3="CSS"
//           skill4="JavaScript"
//           skill5="Bootstrap"
//           skill6="React JS"
//           skill7="Node JS"
//        />
        
       
    // </>
//     </div>
//   );
// }
// export default App;
// App.css
// .app-container {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
//   padding: 20px;
  
//  }
 
//  /* Styles for Employee component can remain as provided earlier */
 
//  .card-container {
//   width: 300px;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   background-color: #f9f9f9;
//  }
 
//  .status {
//   background-color: #ffc107;
//   color: #333;
//   padding: 5px 10px;
//   border-radius: 5px;
//   margin-bottom: 10px;
//  }
 
//  .employee_image {
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   object-fit: cover;
//   margin-bottom: 10px;
//  }
 
//  h2 {
//   font-size: 1.5rem;
//   margin-bottom: 5px;
//  }
 
//  h3 {
//   color: #666;
//   font-size: 1.2rem;
//   margin-bottom: 10px;
//  }
 
//  .job_desc {
//   margin-bottom: 15px;
//  }
 
//  .button-container {
//   margin-top: 10px;
//  }
 
//  .button-container button {
//   margin: 5px;
//   padding: 8px 16px;
//   border: none;
//   background-color: #007bff;
//   color: white;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//  }
 
//  .button-container button:hover {
//   background-color: #0056b3;
//  }
 
//  .skills {
//   font-weight: bold;
//   margin-top: 15px;
//  }
 
//  .skilllist {
//   display: inline-block;
//   background-color: #e9ecef;
//   color: #333;
//   padding: 5px 10px;
//   border-radius: 10px;
//   margin: 5px;
//  }
 
//  @media (max-width: 768px) {
//   .app-container {
//     padding: 10px;
//   }
  
//   .card-container {
//     width: calc(50% - 20px); /* Two cards per row */
//   }
//  }
 
  return (
    <div className='card-container'>
     <p className='status'>{props.status}</p>
      <img className='employee_image' src={props.employee_pic} alt="employee_pic"></img>
      <h2>{props.name}</h2>
      <h3>{props.country}</h3>
      <p>{props.job_desc}</p>
      <button className='message'>Message</button>
      <button className='following'>Following</button>
      <br></br>
      <p className='skills'>Skills</p>
      <p className='skilllist'>{props.skill1}</p>
      <p className='skilllist'>{props.skill2}</p>
      <p className='skilllist'>{props.skill3}</p>
      <p className='skilllist'>{props.skill4}</p>
      <p className='skilllist'>{props.skill5}</p>
      <p className='skilllist'>{props.skill6}</p>
      <p className='skilllist'>{props.skill7}</p>
    </div>
  )
}

export default Employee
