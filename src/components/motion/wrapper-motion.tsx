'use client';

import { motion } from 'motion/react';
import { ComponentProps } from 'react';

type MotionDivProps = ComponentProps<typeof motion.div>;
type MotionHeaderProps = ComponentProps<typeof motion.h1>;
type MotionNavProps = ComponentProps<typeof motion.nav>;

export function MotionDiv({ children, className, ...props }: MotionDivProps) {
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
}: MotionHeaderProps) {
  return (
    <motion.h1 className={className} {...props}>
      {children}
    </motion.h1>
  );
}

export function MotionNav({ children, className, ...props }: MotionNavProps) {
  return (
    <motion.nav className={className} {...props}>
      {children}
    </motion.nav>
  );
}
