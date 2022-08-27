import React from 'react';
import {Button, Flex} from '@chakra-ui/react';

export const Advirtize = () => {
  return (
    <Flex justifyContent={'center'} alignItems="center" backgroundImage={'https://statics.olx.in/olxin/banners/hero_bg_in_v2@1x.png'} h="135px" backgroundPosition={'center'}>
        <Button marginLeft={40} variant={'solid'} bg='white' fontWeight={'bold'}
        >
            Sell Car
        </Button>
    </Flex >
  )
}
