import { useContext } from "react";
import { AuthContext } from "../Context/Authprovider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;