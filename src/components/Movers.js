import { Link } from "react-router-dom";
import "../css/about.css";
import '../css/movers.css'


const Movers = () => {
  const move2 = new URL("../images/move2.png", import.meta.url);
  const logo = new URL("../images/LogoMakr 2.png", import.meta.url);
  const mover2 = new URL("../images/next21.png", import.meta.url);
  const move = new URL("../images/move.jpg", import.meta.url);
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
          <h1>Our Registered movers</h1>
         
        </div>

        <div className="row3 row1">
          <div className="mover2">
            <img src={mover2} alt="move" />
          </div>
          <div className="mover2_txt">
            This company majors in registering qualified high quality
            professional movers in the city <br />
            They are registered under one roof called <h4>Pro movers</h4>This is
            to provide convidence and acceptability from clients and also avail
            a variety of mover on one dial quick. <br />
            This platform also offers online booking and quick response to
            clients of all levels  our listing within Nairobi is as follows: 
            <br /> <li> ksh: 5000 for bedsitters </li>
            <li>Ksh: 8000 for one bedroom</li>
            <li>Ksh: 12000 for two bedroom</li>
            <li> Ksh:12500 for for studio</li>
            
            <br /><span className="button"> <Link to="/movers/book">Book this mover</Link></span>
          </div>
        </div>


        <div className="row3 row1">
          <div className="mover2">
            <img src={mover2} alt="move" />
          </div>
          <div className="mover2_txt">
            This company majors in registering qualified high quality
            professional movers in the city <br />
            They are registered under one roof called <h4>Pro movers</h4>This is
            to provide convidence and acceptability from clients and also avail
            a variety of mover on one dial quick. <br />
            This platform also offers online booking and quick response to
            clients of all levels  our listing within Nairobi is as follows: 
            <br /> <li> ksh: 5000 for bedsitters </li>
            <li>Ksh: 8000 for one bedroom</li>
            <li>Ksh: 12000 for two bedroom</li>
            <li> Ksh:12500 for for studio</li>
            
            <br /><span className="button"> <Link to="/movers/book">Book this mover</Link></span>
          </div>
        </div>


        <div className="row3 row1">
          <div className="mover2">
            <img src={move} alt="move" />
          </div>
          <div className="mover2_txt">
            This company majors in registering qualified high quality
            professional movers in the city <br />
            They are registered under one roof called <h4>Pro movers</h4>This is
            to provide convidence and acceptability from clients and also avail
            a variety of mover on one dial quick. <br />
            This platform also offers online booking and quick response to
            clients of all levels  our listing within Nairobi is as follows: 
            <br /> <li> ksh: 5000 for bedsitters </li>
            <li>Ksh: 8000 for one bedroom</li>
            <li>Ksh: 12000 for two bedroom</li>
            <li> Ksh:12500 for for studio</li>
            
            <br /><span className="button"> <Link to="/movers/book">Book this mover</Link></span>
          </div>
        </div>
<hr />
     <div className="more">
       
          <li> <span className="button"> <Link to="/movers/book">Prev</Link></span> </li>
     <li> <span className="button"> <Link to="/movers/book"> Next</Link></span> </li>
     </div>
     
<hr />
      </div>
    </>
  );
};

export default Movers;
