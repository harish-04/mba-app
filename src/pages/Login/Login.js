import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Login/Login.css'
import { useState } from 'react';
import { login } from '../../api/auth';



function Login(){

    const [userId,setUserId] = useState("");
    const [password,setPassword] = useState("");
    
    const onPasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const onUserIdChange=(e)=>{
        setUserId(e.target.value);
    }

    const onLogin=(e)=>{
        e.preventDefault();
        login(userId,password);
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
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button className='btn-success' type="submit">
      Submit
    </Button>
  </Form>
  </div> 

}

export default Login;