import Spinner from "../../Components/Common/Spinner/Spinner";
import Header from "../../Components/Header/Header";
import "./Landing.css";
import useLandingPage from "../../Components/Hooks/useLandingPageHook";
import {ThemeContext} from "../../App";
import { useContext } from "react";


function LandingPage(){

    const {theme} = useContext(ThemeContext);
    const isDark = theme === "dark";

    

    const{isLoading,showMovies} = useLandingPage();
    


    return <div className={isDark?"bg-dark text-light vh-100%":"bg-light text-dark"}>
        <Header/>
        <h2 className="d-flex justify-content-center align-items-center">Recommened Movies</h2>
       { (isLoading)? <Spinner/> : showMovies() }
    </div>


}

export default LandingPage;