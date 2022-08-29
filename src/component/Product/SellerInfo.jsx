import React from 'react';
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';

const SellerInfo = ({name}) => {
  return (
    <>
      <Box>
        <Heading size={'md'} fontWeight="medium" color={'gray'}>Seller description</Heading>
        <Flex mt={6} gap={2} alignItems="center">
            <Image src='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png' alt='Image' borderRadius={'50%'} width="30px"/>
            <Heading size={'sm'}>{name}</Heading>
        </Flex>
        <Button mt={6} variant={'outline'} width="100%">Chat With Seller</Button>
      </Box>
    </>
  )
}

export default SellerInfo