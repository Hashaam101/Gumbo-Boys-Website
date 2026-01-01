"use client";

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import FeaturingStarIcon from './FeaturingStarIcon';
import FeaturedDishSection from './FeaturedDishSection';

// Animation variants for framer-motion
const sectionVariants: any = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const FEATURES_DATA = [
  {
    imageSrc: "/Images/featuring/FriedCatfishPo’boy.png",
    mainframeImageSrc: "/Images/featuring/FriedCatfishPo’boy-MainFrame.png",
    alt: "Fried Catfish Po’boy",
    title: "Fried Catfish Po’boy",
    description: "Fried catfish nuggets piled high on light, crisp, buttery Leidenheimer bread. Dressed with lettuce, tomato, pickle, and our signature House Remoulade.",
    reverse: false,
  },
  {
    imageSrc: "/Images/featuring/ShrimpPlatter.png",
    mainframeImageSrc: "/Images/featuring/ShrimpPlatter-MainFrame.png",
    alt: "Shrimp Platter",
    title: "Shrimp Platter",
    description: "Golden fried shrimp served platter-style. Available all day, pairs perfectly with our Gumbo or Red Beans.",
    reverse: true,
  },
  {
    imageSrc: "/Images/featuring/FriedCatfishPo’boy.png",
    mainframeImageSrc: "/Images/featuring/FriedCatfishPo’boy-MainFrame.png",
    alt: "Fried Catfish Po’boy",
    title: "Fried Catfish Po’boy",
    description: "Fried catfish nuggets piled high on light, crisp, buttery Leidenheimer bread. Dressed with lettuce, tomato, pickle, and our signature House Remoulade.",
    reverse: false,
  },
  {
    imageSrc: "/Images/featuring/ShrimpPlatter.png",
    mainframeImageSrc: "/Images/featuring/ShrimpPlatter-MainFrame.png",
    alt: "Shrimp Platter",
    title: "Shrimp Platter",
    description: "Golden fried shrimp served platter-style. Available all day, pairs perfectly with our Gumbo or Red Beans.",
    reverse: true,
  },
];

function Featuring() {
  // Mobile scroll activation for star icons
  const starsContainerRef = useRef<HTMLDivElement | null>(null);
  const [starsActive, setStarsActive] = useState(false);

  useEffect(() => {
    const el = starsContainerRef.current;
    if (!el) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const viewportCenter = viewportH / 2;
      // Activation band: +/- 20% of viewport height around center
      const band = viewportH * 0.2;
      const elementCenter = rect.top + rect.height / 2;
      const withinBand = Math.abs(elementCenter - viewportCenter) <= band && rect.top < viewportH && rect.bottom > 0;
      setStarsActive(withinBand);
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return (
    <div className='w-full'>
      <motion.div
        className='w-full max-w-[1000px] mx-auto px-4 md:px-0'
        initial="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <div className='text-center text-h2 mb-12 md:mb-[80px]'>
          <div className=''>Featuring</div>
        </div>
        <div ref={starsContainerRef} className={`grid grid-cols-2 gap-x-4 gap-y-8 md:flex md:justify-between md:items-center md:gap-0 self-stretch text-[var(--tt-color-text-gray)] group ${starsActive ? 'text-[#FFD84D]' : ''}`}>
          <div className='flex flex-col items-center gap-[10px] w-full group'>
            <div className={`h-[22px] w-[22px] aspect-square transition-colors duration-300 ${starsActive ? 'text-[#FFD84D]' : 'text-[var(--tt-color-text-gray)] group-hover:text-[#FFD84D]'}`}>
              <FeaturingStarIcon size={22} className='text-current' hoverRays active={starsActive} />
            </div>
            <div className='text-normal3 text-center'>Groups & Catering</div>
          </div>
          <div className='h-[80px] w-[1px] hidden md:block transition-all duration-300 group-hover:rotate-8 group-hover:scale-y-110 group-hover:bg-[#FFD84D]/50' style={{ background: 'color-mix(in oklab, var(--color-white) 25%, transparent)' }}></div>
          <div className='flex flex-col items-center gap-[10px] w-full group'>
            <div className={`h-[22px] w-[22px] aspect-square transition-colors duration-300 ${starsActive ? 'text-[#FFD84D]' : 'text-[var(--tt-color-text-gray)] group-hover:text-[#FFD84D]'}`}>
              <FeaturingStarIcon size={22} className='text-current' hoverRays active={starsActive} />
            </div>
            <div className='text-normal3 text-center'>Authentic Gumbo</div>
          </div>
          <div className="col-span-2 md:hidden"></div>
          <div className='h-[80px] w-[1px] hidden md:block transition-all duration-300 group-hover:rotate-8 group-hover:scale-y-110 group-hover:bg-[#FFD84D]/50' style={{ background: 'color-mix(in oklab, var(--color-white) 25%, transparent)' }}></div>
          <div className='flex flex-col items-center gap-[10px] w-full group'>
            <div className={`h-[22px] w-[22px] aspect-square transition-colors duration-300 ${starsActive ? 'text-[#FFD84D]' : 'text-[var(--tt-color-text-gray)] group-hover:text-[#FFD84D]'}`}>
              <FeaturingStarIcon size={22} className='text-current' hoverRays active={starsActive} />
            </div>
            <div className='text-normal3 text-center'>Family Friendly</div>
          </div>
          <div className='h-[80px] w-[1px] hidden md:block transition-all duration-300 group-hover:rotate-8 group-hover:scale-y-110 group-hover:bg-[#FFD84D]/50' style={{ background: 'color-mix(in oklab, var(--color-white) 25%, transparent)' }}></div>
          <div className='flex flex-col items-center gap-[10px] w-full group'>
            <div className={`h-[22px] w-[22px] aspect-square transition-colors duration-300 ${starsActive ? 'text-[#FFD84D]' : 'text-[var(--tt-color-text-gray)] group-hover:text-[#FFD84D]'}`}>
              <FeaturingStarIcon size={22} className='text-current' hoverRays active={starsActive} />
            </div>
            <div className='text-normal3 text-center'>Dine-in & Take Away</div>
          </div>
        </div>
      </motion.div>

      <div className="h-[100px] mb-6 lg:mb-0" />
      <div className='text-center mb-12 md:mb-[80px]'>
        <div className='text-h2'>Best Gumbo & Po&apos;boys in Downtown LA</div>
        <div className='text-normal mt-1 mx-2x'>Authentic gumbo and po&apos;boys made fresh daily — a local favorite near you!</div>
      </div>

      {/* Featured Dishes */}
      {FEATURES_DATA.map((feature, index) => (
        <FeaturedDishSection
          key={index}
          {...feature}
        />
      ))}
    </div>
  );
}

export default Featuring;
