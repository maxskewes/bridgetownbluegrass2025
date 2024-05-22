import Image from 'next/image';
import background from '../public/images/homepage-background1000.jpg';

export default function Home() {
  return (
    <div className='w-[100vw] relative flex justify-center'>
      <img
        src={'/images/homepage-background1000.jpg'}
        alt={'background image of stage'}
        className='min-w-full h-full object-cover absolute -z-10 w-screen flex justify-center'
      />

      <div className='flex flex-col-reverse sm:flex-row justify-center items-center opacity-60 max-w-[1000px] min-h-[420px] p-2 md:p-4'>
        <img
          src={'/images/moonshine-bull.svg'}
          alt={'bull drinking moonshine'}
          className='p-8 max-w-[500px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]'
        />

        <div className='flex flex-col text-center text-white h-full justify-center p-8 pb-4'>
          <p className='text-4xl p-2'>Thank you for your support in 2024!</p>
          <p className='text-6xl p-2'>2025</p>
          <p className='text-4xl'>date is yet T.B.A.</p>
          <p className='text-2xl text-center'>
            Please check back in the new year
          </p>
          <p className='text-xl p-2 text-center'>
            this site is currently undergoing development
          </p>
        </div>
      </div>
    </div>
  );
}
