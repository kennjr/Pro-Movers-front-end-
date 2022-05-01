import Register from './components/register/Register'
import {Routes, Route} from 'react-router-dom';
import Login from './components/login/Login';
import Nav from './components/nav/Nav';
import About from './components/About';
import './App.css';
import Movers from './components/Movers';
import Book from './components/Book';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="movers" element={<Movers />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="movers/book" element={<Book />}></Route>
      </Routes>
      
    </>
  );
}

export default App;
