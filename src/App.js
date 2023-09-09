import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import LandingPage from './pages/landingPage/LandingPage';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import AuthHOC from './HOC/AuthHOC';
import MovieCreate from './pages/MovieCreation/MovieCreate';
import PageNotFound from './Components/Common/PageNotFound/PageNotFound';
import { createContext, useState } from 'react';
// import DeleteMovie from './pages/DeleteMovie/DeleteMovie';y

export const ThemeContext= createContext();

function App() {

  const [theme,changeTheme] = useState("dark");

  return <div>
    <ThemeContext.Provider value={{theme,changeTheme}}>
  <Router>
      <Routes>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/' element={<AuthHOC id="landingPage"><LandingPage/></AuthHOC>}/>
        <Route path="/movies/:movieId" element={<AuthHOC id="getMovie"><MovieDetail/></AuthHOC>}/>
        <Route path="/movies/create" element={<AuthHOC id="createMovie"><MovieCreate/></AuthHOC>}/>
        {/* <Route path="/movies/delete" element={<DeleteMovie/>}/> */}
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
    </ThemeContext.Provider>
    </div> 
      
}

export default App;
