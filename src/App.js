import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Doctors from './pages/Home/Doctors/Doctors';
import TestLab from './pages/Home/TestLab/TestLab';
import About from './pages/Home/About/About';
import Menubar from './pages/Home/Menubar/Menubar';
import Register from './pages/Shared/Register/Register';
import Login from './pages/Shared/Login/Login';
import { AuthProvider } from './AuthProvider/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard';
import Footer from './pages/Home/Footer/Footer';
import AllDoctors from './pages/PrivatePages/AllDoctors/AllDoctors';
import PrivateRoute from './pages/PrivatePages/PrivateRoute/PrivateRoute';
import AdminRoute from './pages/PrivatePages/AdminRoute/AdminRoute';
import Services from './pages/PrivatePages/Services/Services';
import Appointment from './pages/PrivatePages/Appointment/Appointment';
import AddServices from './pages/PrivatePages/AddServices/AddServices';
import MakeAdmin from './pages/PrivatePages/MakeAdmin/MakeAdmin';
import AddDoctors from './pages/PrivatePages/AddDoctors/AddDoctors';
import AllAppointments from './pages/PrivatePages/AllAppointments/AllAppointments';
import AddReview from './pages/PrivatePages/AddReview/AddReview';
import AllReviews from './pages/PrivatePages/AllReviews/AllReviews';

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
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="TestLab" element={<TestLab />} />
            <Route path="about" element={<About />} />
            <Route path="AllDoctors" element={<AllDoctors />} />
            <Route path="Services" element={<Services />} />
            <Route path="MakeAdmin" element={<MakeAdmin />} />

            <Route path="/doctors/:ID" element={<PrivateRoute><Appointment /> </PrivateRoute>} />




            <Route path='/dashboard' element={<PrivateRoute>
              <Dashboard /></PrivateRoute>} >
              <Route path="AddReview" element={<AddReview />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path='AddDoctors' element={<AdminRoute><AddDoctors /></AdminRoute>} />
              <Route path='AllReviews' element={<AdminRoute><AllReviews /></AdminRoute>} />
              <Route path='MakeAdmin' element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route path='AllAppointments' element={<AdminRoute><AllAppointments /></AdminRoute>} />

              <Route path='AddServices' element={<AdminRoute><AddServices /></AdminRoute>} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
