'use client';
import { TypeAnimation } from 'react-type-animation';

type Props = {
  typing: string[];
};

export default function TypeAnimationText({ typing }: Props) {
  const sequence = typing.flatMap((text) => [text, 1500]);

  return (
    <TypeAnimation
      sequence={sequence}
      speed={50}
      omitDeletionAnimation={true}
      repeat={Infinity}
      className="text-lg md:text-2xl md:font-head text-gradient-1 mb-6 text-center"
    />
  );
}
