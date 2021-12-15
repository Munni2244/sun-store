import { useContext } from "react";
import { AuthContext } from "../Component/Context/AuthProvider";

const useAuth=()=>{
    const Auth =useContext(AuthContext);
    return Auth;
}
export default useAuth;