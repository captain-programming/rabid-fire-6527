import React, { useContext, useState } from 'react';
import { Flex, Heading, Box, Input, InputGroup, InputLeftElement, InputRightElement, Image } from "@chakra-ui/react";
import { BiSearch } from 'react-icons/bi';
import { IoIosArrowDown, IoIosArrowUp, IoMdNotificationsOutline } from 'react-icons/io';
import { RiChat3Line } from 'react-icons/ri';
import {AiOutlinePlus} from 'react-icons/ai';
import LoginModule from './LoginModule';
import { AuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [location, setLocation] = useState(true);
    const [language, setLanguage] = useState(true);
    const {isAuthorized} = useContext(AuthContext);

  return (
    <>
      <Flex justifyContent="space-between" p={'10px 30px'} alignItems='center' bg={'rgb(238,240,243)'}>
        <NavLink to="/"><Heading cursor="pointer" size="sm">OLX</Heading></NavLink>
        <Box width={'23%'}>
        <InputGroup borderColor={'rgb(1,47,53)'}>
          <InputLeftElement
            children={<BiSearch  onClick={()=> setLocation(false)}/>}
          />
          <Input type='text' placeholder='Search city, area or locality' onClick={()=> setLocation(false)}/>
          <InputRightElement 
           children={ location ? <IoIosArrowDown cursor='pointer'/> : <IoIosArrowUp cursor='pointer'/>} 
           onClick={()=> setLocation(!location)}
          />
        </InputGroup>
        </Box>
        <Box width={'36%'}>
        <InputGroup borderColor={'rgb(1,47,53)'}>
          <Input type='text' placeholder='Find Cars, Mobils Phones and more...'/>
          <InputRightElement 
           children={<BiSearch />}
           bgColor="rgb(1,47,53)"
           color={'white'}
           fontSize={'20px'}
          />
        </InputGroup>
        </Box>
        <Flex width={'8%'} gap={2}>
          <Heading size={'sm'} cursor="pointer">{language ? "English" : "हिंदी"}</Heading>
          <Box fontSize={25} onClick={()=> setLanguage(!language)}>
            {language ? <IoIosArrowDown cursor="pointer"/> : <IoIosArrowUp cursor="pointer"/>}
          </Box>
        </Flex>
        <Box>
          {isAuthorized ? (
            <Flex alignItems={'center'} gap={6}>
              <RiChat3Line fontSize={25} cursor="pointer"/>
              <IoMdNotificationsOutline fontSize={25} cursor="pointer"/>
              <Flex alignItems={'center'}>
                <Image src='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png' alt='Image' borderRadius={'50%'} width="30px" cursor="pointer"/>
                <IoIosArrowDown fontSize={20} cursor="pointer"/>
              </Flex>
            </Flex>):(
              <LoginModule value={<Box fontWeight={'bold'}><u>Login</u></Box>}/>
            )}
        </Box>
        <Flex alignItems={'center'} gap={2} border={'1px'} borderRadius={'30px'} p={'5px 20px'} cursor="pointer"><AiOutlinePlus cursor="pointer"/>SELL</Flex>
      </Flex>
    </>
  )
}

export default Navbar