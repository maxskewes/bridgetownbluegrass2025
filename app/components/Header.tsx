'use client';
import { motion, easeOut } from 'framer-motion';
import { NavigationBar, MobileNavigation } from './NavigationBar';

const Header = () => {
  const HeaderComponents = () => {
    return (
      <div className='relative flex justify-center align-center'>
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: .5,
          }}
          className='absolute'
        >
          <img src={'/images/header/bridge.svg'} alt={'Hawthorne Bridge'} />
        </motion.div>
        <motion.div
          initial={{ y: -80, x: 200, opacity: 0 }}
          animate={{
            y: [0, 30, 0],
            x:  0,
            opacity: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 1.5,
          }}
          className='absolute'
        >
          <img
            src={'/images/header/birds.svg'}
            alt={'birds with instrumenst'}
          />
        </motion.div>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: [1],
          }}
          transition={{
            duration: .8,
          }}
          className='relative'
        >
          <img src={'/images/header/words.svg'} alt={'bb&ff title'} />
        </motion.div>
      </div>
    );
  };

  return (
    <div>
      <div className='absolute w-full h-full bg-gradient-to-r from-sky-800 from-0% via-transparent via-50% to-sky-800 to-100% opacity-60' />
      {/* <div className='flex flex-col justify-start items-center min-h-[140px]'>
        <img
          src={'/images/purple-clouds.svg'}
          alt={'purple clouds over bridge'}
          className='min-h-[140px] max-h-[200px] object-cover'
        />
      </div> */}
      <HeaderComponents />
      <MobileNavigation />
    </div>
  );
};

export default Header;
