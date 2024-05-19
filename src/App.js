import Navbar from './component/Navbar';
import Dashboard from './component/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DepartmentInformation from './component/DepartmentInformation';
import User from './component/User';
import AddEmployee from './component/AddEmployee';
import Footer from './component/Footer';
import AvailableEmployee from './component/AvailableEmployee';
import Home from './component/Home';
// import index from '../src/index.css'

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    {/* <Route path='/' element={<Dashboard />} /> */}
                    <Route path='/dashboard' element={<Dashboard/>} />
                    <Route path='/departmentinformation' element={<DepartmentInformation />} />  
                    <Route path='/user' element={<User />} /> 
                    <Route path='/addemployee' element={<AddEmployee />} />  
                    <Route path='/availableemployee' element={<AvailableEmployee />} />      
                    <Route path='/' element={<Home />} />
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;

// BrowserRouter = Router
// Routes - all route are defined in this module or tag
// Route - Use to link different page urls
// Link 



// This application is created by Suraj Kumar 2107861529002 MIET