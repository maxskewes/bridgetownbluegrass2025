import Image from 'next/image';
import header_image from '../../public/images/purple-clouds.png';
import NavigationBar from './NavigationBar';

const Header = () => {
  const HeaderComponents = () => {
    return (
      <div className='relative'>
        <div className='absolute'>
          <img src={'/images/header/bridge'} alt={'Hawthorne Bridge'} />
        </div>
        <div className='absolute'>
          <img src={'/images/header/birds'} alt={'birds with instrumenst'} />
        </div>
        <div className='relative'>
          <img src={'/images/header/words'} alt={'bb&ff title'} />
        </div>
      </div>
    );
  };

  return (
    <div className='bg-gradient-to-r from-blue-500 from-0% via-transparent via-50% to-blue-500 to-100%'>
          <div className='flex flex-col justify-start items-center min-h-[140px]'>
      {/* <Image
        src={header_image}
        alt={'Bridgetown Bluegrass over Hawthorne Bridge logo'}
        width={800}
        height={500}
      /> */}
      <img src={'/images/purple-clouds.svg'} alt={'purple clouds over bridge'} className='min-h-[140px] max-h-[200px] object-cover' />
      </div>
      {/* <HeaderComponents /> */}
      <NavigationBar />
    </div>
  );
};

export default Header;
