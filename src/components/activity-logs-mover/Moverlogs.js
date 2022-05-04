import React from 'react';
import '../../static/css/moverlogs.css';
import tick from '../../static/asserts/tick.png'
import x from '../../static/asserts/x.png'

let Moverlogs = ()=>{

    return(
        <>
            <section className="mover-activity">
                <article className="mover-activity-title">
                    <h1>Activity logs</h1>
                </article>
                <article className="mover-activity-all">
                    <div className="mover-activity-all-pending">
                        <h3>QWETSUDBE</h3>
                        <article>
                            <button className='greenbutton'><img src={tick} alt="" className="mover-activity-all-button-tick" />Accept</button>
                            <button className="redbutton"><img src={x} alt="" className="mover-activity-all-button-x" />Decline</button>
                        </article>
                    </div>
                    <div className="mover-activity-all-declined">
                        <h3>QWETSUDBE</h3>
                        <button className="redbutton">Declined</button>
                    </div>
                    <div className="mover-activity-all-accepted">
                        <h3>QWETSUDBE</h3>
                        <button className="greenbutton">Accepted</button>
                    </div>

                </article>
            </section>
        </>
    )

};




export default Moverlogs;