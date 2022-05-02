import Register from './components/register/Register'
import {Routes, Route} from 'react-router-dom';
import Login from './components/login/Login';
import Nav from './components/nav/Nav';
import MoverAbout from './components/moverabout/MoverAbout';
import Userlogs from './components/activity-logs-user/Userlogs';
import Moverlogs from './components/activity-logs-mover/Moverlogs';
import './App.css';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='login' element={<Login />}></Route>
        <Route path='mover/about' element={<MoverAbout />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='user/logs' element={<Userlogs />}></Route>
        <Route path='mover/logs' element={<Moverlogs />}></Route>
      </Routes>
    </>
  );
}

export default App;
