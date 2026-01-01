"use client";

import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MediaPreloader from './MediaPreloader';

type FeaturedDishSectionProps = {
    imageSrc: string;
    mainframeImageSrc?: string;
    alt: string;
    title: string;
    description: string | ReactNode;
    imagePriority?: boolean;
    reverse?: boolean;
    imageClass?: string;
    containerClass?: string;
    textClass?: string;
};

// Animation variants for framer-motion
const sectionVariants = {
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

const FeaturedDishSection: React.FC<FeaturedDishSectionProps> = ({
    imageSrc,
    mainframeImageSrc,
    alt,
    title,
    description,
    imagePriority = false,
    reverse = false,
    imageClass = '',
    containerClass = '',
    textClass = '',
}) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        let ticking = false;

        const update = () => {
            ticking = false;
            const rect = el.getBoundingClientRect();
            const viewportH = window.innerHeight;

            // Condition for being generally on screen
            const isOnScreen = rect.top < viewportH && rect.bottom > 0;

            // Stricter condition for activation: center of element in middle 50% of viewport
            const viewportCenter = viewportH / 2;
            const activationBand = viewportH * 0.25;
            const elementCenter = rect.top + rect.height / 2;
            const inActivationZone = Math.abs(elementCenter - viewportCenter) <= activationBand;

            // Set active only when in the activation zone and on screen
            setIsActive(inActivationZone && isOnScreen);
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
        <motion.div
            ref={sectionRef}
            className={`mt-16 md:mt-[100px] px-4 lg:px-[80px] ${containerClass}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
        >
            <div className={`mx-auto w-full max-w-[1240px] flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-0${reverse ? ' lg:flex-row-reverse' : ''}`}>
                <div className={`relative aspect-square max-w-[540px] max-h-[540px] block w-[90%] h-auto lg:w-[400px] lg:h-[400px] xl:w-[540px] xl:h-[540px] shrink-0 rounded-[24px] overflow-hidden ${imageClass}`}>
                    {mainframeImageSrc ? (
                        <div className={`interactive-item w-full h-full ${isActive ? 'is-active' : ''}`}>
                            <Image
                                src={mainframeImageSrc}
                                alt={alt}
                                fill
                                priority={imagePriority}
                                className="mainframe-photo w-full h-full object-cover"
                            />
                            <Image
                                src={imageSrc}
                                alt={alt}
                                fill
                                priority={imagePriority}
                                className="product-photo w-full h-full object-cover"
                            />
                        </div>
                    ) : (
                        <>
                            <MediaPreloader
                                src={imageSrc}
                                alt={alt}
                                borderRadius="24px"
                                className="w-full h-full object-cover"
                            />
                            <Image
                                src={imageSrc}
                                alt={alt}
                                width={540} height={540} priority={imagePriority}
                                className="w-full h-full object-cover rounded-[24px]"
                            />
                        </>
                    )}
                </div>
                <div className={`flex w-full lg:w-fit max-w-[560px] flex-col items-center lg:items-start gap-0 md:gap-[20px] mt-0 lg:mt-0 mb-6 lg:mb-0 lg:pl-8 ${textClass}`}>
                    <div className="self-stretch text-h3 xl:text-h2 text-center lg:text-left mb-0 -mt-2">
                        {title}
                    </div>
                    <div className="text-normal4 md:text-normal3 text-[var(--tt-color-text-gray)] text-center lg:text-left">
                        {description}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default FeaturedDishSection;
