import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../App';

function Header() {
  const {theme,changeTheme} = useContext(ThemeContext);

  const isDark = theme === "dark";


  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("userTypes")==="ADMIN";

  const onToggleTheme = () =>{
    if(theme==="dark"){
      changeTheme("light");
    }else{
      changeTheme("dark");
    }

  }

  const onCreateMovie=()=>{
    navigate("/movies/create")
  }

  const onLogout=()=>{
    localStorage.clear();
    navigate("/login");
  }
  
  return (
    <div>
      <Navbar bg={isDark?"dark":"light"} data-bs-theme={isDark?"dark":"light"}>
        <Container>
          <Navbar.Brand href="#home">Book My Show</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Movies</Nav.Link>
            <Nav.Link href="#features">Shows</Nav.Link>
            <Nav.Link href="#pricing">Events</Nav.Link>
          </Nav>
        </Container>
        <Button onClick={onToggleTheme} className='mx-4' variant={isDark?"light":'dark'}>Theme</Button>

        {
          isAdmin && 
        <Button className='mx-4' onClick={onCreateMovie} variant={isDark?"light":'dark'}>CreateMovie</Button>
        }
        <Button onClick={onLogout} className='mx-4' variant={isDark?"light":'dark'}>Logout</Button>

      </Navbar>
    </div>
  );
}

export default Header;