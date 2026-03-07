'use client';

import { IMAGES, POSITION_STYLES } from '@/constants/swiper-image.constant';
import { useLanguage } from '@/hooks/useLanguage';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MotionDiv } from '../motion/wrapper-motion';

export default function SwiperImage() {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % 3);
  const prev = () => setActive((a) => (a + 2) % 3);

  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <MotionDiv
        className="relative h-60 flex justify-center items-center w-full mb-4 cursor-grab active:cursor-grabbing select-none"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        dragMomentum={false}
        onDragEnd={(_, info) => {
          if (info.offset.x < -50 || info.velocity.x < -300) next();
          else if (info.offset.x > 50 || info.velocity.x > 300) prev();
        }}
      >
        {IMAGES.map((src, i) => {
          const pos = ((i - active + 3) % 3) as 0 | 1 | 2;
          const style = POSITION_STYLES[pos];

          return (
            <MotionDiv
              key={i}
              className="absolute w-52 h-52 rounded-full overflow-hidden shadow-lg bg-amber-50"
              animate={{
                x: style.x,
                scale: style.scale,
                zIndex: style.zIndex,
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              onClick={() => setActive(i)}
            >
              <Image
                src={src}
                alt={`slide-${i}`}
                fill
                sizes="208px"
                className="object-cover pointer-events-none"
              />
            </MotionDiv>
          );
        })}
      </MotionDiv>
      <MotionDiv
        className="text-sm text-white/70 select-none"
        animate={{ x: [-12, 12, -12] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ← {t.hero.drag} →
      </MotionDiv>
    </div>
  );
}
