/* eslint-disable no-unused-vars */
import axios from 'axios';
import React,{useEffect,useState,useContext} from 'react';

import '../../static/css/userlogs.css';
import AuthContext from '../context/AuthContext';


let Userlogs = ()=>{
    let [request, useRequest] = useState([])

    let {user}  = useContext(AuthContext)

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/requests/${user.username}/`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    },[request, user.username])

    return(
        <>
            <section className="user-activity">
                <article className="user-activity-title">
                    <h1>Activity logs {user.email}</h1>
                </article>
                <article className="user-activity-all">
                    <div className="user-activity-all-pending">
                        <h3>QWETSUDBE</h3>
                        <button>Pending</button>
                    </div>
                    <div className="user-activity-all-rejected">
                        <h3>QWETSUDBE</h3>
                        <button>Rejected</button>
                    </div>
                    <div className="user-activity-all-active">
                        <h3>QWETSUDBE</h3>
                        <button>Active</button>
                    </div>
                    <div className="user-activity-all-pending">
                        <h3>QWETSUDBE</h3>
                        <button>Pending</button>
                    </div>
                    <div className="user-activity-all-rejected">
                        <h3>QWETSUDBE</h3>
                        <button>Rejected</button>
                    </div>
                    <div className="user-activity-all-active">
                        <h3>QWETSUDBE</h3>
                        <button>Active</button>
                    </div>
                </article>
            </section>
        </>
    )

};




export default Userlogs;