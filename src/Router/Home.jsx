import React, { useEffect, useState } from 'react';
import { Advirtize } from '../component/Advirtize';
import AllCategories from '../component/AllCategories';
import AllProduct from '../component/AllProduct';
import Navbar from '../component/Navbar';
import axios from "axios";
import LoadMore from '../component/LoadMore';
import Advirtize2 from '../component/Advirtize2';
import Footer from '../component/Footer';
import FooterHeading from '../component/FooterHeading';

const Home = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [limit, setLimit] = useState(20);

  const getData=()=>{
    axios.get(`https://json-server-dk.herokuapp.com/olx?_limit=${limit}`)
    .then((res)=> setAllProduct(res.data))
    .catch((err)=> console.log(err))
  };

  const increaseLimit = ()=> {
    setLimit(limit + 20);
  }

  useEffect(()=>{
    getData();
  }, [limit]);

  return (
    <>
     <Navbar />
     <AllCategories />
     <Advirtize />
     <br/>
     <AllProduct data={allProduct}/>
     <LoadMore onChange={increaseLimit}/>
     <Advirtize2 />
     <Footer/>
     <FooterHeading />
    </>
  )
}

export default Home