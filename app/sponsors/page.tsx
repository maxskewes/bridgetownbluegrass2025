'use client'
import React from 'react';
import PageContainer from '../components/PageContainer';
import PageTextBox from '../components/PageTextBox';
import { motion } from 'framer-motion';

type SponsorLogoBoxProps = {
  link: string;
  pic: string;
  alt: string;
};

const Sponsors = () => {
  const SponsorLogoBox = ({ link, pic, alt }: SponsorLogoBoxProps) => {
    return (
      <div className='flex w-full h-full justify-center items-center'>
        <div className='w-[300px]'>
          <a
            href={`https://www.${link}`}
            target='_blank'
            rel='noreferrer noopener'
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={`images/sponsors/${pic}`}
              alt={`${alt} logo/link`}
              width='100%'
            />
          </a>
        </div>
      </div>
    );
  };

  return (
    <PageContainer heading={'Sponsors'}>
      <PageTextBox>
        Our festival is made possible by our generous sponsors. They are what
        enable us to pay musicians a wage worthy of their talent, as well as
        make donations to our supported charities. Please support them in any
        way you can. Click on the logos to be redirected to their website.
      </PageTextBox>

      <SponsorLogoBox
        link={'rainierbeer.com'}
        pic={'R-rainier.png'}
        alt={'Rainier Beer'}
      />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-4 px-2'>
        <SponsorLogoBox
          link={'eartrumpetlabs.com'}
          pic={'eartrumpet.png'}
          alt={'Ear Trumpet Labs'}
        />

        <SponsorLogoBox
          link={'audixusa.com'}
          pic={'audix.jpg'}
          alt={'Audix Microphones'}
        />
        <SponsorLogoBox
          link={'giganticbrewing.com'}
          pic={'gigantic-color.png'}
          alt={'Gigantic Brewing'}
        />
        <SponsorLogoBox
          link={'breakside'}
          pic={'breakside-color.png'}
          alt={'Breakside Brewery'}
        />

        <SponsorLogoBox
          link={'hopworksbeer.com'}
          pic={'hub-color.png'}
          alt={'Hopworks Brewery'}
        />
        <SponsorLogoBox
          link={'stonecirclecider.com'}
          pic={'stone-circle.png'}
          alt={'Stone Circle Cider'}
        />
        <SponsorLogoBox
          link={'travelmag.com'}
          pic={'travelmag-color.png'}
          alt={'Travelmag'}
        />
        <SponsorLogoBox
          link={'stjosefswinery.com'}
          pic={'st-josefs.png'}
          alt={"St. Josef&apos's Winery"}
        />
        <SponsorLogoBox
          link={'sanctuaryhall.com'}
          pic={'sanctuary-hall.png'}
          alt={'Sanctuary Hall'}
        />
        <div className='visible md:invisible'>
          <SponsorLogoBox
            link={'oregonbluegrass.org'}
            pic={'oba-color.png'}
            alt={'Oregon Bluegrass Association'}
          />
        </div>
      </div>

      <div className='w-full md:w-[600px] lg:w-[800px] xl:w-[1000px] p-0 sm:p-6'>
        <div className='flex w-full h-full justify-center items-center'>
          <a
            href={`https://www.oregonbluegrass.org`}
            target='_blank'
            rel='noreferrer noopener'
          >
            <motion.img
              className='invisible md:visible'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={`images/sponsors/oba.png`}
              alt={`Oregon Bluegrass Association logo/link`}
              width='100%'
            />
          </a>
        </div>
      </div>
    </PageContainer>
  );
};

export default Sponsors;
