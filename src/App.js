
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/RegisterPage/Register';
import Login from './pages/LoginPage/Login';
import Reservation from './pages/ReservationPage/Reservation';
import { ToastContainer } from 'react-toastify';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createuser" element={<Register />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
