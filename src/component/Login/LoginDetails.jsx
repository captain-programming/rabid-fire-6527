import React from 'react';
import { Link } from 'react-router-dom';
import {BsPhone } from 'react-icons/bs';
import {IoLogoGoogle} from 'react-icons/io';
import {Flex, Box, Text, Image, Button} from "@chakra-ui/react";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import { useState } from 'react';

const slidingArr = [
    {
        img: "https://statics.olx.in/external/base/img/loginEntryPointPost.png",
        title: "Help us become one of the safest places to buy and sell",
    },
    {
        img: "https://statics.olx.in/external/base/img/loginEntryPointFavorite.png",
        title: "Close deals from the comfort of your home.",
    },
    {
        img: "https://statics.olx.in/external/base/img/loginEntryPointChat.png",
        title: "keep all your favourites in one place.",
    }
]

const LoginDetails = ({loginNumberPage2}) => {
    const [slidingNumber, setSlidingNumber] = useState(0);

    // console.log(loginNumberPage2)

    const slideDecrease=()=>{
        if(slidingNumber===0){
            setSlidingNumber(2);
        }else{
            setSlidingNumber(slidingNumber - 1)
        }
    }

    const slideIncrease=()=>{
        if(slidingNumber===2){
            setSlidingNumber(0);
        }else{
            setSlidingNumber(slidingNumber + 1)
        }
    }
  return (
    <>
    <Flex direction={'column'} justifyContent={'space-between'} h={"100%"} alignItems="center">
        <Box direction={'column'}>
            <Flex justifyContent={'space-between'} alignItems="center">
                <Box width={'10px'} onClick={slideDecrease}><BiChevronLeft fontSize={"30px"}/></Box>
                <Flex alignItems={'center'} direction="column">
                    <Image src={slidingArr[slidingNumber].img} alt="" width={'110px'}/>
                    <Text mt={4} width="85%" textAlign={'center'}>{slidingArr[slidingNumber].title}</Text>
                </Flex>
                <Box width={'10px'} onClick={slideIncrease}><BiChevronRight fontSize={"30px"}/></Box>
            </Flex>
            <Flex mt={8} gap={2} justifyContent="center">
                <Box borderRadius={'50%'} bg={slidingNumber===0 ? "rgb(34,228,219)" : "gray.500"} width={2} height={2}></Box>
                <Box borderRadius={'50%'} bg={slidingNumber===1 ? "rgb(34,228,219)" : "gray.500"} width={2} height={2}></Box>
                <Box borderRadius={'50%'} bg={slidingNumber===2 ? "rgb(34,228,219)" : "gray.500"} width={2} height={2}></Box>
            </Flex>
            <Flex direction={'column'} gap="4" alignItems={'center'} mt={8}>
                <Button variant={'ghost'} border='1px' _hover={{border: "2px"}} onClick={loginNumberPage2}>
                    <BsPhone />Continue with Phone
                </Button>
                <Button variant={'ghost'} border='1px' _hover={{border: "2px"}}><IoLogoGoogle />Continue with Google</Button>
                <Text fontSize={'14px'}>OR</Text>
                <Link to='/login-with-email'><Text fontWeight='bold' fontSize={'14px'}><u>Login with Email</u></Text></Link>
            </Flex>
        </Box>
        <Box textAlign={'center'} fontSize="13px" width={'83%'}>
            <Text mb={'10px'}>All your personal details are safe with us.</Text>
            <Text>If you continue, you are accepting <Link to="#" style={{color: "rgb(71,135,255)"}}>OLX Terms and Conditions and Privacy Policy</Link></Text>
        </Box>
    </Flex>
    </>
  )
}

export default LoginDetails