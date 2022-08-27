import { Flex, Heading, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const imporatantCategories = ["Cars","Motorcycles","Mobile Phones","For Sale: Houses & Apartments","Scooters","Commercial & Other Vehicles","For Rent: Houses & Apartments"];

const AllCategories = () => {
    const [toggle, setToggle] = useState(true);

  return (
    <>
     <Flex gap={2} p={'10px 30px'} fontSize="14.5px" boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} mt={1.5}>
        <Flex gap={2} onClick={()=> setToggle(!toggle)}>
        <Heading fontWeight={'600'} cursor='pointer' size={'sm'}>All CATEGORIES</Heading>
        <Box fontSize={'25px'}>{ toggle ? <IoIosArrowDown /> : <IoIosArrowUp />}</Box>
        <Flex gap={4}>
            {imporatantCategories.map((list)=> (
                <Box cursor={'pointer'} _hover={{color:"rgb(35,229,219)"}} key={list}>{list}</Box>
            ))}
        </Flex>
        </Flex>
     </Flex>
    </>
  )
}

export default AllCategories;