import Header from "../../Components/Header/Header";
import Spinner from "../../Components/Common/Spinner/Spinner";
import ReactPlayer from "react-player";
import "./MovieDetail.css";
import { useMovieDetail } from "../../Components/Hooks/useMovieDetailsHook";
import { useContext } from "react";
import { ThemeContext } from "../../App";

function MovieDetail(){
    const {isLoading,movieDetail} = useMovieDetail();
    const {theme} = useContext(ThemeContext);
    const isDark = theme === "dark";

    const showMovieDetails=()=>{

        // return <div className="d-flex flex-column justify-content-center align-items-center">
        //         <div className={(isDark?" bg-black":"bg-light") +"box" }>
        //             <ReactPlayer url={movieDetail.trailerUrl} controls={true} className="video" width="70vh" height="70%"/>
        //         </div> 
        //         <hr/>
        //         <div className="d-flex flex-column justify-content-center align-items-center">
        //             <h3>{movieDetail.name}</h3>
        //             <h6>{movieDetail.director}</h6>
        //             <h6>{movieDetail.releaseDate}</h6>
        //         </div>

        // </div>

    }

    return <div>
        <Header/>
        <div>
            {(isLoading)? <Spinner/> : <div className="bg-light">
                <div className={((isDark)?"bg-black":"bg-light")+ " box"}>
                <ReactPlayer url={movieDetail.trailerUrl} controls={true} className="video" width="70%" height="100%" />
            </div>
            <hr/>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h3> {movieDetail.name}</h3>
                <h6> {movieDetail.director}</h6>
                <h6> {movieDetail.releaseDate}</h6>

            </div>
            </div> 
            }
        </div>

    </div>
}

export default MovieDetail;