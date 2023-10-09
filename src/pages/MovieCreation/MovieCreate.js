import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../../Components/Header/Header';
import { useMovieCreate } from '../../Components/Hooks/useMovieCreateHook';
import { ThemeContext } from '../../App';
import { useContext } from 'react';

function MovieCreate(){
    const {theme} = useContext(ThemeContext);
    const isDark = theme === "dark";

    const {movieDetails, setMovieDetails, onCreateMovie, error , message} = useMovieCreate();

    return <div className={isDark?"bg-dark text-light vh-100%":"bg-light text-dark"}>
            <Header/>
            <h2 className='justify-content-center align-items-center d-flex m-3'>Add A Movie</h2>
    <div className={isDark?"bg-dark text-light vh-100% d-flex justify-content-center align-items-center":"bg-light text-dark d-flex justify-content-center align-items-center"}>
        
    <Form onSubmit={onCreateMovie}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,name:e.target.value})}} value={movieDetails.name} type="text" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,description:e.target.value})}} value={movieDetails.description} type="text" placeholder="Enter Description" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Trailer URL</Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,trailerUrl:e.target.value})}} value={movieDetails.trailerUrl} type="text" placeholder="Enter Trailer URL" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Poster URL</Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,posterUrl:e.target.value})}} value={movieDetails.posterUrl} type="text" placeholder="Enter Poster URL" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Language</Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,language:e.target.value})}} value={movieDetails.language} type="text" placeholder="Enter Language" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Released Date</Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,releaseDate:e.target.value})}} value={movieDetails.releaseDate} type="text" placeholder="Enter Released Date" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Released Status</Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,releaseStatus:e.target.value})}} value={movieDetails.releaseStatus} type="text" placeholder="Enter Released Status" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Director</Form.Label>
        <Form.Control onChange={(e)=>{setMovieDetails({...movieDetails,director:e.target.value})}} value={movieDetails.director} type="text" placeholder="Enter Director Name" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <p className='text-danger m-3'>{error}</p>
      <p className='text-success m-3'>{message}</p>

    </Form>
    </div>
    </div> 

}

export default MovieCreate;