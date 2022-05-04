import { Link } from "react-router-dom";
// import { useState } from "react";
import "../css/about.css";
import "../css/movers.css";

const Movers = ({ movers }) => {
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
        {movers.map((mover) => (

          <div className="row3 row1">

            <div className="mover2">

              <img src={mover.image} alt="mover" />
            </div>

            <div className="mover2_txt">
              <h3 key={mover.id}>{mover.name}</h3>
              <p>{mover.description}</p>
              <br />
              <span className="button">
                <Link to="/movers/book">Book this mover</Link>
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
