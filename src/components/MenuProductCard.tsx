'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Product } from '../data/products';
import FavoriteStarIcon from './FavoriteStarIcon';

interface MenuProductCardProps {
  product: Product;
}

const MenuProductCard: React.FC<MenuProductCardProps> = ({ product }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem(`favorite_${product.id}`);
    if (storedValue) {
      setIsFavorited(JSON.parse(storedValue));
    } else {
      setIsFavorited(product.starred || false);
    }
  }, [product.id, product.starred]);

  const handleFavoriteClick = () => {
    const newFavoritedState = !isFavorited;
    setIsFavorited(newFavoritedState);
    localStorage.setItem(`favorite_${product.id}`, JSON.stringify(newFavoritedState));
  };

  const priceEntries = useMemo(() => {
    const p: any = product.prices;
    if (!p) return [];
    // If prices is an array of { tag1, tag2 } keep compatible shape
    if (Array.isArray(p)) {
      return p.map((item: any, i: number) => ({
        key: item.tag1 ?? String(i),
        label: item.tag1 ?? `P${i}`,
        value: typeof item.tag2 === 'number' ? item.tag2 : Number(item.tag2) || 0,
      }));
    }
    // If prices is an object like { small: number, medium: number, large: number }
    return Object.entries(p).map(([k, v]) => ({
      key: k,
      label: k,
      value: typeof v === 'number' ? v : Number(v) || 0,
    }));
  }, [product.prices]);

  const otherPrices = priceEntries.filter((e) => e.key !== 'small');

  return (
    <div
      className="flex flex-col items-start pb-[12px] pt-0 px-0 relative rounded-[12px] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.18)] w-[calc(50%-2px)] sm:w-[328px]"
      data-name="Product Box"
    >
      <div
        className="border border-[rgba(255,255,255,0.03)] border-solid h-[200px] mb-[-12px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full overflow-hidden"
        data-name="Img"
      >
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
      </div>
      <div
        className="bg-[var(--color-black)] border border-[rgba(255,255,255,0.03)] border-solid flex flex-col gap-[10px] items-start mb-[-12px] pb-[16px] pt-[12px] px-[16px] relative rounded-[12px] shrink-0 w-full"
      >
        <div className="flex flex-col gap-[2px] items-start relative shrink-0 w-full">
          <div className="flex items-center justify-between gap-x-2 relative shrink-0 w-full">
            <p className="flex-grow min-w-0 font-[var(--font-creato-black)] font-semibold tracking-[0.04em] leading-[normal] not-italic text-[18px] sm:text-[22px] text-[color:var(--white)]">
              {product.name}
            </p>
            <button onClick={handleFavoriteClick} className="relative shrink-0 size-[20px] text-[var(--color-primary-dark)]">
              <FavoriteStarIcon filled={isFavorited} className="size-full" />
            </button>
          </div>
          <div className="flex flex-wrap gap-[5px] items-center relative shrink-0">
            {product.prices?.small != null && (
              <p className="font-[var(--default-font-family)] leading-[normal] not-italic relative text-[14px] text-[color:var(--color-primary-dark)]">
                S ${product.prices.small.toFixed(2)}
              </p>
            )}
            {product.prices && otherPrices.length > 0 && (
              <div className="relative shrink-0 size-[4px]">
                <div className="absolute inset-0 bg-white/25 rounded-full"></div>
              </div>
            )}
            {otherPrices.map((price, index) => (
              <React.Fragment key={price.key}>
                {index > 0 && (
                  <div className="relative shrink-0 size-[4px]">
                    <div className="absolute inset-0 bg-white/25 rounded-full"></div>
                  </div>
                )}
                <p className="font-[var(--default-font-family)] leading-[normal] not-italic relative text-[14px] text-[color:var(--color-primary-dark)]">
                  {price.label} ${price.value.toFixed(2)}
                </p>
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center relative shrink-0 w-full">
            <p className="flex-[1_0_0] font-[var(--default-font-family)] leading-[normal] min-h-px min-w-px not-italic text-[14px] text-[color:var(--tt-color-text-gray)]/80 whitespace-pre-wrap tracking-[0.02em]">
              {product.description}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-[2px] items-start relative shrink-0" data-name="Product Tags">
          {product.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-[var(--pure-white-3,rgba(255,255,255,0.03))] flex items-center px-[12px] py-[3px] relative rounded-[999px] text-[color:var(--tt-color-text-gray)]/60 hover:bg-[var(--color-primary-dark)] hover:text-[color:var(--white)] transition-colors"
            >
              <p className="font-[var(--default-font-family)] leading-[normal] not-italic relative text-[14px]">
                {tag}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start relative shrink-0 w-full" data-name="Btns">
          <button className="group bg-[var(--pure-white-5,rgba(255,255,255,0.05))] hover:bg-primary-dark flex items-center justify-center px-[5px] py-[6px] relative rounded-[14px] shrink-0 w-full">
            <p className="font-[var(--default-font-family)] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--tt-color-text-gray)]/60 group-hover:text-[color:var(--white)]">
              Read More
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuProductCard;