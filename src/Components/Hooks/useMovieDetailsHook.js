import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieByID } from "../../api/movie/index";

const useMovieDetail=()=>{
    const {movieId}= useParams();
    const [movieDetail,setMovieDetails] = useState(null);
    const [isLoading,setISLoading] = useState(true);


    const fetchMovieDetails=async()=>{
        const response =await getMovieByID(movieId);
        setMovieDetails(response.data);
        setISLoading(false);
    }

    useEffect(()=>{
        fetchMovieDetails();

    },[])

    return {isLoading, movieDetail};
}

export {useMovieDetail};
