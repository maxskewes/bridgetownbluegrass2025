'use client'
'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React, { ReactNode } from 'react';
import PriceCard from '../components/PriceCard';
import PageContainer from '../components/PageContainer';



type TicketsInfoProps ={
  topText: string;
  bottomText: Iterable<ReactNode>;
  children: any;
}


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


  const TicketsInfo = ({ topText, bottomText, children }: TicketsInfoProps) => {
    return (
      <div className='max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px] pb-8 bg-blue-200 rounded-md m-4'>
        <div className='w-full pt-4'>
          <div className='flex flex-col p-6 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 text-center'>
            <p>
              {topText}
            </p>
            {children}
            <p className='max-w-[360px]'>
              {bottomText}
            </p>
          </div>
        </div>
      </div>
    );
  };


  return (
    <PageContainer heading='Event Tickets'>
     <div className='flex flex-col'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {prices &&
            prices.map((price, index) => (
              <PriceCard price={price} key={index} />
            ))}
        </div>
      </div>

      <div className='flex flex-col pb-12'>
        <TicketsInfo
          topText={'Click below to purchase tickets.'}
          bottomText={"You will be redirected to Eventbrite's website."}
        >
          <button>Get Tickets</button>
        </TicketsInfo>

        <TicketsInfo
          topText={'Click below to donate.'}
          bottomText={'figure this weird one out'
        
          }
        >
          <button>Donate</button>
        </TicketsInfo>
      </div>
    </PageContainer>
  );
};

export default Tickets;
