'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

const images = ['/logo.png', '/logo.png', '/logo.png']

const POSITION_STYLES = {
  0: { x: 0,    scale: 1.00, zIndex: 10 },
  1: { x: 120,  scale: 0.82, zIndex: 5  },
  2: { x: -120, scale: 0.82, zIndex: 5  },
}

export default function SwiperImage() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % 3), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative h-60 flex justify-center items-center w-full mb-8">
      {images.map((src, i) => {
        const pos = ((i - active + 3) % 3) as 0 | 1 | 2
        const style = POSITION_STYLES[pos]
        return (
          <motion.div
            key={i}
            className="absolute w-52 h-52 rounded-full overflow-hidden shadow-lg cursor-pointer"
            animate={{ x: style.x, scale: style.scale, zIndex: style.zIndex }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            onClick={() => setActive(i)}
          >
            <Image src={src} alt={`slide-${i}`} fill sizes="208px" className="object-cover" />
          </motion.div>
        )
      })}
    </div>
  )
}
