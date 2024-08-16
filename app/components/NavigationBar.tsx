import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { nav_obj } from '../../assets/nav_obj';
import MotionWrapperSide from './MotionWrapperSide';

type NavBarTextProps = {
  children: any;
};

type SiteLinkProps = {
  title: string;
  route: string;
};

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

export const NavigationBar = () => {
  return (
    <div className='relative w-screen -mt-4'>
      <img
        src='/images/waves.png'
        alt='Wave Border'
        className='min-h-[40px] max-h-[40px] lg:min-h-[48px] lg:max-h-[48px] absolute object-cover'
      />
      <div className='relative w-full flex flex-row justify-around align-center pt-2 px-0 lg:px-[5%] xl:px-[10%]'>
        {nav_obj.map((nav, i) => {
          return <SiteLink key={i} title={nav.title} route={nav.route} />;
        })}
      </div>
    </div>
  );
};

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  // let menuRef = useRef();

  // useEffect(() => {
  //   let handleClose = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setIsOpen(false);
  //       console.log(menuRef.current);
  //     }
  //   };
  //   document.addEventListener('mousedown', handleClose);
  // });

  return (
    <div className='relative w-screen -mt-4'>
      <img
        className='min-h-[40px] max-h-[40px] lg:min-h-[48px] lg:max-h-[48px] absolute object-cover'
        src='/images/waves.png'
        alt='Wave Border'
      />

      <div className='relative w-full flex justify-end text-white tracking-widest mt-2 pt-2 pr-4'>
        <button onClick={handleToggle}>MENU</button>
      </div>
      {isOpen && (
        <MotionWrapperSide>
          <div
            className='bg-blue-950 
           uppercase flex flex-col pt-2 pr-4'
          >
            {nav_obj.map((nav, i) => {
              return (
                <div className='p-1 text-end'>
                  <SiteLink key={i} title={nav.title} route={nav.route} />
                </div>
              );
            })}
          </div>
        </MotionWrapperSide>
      )}
    </div>
  );
};
