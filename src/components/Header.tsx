"use client";

import React, { useState } from 'react';
import { AnimatedCTAButton } from './CTA_header_btn';
import logo from "@/assets/Images/Logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedMenuButton } from './Menu_Header_btn';
import { usePathname, useRouter } from 'next/navigation';

function Header({ onClick }: { onClick: () => void }) {

  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const attemptScroll = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        console.warn(`Scroll target not found on home page: #${sectionId}`);
      }
    };

    if (pathname === '/') {
      attemptScroll();
    } else {
      // Call router.push and use a short timeout to attempt scroll after navigation.
      // Router.push may not return a promise in all runtimes, so avoid chaining .then()
      try {
        router.push('/');
      } catch (e) {
        // push may throw in some environments; log and continue
        // push may throw in some environments; log and continue
        console.warn('router.push failed:', e);
      }
      setTimeout(attemptScroll, 100);
      if (typeof onClick === 'function') {
        onClick();
      }
    }
  };


  return (
    <div className="p-[20px] w-full">

      <div className={`w-full grid grid-cols-3 items-center`}>
        {/* Left Section */}
        <div className="flex justify-start">
          <AnimatedMenuButton
            menuItems={[
              { name: "Menu", onclick: () => { router.push('/menu'); } },
              { name: "Reviews", onclick: () => { scrollToSection('Reviews') } },
              { name: "Featuring", onclick: () => { scrollToSection('Featuring') } },
              { name: "FAQ's", onclick: () => { scrollToSection("FAQ's") } },
              { name: "Location", onclick: () => { scrollToSection('Location') } }
            ]}
          />
        </div>

        {/* Center Section (Always Centered) */}
        <div className={`flex justify-center`}>
          <Link
            className="relative text-white cursor-pointer"
            href="/"
          >
            <span
              className="absolute inset-0 rounded-full border-[0.5px]"
              style={{
                borderColor: "rgba(0,0,0,0.15)",
                pointerEvents: "none",
              }}
            />
            <Image
              src={logo}
              alt="Gumbo Boys Logo"
              width={70}
              height={70}
              className="object-cover rounded-full"
              priority
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex justify-end w-full">
          {/* Mobile Button */}
          <button
            className="md:hidden flex items-center justify-center bg-primary-dark text-white px-4 py-1.5 rounded-lg h-[41px]"
            onClick={() => router.push('/menu')}
          >
            <span className="font-bold text-normal2">Menu</span>
          </button>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <AnimatedCTAButton
              buttonLeft={() => { router.push("tel:+1(213)-910-2980") }}
              buttonRight={() => { router.push('/menu'); }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header



