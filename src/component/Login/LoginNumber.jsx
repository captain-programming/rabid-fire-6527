import React, { useContext, useEffect, useState } from 'react'
import {Box, Heading, InputGroup, InputLeftAddon, Input, Button, Text, Flex, PinInput, PinInputField, useToast} from "@chakra-ui/react";
import {BsArrowLeft} from 'react-icons/bs';
import {HiOutlinePencil} from 'react-icons/hi';
import { AuthContext } from '../../context/AuthContext';

const LoginNumber = ({loginNumberPage1}) => {
  const [loginPage, setLoginPage] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [verificationCode, setVerificationCode] =useState('2354');
  const {login} = useContext(AuthContext);
  // const [otp, setOtp]= useState("");
  const toast = useToast();
  const otp= verificationCode;

  const getCode = () => {
    const randomNumber= Math.floor(1000 + Math.random() * 9000);
    setVerificationCode(randomNumber); 
    setTimeout(()=>{
      toast({
        title: verificationCode,
        description: "OLX verification code",
        status: 'success',
        duration: 1000,
        isClosable: true,
        position: "top",
      })
    }, 1000)
  }

  const getCode1=(value)=> {

    if(value.length===4){
      login(otp, verificationCode);
    }
  };

  const handleNextPage = ()=>{
    setLoginPage(true);
    getCode();
  }
  useEffect(()=>{
     
  }, [verificationCode]);

  return (
    <>
    {loginPage ? (
    <Box textAlign={'center'}>
      <Box mt={'-15px'}>
        <BsArrowLeft fontSize={'30px'} onClick={()=>setLoginPage(false)} cursor="pointer"/>
      </Box>
      <Heading>olx</Heading>
      <Heading size={'md'} mt="20px">Enter your phone number</Heading>
      <Flex justifyContent={'space-between'} mt="20px">
        <Text>We sent a 4-digit code to +91{mobileNumber}</Text>
        <HiOutlinePencil cursor={'pointer'} onClick={()=> setLoginPage(false)}/>
      </Flex>
      <Box mt={"30px"}>
        <PinInput placeholder='-' onChange={getCode1}>
          <PinInputField mr={"20px"}/>
          <PinInputField mr={"20px"}/>
          <PinInputField mr={"20px"}/>
          <PinInputField />
        </PinInput>
      </Box>
      <Flex direction={'column'} alignItems="start" mt={'40px'}>
      <Button variant={"ghost"} color="blue" onClick={getCode}>Resend code by SMS</Button>
      <Button variant={"ghost"} color="blue">Resend code by Call</Button>
      </Flex>
    </Box>
    ):(
    <Box textAlign={'center'}>
        <Box mt={'-15px'}>
        <BsArrowLeft fontSize={'30px'} onClick={loginNumberPage1} cursor="pointer"/>
        </Box>
        <Heading>olx</Heading>
        <Heading size={'md'} mt="20px">Enter your phone number</Heading>
        <InputGroup mt={'40px'} borderColor="black">
        <InputLeftAddon children='+91' bgColor={'white'}/>
        <Input type='tel' placeholder='Phone Number' onChange={(e)=> setMobileNumber(e.target.value)}/>
      </InputGroup>
      <Button width={'90%'} mt="100px" onClick={handleNextPage} disabled={mobileNumber.length<10}>Next</Button>
      <Text fontSize={'13px'} width="80%" margin={'auto'}>Your contact number is never shared with external parties nor do we use it to spam you in any way.</Text>
    </Box>
    )}
    </>
  )
}

export default LoginNumber;