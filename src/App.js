import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/login/Login';
import LandingPage from './pages/LandigPage/LandingPage';

function App() {
  return <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/*' element={<h1>Invalid page</h1>}/>
      </Routes>
    </Router>
      
}

export default App;
