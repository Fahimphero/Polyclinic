import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Timetable from './Pages/Timetable/Timetable';
import Footer from './Pages/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Doctors from './Pages/Doctors/Doctors';

function App() {
  return (
    <div className='font-change'>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/all-doctors' element={<Doctors></Doctors>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
