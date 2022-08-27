import { Heading, Image, Img, Stack, Text, Flex, Box } from '@chakra-ui/react'
import React from 'react'

const Advirtize2 = () => {
  return (
    <>
    <Flex bg="rgb(247,248,249)" gap={'10px'} justifyContent='space-between' p={'0px 30px'}>
        <Image src='https://statics.olx.in/external/base/img/phone-app.png' alt="" />
        <Stack mt={6} width="36%">
            <Heading>TRY THE OLX APP</Heading>
            <Heading fontSize={'20px'}>Buy, sell and find just about anything using the app on your mobile.</Heading>
        </Stack>
        <Box width={'1.5px'} bg='gray.300' margin="30px 0px"></Box>
        <Stack mt={14}>
            <Text fontWeight={'bold'}>GET YOUR APP TODAY</Text>
            <Flex gap="10px">
                <Img src='https://statics.olx.in/external/base/img/appstore_2x.png' alt=''   width={"120px"}/>
                <Img src='https://statics.olx.in/external/base/img/playstore_2x.png' alt=''  width={"120px"}/>
            </Flex>
        </Stack>
    </Flex>
    </>
  )
}

export default Advirtize2