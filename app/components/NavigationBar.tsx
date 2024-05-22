import Link from 'next/link';
import Image from 'next/image';
import { nav_obj } from '../../assets/nav_obj';

type NavBarTextProps = {
  children: any;
};

type SiteLinkProps = {
  title: string;
  route: string;
};

const NavigationBar = () => {
  const NavBarText = ({ children }: NavBarTextProps) => {
    return (
      <p className='text-base lg:text-lg xl:text-xl text-blue-300 hover:text-white font-semibold tracking-wider pt-1 lg:pt-2'>
        {children}
      </p>
    );
  };

  const SiteLink = ({ title, route }: SiteLinkProps) => {
    return (
      <Link href={route}>
        <NavBarText>{title}</NavBarText>
      </Link>
    );
  };

  return (
    <div className='relative w-screen -mt-4'>
      <img
        src='/images/waves.png'
        alt='Wave Border'
        className='min-h-[40px] max-h-[40px] lg:min-h-[48px] lg:max-h-[48px] absolute object-cover'
      />
      <div className='relative w-full flex flex-row justify-around align-center pt-2 px-0 lg:px-[5%] xl:px-[10%] '>
        {nav_obj.map((nav, i) => {
          return <SiteLink key={i} title={nav.title} route={nav.route} />;
        })}
      </div>
    </div>
  );
};

export default NavigationBar;
