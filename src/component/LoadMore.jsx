import { Button, Box } from '@chakra-ui/react'
import React from 'react';

const LoadMore = ({onChange}) => {
  return (
    <Box textAlign={'center'} mb="150px">
        <Button variant={'outline'} onClick={onChange}>Load More</Button>
    </Box>
  )
}

export default LoadMore