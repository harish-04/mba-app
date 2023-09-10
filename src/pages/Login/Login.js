import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { login } from '../../api/auth';
import { useNavigate } from 'react-router-dom';


function Login(){

    const navigate = useNavigate();

    useEffect(()=>{
      const email = localStorage.getItem("email");
      const name = localStorage.getItem("name");
      const token = localStorage.getItem("token");
  
      if(email && name && token){
        window.location.href="/";
      }
    },[])
    



    const [userId,setUserId] = useState("");
    const [password,setPassword] = useState("");
    const [errMsg,seterrMsg] = useState("");
    
    const onPasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const onUserIdChange=(e)=>{
        setUserId(e.target.value);
    }

    const onCreateAccount=(e)=>{
      navigate("/signup");
    }

    const onLogin=async (e)=>{
        seterrMsg("");
        e.preventDefault();
        try{
          const response = await login({userId,password});
          const {accessToken, name, email, userStatus, userTypes} = response.data;
          localStorage.setItem("token", accessToken);
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("userId", userId);
          localStorage.setItem("userStatus", userStatus);
          localStorage.setItem("userTypes", userTypes);
          
          navigate("/");
          
        }
        catch(e){
          seterrMsg("Invalid UserId or Password");
        }
        
    }

    return <div className='form bg-dark d-flex justify-content-center align-items-center vh-100 text-light'> 
    <Form onSubmit={onLogin} className='formComp'>
    <Form.Group className="mb-3 ">
      <Form.Label>userId</Form.Label>
      <Form.Control onChange={onUserIdChange} value={userId} type="text" placeholder="Enter UserId" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={onPasswordChange} value={password} type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3 d-flex flex-row justify-align-content-end" controlId="formBasicCheckbox">
      <Form.Check type="checkbox mb-3" label="Check me out" /> 
      <Button variant="link" className='mx-5 text text-decoration-none' onClick={onCreateAccount}>Sign Up</Button>
      {/* <button className="text-primary mx-5 " variant="link">Sign Up</button> */}
      {/* <div className='text-primary mx-5' onClick={onCreateAccount}>Create Account</div> */}
    </Form.Group>
    <Button className='btn-success' type="submit">
      Submit
    </Button>
    <div className='text-danger '>{errMsg}</div>
  </Form>

  </div> 

}

export default Login;