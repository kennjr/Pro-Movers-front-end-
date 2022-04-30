import Register from './components/register/Register'
import {Routes, Route} from 'react-router-dom';
import Login from './components/login/Login';
import Nav from './components/nav/Nav';
import './App.css';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
