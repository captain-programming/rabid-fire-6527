import React from 'react';
import { Route, Routes } from 'react-router';
import LoginModule from '../component/LoginModule';
import Home from './Home';
import Products from './Products';

const AllRouters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products-details/:id" element={<Products />}/>
        <Route path="/login" element={<LoginModule />}/>
      </Routes>
    </>
  )
}

export default AllRouters