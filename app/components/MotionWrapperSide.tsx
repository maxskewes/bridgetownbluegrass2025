'use client';
import { motion } from 'framer-motion';

interface MotionWrapperSideTypes {
  children: any;
}

const MotionWrapperSide = ({ children }: MotionWrapperSideTypes) => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapperSide;
