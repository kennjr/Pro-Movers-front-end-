// import { Link } from "react-router-dom";
// import "../css/moverList.css";
// import { useState } from "react";


// const MoversList = ({ movers }) => {

//  const [selectedLocation,setSelectedLocation]=useState('')
    
   


//   return (
//     <div className="container" >

//       <div className="cities">
//           <select value="city" onChange={(e) => setSelectedLocation(e.target.value)}>
//         <option value=""></option>
//         <option value="Nairobi">Nairobi</option>
//         <option value="Mombasa">Mombasa</option>
//         <option value="Nakuru">Nakuru</option>
//         <option value="Kisumu">Kisumu</option>
//       </select>

//       </div>
//       <div className="row-title">
//         <h1>Our Registered movers List</h1>
//       </div>
//       <div className="cities">
    
//       </div>

//  {movers.filter(mover => mover.location.includes(selectedLocation)).map(filteredMover => (

   
//      <div className="row_temp">
//           <div className=" col_temp title_col"> 
//             <h3 key={filteredMover.id}>{filteredMover.name}</h3>
//           </div>
//           <div className="col_temp text_col">
//             <p>{filteredMover.description}</p>
//             <br />
//           </div>
//           <div className="col_temp">
//             <p>{filteredMover.location}</p>
//           </div>
//           <div className="col_temp"> 
//             <span className="button">
//               <Link to="/movers/book">Book this mover</Link>
//             </span>
//           </div>
//         </div>
//   ))}
      

   
//     </div>
//   );
// };

// export default MoversList;
