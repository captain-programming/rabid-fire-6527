import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const FooterHeading = () => {
  return (
    <>
    <Flex color={'white'} justifyContent="space-between" p="10px 20px" bg={'rgb(1,46,52)'} fontSize="13px">
        <Flex gap={3}>
        <Heading fontSize={'13px'}>Other Countries</Heading>
        <Text>Pakistan - South Africa - Indonesia</Text>
        </Flex>
        <Flex gap={3}>
        <Heading fontSize={'13px'}>Free Classifieds in India</Heading>
        <Text>. © 2006-2022 OLX</Text>
        </Flex>
    </Flex>
    </>
  )
}

export default FooterHeading