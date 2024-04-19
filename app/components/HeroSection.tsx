import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div>
      <Image width={200} height={100} src={'public/banner.webp'} alt='img' />
    </div>
  )
}

export default HeroSection
