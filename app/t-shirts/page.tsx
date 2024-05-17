'use client';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PriceCard from '../components/PriceCard';
import PageContainer from '../components/PageContainer';

const Tshirts = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get('/api/getproducts');
    setPrices(data);
    console.log(data);
  };

  return (
    <div className='w-[100vw] relative flex justify-center bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
        className='w-full px-1 sm:px-2 md:px-8'
      >
        <div className='flex flex-col p-2 sm:p-4 md:p-6 lg:p-8 pb-0 md:pb-8 lg:pb-12 xl:pb-16 min-h-[500px] justify-start items-center'>
          <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white tracking-widest p-2 md:p-4 lg:p-6 mx-12 text-center uppercase'>
            T-shirts
          </p>
          <div className='flex flex-col'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {prices &&
                prices.map((price, index) => (
                  <PriceCard price={price} key={index} />
                ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tshirts;
