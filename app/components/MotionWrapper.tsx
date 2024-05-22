'use client';
import { motion } from 'framer-motion';

interface MotionWrapperTypes {
  children: any;
}

const MotionWrapper = ({ children }: MotionWrapperTypes) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
