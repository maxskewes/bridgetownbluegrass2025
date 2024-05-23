'use client';
import MotionWrapper from './MotionWrapper';

type PageContainerProps = {
  heading: string;
  children: any;
};

const PageContainer = ({ heading, children }: PageContainerProps) => {
  return (
    <div className='w-[100vw] relative flex justify-center bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900'>
      <MotionWrapper>
        <div className='flex flex-col p-4 sm:p-8 md:pb-8 lg:pb-12 xl:pb-16 min-h-[500px] max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] justify-start items-center'>
          <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white tracking-widest py-2 md:py-4 lg:py-6 mx-12 text-center uppercase'>
            {heading}
          </p>
          {children}
        </div>
      </MotionWrapper>
    </div>
  );
};

export default PageContainer;
