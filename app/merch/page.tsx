'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PriceCard from '../components/PriceCard';

const Merch = () => {
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
    <div className='flex flex-col'>
      <p className='text-2xl font-bold uppercase'>Merch</p>
      <div className='grid-cols-1 sm:grid-cols-2 gap-4 max-w-[100px] mb-[100px]'>
        {prices &&
          prices.map((price, index) => <PriceCard price={price} key={index} />)}
      </div>
    </div>
  );
};

export default Merch;
