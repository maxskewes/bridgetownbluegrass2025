import Image from 'next/image';
import header_image from '../../public/images/header-lg-nobg.svg';
import NavigationBar from './NavigationBar';

const Header = () => {
  return (
    <div className='bg-gradient-to-b from-blue-950 via-blue-700 to-blue-950 min-h-[200px] flex flex-col justify-center items-center'>
      <Image
        src={header_image}
        alt={'Bridgetown Bluegrass over Hawthorne Bridge logo'}
        width={800}
        height={500}
      />
      <NavigationBar />
    </div>
  );
};

export default Header;
