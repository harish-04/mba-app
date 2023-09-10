import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAccountCreate } from '../../Components/Hooks/useAccountCreateHook';

function CreateAccount(){
    const {accountDetails, setAccountDetails,onCreateAccount,error,message} = useAccountCreate();

    return <div className='p-5 vh-100 m-0 bg-dark'>
            <h2 className='m-4 justify-content-center align-items-center d-flex text-light'>Create Account</h2>
        <div className='bg-dark text-light d-flex justify-content-center align-items-center'>
        <Form onSubmit={onCreateAccount}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e)=>{setAccountDetails({...accountDetails,name:e.target.value})}} value={accountDetails.name} type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>UserId</Form.Label>
                <Form.Control onChange={(e)=>{setAccountDetails({...accountDetails,userId:e.target.value})}} value={accountDetails.userId}  type="text" placeholder="Enter UserId" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(e)=>{setAccountDetails({...accountDetails,email:e.target.value})}} value={accountDetails.email} type="email" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e)=>{setAccountDetails({...accountDetails,password:e.target.value})}} value={accountDetails.password} type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>UserType</Form.Label>
                <Form.Control onChange={(e)=>{setAccountDetails({...accountDetails,userType:e.target.value})}} value={accountDetails.userType} type="text" placeholder="Enter UserType" />
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

export default CreateAccount;