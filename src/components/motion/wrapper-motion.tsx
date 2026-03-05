'use client';

import { motion, MotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface WrapperMotionProps extends MotionProps {
  children?: ReactNode;
  className?: string;
}

export function MotionDiv({
  children,
  className,
  ...props
}: WrapperMotionProps) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}

export function MotionHeader({
  children,
  className,
  ...props
}: WrapperMotionProps) {
  return (
    <motion.h1 className={className} {...props}>
      {children}
    </motion.h1>
  );
}
export function MotionNav({
  children,
  className,
  ...props
}: WrapperMotionProps) {
  return (
    <motion.nav className={className} {...props}>
      {children}
    </motion.nav>
  );
}
