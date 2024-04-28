import Image from 'next/image';
import background from '../public/images/homepage-background1000.jpg';

export default function Home() {
  return (
    <main className='relative flex min-h-full min-w-screen flex-col items-center justify-between -z-1'>
      <div className='w-[100vw] relative min-h-full'>
      <div className='absolute -z-10 w-screen max-h-screen flex justify-center'>
          <Image
            src={background}
            alt={'background image of stage'}
            className='w-full'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center p-10 opacity-60'>
        <div className='flex max-w-[35%]'>
            <img
              src={'/images/moonshine-bull.svg'}
              alt={'bull drinking moonshine'}
            />
          </div>
          <div className='flex flex-col justify-center items-center text-white'>
          <p className='text-6xl'>2025</p>
          <p className='text-4xl'>Site Under Construction</p>
          </div>
   
          {/* <div className='flex max-w-[30%]'>
            <img
              src={'/images/zombie-hand.svg'}
              alt={'zombie hand wearing banjo picks'}
            />
          </div> */}
        </div>

      </div>
    </main>
  );
}
