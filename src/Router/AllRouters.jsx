import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Home';

const AllRouters = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  )
}

export default AllRouters