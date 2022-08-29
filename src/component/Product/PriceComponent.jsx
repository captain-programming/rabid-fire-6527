import { Heading, Text, Flex } from '@chakra-ui/react'
import React from 'react'

const PriceComponent = ({price, location, category, date}) => {
    // console.log(date)

    let newDate=date || [];
  return (
    <>
      <Heading>₹ {price}</Heading>
      <Text>{category}</Text>
      <Flex justifyContent={'space-between'} mt="20px" fontSize="13px">
        <Text>{location}</Text> 
        <Text>Jun {newDate[0]}</Text> 
      </Flex>
    </>
  )
}

export default PriceComponent