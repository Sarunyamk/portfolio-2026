'use client';
import { TypeAnimation } from 'react-type-animation';

export default function TypeAnimationText() {
  return (
    <TypeAnimation
      sequence={[
        'Full Stack Developer',
        1500,
        'Frontend Developer',
        1500,
        'Backend Developer',
        1500,
        'Web Developer',
        1500,
        'UI/UX Designer',
        1500,
      ]}
      speed={50}
      omitDeletionAnimation={true}
      repeat={Infinity}
      className="md:font-head text-gradient-1 mb-6"
    />
  );
}
