import { Heading, Box, Grid } from '@chakra-ui/react'
import React from 'react';
import ProductDetails from './ProductDetails';

const AllProduct = ({data}) => {
    
  return (
    <Box p={'45px 40px'}>
        <Heading fontSize={'24px'} size={'md'} fontWeight={400}>Fresh recommendations</Heading>
        <Grid templateColumns='repeat(4, 1fr)' gap={4} mt={4}>
            {data.map((data)=>(
              <ProductDetails data={data} key={data.id}/>
            ))}
        </Grid>
    </Box>
  )
}

export default AllProduct