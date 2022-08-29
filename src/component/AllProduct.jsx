import { Heading, Box, Grid } from '@chakra-ui/react'
import React, { useContext } from 'react';
import ProductDetails from './ProductDetails';
import {Link} from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import LoginModule from './LoginModule';

const AllProduct = ({data}) => {
  const {isAuthorized} = useContext(AuthContext)
  return (
    <Box p={'45px 40px'}>
        <Heading fontSize={'24px'} size={'md'} fontWeight={400}>Fresh recommendations</Heading>
        <Grid templateColumns='repeat(4, 1fr)' gap={4} mt={4}>
            {data.map((data)=> isAuthorized ?(
              <Link to={`/products-details/${data.id}`}><ProductDetails data={data} key={data.id}/></Link>
            ):(
              <LoginModule value={<ProductDetails data={data} key={data.id}/>}/>
            )
            )}
        </Grid>
    </Box>
  )
}

export default AllProduct