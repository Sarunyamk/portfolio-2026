import { MotionDiv, MotionHeader } from '../motion/wrapper-motion';
import TypeAnimationText from './TypeAnimationText';

export default function Hero() {
  return (
    <section id="home" className="pt-40 text-center">
      <MotionDiv
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <MotionHeader
          className="text-5xl md:text-7xl mb-6 bg-clip-text text-gradient-1"
          animate={{
            backgroundPosition: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          Creative Developer
        </MotionHeader>
      </MotionDiv>
      <TypeAnimationText />
    </section>
  );
}
