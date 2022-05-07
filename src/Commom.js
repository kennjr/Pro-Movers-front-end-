import React from "react";
// import web from "../src/images/img2.svg";
import { NavLink } from "react-router-dom";

const Commom = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">

          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
             
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

                  <h1>
                    {props.name}
                    Don’t do it
                    <strong className="brand-name">  yourself </strong>,
                    Let us help you.
                  </h1>
                  <h2 className="my-3">
                    Moving day it’s just another day.
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started ">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Commom img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section  id="procedure" className="cards">
        
        <div className="col-md-4 col-12 mx-auto card1">
          <div className="card">
            <img className="imgg" src={require('../src/images/box-truck.png')} />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{props.title}</h5>
              <p className="card-text">
                Make your Reservation
              </p>

            </div>
          </div>
        </div>

        <div className="col-md-4 col-12 mx-auto card2">
          <div className="card">
            <img className="imgg" src={require('../src/images/forklift.png')} />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{props.title}</h5>
              <p className="card-text">
                Load Your Container
              </p>

            </div>
          </div>
        </div>


        <div className="col-md-4 col-12 mx-auto card3">
          <div className="card">
            <img className="imgg" src={require('../src/images/house.png')} />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{props.title}</h5>
              <p className="card-text">
                We’ll take it from there
              </p>

            </div>
          </div>
        </div>

      </section>

      <section id="header" className="d-flex align-items-center">

        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">


                <div className="col-lg-6 order-1 order-lg-2 header-img">

                  <h1>
                    {props.name}
                    We give you complete control of your Relocation.
                  </h1>
                  <h2 className="my-3">
                    We make your moving experience exciting
                  </h2>
                </div>

                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center header-img">

                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      src={props.imgrc}
                      className="img-fluid animated imgrc"
                      alt="Commom img"
                    />

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="col-md-4 col-12 mx-auto barsize">
          <div className="card barcontent">
            <div className="card-body yeartext">
              <h5 className="card-title font-weight-bold">{props.title}</h5>

              <h1> <span> 2+</span> <p>YEARS OF EXPERIENCE</p></h1>

              <h1><span> 420</span> <p>HAPPY CLIENTS</p></h1>

              <h1> <span>531</span> <p> NO OF CLIENTS</p></h1>

              <h1><span>193</span> <p>NO OF MOVERS</p></h1>

            </div>
          </div>
        </div>
      </section>

      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">


                  <h2 className="my-3 pcompanies">
                    PARTNERSHIP COMPANIES
                  </h2>

                  <h1>
                    {props.name}
                    Meet Our Partners!
                  </h1>

                  <br />

                  <section className="cards2">
                    <div className="col-md-4 col-12 mx-auto card1">
                      <div className="card cardm imgdown radius">
                        <img className="imgg2 " src={require('../src/images/box.jpg')} />
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold">{props.title}</h5>
                          <p className="card-text ezee">
                          EZEE Movers
                          </p>

                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-12 mx-auto card2">
                      <div className="card cardm radius">
                        <img className="imgg2" src={require('../src/images/box.jpg')} />
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold">{props.title}</h5>
                          <p className="card-text ezee">
                          EZEE Movers
                          </p>

                        </div>
                      </div>
                    </div>


                    <div className="col-md-4 col-12 mx-auto card3">
                      <div className="card cardm imgdown radius">
                        <img className="imgg2 " src={require('../src/images/box.jpg')} />
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold">{props.title}</h5>
                          <p className="card-text ezee">
                          EZEE Movers
                          </p>

                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-12 mx-auto">
                      <div className="card cardm radius">
                        <img className="imgg2" src={require('../src/images/box.jpg')} />
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold">{props.title}</h5>
                          <p className="card-text ezee">
                          EZEE Movers
                          </p>

                        </div>
                      </div>
                    </div>

                  </section>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="col-md-4 col-12  barsize2">
          <div className="card  rectangle">
            <div className="card-body yeartext2">
              <h5 className="card-title font-weight-bold">{props.title}</h5>

              <h1> <span className="testimonials"> TESTIMONIALS</span> <p className="clientssay">What our clients say about us.</p></h1>

              <section className="cards cardsclients">
        <div className="col-md-4 col-12 mx-auto card1 "  >
        <div className="card card4">
            <p className="longtext">

            Long established fact that a reader will be distracted by the readable content of a page when looking at it's layout. The point of using Lorem Ipsum
            </p>
            <div className="card-body dpbody">
              <h5 className="card-title font-weight-bold">{props.title}</h5>
              <p className="card-text ">
              Eugene Mark
              </p>
              <img className="imggdp" src={require('../src/images/house.png')} />
              <p className="card-text namebold">
              Customer
              </p>

            </div>
          </div>
        </div>

        <div className="col-md-4 col-12 mx-auto card2">
          <div className="card card4">
            <p className="longtext">

            Long established fact that a reader will be distracted by the readable content of a page when looking at it's layout. The point of using Lorem Ipsum
            </p>
            <div className="card-body dpbody">
              <h5 className="card-title font-weight-bold">{props.title}</h5>
              <p className="card-text ">
              Eugene Mark
              </p>
              <img className="imggdp" src={require('../src/images/house.png')} />
              <p className="card-text namebold">
              Customer
              </p>

            </div>
          </div>
        </div>


        <div className="col-md-4 col-12 mx-auto card3">
        <div className="card card4">
            <p  className="longtext">

            Long established fact that a reader will be distracted by the readable content of a page when looking at it's layout. The point of using Lorem Ipsum
            </p>
            <div className="card-body dpbody">
              <h5 className="card-title font-weight-bold">{props.title}</h5>
              <p className="card-text ">
              Eugene Mark
              </p>
              <img className="imggdp" src={require('../src/images/house.png')} />
              <p className="card-text namebold">
              Customer
              </p>

            </div>
          </div>
        </div>

      </section>


            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Commom;

