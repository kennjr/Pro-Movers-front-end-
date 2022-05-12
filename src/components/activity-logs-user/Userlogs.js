<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React,{useEffect,useState,useContext} from 'react';

import '../../static/css/userlogs.css';
import AuthContext from '../context/AuthContext';

=======
/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React,{useState,useEffect,useContext} from 'react';
import AuthContext from '../context/AuthContext';
import '../../static/css/userlogs.css';
import UserLogsSingle from './UserLogsSingle'
>>>>>>> master

let Userlogs = ()=>{
    let [request, useRequest] = useState([])

    let {user}  = useContext(AuthContext)

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/requests/${user.username}/`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    },[request, user.username])

    let {user} = useContext(AuthContext)

    let [books,useBooks] = useState([]);


    useEffect(()=>{
        axios.get(`https://promovers.herokuapp.com/requests/user/${user.username}/`)
        .then(res=>{
            useBooks(res.data)
        })
        .catch(err=>console.log(err))
    },[books, user.username])

    let book = books.map(book=><UserLogsSingle key={book.id} Book={book} />)

    return(
        <>
            <section className="user-activity">
                <article className="user-activity-title">
                    <h1>Activity logs {user.email}</h1>
                </article>
                <article className="user-activity-all">
                    
                    {book}
                </article>
            </section>
        </>
    )

};




export default Userlogs;