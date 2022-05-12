/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React,{useEffect,useState,useContext} from 'react';
import '../../static/css/moverlogs.css';
import SingleRequest from '../singlerequest/SingleRequest';
import AuthContext from '../context/AuthContext';
import axios from 'axios';

let Moverlogs = ()=>{

    let {user} = useContext(AuthContext)
    let [books,useBooks] = useState([])
    let [ress,useRess] = useState({})

    useEffect(()=>{
        axios.get(`https://promovers.herokuapp.com/requests/mover/${user.username}/`)
        .then(res=>{
            useBooks(res.data)
        })
        .catch(err=>console.log(err))
    },[books, user.username])

    let book = books.map(book=><SingleRequest key={book.id} Book={book} />)

    return(
        <>
            <section className="mover-activity">
                <article className="mover-activity-title">
                    <h1>Activity logs</h1>
                </article>
                <article className="mover-activity-all">
                    {book}
                </article>
            </section>
        </>
    )

};




export default Moverlogs;