import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { createContext } from "react";
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthorized, setIsAuthorized] = useState(false);   
    const toast = useToast();
    const navigate=useNavigate();

    const login = (otp, verification) =>{
        if(otp === verification){
            toast({
                title: "Login Success",
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: "top",
              });
            navigate("/");
            setIsAuthorized(true);
        }else{
            toast({
                title: "Incorrect Password",
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: "top",
              })
        }
    };

    const logout = () => {
        setIsAuthorized(false);
    };
    

    return ( 
    <AuthContext.Provider 
     value={{
        isAuthorized,
        login,
        logout
     }}
    >
        {children}
    </AuthContext.Provider>
    )
}