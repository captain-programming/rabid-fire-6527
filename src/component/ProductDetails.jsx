import {Box, GridItem, Flex, Image, Heading, Text } from '@chakra-ui/react';
import {MdFavoriteBorder} from 'react-icons/md';

const ProductDetails = ({data}) => {
  const {images, location, date, price, description} = data;
  const desNew = description[0].slice(0, 40) + "...";

  return (
        <GridItem>
                <Box boxShadow={'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;'} p={'10px 20px'} borderRadius={'10px'} h="260px">
                    <Flex>
                    <Image src={images} alt='' width='45%' height={'140px'} margin="auto" cursor={'pointer'}/>
                    <Box position={'absolute'} ml="18%">
                    <MdFavoriteBorder fontSize={'25px'}/>
                    </Box>
                    </Flex>
                    <Box mt={3} >
                    <Heading fontSize={'20px'} cursor={'pointer'}>₹ {price}</Heading>
                    <Flex direction={'column'} justifyContent='space-between' height={'60px'}>
                    <Text cursor={'pointer'}>{desNew}</Text>
                    <Flex justifyContent={'space-between'} fontSize="12px">
                        <Text cursor={'pointer'}>{location}</Text>
                        <Text cursor={'pointer'}>{`Jun ${date[0]}`}</Text>
                    </Flex>
                    </Flex>
                    </Box>
                </Box>
        </GridItem>
  )
}

export default ProductDetails;