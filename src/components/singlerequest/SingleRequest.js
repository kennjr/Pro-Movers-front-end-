/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import tick from '../../static/asserts/tick.png'
import x from '../../static/asserts/x.png'



let SingleRequest = ()=>{

    let [pending,usePending] = useState(null)

    let Accept = ()=>{
        usePending(true)
    };

    let Decline = ()=>{
        usePending(false)
    };

    return(
        <>
            <div className="mover-activity-all-pending">
                <h3>QWETSUDBE</h3>
                <article>
                    {pending===null? 
                    <><button className='greenbutton' onClick={Accept}><img src={tick} alt="" className="mover-activity-all-button-tick"  />Accept</button><button className="redbutton" onClick={Decline}><img src={x} alt="" className="mover-activity-all-button-x" />Decline</button></>
                    : pending===false?<button className="redbutton">Declined</button>: <button className='greenbutton'>Accepted</button>}
                </article>
            </div>
        </>
    )
};




export default SingleRequest;