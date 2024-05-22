'use client';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import React, { ReactNode } from 'react';
import TicketPriceCard from '../components/TicketPriceCard';
import PageContainer from '../components/PageContainer';

// type TicketsInfoProps = {
//   topText: string;
//   bottomText: Iterable<ReactNode>;
//   children: any;
// };

const Tickets = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data } = await axios.get('/api/gettickets');
    setPrices(data);
    console.log(data);
  };

  return (
    <PageContainer heading='Event Tickets'>
      <div className='flex flex-col md:flex-row gap-6'>
        {prices &&
          prices.map((price, index) => (
            <TicketPriceCard price={price} key={index} />
          ))}
      </div>
    </PageContainer>
  );
};

export default Tickets;
