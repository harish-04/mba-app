import { useState } from "react";
import { createAccount } from "../../api/movie";

const useAccountCreate = ()=>{
    
    const [accountDetails,setAccountDetails] = useState({});
    const [error,setError] = useState("");
    const [message,setMessage] = useState("");

    async function onCreateAccount(e){

        setError("");
        setMessage("");
        e.preventDefault();
        try{
            const res = await createAccount(accountDetails);
            setMessage("Account Created Successfully");
            window.location.href="/";
        }
        catch(err){
            setError(err.response.data.message);
            console.log("Error: ",err);
        }

    }
    return {accountDetails,setAccountDetails,onCreateAccount,error,message};

}
export {useAccountCreate};