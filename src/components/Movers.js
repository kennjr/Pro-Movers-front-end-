import { Link } from "react-router-dom";
// import { useState } from "react";
import "../css/about.css";
import "../css/movers.css";
import { useState } from "react";

const Movers = ({ movers }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const move2 = new URL("../images/move2.png", import.meta.url);
  const logo = new URL("../images/LogoMakr 2.png", import.meta.url);
  // const mover2 = new URL("../images/next21.png", import.meta.url);
  // const move = new URL("../images/move.jpg", import.meta.url);
  return (
    <>
      <div className="container">
        <div className="row1">
          <div className="col1">
            <span className="logo">
              <img src={logo} alt="logo" />
            </span>
            <br />
            <h1>Household Moving </h1> <h4>Pro movers-Household Moving </h4>{" "}
            <br />
            <span className="motto"></span> Your Choice For The Best Moving{" "}
            <br />
            Experience
          </div>
          <div className="col2">
            <img src={move2} alt="move" />{" "}
          </div>
        </div>

        <div className="row-title">
          <h1>Our Registered movers</h1>
         
        </div>
         <div className="cities">
            <label > Filter</label>
            <select
              value="city"
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              
              <option value=""></option>
              <option value="Nairobi">Nairobi</option>
              <option value="Mombasa">Mombasa</option>
              <option value="Nakuru">Nakuru</option>
              <option value="Kisumu">Kisumu</option>
            </select>
          </div>

        {movers
          .filter((mover) => mover.location.includes(selectedLocation))
          .map((filteredMover) => (
            <div className="row1 row3 ">
              <div className="mover2">
                <img src={filteredMover.image} alt="mover" />
              </div>

              <div className="mover2_txt">
                <h3 key={filteredMover.id}>{filteredMover.name}</h3>
                <p>{filteredMover.description}</p>
                <br />
                <span className="button">
                  <Link to={"/movers/book/"+filteredMover.name+"/"+filteredMover.id}>Book this mover</Link>
                </span>
              </div>
            </div>
          ))}

        <hr />
        <div className="more">
          <li>
            <span className="button">
              <Link to="/movers/book">Prev</Link>
            </span>
          </li>
          <li>
            <span className="button">
              <Link to="/movers/book"> Next</Link>
            </span>
          </li>
        </div>

        <hr />
      </div>
    </>
  );
};

export default Movers;
