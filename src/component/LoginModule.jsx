import React from 'react';
import{ Modal, useDisclosure, ModalOverlay, ModalCloseButton, ModalContent, Box } from "@chakra-ui/react";
import { useState } from 'react';
import LoginNumber from './Login/LoginNumber';
import LoginDetails from './Login/LoginDetails';

const LoginModule = ({value}) => {
    const { isOpen, onOpen, onClose} = useDisclosure();
    const [loginPage, setLoginPage] = useState(false);
    
    const loginNumberPage2=()=> setLoginPage(true);
    const loginNumberPage1=()=> setLoginPage(false);

    // console.log(loginNumberPage1)
  return (
    <>
        <Box onClick={onOpen} cursor="pointer">
              {value}
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent height={'600px'} mt="110px" width={"32%"} p={'20px 40px 20px 20px'}>
            <ModalCloseButton fontSize={'1xl'}/>
            { loginPage ? 
            (
            <LoginNumber loginNumberPage1={loginNumberPage1}/>
            ) 
            : (
            <LoginDetails loginNumberPage2={loginNumberPage2}/>
            )}
            </ModalContent>
        </Modal>
    </>
  )
}

export default LoginModule