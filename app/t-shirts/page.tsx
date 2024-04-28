'use client';
import axios from 'axios';
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
    <PageContainer heading='Shirts'>
      <div className='flex flex-col'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {prices &&
            prices.map((price, index) => (
              <PriceCard price={price} key={index} />
            ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Tshirts;
