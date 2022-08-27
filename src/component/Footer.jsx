import { Flex, Heading, Img, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import {RiFacebookCircleLine, RiInstagramLine} from 'react-icons/ri';
import {TiSocialTwitterCircular} from 'react-icons/ti';
import {FiPlayCircle} from 'react-icons/fi';

const Footer = () => {
  return (
    <>
    <Flex bg={'rgb(234,239,239)'} justifyContent='space-between' p={'20px 30px 50px 20px'} fontSize="12px" color={'gray.500'}>
        <Stack>
        <Heading fontSize="14px" color={'black'}>POPULAR LOCATIONS</Heading>
        <Text>Kolkata</Text>
        <Text>Mumbai</Text>
        <Text>Chennai</Text>
        <Text>Pune</Text>
        </Stack>
        <Stack>
        <Heading fontSize="14px" color={'black'}>TRENDING LOCATIONS</Heading>
        <Text>Bhubaneshwar</Text>
        <Text>Hyderabad</Text>
        <Text>Chandigarh</Text>
        <Text>Nashik</Text>
        </Stack>
        <Stack>
        <Heading fontSize="14px" color={'black'}>ABOUT US</Heading>
        <Text>About OLX Group</Text>
        <Text>Careers</Text>
        <Text>Contact Us</Text>
        <Text>OLXPeople</Text>
        <Text>Waah Jobs</Text>
        </Stack>
        <Stack>
        <Heading fontSize="14px" color={'black'}>OLX</Heading>
        <Text>Help</Text>
        <Text>Sitemap</Text>
        <Text>Legal & Privacy information</Text>
        <Text>Blog</Text>
        </Stack>
        <Stack>
            <Heading fontSize="15px" color={'black'}>Follow US</Heading>
            <Flex fontSize={'25px'} gap="10px" color={'gray.500'}>
                <RiFacebookCircleLine />
                <RiInstagramLine/>
                <TiSocialTwitterCircular />
                <FiPlayCircle />
            </Flex>
            <Spacer />
            <Flex gap="10px">
                <Img src='https://statics.olx.in/external/base/img/playstore_2x.png' alt=''  width={"90px"} h="25px"/>
                <Img src='https://statics.olx.in/external/base/img/appstore_2x.png' alt=''   width={"90px"} h="25px"/>
            </Flex>
        </Stack>
    </Flex>
    </>
  )
}

export default Footer