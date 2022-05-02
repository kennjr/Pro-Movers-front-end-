import { useState,  } from 'react';
// useEffect
import Register from './components/register/Register'
import {Routes, Route} from 'react-router-dom';
import Login from './components/login/Login';
import Nav from './components/nav/Nav';
import About from './components/About';
import './App.css';
import Movers from './components/Movers';
import Book from './components/Book';
import Footer from './components/Footer';
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


 
function App() {

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
          // console.log(booking)
          // const newBooking={...booking}
          // setBookings([...bookings,newBooking])
  }

  return (
    <>
      <Nav></Nav>

      <Routes>
        <Route path="/about" element={<About />} onBook={makeBooking}></Route>
        <Route path="movers" element={<Movers />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="movers/book" element={<Book onBook={makeBooking} />}></Route>
      </Routes>

      {/* <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
         
        </InfoWindow>
      </Map> */}

      <Footer></Footer>
    </>
  );
}

 export default App

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyDAPcdR72o2tCqqHzPTYGJZNUiYE2dkaQA")
// })(App);
