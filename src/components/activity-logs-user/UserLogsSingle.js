/* eslint-disable no-unused-vars */
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import '../../static/css/moverlogs.css';
let UserLogsSingle = ({Book})=>{


    return(
        <>
            <div className="mover-activity-all-pending">
                <h3>{Book.newLocation}</h3>
                <article>
                    {Book.is_pending?<button className="bluebutton">Pending</button>:
                    Book.is_accepted?<button className='greenbutton'>Active</button>:
                    Book.is_declined?<button className="redbutton">Rejected</button>:''
                    }
                </article>
            </div>
        </>
    )
};




export default UserLogsSingle;