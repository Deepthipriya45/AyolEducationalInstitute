import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Admission from './Admission';
import Studentlogin from './Studentlogin';
import Forgotpassword from './Forgotpassword';
import Register from './Register';
import Kindergarten from './Kindergarten';
import Primary from './Primary';
import Middleyears from './Middleyears';
import Afterlogin from './Afterlogin';

function App() {
  const location = useLocation(); 

  return (
    <>
      {location.pathname !== '/afterlogin' && <Navbar />}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/Contactus' element={<Contactus />} />
        <Route path='/Admission' element={<Admission />} />
        <Route path='/Studentlogin' element={<Studentlogin />} />
        <Route path='/Forgotpassword' element={<Forgotpassword />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Kindergarten' element={<Kindergarten />} />
        <Route path='/Primary' element={<Primary />} />
        <Route path='/Middleyears' element={<Middleyears />} />
        <Route path='/afterlogin' element={<Afterlogin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
