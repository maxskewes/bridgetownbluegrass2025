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
    <div className='flex flex-col justify-between align-center bg-blue-200 p-8 rounded-md max-w-[400px] text-center'>
      <p className='text-2xl font-black text-blue-900 m-2 uppercase'>{product.name}</p>
      <div className='flex flex-column justify-center align-center grow-1'>
        <Image
          className='max-w-[300px] m-4'
          src={product.images[0]}
          alt={product.description}
          width={300}
          height={300}
        />
      </div>
      <p className='text-white m-2'>{product.description}</p>
      <p className='text-white m-2'>
        {(unit_amount / 100).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>

      <button className='m-8 bg-yellow-500 rounded-md p-2 ' onClick={handleSubscription}>
        <p className='uppercase'>Purchase</p>
      </button>
    </div>
  );
};

export default PriceCard;
