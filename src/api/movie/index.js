import axios from 'axios';

export const getAllMovies=async()=>{
   const response = await axios.get("https://movie-booking-application.onrender.com/mba/api/v1/movies");

   return response;
} 
export const createAccount=async(accountDetails)=>{
   const response = await axios.post("https://movie-booking-application.onrender.com/mba/api/v1/auth/signup",accountDetails,{
      headers:{
         "x-access-token":localStorage.getItem("token"),
      }
   });

   return response;
} 
export const getMovieByID=async(id)=>{
   const response = await axios.get(`https://movie-booking-application.onrender.com/mba/api/v1/movies/${id}`);

   return response;
} 

export const createMovie=async(movieDetails)=>{
   const response = await axios.post(`https://movie-booking-application.onrender.com/mba/api/v1/movies`,movieDetails,{
      headers:{
         "x-access-token":localStorage.getItem("token"),
      }
   });

   return response;
} 



export const deleteMovieByID=async(id)=>{
   const response = await axios.get(`https://movie-booking-application.onrender.com/mba/api/v1/movies/${id}`);

   return response;
}
