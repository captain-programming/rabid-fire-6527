import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Description = ({text}) => {
    let details= text || [];
  return (
    <>
    <Heading size={"md"} mb="3">Details</Heading>
    {details.map((t, index) => (
        <Text key={index}>{t}</Text>
    ))}
    </>
  )
}

export default Description