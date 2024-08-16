import MotionWrapper from './components/MotionWrapper';
import PageContainer from './components/PageContainer';

export default function Home() {
  return (
    <div className='w-[100vw] relative flex justify-center bg-stone-300'>
      {/* <img
        src={'/images/homepage-background1000.jpg'}
        alt={'background image of stage'}
        className='min-w-full h-full object-cover absolute -z-10 w-screen flex justify-center'
      /> */}
      <div className='w-[100vw] relative flex justify-center bg-gradient-to-r from-blue-800 via-blue-300 to-blue-900'>
        <div className='flex flex-col-reverse sm:flex-row justify-center items-center sm:justify-start min-w-full min-h-[420px] p-4 sm:p-8 md:pb-8 lg:pb-12 xl:pb-16'>
          <img
            src={'/images/bull-negative.svg'}
            alt={'bull drinking moonshine'}
            className=' max-w-[50%]'
          />

          <div className='flex flex-col text-center text-white h-full justify-center p-8 pb-4'>
            <p className='text-6xl p-2'>2025</p>
            <p className='text-4xl'>date is yet T.B.A.</p>
            <p className='text-2xl text-center'>
              Please check back in the new year and enjoy this video of our
              previous lineup.
            </p>

            <p className='text-xl p-2 text-center'>
              this site is currently undergoing development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
