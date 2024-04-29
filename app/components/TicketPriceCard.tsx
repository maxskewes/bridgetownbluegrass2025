import React, { MouseEvent } from 'react';
import axios from 'axios';
import Image from 'next/image';

type TicketPriceCardProps = {
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

const TicketPriceCard = ({ price }: TicketPriceCardProps) => {
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
    <div className='flex flex-col justify-between align-center bg-blue-200 p-2 rounded-md max-w-[800px] text-center'>
      <p className='text-3xl font-black text-blue-800 m-2 uppercase'>
        {product.name}
      </p>

      <button onClick={handleSubscription}>
        <div className='flex flex-column justify-center align-center grow-1'>
          <Image
            className='m-4'
            src={product.images[0]}
            alt={product.description}
            width={300}
            height={300}
          />
        </div>
        <p className='text-blue-800 m-2'>{product.description}</p>
        <p className='text-4xl text-blue-800 m-2'>
          {(unit_amount / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </p>
      </button>
    </div>
  );
};

export default TicketPriceCard;
