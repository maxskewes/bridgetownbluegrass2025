import { motion } from 'framer-motion';

type PageContainerProps = {
  heading: string;
  children: any;
};

const PageContainer = ({ heading, children }: PageContainerProps) => {
  return (
    <div className='relative bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <div className='flex flex-col p-2 sm:p-4 md:p-6 lg:p-8 pb-0 md:pb-8 lg:pb-12 xl:pb-16 min-h-[500px] justify-start items-center'>
          <p className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white tracking-widest p-2 md:p-4 lg:p-6 mx-12 text-center uppercase'>
            {heading}
          </p>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default PageContainer;
