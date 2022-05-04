import React from 'react';
import '../../static/css/moverlogs.css';
import SingleRequest from '../singlerequest/SingleRequest';


let Moverlogs = ()=>{

    return(
        <>
            <section className="mover-activity">
                <article className="mover-activity-title">
                    <h1>Activity logs</h1>
                </article>
                <article className="mover-activity-all">
                    <SingleRequest></SingleRequest>
                    <SingleRequest></SingleRequest>
                    <SingleRequest></SingleRequest>
                    <SingleRequest></SingleRequest>
                </article>
            </section>
        </>
    )

};




export default Moverlogs;