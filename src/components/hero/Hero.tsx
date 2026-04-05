import { LanguageProps } from '@/lib/types/lang.type';
import { MotionDiv, MotionHeader } from '../motion/wrapper-motion';
import SwiperImage from './SwiperImage';
import TypeAnimationText from './TypeAnimationText';

export default function Hero({ t }: LanguageProps) {
  return (
    <section
      id="home"
      className="pt-40 flex flex-col justify-center items-center"
    >
      <SwiperImage />

      <MotionDiv
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-20"
      >
        <MotionHeader
          className="text-5xl md:text-7xl mb-6 bg-clip-text text-gradient-1 text-center"
          animate={{
            backgroundPosition: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {t.hero.title}
        </MotionHeader>
      </MotionDiv>
      <TypeAnimationText typing={t.hero.typing} />
    </section>
  );
}
