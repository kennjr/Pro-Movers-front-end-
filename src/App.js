import { useState, useEffect } from 'react';

import Register from './components/register/Register'
import {Routes, Route} from 'react-router-dom';
import Login from './components/login/Login';
import { AuthProvider } from './components/context/AuthContext'
import Nav from './components/nav/Nav';

import About from './components/About';


import Userlogs from './components/activity-logs-user/Userlogs';
import Moverlogs from './components/activity-logs-mover/Moverlogs';

import './App.css';
import Movers from './components/Movers';
import Book from './components/Book';
import Footer from './components/Footer';

import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import MoversList from './components/MoversList';

//AIzaSyAMNx-zK5ZTkXO5bkqgQABAerof4yWBlc0
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMNx-zK5ZTkXO5bkqgQABAerof4yWBlc0&libraries=places"></script>;

 
function App() {
  // const onSelect=()=>{
  //   console.log('select')
  // }

    // sorting
    const sorting=(e)=>{
      console.log('sorting works')
    }
const [bookings,setBookings]=useState([])

  // add booking
  const makeBooking= async (booking)=>{

    const res = await fetch("http://localhost:5000/bookings",{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(booking)
    });
    const data = await res.json()

    setBookings([...bookings,data])
         
  }
  const [movers, setMovers] = useState([]);

  useEffect(() =>{
    const getMovers = async () =>{
      const moversFromServer =await fetchMovers()
      setMovers(moversFromServer)
    }
    getMovers();
  },[bookings]);

  //fetch movers
  const fetchMovers = async (id) =>{
    const res =await fetch ("http://localhost:5000/movers");
    const data = await res.json();
    return data;
  }

  return (
    <>


    
      <Nav></Nav>
      <AuthProvider>
        <Routes>
          <Route path="/about" element={<About />} onBook={makeBooking}></Route>
          <Route path="movers" element={ movers.length > 0 ?( <Movers movers={movers} />):('There are no registered movers yet/ the backend server is not running')}></Route>
          <Route path="moverslist" element={ movers.length > 0 ?( <MoversList movers={movers} sorting={sorting} />):('There are no registered movers yet/ the backend server is not running')}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="movers/book" element={<Book onBook={makeBooking} />}></Route>
        </Routes>
      </AuthProvider>


      <Footer></Footer>

    </>
  );
}

 export default App


