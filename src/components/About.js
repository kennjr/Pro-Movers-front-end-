import { Link } from "react-router-dom";
import '../css/about.css'
const move2 = new URL("../images/move2.png", import.meta.url);
const logo = new URL("../images/LogoMakr 2.png",import.meta.url);
const mover1 = new URL("../images/next1.png", import.meta.url);
const mover2 = new URL("../images/next21.png", import.meta.url);
const starCheked = new URL("../images/checkmark .png", import.meta.url);


const About = () => {
  return (
    <>
      <div className="container">
        <div className="row1">
          <div className="col1">
            <span className="logo">
              <img src={logo} alt="logo" />
            </span>{" "}
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

      </div>
    </>
  );
};

export default About;
