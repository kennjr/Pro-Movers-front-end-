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

        <div className="row-title">
          <h1>OurCompany</h1>
          <hr />
        </div>

        <div className="row1 row2 ">
          <div className="col1_2">
            <span className="text">We are a Nairobi based top </span>
            <h3>Mover company</h3>
            <p>
             
              That has been in the industry since <i>september 15nth 2019</i> <br />
              Now were up in the big leagues getting our turn at bat. Our work
              is expanding  more to movers not only in Nairobi but in other
              cities in Kenya.
            </p>
          </div>
          <div className="col2">
            <img src={mover1} alt="move" />
          </div>
        </div>

        <div className="row3 row1">
          <div className="mover2">
            <img src={mover2} alt="move" />
          </div>
          <div className="mover2_txt">
            This company majors in registering qualified high quality professional movers in the city <br />
            They are registered under one roof called <h4>Pro movers</h4>This is to provide convidence 
            and acceptability from clients  and also avail a variety of mover on one dial quick. <br />
             This platform also offers online booking and quick response to clients of all levels 
          </div>
        </div>
        <div className="services_t">
          <h1>What We Do</h1>
        </div>

        <div className="service">
          <li>
            <img src={starCheked} alt="starCheked" />
            These Happy Days are yours
          </li>
          <li>
            <img src={starCheked} alt="starCheked" />
            There ain't nothin' wrong with .
          </li>
        </div>
        <div className="service">
          <li>
            <img src={starCheked} alt="starCheked" />
            Why do we always come.
          </li>
          <li>
            <img src={starCheked} alt="starCheked" />
            Why do we always come.with the best
          </li>
        </div>
        <div className="service">
          <li>
            <img src={starCheked} alt="starCheked" />
            These Happy Days are you with
          </li>
          <li>
            <img src={starCheked} alt="starCheked" />
            There ain't nothin' wrong with .
          </li>
        </div>

        <Link to="/"></Link>
      </div>
    </>
  );
};

export default About;
