import React, { MouseEvent } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className='flex flex-col justify-between align-center bg-blue-200 p-2 pb-4 rounded-md min-w-80 max-w-80 text-center'
    >
      <div>
        <p className='text-3xl font-black text-blue-800 m-2 uppercase tracking-wider font-bold'>
          {product.name}
        </p>

        <button onClick={handleSubscription}>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
            }}
            className='flex justify-center px-4'
            src={product.images[0]}
            alt={product.description}
          />
        </button>

        <p className='text-blue-800 tracking-wide m-2'>{product.description}</p>
      </div>
      <div>
        <p className='text-4xl text-blue-800 m-2'>
          {(unit_amount / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </p>
        <button
          onClick={handleSubscription}
          className='bg-blue-800 hover:bg-blue-400 rounded-xl p-1 pb-1.5 px-4'
        >
          <p className='lowercase text-white tracking-wide'>Purchase</p>
        </button>
      </div>
    </motion.div>
  );
};

export default TicketPriceCard;
