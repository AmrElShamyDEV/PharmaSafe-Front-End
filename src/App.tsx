
import './App.css'
import {Routes, Route} from "react-router-dom";
// Route components for project
import LandingPage from "./Pages/LandingPage";
import LoginPage from './Pages/Login';
import SignUpPage from './Pages/SignUp';
import PharmaSafeHomePage from './Pages/HomePage';
import ScanPrescriptionPage from './Pages/Scan';
import Profile from "./Pages/Profile";
import History from './Pages/History';
import DDIChecker from './Pages/DDIChecker';
import Alternatives from './Pages/Alternatives';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element ={<LandingPage/>} />
        <Route path="/home" element={<PharmaSafeHomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element = {<SignUpPage/>}/>
        <Route path="/scan" element = {<ScanPrescriptionPage/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/ddi" element={<DDIChecker/>}/>
        <Route path="/alternatives" element={<Alternatives/>}/>
      </Routes>
    </>
  )
}

export default App
