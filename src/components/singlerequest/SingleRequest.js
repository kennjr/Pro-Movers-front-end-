/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import tick from '../../static/asserts/tick.png'
import x from '../../static/asserts/x.png'
import axios from 'axios';


let SingleRequest = ({Book})=>{

    let [pending,usePending] = useState(null)
    let [currentbook,useCurentbook] = useState({...Book})

    useEffect(()=>{
        axios.put(`https://promovers.herokuapp.com/requests/update/${Book.id}/`,{
            currentLocation: currentbook.currentLocation,
            newLocation: currentbook.newLocation,
            id_mover: currentbook.id_mover,
            movingDate: currentbook.movingDate,
            Package: currentbook.Package,
            packageDescription: currentbook.packageDescription,
            id_user: currentbook.id_user,
            is_accepted:currentbook.is_accepted,
            is_declined:currentbook.is_declined,
            is_pending:currentbook.is_pending
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    },[currentbook])

    let Accept = ()=>{
        usePending(true)
        useCurentbook({...Book, is_accepted:true,is_pending:false})
    };

    let Decline = ()=>{
        usePending(false)
        useCurentbook({...Book, is_declined:true,is_pending:false})
    };

    return(
        <>
            <div className="mover-activity-all-pending">
                <h3>{Book.newLocation}</h3>
                <article>
                    {currentbook.is_pending? <><button className='greenbutton' onClick={Accept}><img src={tick} alt="" className="mover-activity-all-button-tick"  />Accept</button><button className="redbutton" onClick={Decline}><img src={x} alt="" className="mover-activity-all-button-x" />Decline</button></>:
                    currentbook.is_accepted?<button className='greenbutton'>Accepted</button>:
                    currentbook.is_declined?<button className="redbutton">Declined</button>:''
                    }
                </article>
            </div>
        </>
    )
};




export default SingleRequest;