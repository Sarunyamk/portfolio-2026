'use client';
import dynamic from 'next/dynamic';

const ThreeBackground = dynamic(
  () => import('@/components/three-background').then((m) => m.ThreeBackground),
  { ssr: false }
);

export function ThreeBackgroundLazy() {
  return <ThreeBackground />;
}
