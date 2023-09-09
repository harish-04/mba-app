import Unauthenticated from "../Components/Common/Unauthenticated/Unauthenticated";
import Unauthorised from "../Components/Common/Unauthorised/Unauthorised";

function AuthHOC(props){

    const pageId = props.id;
    const isAdmin = localStorage.getItem("userTypes")==="ADMIN";

    let isAuthenticated = localStorage.getItem("userId") && localStorage.getItem("token");
    if(!isAuthenticated){
        return <Unauthenticated/>
    }

    if(pageId==="createMovie" && !isAdmin){

        return <Unauthorised/>

    }



    return props.children;

}

export default AuthHOC;