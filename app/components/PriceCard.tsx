'use client'
import React, { MouseEvent } from 'react';
import axios from 'axios';
import Image from 'next/image';

type PriceCardProps = {
  price: {
    id: string;
    product: {
      name: string;
      images: string;
      description: string;
    };
    key?: any;
    unit_amount: number;
  };
};

const PriceCard = ({ price }: PriceCardProps) => {
  const { product, unit_amount } = price;

  // POST request
  const handleSubscription = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { data } = await axios.post(
      '/api/payment',
      {
        priceId: price.id,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    window.location.assign(data);
  };

  return (
    <div className='flex flex-row justify-between align-center bg-blue-200 p-2 rounded-md text-center max-w-[600px]'>
      <div className='flex'>
        {/* <Image
          className='m-4'
          src={product.images[0]}
          alt={product.description}
          width={300}
          height={300}
        /> */}
        <div className='bg-red-400 w-[300px] h-[300px]' />
      </div>
      <div className='flex flex-col justify-between text-blue-900 font-bold py-4'>
        <p className='text-2xl m-2 uppercase'>{product.name}</p>
        <p className='m-2 text-base'>{product.description}</p>
        <p className='m-2 text-2xl'>
          {(unit_amount / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </p>

        <button
          className='m-8 bg-blue-800 hover:bg-blue-400 rounded-xl p-1 pb-1.5 px-4 '
          onClick={handleSubscription}
        >
          <p className='lowercase text-white tracking-wide'>Purchase</p>
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
