import React from 'react';
import {Box, Flex, Image} from "@chakra-ui/react";
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export const ImageComponent = ({images}) => {
    const [slidingNumber, setSlidingNumber] = useState(0);
    let image=images || [];
    // console.log(loginNumberPage2)

    const slideDecrease=()=>{
        if(slidingNumber===0){
            setSlidingNumber(2);
        }else{
            setSlidingNumber(slidingNumber - 1)
        }
    }

    const slideIncrease=()=>{
        if(slidingNumber==image.length-1){
            setSlidingNumber(0);
        }else{
            setSlidingNumber(slidingNumber + 1)
        }
    }

    // console.log(images)
  return (
    <>
    <Flex justifyContent={'space-between'} alignItems="center" bg="black" borderRadius="5px">
                <Box width={'10px'} ml="4" cursor={'pointer'} onClick={slideDecrease}><BiChevronLeft color="white" fontSize={"30px"}/></Box>
                <Flex alignItems={'center'} direction="column">
                    <Image src={image[slidingNumber]} alt="" width={"75%"} height="550px"/>
                </Flex>
                <Box width={'10px'} mr="10" cursor={'pointer'} onClick={slideIncrease}><BiChevronRight color="white" fontSize={"30px"}/></Box>
    </Flex>
    <Flex p={5} gap={7}>
        {image.map((i, index)=>(
            <Image key={index} src={i} alt="" width={"60px"} height="60px" borderRadius={'10px'} cursor="pointer" onClick={()=>setSlidingNumber(index)}/>
        ))}
    </Flex>
    </>
  )
}
