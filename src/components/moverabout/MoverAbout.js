import React from 'react';
import box from '../../static/asserts/moving-box.jpg';
import chair from '../../static/asserts/moving-c.jpg';
import quote from '../../static/asserts/quote.png'
import huey from '../../static/asserts/huey.jpg'
import '../../static/css/moverabout.css';


let MoverAbout = ()=>{

    return(
        <>
            <section className="movers-about">
                <article className="movers-about-container">
                    <article className="movers-about-images">
                        <div className="movers-about-images-one">
                            <img src={box} alt="" />
                        </div>
                        <div className="movers-about-images-two">
                            <img src={chair} alt="" />
                        </div>
                    </article>
                    <article className="movers-about-title">
                        <h1>Old GuardTruck Yard</h1>
                    </article>
                    <article className="movers-about-description">
                        <p>Now were up in the big leagues getting’ our turn at bat. And when the odds are against him and work to do Duis aute irure dolor.Now were up in the big leagues And when the odds are against him and work to do Duis aute irure dolor.     Checkout our website</p>
                    </article>
                    <article className="movers-about-history">
                        <div className="movers-about-history-years">
                            <h1>2+</h1>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <div className="movers-about-history-clients">
                            <h1>420</h1>
                            <p>HAPPY CLIENTS</p>
                        </div>
                        <div className="movers-about-history-numberofclients">
                            <h1>531</h1>
                            <p>NO OF CLIENTS</p>
                        </div>
                        <div className="movers-about-history-numberofmovers">
                            <h1>193</h1>
                            <p>NO OF MOVERS</p>
                        </div>
                    </article>
                    <section className="testimonials">
                        <article className="movers-about-testimonials">
                            <div className="movers-about-testimonials-header">
                                <div className="movers-about-testimonials-header-main">
                                    <h1>TESTIMONIALS</h1>
                                </div>
                                <div className="movers-about-testimonials-header-title">
                                    <h3>Comments From Our Users.</h3>
                                </div>
                            </div>
                        </article>
                        <article className="movers-about-testimonials-cards">
                            <div className="movers-about-testimonials-cards-one">
                                <div className="movers-about-testimonials-cards-one-quotes">
                                    <img src={quote} alt="quote" />
                                </div>
                                <div className="movers-about-testimonials-cards-one-rest">
                                    <p>Long established fact that a reader will be distracted by the readable content of a page when looking at it's layout. The point of using Lorem Ipsum.</p>
                                    <div className="movers-about-testimonials-cards-one-rest-user">
                                        <img src={huey} alt="" />
                                        <div className="movers-about-testimonials-cards-one-rest-user-info">
                                            <h3>Eugene Mark</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="movers-about-testimonials-cards-one">
                                <div className="movers-about-testimonials-cards-one-quotes">
                                    <img src={quote} alt="quote" />
                                </div>
                                <div className="movers-about-testimonials-cards-one-rest">
                                    <p>Long established fact that a reader will be distracted by the readable content of a page when looking at it's layout. The point of using Lorem Ipsum.</p>
                                    <div className="movers-about-testimonials-cards-one-rest-user">
                                        <img src={huey} alt="" />
                                        <div className="movers-about-testimonials-cards-one-rest-user-info">
                                            <h3>Eugene Mark</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="movers-about-testimonials-cards-one">
                                <div className="movers-about-testimonials-cards-one-quotes">
                                    <img src={quote} alt="quote" />
                                </div>
                                <div className="movers-about-testimonials-cards-one-rest">
                                    <p>Long established fact that a reader will be distracted by the readable content of a page when looking at it's layout. The point of using Lorem Ipsum.</p>
                                    <div className="movers-about-testimonials-cards-one-rest-user">
                                        <img src={huey} alt="" />
                                        <div className="movers-about-testimonials-cards-one-rest-user-info">
                                            <h3>Eugene Mark</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                </article>
            </section>
        </>
    )

};




export default MoverAbout;