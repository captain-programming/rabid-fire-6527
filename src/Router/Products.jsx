import React, { useEffect } from 'react';
import {Box, Flex} from "@chakra-ui/react";
import Navbar from '../component/Navbar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { ImageComponent } from '../component/Product/ImageComponent';
import Footer from '../component/Footer';
import FooterHeading from '../component/FooterHeading';
import Description from '../component/Product/Description';
import PriceComponent from '../component/Product/PriceComponent';
import SellerInfo from '../component/Product/SellerInfo';

const Products = () => {
  const [data, setData] = useState("");
  const params= useParams();

  useEffect(()=>{
    axios.get(`https://json-server-dk.herokuapp.com/olx/${params.id}`)
    .then((res)=> setData(res.data))
    .catch((err)=> console.log(err))
  }, [])

  console.log(data);
  return (
    <>
    <Box>
      <Navbar />
      <Flex p={10} justifyContent="space-between" bg="rgb(243,245,245)">
        <Box width={'67%'}>
          <Box shadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'} borderRadius="5px" bg={'white'}>
            <ImageComponent images={data.images}/>
          </Box>
          <Box shadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'} borderRadius="5px" p="4" bg={'white'}>
            <Description text={data.description} />
          </Box>
        </Box>
        <Box width={'31%'}>
          <Box shadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'} borderRadius="5px" p="4" bg={'white'}>
            <PriceComponent price={data.price} location={data.fullLocation} date={data.date} category={data.category}/>
          </Box>
          <Box shadow={'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'} borderRadius="5px" p="4" bg={'white'} mt={4}>
            <SellerInfo name={data.sellerName}/>
          </Box>
        </Box>
      </Flex>
      <Footer/>
      <FooterHeading />
    </Box>
    </>
  )
}

export default Products