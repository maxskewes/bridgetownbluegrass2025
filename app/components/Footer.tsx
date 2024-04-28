import React from 'react';
import { motion } from 'framer-motion';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

type SponsorFooterBoxProps = {
  link: string;
  pic: string;
  alt: string;
};

const Footer = () => {
  // const SponsorFooterBox = ({ link, pic, alt }: SponsorFooterBoxProps) => {
  //   return (
  //     <div className='flex w-full h-full justify-center align-center'>
  //       <div className='w-[100px] md:w-[200px]'>
  //         <a
  //           href={`https://www.${link}`}
  //           target='_blank'
  //           rel='noreferrer noopener'
  //         >
  //           <motion.img
  //             initial={{ opacity: 0 }}
  //             animate={{ opacity: 1 }}
  //             transition={{ duration: 0.5 }}
  //             src={`images/sponsors/${pic}`}
  //             alt={`${alt} Labs logo/link`}
  //             width='100%'
  //           />
  //         </a>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className='relative w-screen'>
      <div className='pb=[150px] w-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-slate-900 to-red-900 min-h-[100px] md:min-h-[400px]'>
        <div className='-mt-[10%] min-w-screen flex justify-center max-w-[60%] max-h-[200px]'>
          <img src={'/images/portland-grass.svg'} alt={'portland grass'} />
        </div>
        <div className='p-4 md:p-8 flex flex-col text-center text-white font-bold tracking-wider text-base xl:text-xl'>
          <p>Bridgetown Bluegrass is a not-for-profit music festival.</p>
          <p>Only the musicians and technicians get paid.</p>
          <p>All additional revenue is donated to charity.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
