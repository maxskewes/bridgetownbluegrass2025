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
    <div className='relative w-screen min-h-[40px] lg:min-h-[50px]'>
      <div className='w-[2400px] bg-blue-200'>
        <img src='/images/waves.png' alt='Wave Border' className='absolute' />
        <div className='absolute w-full flex flex-row justify-around align-center pt-2 px-0 lg:px-[5%] xl:px-[10%] '>
          {nav_obj.map((nav, i) => {
            return <SiteLink key={i} title={nav.title} route={nav.route} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
