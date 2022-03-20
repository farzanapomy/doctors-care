import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Doctors from './pages/Home/Doctors/Doctors';
import Departments from './pages/Home/Departments/Departments';
import TestLab from './pages/Home/TestLab/TestLab';
import About from './pages/Home/About/About';
import Menubar from './pages/Home/Menubar/Menubar';
import Register from './pages/Shared/Register/Register';
import Login from './pages/Shared/Login/Login';
import { AuthProvider } from './AuthProvider/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './pages/Home/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Menubar />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="Departments" element={<Departments />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="TestLab" element={<TestLab />} />
            <Route path="about" element={<About />} />
            <Route path="Dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
